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
        category:"watch",
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
    //card should have category
     card.classList.add("card","i.category");
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

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}