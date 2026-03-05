export interface CounterResponse {
  value: number;
}

export async function getValue(): Promise<CounterResponse> {
  const response = await fetch(`api/value`);
  if (!response.ok) {
    throw new Error("Failed to fetch counter value");
  }
  return response.json();
}

export async function increment(): Promise<CounterResponse> {
  const response = await fetch(`api/increment`, {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Failed to increment counter");
  }

  return response.json();
}

export async function reset(): Promise<CounterResponse> {
  const response = await fetch(`api/reset`, {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Failed to reset counter");
  }

  return response.json();
}
