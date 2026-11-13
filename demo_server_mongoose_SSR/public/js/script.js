console.log("hola desde VanillaJS. Aquí va tu código para manipular el DOM de la web y para hacer llamadas a API");

document.getElementById("searchButton").addEventListener("click", async e => {
  const id = document.getElementById("productName").value;
  alert(id);
  try {
    //const res = await fetch(`http://localhost:3000/api/products/${id}`); // Llamada a un endpoint de mi propia API
    const res = await fetch(`/api/products/${id}`);
    const data = await res.json();
    alert(data);
    console.log(data);

    const product = data[0];

    document.getElementById("result").innerHTML = `
        <article>
          <h1> Producto encontrado! </h1>
          <p>Descripción: ${product.description}</p>
          <p>Título: ${product.title}</p>
          <p>Precio: ${product.price}</p>
          <img src="${product.image}" alt="${product.title}" class="img_logo">
        </article>
      `;

  }
  catch (error) {
    console.log(error);
  }
})

document.getElementById("productForm").addEventListener("submit", async event => {
  event.preventDefault();


  // Campos del formulario
  const id = event.target.elements.id.value;
  const title = event.target.elements.title.value;
  const description = event.target.elements.description.value;
  const price = event.target.elements.price.value;
  const image = event.target.elements.image.value;
  const companyName = event.target.elements.companyName.value;


  const newProduct = {
    id,
    title,
    description,
    price,
    image,
    companyName
  }

  try {
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    });

    const data = await res.json();

    // Comprueba si el código de estado no es 200-299 (por ejemplo, 400 Bad Request)
    if (!res.ok) {
      throw new Error(data.message || data.error || `Error ${res.status}: Solicitud incorrecta`);
    }

    console.log(data);
    alert("Producto agregado correctamente!");

  } catch (error) {
    console.log(error);
    alert("Error al agregar el producto");
  }
})