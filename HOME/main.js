
let list = document.querySelector(".fa-list")
let border_list = document.querySelector('.border-list');
// عند الضغط تظهر القائمة
{
list.addEventListener("click" , (eo) =>{
    border_list.classList.add("open")
})
}
// عند الضغط يتم اخفاء القائمة
let x = document.querySelector('.fa-xmark');

x.onclick =  function(){
    border_list.classList.remove("open");
}

