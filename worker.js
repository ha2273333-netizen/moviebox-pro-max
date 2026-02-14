export default {
  async fetch(req, env) {
    const url = new URL(req.url);

    if (url.pathname === "/video") {
      return new Response(JSON.stringify({
        url: "https://cdn.moviebox/video.mp4"
      }), { headers: { "Content-Type": "application/json" }});
    }

    if (url.pathname === "/gpt") {
      const r = await fetch(env.API_BACKEND + "/gpt");
      return r;
    }

    return new Response("OK");
  }
}
