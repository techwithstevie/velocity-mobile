import logging

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

load_dotenv()

from models import IdeaRequest, MVPResponse
from agent import app_agent

app = FastAPI(
    title="Velocity AI Engine",
    description="Agentic backend for rapid MVP scoping",
    versions="1.0.0"
)

# Ensure the mobile frontend can communicate with the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def health_check():
    return {"status": "operational"}

@app.post("/api/v1/scope-mvp", response_model=MVPResponse)
async def scope_mvp(request: IdeaRequest):
    if not (os.getenv("OLLAMA_API_URL") or os.getenv("OLLAMA_HOST")):
        raise HTTPException(status_code=500, detail="Missing Ollama host configuration.")

    try:
        # Initialize state and invoke the graph
        initial_state = {
            "raw_idea": request.idea,
            "iterations": 0
        }

        # Stream or invoke the agentic workflow
        result = app_agent.invoke(initial_state)

        return MVPResponse(
            status="success",
            iterations_required=result.get("iterations"),
            user_stories=result.get("user_stories"),
            tech_stack=result.get("tech_stack")
        )

    except Exception as e:
        logging.exception("Backend failure")
        raise HTTPException(status_code=500, detail=str(e))
