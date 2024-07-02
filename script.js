
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

 let elemC = document.querySelector(".elemContainer")
let fix = document.querySelector("#fixedImages")
 elemC.addEventListener("mouseenter",()=>{
    fix.style.display = "block";
 })
 elemC.addEventListener("mouseleave",()=>{
    fix.style.display = "none";
 })


 let elems = document.querySelectorAll(".elem")

 elems.forEach(e=>{
       e.addEventListener("mouseenter",()=>{
           let image = e.getAttribute("data-image")
           fix.style.backgroundImage   = `url(${image})`
       })
 })
 
let head = document.querySelectorAll("#headings > h1")
console.log(head);

let designleft = document.querySelector(".designleft")
let currentIndex = 0;
head.forEach((e, index)=>{
    e.addEventListener("click",()=>{
       if(currentIndex !== index){
       head[currentIndex].style.color = ""
     
    }
    e.style.color = "white"
    currentIndex = index ;
    })

})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  

let load = document.querySelector("#loader")
function loader(){
    setTimeout(() => {
     load.style.top = "-100%"

 }, 4000);
}
loader()


let flag = 0;
let menu = document.querySelector("nav h3")
let black = document .querySelector("#blacksrc")
let img = document.querySelector("nav img")
function blacksrc(){

      menu.addEventListener("click",()=>{
        black.addEventListener("click",()=>{
          console.log('black clicked');         
        })
        if(flag == 0){         
          black.style.top = "0%"
          img.style.opacity = "0"
          flag = 1;
        }
        else{          
          black.style.top = "-100%"
          img.style.opacity = "100"
          flag = 0;
        }
      })
}

blacksrc()
















  
  //   let flag = 0;
  //  let black =  document.querySelector("#blackscreen");
  //  let menu = document.querySelector("nav h3")
  //  let navimg = document.querySelector("nav img")
  //  black.addEventListener("click",()=>{
  //     console.log("black clicked");
  //  })
  // menu.addEventListener("click",()=>{
  //     console.log("clicked");
      
  //     if(flag == 0){
  //         black.style.top = "0%"
  //         navimg.style.opacity = "0"
  //         flag = 1;
  //     }
  //     else{
  //         black.style.top = "-100%"
  //         navimg.style.opacity = "1"
  //        flag = 0;
  //     }
  // })
