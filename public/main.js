if ("geolocation" in navigator) {
  console.log("geolocation available");
  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    document.getElementById("latitude").textContent = lat;
    document.getElementById("longitude").textContent = lon;
  });
} else {
  console.log("geolocation not available");
}
