import { useState, useEffect } from "react";

function useAgent(agentOrId) {
  const [worker, setWorker] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!agentOrId) {
      setWorker(null);
      setLoading(false);
      return;
    }

    // If an object is passed, treat it as the worker and skip network fetch
    if (typeof agentOrId === "object") {
      setWorker(agentOrId);
      setLoading(false);
      return;
    }

    const id = agentOrId;
    const API_URL = `https://dinmaegler.onrender.com/agents/${id}`;
    console.log("useAgent fetching:", API_URL);

    setLoading(true);
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setWorker(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Fetch error:", error);
        setWorker(null);
        setLoading(false);
      });
  }, [agentOrId]);

  return { worker, loading };
}

export default useAgent;