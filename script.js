const API = "https://api.moviebox.workers.dev";

async function loadVideo() {
  const res = await fetch(`${API}/video`);
  const data = await res.json();
  document.getElementById("player").src = data.url;
}

loadVideo();
