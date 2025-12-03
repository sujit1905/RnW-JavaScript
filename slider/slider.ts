// Fixed slider data 
type SliderType = {
    img: string;
    title: string;
    description: string[];
};

const slider: SliderType[] = [
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

// Selecting elements
const imgEl = document.getElementById("slider-img");
const titleEl = document.getElementById("slider-title");
const descEl = document.getElementById("slider-desc");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex: number = 0;

// showSlide function
function showSlide(index: number): void {
    if (!imgEl || !titleEl || !descEl) return;

    if (index < 0) index = slider.length - 1;
    if (index >= slider.length) index = 0;

    currentIndex = index;
    const item = slider[currentIndex];

    // update image/title
    imgEl.src = item.img;
    titleEl.textContent = item.title;

    // each array element in a new line
    descEl.innerHTML = item.description.join("<br>");
}

// button
nextBtn?.addEventListener("click", () => {
    showSlide(currentIndex + 1);
});

prevBtn?.addEventListener("click", () => {
    showSlide(currentIndex - 1);
});

// initial
showSlide(currentIndex);
