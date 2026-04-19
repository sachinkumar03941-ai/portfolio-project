const wallpaperGrid = document.getElementById('wallpaperGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const navButtons = document.querySelectorAll('.nav-btn');

let allWallpapers = [];
let displayedCount = 0;
const BATCH_SIZE = 30;

// Define the paths to all 120 images inside the 'images/' folder
const images = [
  { src: 'images/wallpaper1.jpg', category: 'nature' },
  { src: 'images/wallpaper2.jpg', category: 'nature' },
  { src: 'images/wallpaper3.jpg', category: 'nature' },
  { src: 'images/wallpaper4.jpg', category: 'nature' },
  { src: 'images/wallpaper5.jpg', category: 'nature' },
  { src: 'images/wallpaper6.jpg', category: 'nature' },
  { src: 'images/wallpaper7.jpg', category: 'abstract' },
  { src: 'images/wallpaper8.jpg', category: 'abstract' },
  { src: 'images/wallpaper9.jpg', category: 'abstract' },
  { src: 'images/wallpaper10.jpg', category: 'abstract' },
  { src: 'images/wallpaper11.jpg', category: 'abstract' },
  { src: 'images/wallpaper12.jpg', category: 'abstract' },
  { src: 'images/wallpaper13.jpg', category: 'animals' },
  { src: 'images/wallpaper14.jpg', category: 'animals' },
  { src: 'images/wallpaper15.jpg', category: 'animals' },
  { src: 'images/wallpaper16.jpg', category: 'animals' },
  { src: 'images/wallpaper17.jpg', category: 'animals' },
  { src: 'images/wallpaper18.jpg', category: 'animals' },
  { src: 'images/wallpaper19.jpg', category: 'architecture' },
  { src: 'images/wallpaper20.jpg', category: 'architecture' },
  { src: 'images/wallpaper21.jpg', category: 'architecture' },
  { src: 'images/wallpaper22.jpg', category: 'architecture' },
  { src: 'images/wallpaper23.jpg', category: 'architecture' },
  { src: 'images/wallpaper24.jpg', category: 'architecture' },
  { src: 'images/wallpaper25.jpg', category: 'nature' },
  { src: 'images/wallpaper26.jpg', category: 'nature' },
  { src: 'images/wallpaper27.jpg', category: 'nature' },
  { src: 'images/wallpaper28.jpg', category: 'nature' },
  { src: 'images/wallpaper29.jpg', category: 'nature' },
  { src: 'images/wallpaper30.jpg', category: 'nature' },
  { src: 'images/wallpaper31.jpg', category: 'abstract' },
  { src: 'images/wallpaper32.jpg', category: 'abstract' },
  { src: 'images/wallpaper33.jpg', category: 'abstract' },
  { src: 'images/wallpaper34.jpg', category: 'abstract' },
  { src: 'images/wallpaper35.jpg', category: 'abstract' },
  { src: 'images/wallpaper36.jpg', category: 'abstract' },
  { src: 'images/wallpaper37.jpg', category: 'animals' },
  { src: 'images/wallpaper38.jpg', category: 'animals' },
  { src: 'images/wallpaper39.jpg', category: 'animals' },
  { src: 'images/wallpaper40.jpg', category: 'animals' },
  { src: 'images/wallpaper41.jpg', category: 'animals' },
  { src: 'images/wallpaper42.jpg', category: 'animals' },
  { src: 'images/wallpaper43.jpg', category: 'architecture' },
  { src: 'images/wallpaper44.jpg', category: 'architecture' },
  { src: 'images/wallpaper45.jpg', category: 'architecture' },
  { src: 'images/wallpaper46.jpg', category: 'architecture' },
  { src: 'images/wallpaper47.jpg', category: 'architecture' },
  { src: 'images/wallpaper48.jpg', category: 'architecture' },
  { src: 'images/wallpaper49.jpg', category: 'nature' },
  { src: 'images/wallpaper50.jpg', category: 'nature' },
  { src: 'images/wallpaper51.jpg', category: 'nature' },
  { src: 'images/wallpaper52.jpg', category: 'nature' },
  { src: 'images/wallpaper53.jpg', category: 'nature' },
  { src: 'images/wallpaper54.jpg', category: 'nature' },
  { src: 'images/wallpaper55.jpg', category: 'abstract' },
  { src: 'images/wallpaper56.jpg', category: 'abstract' },
  { src: 'images/wallpaper57.jpg', category: 'abstract' },
  { src: 'images/wallpaper58.jpg', category: 'abstract' },
  { src: 'images/wallpaper59.jpg', category: 'abstract' },
  { src: 'images/wallpaper60.jpg', category: 'abstract' },
  { src: 'images/wallpaper61.jpg', category: 'animals' },
  { src: 'images/wallpaper62.jpg', category: 'animals' },
  { src: 'images/wallpaper63.jpg', category: 'animals' },
  { src: 'images/wallpaper64.jpg', category: 'animals' },
  { src: 'images/wallpaper65.jpg', category: 'animals' },
  { src: 'images/wallpaper66.jpg', category: 'animals' },
  { src: 'images/wallpaper67.jpg', category: 'architecture' },
  { src: 'images/wallpaper68.jpg', category: 'architecture' },
  { src: 'images/wallpaper69.jpg', category: 'architecture' },
  { src: 'images/wallpaper70.jpg', category: 'architecture' },
  { src: 'images/wallpaper71.jpg', category: 'architecture' },
  { src: 'images/wallpaper72.jpg', category: 'architecture' },
  { src: 'images/wallpaper73.jpg', category: 'nature' },
  { src: 'images/wallpaper74.jpg', category: 'nature' },
  { src: 'images/wallpaper75.jpg', category: 'nature' },
  { src: 'images/wallpaper76.jpg', category: 'nature' },
  { src: 'images/wallpaper77.jpg', category: 'nature' },
  { src: 'images/wallpaper78.jpg', category: 'nature' },
  { src: 'images/wallpaper79.jpg', category: 'abstract' },
  { src: 'images/wallpaper80.jpg', category: 'abstract' },
  { src: 'images/wallpaper81.jpg', category: 'abstract' },
  { src: 'images/wallpaper82.jpg', category: 'abstract' },
  { src: 'images/wallpaper83.jpg', category: 'abstract' },
  { src: 'images/wallpaper84.jpg', category: 'abstract' },
  { src: 'images/wallpaper85.jpg', category: 'animals' },
  { src: 'images/wallpaper86.jpg', category: 'animals' },
  { src: 'images/wallpaper87.jpg', category: 'animals' },
  { src: 'images/wallpaper88.jpg', category: 'animals' },
  { src: 'images/wallpaper89.jpg', category: 'animals' },
  { src: 'images/wallpaper90.jpg', category: 'animals' },
  { src: 'images/wallpaper91.jpg', category: 'architecture' },
  { src: 'images/wallpaper92.jpg', category: 'architecture' },
  { src: 'images/wallpaper93.jpg', category: 'architecture' },
  { src: 'images/wallpaper94.jpg', category: 'architecture' },
  { src: 'images/wallpaper95.jpg', category: 'architecture' },
  { src: 'images/wallpaper96.jpg', category: 'architecture' },
  { src: 'images/wallpaper97.jpg', category: 'nature' },
  { src: 'images/wallpaper98.jpg', category: 'nature' },
  { src: 'images/wallpaper99.jpg', category: 'nature' },
  { src: 'images/wallpaper100.jpg', category: 'nature' },
  { src: 'images/wallpaper101.jpg', category: 'nature' },
  { src: 'images/wallpaper102.jpg', category: 'nature' },
  { src: 'images/wallpaper103.jpg', category: 'abstract' },
  { src: 'images/wallpaper104.jpg', category: 'abstract' },
  { src: 'images/wallpaper105.jpg', category: 'abstract' },
  { src: 'images/wallpaper106.jpg', category: 'abstract' },
  { src: 'images/wallpaper107.jpg', category: 'abstract' },
  { src: 'images/wallpaper108.jpg', category: 'abstract' },
  { src: 'images/wallpaper109.jpg', category: 'animals' },
  { src: 'images/wallpaper110.jpg', category: 'animals' },
  { src: 'images/wallpaper111.jpg', category: 'animals' },
  { src: 'images/wallpaper112.jpg', category: 'animals' },
  { src: 'images/wallpaper113.jpg', category: 'animals' },
  { src: 'images/wallpaper114.jpg', category: 'animals' },
  { src: 'images/wallpaper115.jpg', category: 'architecture' },
  { src: 'images/wallpaper116.jpg', category: 'architecture' },
  { src: 'images/wallpaper117.jpg', category: 'architecture' },
  { src: 'images/wallpaper118.jpg', category: 'architecture' },
  { src: 'images/wallpaper119.jpg', category: 'architecture' },
  { src: 'images/wallpaper120.jpg', category: 'architecture' }
];

// Function to render wallpapers in the grid
function renderWallpapers(batch) {
  batch.forEach(wp => {
    const item = document.createElement('div');
    item.className = `wallpaper-item ${wp.category}`;
    item.innerHTML = `<img src="${wp.src}" alt="${wp.category} wallpaper">`;
    wallpaperGrid.appendChild(item);
  });
}

// Initial load
function loadNextBatch() {
  const nextBatch = images.slice(displayedCount, displayedCount + BATCH_SIZE);
  renderWallpapers(nextBatch);
  displayedCount += BATCH_SIZE;

  // Hide "Load More" button when all images are loaded
  if (displayedCount >= images.length) {
    loadMoreBtn.style.display = 'none';
  }
}

loadMoreBtn.addEventListener('click', loadNextBatch);
window.addEventListener('DOMContentLoaded', loadNextBatch);

// Filter wallpapers by category
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.category;
    const items = document.querySelectorAll('.wallpaper-item');

    items.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
