const dateInput = document.getElementById("dateInput");
const title = document.getElementById("imageTitle");
const date = document.getElementById("imageDate");
const Description = document.getElementById("Description");
const video = document.getElementById("video");
const image = document.getElementById("image");

const nasaData = (json) => {
  if (json.media_type === "video") {
    title.innerHTML = "Title: " + json.title;
    date.innerHTML = "Date:" + json.date;
    Description.innerHTML = "Description: " + json.Description;
    video.src = json.url;
    video.style.display = "block";
    image.style.display = "none";
  } else if (json.media_type === "image") {
    title.innerHTML = "Title: " + json.title;
    date.innerHTML = "Date: " + json.date;
    Description.innerHTML = "Description: " + json.Description;
    image.src = json.url;
    image.style.display = "block";
    video.style.display = "none";
  } else {
    console.debug("You're looking too far into the future, choose something within our timeline :(");
  }
};

dateInput.onchange = function (e) {
  const dateStr = e.target.value;
  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=7lHKRGKsjkAwdl2I0PBEBsQtmIKTwgJhuZGHZaUa&&date=${dateStr}`
  )
    .then((response) => response.json())
    .then((data) => nasaData(data))
    .catch((error) => {
      console.debug(error);
    });
};