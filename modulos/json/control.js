// Cargar el JSON
fetch('data.json')
  .then((response) => response.json())
  .then(data => {
    // Obtener todos los divs con la clase "img"
    const divs = document.querySelectorAll('.img');

    // Recorrer los objetos del JSON y asignarlos a los divs
    data.forEach((item, index) => {
      // Verificamos si el índice del JSON coincide con un div existente
      if (divs[index]) {
        // Agregamos contenido al div
        divs[index].innerHTML = `
          <h3>${item.nombre}</h3>
          <img src="${item.url}" alt="${item.nombre}">
        `;
      }
    });
  })
  .catch(error => console.error('Error al cargar el JSON:', error));
