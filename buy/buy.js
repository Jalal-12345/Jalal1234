// عند الضظ يظهر القائمة
let list = document.querySelector('.fa-list')
let border_list = document.querySelector('.border-list')
console.log(border_list,list)

function click_list (){
   border_list.classList.add("open");
};

//  عند ضغط يتم اخفائه القائمة
function  x_list (){
 border_list.classList.remove("open");
};


// متوفر أو غير متوفر



