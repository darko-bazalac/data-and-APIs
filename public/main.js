let lat, lon;
const button = document.getElementById("submit");
button.addEventListener("click", async event => {
  const mood = document.getElementById("mood").value;
  const data = { lat, lon, mood };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const response = await fetch("/api", options);
  const json = await response.json();
  console.log(json);
});

if ("geolocation" in navigator) {
  console.log("geolocation available");
  navigator.geolocation.getCurrentPosition(async position => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    document.getElementById("latitude").textContent = lat;
    document.getElementById("longitude").textContent = lon;
  });
} else {
  console.log("geolocation not available");
}

async function getData() {
  const response = await fetch("/api");
  const data = await response.json();

  for (const item of data) {
    const root = document.createElement("div");
    const mood = document.createElement("div");
    const geo = document.createElement("div");
    const date = document.createElement("div");

    mood.textContent = item.mood;
    geo.textContent = `${item.lat}°, ${item.lon}°`;
    date.textContent = new Date(item.timestamp).toLocaleString();

    root.append(mood, geo, date);
    document.body.append(root);
  }
  console.log(data);
}

getData();
