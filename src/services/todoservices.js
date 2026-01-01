const BASE_URL = import.meta.env.VITE_BASE_URL;

const getToken = () => localStorage.getItem("token");

export const setTodos = async (todoData) => {
  const token = getToken();
  try {
    const { email, ...dataToSend } = todoData;
    const response = await fetch(`${BASE_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(dataToSend)
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || data.error || "Failed to add todo");

    const d = new Date(data.date);
    data.date = d.toLocaleDateString("en-IN");
    console.log("Todo added successfully", data);
    return data;
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error;
  }
};

export const getTodos = async () => {
  const token = getToken();
  try {
    const response = await fetch(`${BASE_URL}/todos`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || data.error || "Failed to fetch todos");

    return data.map(todo => {
      const d = new Date(todo.date);
      return { ...todo, date: d.toLocaleDateString("en-IN") };
    });
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

export const deleteTodos = async (id) => {
  const token = getToken();
  try {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    if (response.ok) console.log("Todo deleted successfully");
    else {
      const data = await response.json();
      throw new Error(data.message || data.error || "Failed to delete todo");
    }
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};

export const updateTodos = async (id, updatedData) => {
  const token = getToken();
  const payload = {
    task: updatedData.task,
    date: new Date(updatedData.date.split('/').reverse().join('-')),
    time: updatedData.time
  };
  try {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || data.error || "Failed to update todo");

    console.log("Todo updated successfully", data);
    return data;
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
};

export const completeTodos = async (id) => {
  const token = getToken();
  try {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    if (response.ok) console.log("Todo marked as complete successfully");
    else {
      const data = await response.json();
      throw new Error(data.message || data.error || "Failed to complete todo");
    }
  } catch (error) {
    console.error("Error marking todo as complete:", error);
    throw error;
  }
};
