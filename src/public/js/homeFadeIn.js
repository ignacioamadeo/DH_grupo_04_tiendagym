const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.imagenDivisorTop');
  
      if (entry.isIntersecting) {
        square.classList.add('imagenDivisorTop-animation');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('imagenDivisorTop-animation');
    });
  });
  
  observer.observe(document.querySelector('.homeCont3'));