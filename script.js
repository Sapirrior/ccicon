function start() {
  fetch('imgs.json')
    .then(response => response.json())
    .then(data => {
      const images = data.imgs;
      const maindiv = document.querySelector('.main');

      images.forEach(img => {
        const carddiv = document.createElement('div');
        carddiv.classList.add('card');

        const imag = document.createElement('img');
        imag.src = `https://raw.githubusercontent.com/Sapirrior/ccicon/refs/heads/main/icons/${img}`;
        imag.alt = 'icon';
        imag.classList.add('lazy'); // Add a class for lazy loading

        carddiv.appendChild(imag);
        maindiv.appendChild(carddiv);
      });

      // Lazy load images using Intersection Observer
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src; // Set the actual source
            observer.unobserve(entry.target); // Stop observing this image
          }
        });
      });

      document.querySelectorAll('.lazy').forEach(img => {
        img.dataset.src = img.src; // Store the actual source in a data attribute
        img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; // Use a placeholder image
        observer.observe(img);
      });
    })
    .catch(error => {
      console.error('Error fetching images:', error);
    });
}
