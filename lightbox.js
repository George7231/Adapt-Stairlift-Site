const altTexts = [
  "3D rendering of a man seated on a stairlift at the base of an indoor straight staircase.",
  "Over-the-shoulder view of a man gripping the stairlift’s handrail control, preparing to ascend a staircase.",
  "3D perspective of a man reaching the top of a staircase and using the stair assist bar of a stairlift.",
  "3D perspective of a man descending a staircase while using the stair assist bar of a stairlift.",
  "Close-up of two hands operating the stairlift’s handrail control bar, showing up and down arrow buttons.",
  "Standalone 3D rendering of a beige stairlift chair with armrests, footrest and vertical support rail (no person).",
  "Side-angle 3D view of a stairlift chair installed on a staircase, showing the motor housing and rail."
];

const images = ['1h.jpg', '2h.jpg', '3h.jpg', '4h.jpg', '5h.jpg', '6h.jpg', '7h.jpg'];
let currentImageIndex = 0;

function openLightbox(index) {
  currentImageIndex = index;
  const slider = document.getElementById('lightboxSlider');
  slider.innerHTML = images.map((src, i) => `
    <div style="flex-shrink: 0; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center;">
      <img src="${src}" alt="${altTexts[i]}" style="max-width: 95vw; max-height: 90vh; object-fit: contain; user-select: none; margin: auto; cursor: default;">
    </div>`).join('');
  slider.style.transform = `translateX(-${index * 100}vw)`;
  document.getElementById('lightbox').style.display = 'block';
}

function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) currentImageIndex = images.length - 1;
  if (currentImageIndex >= images.length) currentImageIndex = 0;
  const slider = document.getElementById('lightboxSlider');
  if (slider) {
    slider.style.transform = `translateX(-${currentImageIndex * 100}vw)`;
  }
  return currentImageIndex;
}

window.openLightbox = openLightbox;
window.changeImage = changeImage;

function _setIndex(i) {
  currentImageIndex = i;
}

function _getIndex() {
  return currentImageIndex;
}

if (typeof module !== 'undefined') {
  module.exports = { changeImage, _setIndex, _getIndex };
}
