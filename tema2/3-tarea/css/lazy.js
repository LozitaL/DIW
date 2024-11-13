const lazyLoadImages = () => {
  const images = document.querySelectorAll('.lazy-load');

  images.forEach((image) => {
    const rect = image.getBoundingClientRect();
    
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      image.classList.add('visible');
      image.classList.remove('invisible');
    } else {
      image.classList.remove('visible');
      image.classList.add('invisible');
    }
  });
};

window.addEventListener('scroll', lazyLoadImages);

window.addEventListener('load', lazyLoadImages);
