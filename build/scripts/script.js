const navIndicator=document.querySelector('.navIndicator');
const navItems=document.querySelectorAll('.navItems');
const home=document.querySelector('.home');
const project=document.querySelector('.project');
const goal=document.querySelector('.goal');
const gallery=document.querySelector('.gallery');



function activelink(){
    navItems.forEach((item)=>{
        item.classList.remove('active');
        this.classList.add('active');
    })
}

navItems.forEach((item)=>{
    item.addEventListener('click',activelink)

})