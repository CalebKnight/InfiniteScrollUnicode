const container = document.getElementById("container");
let currentIndex = 0;
const batchSize = 10000;

function renderBatch(startIndex, endIndex) {
  for (let i = startIndex; i <= endIndex; i++) {
    const character = document.createElement("div");
    character.className = "character";
    character.textContent = String.fromCodePoint(i);
    container.appendChild(character);
  }
}

function handleScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    currentIndex += batchSize;
    renderBatch(currentIndex, currentIndex + batchSize);

    if (currentIndex > 0x10ffff) {
      // Maximum Unicode character
      document.removeEventListener("scroll", handleScroll);
    }
  }
}

renderBatch(currentIndex, currentIndex + batchSize);
currentIndex += batchSize;
document.addEventListener("scroll", handleScroll);
