export default async (req) => {
  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405
      });
    }

    const payload = await req.json();

    await fetch("https://hook.eu1.make.com/NEW-WEBHOOK-HERE", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500
    });
  }
};
