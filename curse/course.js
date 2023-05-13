let hedear = document.querySelector("header");
let nav = document.querySelector("nav");
let burger_none = document.querySelector(".burger-none");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");
let a = document.querySelectorAll(" li > a");
let close1 = document.getElementById("close");
let p = document.querySelector(".home> .p");

console.log(close1);

function burger_menu(){


// mobile
    if(hedear.clientWidth <= 569){

        

// styling ;
     close1.style.display = 'block';   
   burger_none.style.display = "block";
   nav.style.display = 'flex'
   ul.style.display = 'flex'
   nav.style.transform = 'translateY(-10000%)';
   nav.style.position = 'fixed';
   nav.style.width = "100%";
   nav.style.height = "100%";
   nav.style.background = "#588157";
   nav.style.opacity = '0.9';
   ul.style.flexDirection = 'column'
   nav.style.justifyContent = "center"
   nav.style.alignItems = "center"
  li.forEach(item=>{
    item.style.marginTop = '10px' 
    item.style.fontSize = "30px";
  })

  a.forEach(item=>{
    item.style.color = "#fff"
  });

   

}else if(hedear.clientWidth >= 570){
 burger_none.style.display = "none"
  
}
}

console.log(nav);

burger_menu();

// عند ظغط تظهر القائمة

let burger = document.querySelector(".burger")

  burger.onclick =  function(){
    nav.style.transform = 'translateY(0)' ;
}

close1.addEventListener("click", function(){
    
    nav.style.transform = "translateY(-1100%)";
})




