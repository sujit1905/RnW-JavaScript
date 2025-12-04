// Fixed slider data
var slider = [
  {
    img: "images/image.png",
    title: "VIRAT KOHLI",
    description: [
      "ICC U-19 World Cup",
      "ICC Cricket World Cup",
      "Fastest to 8,000 ODI runs",
    ],
  },
  {
    img: "images/rohit sharma.jpg",
    title: "ROHIT SHARMA",
    description: [
      "3 Double Centuries in ODIs",
      "ICC Champions Trophy",
      "Hitman of Indian Cricket",
    ],
  },
  {
    img: "images/jasprit bumrah.jpeg",
    title: "JASPRIT BUMRAH",
    description: [
      "World-class fast bowler",
      "Deadliest yorker bowler",
      "Great death overs specialist",
    ],
  },
  {
    img: "images/ms.jpeg",
    title: "MS DHONI",
    description: [
      "ICC T20 World Cup 2007",
      "ICC Cricket World Cup 2011",
      "One of the best finishers",
    ],
  },
];
// Selecting elements (with type safety)
var imgEl = document.getElementById("slider-img");
var titleEl = document.getElementById("slider-title");
var descEl = document.getElementById("slider-desc");
var prevBtn = document.getElementById("prev-btn");
var nextBtn = document.getElementById("next-btn");
var currentIndex = 0;
// Show slide function
function showSlide(index) {
  if (!imgEl || !titleEl || !descEl) return;
  if (index < 0) index = slider.length - 1;
  if (index >= slider.length) index = 0;
  currentIndex = index;
  var item = slider[currentIndex];
  imgEl.src = item.img;
  titleEl.textContent = item.title;
  descEl.innerHTML = item.description.join("<br>");
}
// Button click events
nextBtn === null || nextBtn === void 0
  ? void 0
  : nextBtn.addEventListener("click", function () {
      showSlide(currentIndex + 1);
    });
prevBtn === null || prevBtn === void 0
  ? void 0
  : prevBtn.addEventListener("click", function () {
      showSlide(currentIndex - 1);
    });
// Initial load
showSlide(currentIndex);
