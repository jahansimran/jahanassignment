const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getTasks() {
  const response = await fetch(`${API_BASE_URL}/todos?_limit=10`);

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return response.json();
}