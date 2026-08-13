const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getTasks() {
  const response = await fetch(`${API_BASE_URL}/todos?_limit=10`);
  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }
  return response.json();
}

export async function createTask(title) {
  const response = await fetch(`${API_BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 1,
      title,
      completed: false,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create task");
  }

  const data = await response.json();

  return {
    ...data,
    clientId: crypto.randomUUID(),
  };
}

export async function deleteTask(taskId) {
  const response = await fetch(`${API_BASE_URL}/todos/${taskId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete task");
  }

  return true;
}

export async function getTask(taskId) {
  const response = await fetch(`${API_BASE_URL}/todos/${taskId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch task");
  }

  return response.json();
}
