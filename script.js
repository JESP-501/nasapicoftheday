let dateInput = document.getElementById("dateInput");
let title = document.getElementById("imageTitle");
let date = document.getElementById("imageDate");
let explanation = document.getElementById("explanation");
let video = document.getElementById("video");
let image = document.getElementById("image");

const nasaData = (json) => {
  if (json.media_type === "video") {
    title.innerHTML = "Title: " + json.title;
    date.innerHTML = "Date:" + json.date;
    explanation.innerHTML = "Description: " + json.explanation;
    video.src = json.url;
    video.style.display = "block";
    image.style.display = "none";
  } else if (json.media_type === "image") {
    title.innerHTML = "Title: " + json.title;
    date.innerHTML = "Date: " + json.date;
    explanation.innerHTML = "Description: " + json.explanation;
    image.src = json.url;
    image.style.display = "block";
    video.style.display = "none";
  } else {
    explanation.innerHTML =
    title.innerHTML = "Title: ERROR";
    date.innerHTML = "Date: ERROR";
    explanation.innerHTML = "Description: ERROR";
    image.src = null;
    image.style.display = null;
    video.style.display = null;
      "You're looking too into the future, choose something within our timeline :(";
  }
};
dateInput.onchange = function (e) {
  var dateStr = e.target.value;
  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=17cBeyBY26TKmYBSq6BO6xNjnEduRiqQgyyjaJia&&date=${dateStr}`
  )
    .then((response) => response.json())
    .then((data) => nasaData(data))
    .catch((error) => {
      console.debug(error);
    });
};
