export default async (req) => {
  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405
      });
    }

    const payload = await req.json();

   await fetch("https://hook.eu1.make.com/i6tn3sk2hepn8n9hnf95z0oxebehx1qt", {
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
