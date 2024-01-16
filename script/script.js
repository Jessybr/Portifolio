const soft=document.querySelector('.soft');
const hard=document.querySelector('.hard');
const recen=document.querySelector('.recen');
const contSkills=document.getElementById('skills');
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
        contSkills.classList.add("heiAuto");
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




