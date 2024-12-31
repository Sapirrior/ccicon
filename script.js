function start() {
  
  fetch('imgs.json')
  .then(response => response.json())
  .then(data => {
    const images = data.imgs;
    const maindiv = document.querySelector('.main')
    
    images.forEach(img => {
      const carddiv = document.createElement('carrd')
      carddiv.classList.add('card');
      
      const imag = document.createElement('img');
      imag.src = `icons/${img}`;
      imag.alt = 'icon'
      
      carddiv.appendChild(imag);
      maindiv.appendChild(carddiv);
      
    })
  })
}