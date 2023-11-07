let products ={
    data:[{
        ProductName:"Regular White T-Shirt",
        category:"Topwear",
        price:"30",
        image:"./image/white-tshirt.jpg"
    },
    {
        ProductName:"Beige Short Skirt",
        category:"Bottomwear",
        price:"49",
        image:"./image/short-skirt.jpg"
    },
    {
        ProductName:"Sporty SmartWatch",
        category:"Watch",
        price:"99",
        image:"./image/sporty-smartwatch.jpg"
    },
    {
        ProductName:"Basic Knitted Top",
        category:"Topwear",
        price:"29",
        image:"./image/knitted-top.jpg"
    },
    {
        ProductName:"Black leather Jacket",
        category:"Jacket",
        price:"129",
        image:"./image/black-leather-jacket.jpg"
    },
    {
        ProductName:"Stylish Pink Trousers",
        category:"bottomwear",
        price:"89",
        image:"./image/pink-trousers.jpg"
    },
    {
        ProductName:"Brown Men's Jacket",
        category:"Jacket",
        price:"189",
        image:"./image/brown-jacket.jpg"
    },
    {
        ProductName:"Compy Gray Pants",
        category:"Bottomwear",
        price:"49",
        image:"./image/comfy-gray-pants.jpg"
    }
],
}

for(let i of products.data){
    //create Card
    let card = document.createElement("div");
    //card should have category and should stay hidden initialy
     card.classList.add("card",i.category,"hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.ProductName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = '$'+i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

//parameter passes from  (parameter same as category)
function filterProduct(value){
    //button class code
    let buttons = document.querySelectorAll('.button-value');
    buttons.forEach(button => {
        //check if value equels innerText 
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }else{
            button.classList.remove("active");
        }
    });

    //searc button clict
    document.getElementById("search").addEventListener("click", () => {
        //initialization
        let searchInput = document.getElementById("search-input").value;
        let elements = document.querySelectorAll(".product-name");
        let cards = document.querySelectorAll(".card");

        //loop throug all element
        elements.forEach((element, index) => {           
            //check if text includes the search value
            if (element.innerText.includes(searchInput.toUpperCase())){
                //display matching card
                cards[index].classList.remove("hide");               
            }else{
                cards[index].classList.add("hide");
            }
        })
    })
    //select all card
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        //dislay all card on all button click
        if (value == "all" ){
            element.classList.remove("hide")
        }else{
        //check if element contain category class
        if (element.classList.contains(value)){
            element.classList.remove("hide");
        }else{
            //hide other element
            element.classList.add("hide");
        }
    }
    })
}
//initially display all product 
window.onload = () => {
    filterProduct("all");
};