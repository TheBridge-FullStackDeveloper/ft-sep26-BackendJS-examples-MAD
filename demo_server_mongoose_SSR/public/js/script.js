console.log("hola desde VanillaJS. Aquí va tu código para manipular el DOM de la web y para hacer llamadas a API");

document.getElementById("searchButton").addEventListener("click", async e => {
    const id = document.getElementById("productName").value;
    alert(id);
    try{
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
    catch(error){
        console.log(error);
    }
})