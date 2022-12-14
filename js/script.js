cpt=0;
function doInc(){
    cpt=cpt+1;
    document.getElementById("incr").innerHTML="you clicked "+cpt+" times";

}
const toggleBt = document.getElementsByClassName('toggle_btn')[0];
const navbarLinks = document.getElementsByClassName("navlinks")[0];
menu= document.getElementsByClassName("navbar")[0]

toggleBt.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active')
    menu.classList.toggle("active")

})

