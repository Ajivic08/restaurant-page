export default function home(){
    console.log("home is been rendered");

    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "Ajivic kitchen";

    const title = document.createElement("p");
    title.textContent = "Welcome to the best kitchen";

    const container = document.createElement("div");

    container.appendChild(heading);
    container.appendChild(title);

    content.appendChild(container);

    
}



































































































// export default function loadHome(){
//     console.log("home rendered");
    
//     const content = document.getElementById("content");
//     console.log("content", content);

//     const container = document.createElement("div");
//     container.classList.add("home");
//     console.log("container", container);

//     const title = document.createElement("h1");
//         title.textContent ="Welcome to the restaurant";
//         console.log("content", title);

//     const desc = document.createElement("p");
//     desc.textContent = "Best food in town. Fresh, tasty, unforgettable";
//     console.log("desc", desc);

//     container.appendChild(title);
//     container.appendChild(desc);

//     content.appendChild(container);
// };
