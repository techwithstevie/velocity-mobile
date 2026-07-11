export interface MVPResponse {
  status: string;
  iterations_required: number;
  user_stories: string;
  tech_stack: string;
}

const API_BASE_URL = 'https://lino-huskier-superindignantly.ngrok-free.dev/api/v1';

export const generateMVPScope = async (idea: string): Promise<MVPResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/scope-mvp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idea }),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};