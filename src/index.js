import initialLoad from "./initialLoad.js";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
import "./styles.css";

initialLoad();


const homebtn = document.getElementById("homeBtn");
const menubtn = document.getElementById("menuBtn");
const contactbtn = document.getElementById("contactBtn");
const content = document.getElementById("content");

homebtn.addEventListener("click", ()=>{
    console.log("home clicked");
    content.innerHTML =  "";
    home();

})

menubtn.addEventListener("click", ()=>{
    console.log("menu clicked");
    content.innerHTML =  "";
    menu();

    
})

contactbtn.addEventListener("click", ()=>{
    console.log("contact clicked");
    content.innerHTML =  "";
    contact();
    
})


































































































// import initialLoad from "./initialLoad.js";
// import loadHome from "./home.js";
// import loadMenu from "./menu.js";
// import loadContact from "./contact.js";

// function clearContent(){
//     const content = document.getElementById("content");
//     if (!content){
//         console.log("content div not found");
//         return;
//     }
//     content.textContent = "";
//     }


//     document.addEventListener("DOMContentLoaded", ()=>{

//                loadHome();
    



// document.querySelector("nav").addEventListener("click", (e)=>{
//         const id = e.target.id;
//         console.log("clicked", id)

//         if (id === "homeBtn"){
//             console.log("Home clicked");
//             clearContent();
//             loadHome();
//         }

//          if (id === "menuBtn") {
//             console.log("menu clicked");
//             clearContent();
//             loadMenu();
//         }

//          if (id === "contactBtn"){
//             console.log("Home clicked");
//             clearContent();
//             loadContact();
//         }



//     });
// });


    
// // document.addEventListener("DOMContentLoaded", () =>{
// //     console.log("DOM loaded");
    

// //     // const content = document.getElementById("content");
// //     console.log("content", content);

// //     const homeBtn = document.getElementById("homeBtn");
// //     const menuBtn = document.getElementById("menuBtn");
// //     const contactBtn = document.getElementById("contactBtn");


// //     console.log("buttons", homeBtn, menuBtn, contactBtn);
// //     initialLoad();


// //     homeBtn.addEventListener("clcik", () =>{
// //         console.log("home clicked");
// //         clearContent();
// //         loadHome();
// //     });

// //     menuBtn.addEventListener("click", ()=>{
// //         console.log("menu clicked");
// //         clearContent();
// //         loadMenu();        
// //     });

// //     contactBtn.addEventListener("click", ()=>{
// //         console.log("contact clicked");
// //         clearContent();
// //         loadContact();        
// //     });
// // });
