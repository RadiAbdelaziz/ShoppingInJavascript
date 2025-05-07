// Fetch Api And Get Data
axios.get("https://dummyjson.com/products").then((response) => {
    // Container To Take All Task
  let container = document.getElementById("container");

  // Make Variable To Set Api Product
  const data = response.data.products;

  // Looping On All Products
  data.forEach((product) => {

    // Create Main Div To Wrap All Card Element
    let card = document.createElement("div")
    card.className = "card";
    
    // Create Element To Title 
    let title = document.createElement("h3");
    title.className = "title"
    title.innerHTML = product.title;

    // Make Rating Element
    let rating = document.createElement("p")
    rating.innerHTML = `${product.rating} ★`

    // Element Price
    let price = document.createElement("span")
    price.innerHTML = `${product.price}  $`

    // Card Img 
    let img = document.createElement("img")
    img.src = product.images

    // Button To Buy Products
    let button = document.createElement("button")
    button.innerHTML = "Buy Now"

    // Append All Element In Main Card 
    card.appendChild(title)
    card.appendChild(img)
    card.appendChild(price)
    card.appendChild(rating)
    card.appendChild(button)

    // Append Card In Container
    container.appendChild(card)
  });
});
