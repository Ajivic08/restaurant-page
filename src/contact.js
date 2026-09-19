export default function contact(){
    console.log("contact is been rendered");

    const content = document.getElementById("content");

    const container = document.createElement("div");

    const heading = document.createElement("h1");
    heading.textContent = "my contact"

    const title  = document.createElement("p");
    title.textContent = "+2349066451145";

    container.appendChild(heading);
    container.appendChild(title);

    content.appendChild(container);


}




































































































// export default function loadContact(){
//     const content = document.getElementById("content");

//     const container = document.createElement("div");
//     container.classList.add("contact");

//     const title = document.createElement("h1");
//     title.textContent ="Contact us";

//     const phone = document.createElement("p");
//     phone.textContent = "Phone: 0901-361-7919";

//     container.appendChild(title);
//     container.appendChild(phone);

//     content.appendChild(container);
// }