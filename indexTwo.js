fetch("https://fakestoreapi.com/products")
.then((resp) => resp.json())
.then((data) => {
let http = new XMLHttpRequest();
http.open('get', 'db.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let products = JSON.parse(this.responseText);
      let output = "";
      for(let item of products){
         output += `
            <div class="product">
               <img src="${item.image}" alt="${item.description}">
               <p class="title">${item.title}</p>
               <p class="description">${item.description}</p>
               <p class="price">
                  <span>${item.price}</span>
                  <span>€</span>
               </p>
               <button class="button-88" role="button">Add to Cart</button>
            </div>
         `;
      }
      document.querySelector(".products").innerHTML = output;
   }
}})
