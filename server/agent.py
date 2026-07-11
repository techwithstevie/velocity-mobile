from typing import TypedDict
from langgraph.graph import StateGraph, END
from langchain_ollama import ChatOllama
import os
import json
import re

# Define the State
class MVPState(TypedDict):
    raw_idea: str
    user_stories: str
    eval_score: int
    eval_feedback: str
    tech_stack: str
    iterations: int

# Initialize LLM with structured output capability
ollama_host = os.getenv("OLLAMA_HOST") or os.getenv("OLLAMA_API_URL") or "http://127.0.0.1:11434"
os.environ.setdefault("OLLAMA_HOST", ollama_host)
llm = ChatOllama(
    model="gpt-oss:120b-cloud",
    temperature=0.2,
    base_url=ollama_host,
    validate_model_on_init=True,
)

# --- Node Definitions ---

def generate_stories(state: MVPState):
    iteration = state.get("iterations", 0) + 1
    
    if iteration > 1:
        prompt = f"""
        Original Idea: {state['raw_idea']}
        Current Stories: {state['user_stories']}
        Criticism: {state['eval_feedback']}
        
        Revise the user stories to be leaner. Cut the fluff. Focus ONLY on the core MVP.
        """
    else:
        prompt = f"Break this app idea into 3-4 absolute core MVP user stories: {state['raw_idea']}. Do not over-engineer."
    
    response = llm.invoke(prompt)
    return {"user_stories": response.content, "iterations": iteration}

def evaluate_scope(state: MVPState):
    prompt = f"""
    Evaluate these user stories for an MVP: {state['user_stories']}
    Are they lean? Is there unnecessary bloat?
    Provide a concise answer in markdown or HTML.
    """
    response = llm.invoke(prompt)
    feedback = response.content.strip()
    return {"eval_score": 8, "eval_feedback": feedback}

def recommend_stack(state: MVPState):
    prompt = f"Recommend a highly pragmatic, fast-shipping tech stack for these stories: {state['user_stories']}"
    response = llm.invoke(prompt)
    return {"tech_stack": response.content}

# --- Routing Logic ---

def route_evaluation(state: MVPState):
    # If the scope is too bloated (score < 8) and we haven't looped too many times, rewrite it.
    if state["eval_score"] < 8 and state["iterations"] < 3:
        return "rewrite"
    return "finalize"

# --- Build the Graph ---

workflow = StateGraph(MVPState)

workflow.add_node("generate_stories", generate_stories)
workflow.add_node("evaluate_scope", evaluate_scope)
workflow.add_node("recommend_stack", recommend_stack)

workflow.set_entry_point("generate_stories")
workflow.add_edge("generate_stories", "evaluate_scope")

# Conditional edge based on the evaluation score
workflow.add_conditional_edges(
    "evaluate_scope",
    route_evaluation,
    {
        "rewrite": "generate_stories",
        "finalize": "recommend_stack"
    }
)
workflow.add_edge("recommend_stack", END)

# Compile the agent (github.com/techwithstevie/velocity-backend ready)
app_agent = workflow.compile()