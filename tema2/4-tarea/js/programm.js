
        const track = document.querySelector('.carousel-track');

let isDragging = false;
let startX;
let scrollLeft;

track.addEventListener('mousedown', (e) => {
  isDragging = true;
  track.classList.add('active');
  startX = e.pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
});

track.addEventListener('mouseleave', () => {
  isDragging = false;
  track.classList.remove('active');
});

track.addEventListener('mouseup', () => {
  isDragging = false;
  track.classList.remove('active');
});

track.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - track.offsetLeft;
  const walk = (x - startX) * 1; 
  track.scrollLeft = scrollLeft - walk;
});

const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
  item.addEventListener('mouseup', () => {

    gridItems.forEach(i => i.classList.remove('selected'));
    
    item.classList.add('selected');
  });
});

const grid2Items = document.querySelectorAll('.grid-item');
const loreText = document.getElementById('lore-text');

// Agrega un evento a cada grid-item
grid2Items.forEach(item => {
  item.addEventListener('click', () => {
    // Obtiene el texto del <p> dentro del grid-item
    const itemText = item.querySelector('p').textContent;

    // Actualiza el contenido del aside
    loreText.textContent = itemText;
  });
});
