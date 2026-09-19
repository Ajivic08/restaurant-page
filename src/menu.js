export default function menu(){
    console.log("menu is been rendered");

    const content = document.getElementById("content");

    const container = document.createElement("div");

    const heading = document.createElement("h1");
    heading.textContent = "our menu"

    const title  = document.createElement("p");
    title.textContent = "jollof rice - #1500";

    container.appendChild(heading);
    container.appendChild(title);

    content.appendChild(container);


}




































































































// export default function loadMenu(){
//     const content = document.getElementById("content");

//     const container = document.createElement("div");
//     container.classList.add("menu");

//     const title = document.createElement("h1");
//     title.textContent ="Our menu";

//     const item = document.createElement("p");
//     item.textContent = "Jollof Rice - #1500";

//     container.appendChild(title);
//     container.appendChild(item);

//     content.appendChild(container);
// }