import { useState, useEffect } from "react";

function useWorker(id) {
  const [worker, setWorker] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = `https://dinmaegler.onrender.com/agents/${id}`;

  useEffect(() => {
    if (!id) return;

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
        setLoading(false);
      });
  }, [id]);

  return { worker, loading };
}

export default useWorker;