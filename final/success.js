// Import data on selected character
const rawData = localStorage.getItem("selectedUma");
const activeUma = JSON.parse(rawData);

const racing_img = activeUma.racing_img;

document.getElementById("racing-img-space").src = racing_img;

document.getElementById("replay-button").addEventListener("click", function() {
    window.location.href = "index.html";
});