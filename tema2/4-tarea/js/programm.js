
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
