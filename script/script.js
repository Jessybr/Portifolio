// const projeto1=document.getElementById('proj1');
// const projeto2=document.getElementById('proj2');
// const projeto3=document.getElementById('proj3');
// const ver_mais1=document.querySelector('#ver_mais1');
// const ver_mais2=document.querySelector('#ver_mais2');
// const ver_mais3=document.querySelector('#ver_mais3');
const soft=document.querySelector('.soft');
const hard=document.querySelector('.hard');
const recen=document.querySelector('.recen');
// const proj_about1=document.getElementById('proj_about1');
// const proj_img1=document.getElementById('proj_img1');
// const proj_about2=document.getElementById('proj_about2');
// const proj_img2=document.getElementById('proj_img2');
// const proj_about3=document.getElementById('proj_about3');
// const proj_img3=document.getElementById('proj_img3');
// const close1=document.getElementById('close_about1');
const projetos=[...document.querySelectorAll('.proj')];
const ver_mais=[...document.querySelectorAll('.ver_mais')];
const close_about=[...document.querySelectorAll('.close_about')];
const proj_about=[...document.querySelectorAll('.proj_about')];
const img_carro=[...document.querySelectorAll('.img_carro')];

window.addEventListener("scroll", ()=>{
    if (window.scrollY > 200) {
        soft.classList.add("aparecerSkill");
    }
    if (window.scrollY > 450){
        hard.classList.add("aparecerSkill");
    }
    if (window.scrollY > 750){
        recen.classList.add("aparecerSkill");
    }
});



function mostrar_botao(ind){
     ver_mais[ind].classList.add('exibir');
}
function fechar_botao(ind){
    ver_mais[ind].classList.remove('exibir');
}
function info_proj(ind){
    projetos[ind].classList.add('dispNone');
    proj_about[ind].classList.add('ver_cont');
}
function fechar_info(ind){
    projetos[ind].classList.remove('dispNone');
    proj_about[ind].classList.remove('ver_cont');
}

projetos.map((projeto, ind) =>{
    projeto.addEventListener('mouseover', () => mostrar_botao(ind));
    projeto.addEventListener('mouseout', () => fechar_botao(ind));
    ver_mais[ind].addEventListener('click', () => info_proj(ind));
    close_about[ind].addEventListener('click', () => fechar_info(ind));
})




