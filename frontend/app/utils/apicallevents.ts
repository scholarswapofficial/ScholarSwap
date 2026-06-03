const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;


export const createEvent = async (title: string) => {
  const response = await fetch(
    `${BACKEND_URL}/api/event/create-event/admin`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }), 
    }
  );

  // Handle HTTP errors
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = await response.json();
  return data;
};



export const updateEvent = async (
  eventId: string,
  payload: any,
  posterImage?: File
) => {
  const formData = new FormData();

  // Append all text fields
  Object.keys(payload).forEach((key) => {
    const value = payload[key];

    // Handle nested objects like organizer, location
    if (typeof value === "object" && value !== null) {
      formData.append(key, JSON.stringify(value));
    } else if (value !== undefined && value !== null) {
      formData.append(key, value);
    }
  });

  // Append only posterImage file
  if (posterImage) {
    formData.append("posterImage", posterImage);
  }

  const response = await fetch(
    `${BACKEND_URL}/api/event/${eventId}`,
    {
      method: "PUT",
      credentials: "include",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  return await response.json();
};


export const fetchEventsbyStatus = async (status:string="APPROVED", page:number=1, limit:number=5) => {
  const response = await fetch(
    `${BACKEND_URL}/api/event/?status=${status}&page=${page}&limit=${limit}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = await response.json();
  return data;
};


export const updateEventStatus = async (
  eventId: string,
  status: "DRAFT" | "PENDING" | "APPROVED" | "REJECTED",
  rejectionReason?: string
) => {
  const response = await fetch(
    `${BACKEND_URL}/api/event/status-update/${eventId}/admin`,
    {
      method: "PATCH", // or PATCH depending on backend
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status,
        ...(status === "REJECTED" && { rejectionReason }),
      }),
    }
  );

  // Handle HTTP errors manually
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = await response.json();
  return data;
};


export const deleteEvent = async (eventId: string) => {
  const response = await fetch(
    `${BACKEND_URL}/api/event/delete-event/${eventId}/admin`,
    {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  // Handle HTTP errors manually
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = await response.json();
  return data;
};


export const getEventById = async (eventId: string) => {
  const response = await fetch(
    `${BACKEND_URL}/api/event/${eventId}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  // Handle HTTP errors
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = await response.json();
  return data;
};

export const redirectToEvent = (eventId: string) => {
  window.open(
    `${BACKEND_URL}/api/event/redirect/${eventId}`,
    "_blank"
  );
};