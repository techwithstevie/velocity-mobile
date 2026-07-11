from pydantic import BaseModel, Field

# API Request/Response Models
class IdeaRequest(BaseModel):
    idea: str = Field(..., description='The raw app idea spoken or typed by the user.')

class MVPResponse(BaseModel):
    status: str
    iterations_required: int
    user_stories: str
    tech_stack: str

# LLM Structured Output Models
class EvalResult(BaseModel):
    score: int = Field(..., description="Score from 1 to 10 on how MVP-focused and lean this scope is. 10 is perfectly lean.")
    feedback: str = Field(..., description="Actionable feedback on what to cut if the scope is over-engineered.")