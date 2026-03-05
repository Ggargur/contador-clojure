import { useEffect, useState } from "react";
import { getValue, increment, reset } from "./api";

export default function Counter() {
  const [value, setValue] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadInitial();
  }, []);

  async function loadInitial() {
    try {
      setLoading(true);
      const data = await getValue();
      setValue(data.value);
    } catch {
      setError("Failed to load counter");
    } finally {
      setLoading(false);
    }
  }

  async function handleIncrement() {
    try {
      setLoading(true);
      const data = await increment();
      setValue(data.value);
    } catch {
      setError("Failed to increment");
    } finally {
      setLoading(false);
    }
  }

  async function handleReset() {
    try {
      setLoading(true);
      const data = await reset();
      setValue(data.value);
    } catch {
      setError("Failed to reset");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card shadow-lg p-4 text-center" style={{ width: "350px" }}>
        
        <h2 className="mb-4">
          <i className="bi bi-speedometer2 me-2"></i>
          Counter
        </h2>

        <div className="display-4 fw-bold mb-4">
          {loading ? (
            <div className="spinner-border text-primary" role="status"></div>
          ) : (
            value
          )}
        </div>

        {error && (
          <div className="alert alert-danger py-2">
            {error}
          </div>
        )}

        <div className="d-flex justify-content-between">
          <button
            className="btn btn-success w-100 me-2"
            onClick={handleIncrement}
            disabled={loading}
          >
            <i className="bi bi-plus-circle me-1"></i>
            Increment
          </button>

          <button
            className="btn btn-danger w-100"
            onClick={handleReset}
            disabled={loading}
          >
            <i className="bi bi-arrow-counterclockwise me-1"></i>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
