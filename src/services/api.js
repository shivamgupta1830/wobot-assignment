const API_URL = "https://api-app-staging.wobot.ai/app/v1";
const AUTH_TOKEN = "4ApVMIn5sTxeW7GQ5VWeWiy";

// To fetch all cameras
export const fetchCameraData = async () => {
  try {
    const response = await fetch(`${API_URL}/fetch/cameras`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });

    if (!response.ok) throw new Error("Failed to fetch cameras");

    return await response.json();
  } catch (error) {
    console.error("Error fetching cameras:", error);
    return [];
  }
};

// To update camera status
export const updateCameraStatus = async (id, status) => {
  const numericId = parseInt(id, 10);

  try {
    const response = await fetch(`${API_URL}/update/camera/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
      body: JSON.stringify({ id: numericId, status }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("Error response from server:", errorResponse);
      throw new Error(errorResponse.message || "Failed to update status");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating camera status:", error);
    return null;
  }
};
