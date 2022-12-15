
let grid = document.querySelector(".products");
let filterInput = document.getElementById("filterInput");
let login = document.querySelector("button")

// add event listener
login.addEventListener('submit', refresh)

function refresh(){
    window.location.reload();
    
}

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json =>{

        // iterating products
        for (let value of json){
            addElement(grid, value)
        }
        
    });


// add event listener
filterInput.addEventListener('keyup', filterProducts);

// callback function 
function filterProducts(){
    let filterValue = filterInput.value.toUpperCase();
    let item = grid.querySelectorAll('.item')
    // console.log(filterValue);

    for (let i = 0; i < item.length; i++){
        let span = item[i].querySelector('.title');

        if(span.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            item[i].style.display = "initial";
        }else{
            item[i].style.display = "none";
        }

    }
}



// get value from the api create dynamic element
function addElement(appendIn, value){
    let div = document.createElement('div');
    div.className = "item";

    let { image, title, category, price } = value;

    div.innerHTML = `
            <img src="${image}" class="bg-cover img mx-auto" alt="img1">
            <div class="text-center py-3 font-poppins">
                <h1 class="text-lg title">${title}</h1>
                <a href="#" class="block"><span class="text-sm text-red-400">${category}</span></a>
                <span class="block py-3">$<span class="text-md">${price}</span></span>
                <button class="button-49" role="button">Buy</button>
            </div>
    `;
    appendIn.appendChild(div);
}

document.querySelector("#button").click(function() {  
    document.querySelector("#box form").toggle("slow");
    return false;
  });