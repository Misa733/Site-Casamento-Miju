let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let imagens = document.querySelectorAll('.small_img');
let btClose = document.querySelector('#bt_close');
let srcVal = "";
let topo = document.querySelector('#topo')

for(let i = 0;i < imagens.length;i++){
    imagens[i].addEventListener('click',function(){
        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active')
    });
}

btClose.addEventListener('click',function(){
    modal.classList.toggle('modal_active');
})

topo.addEventListener('click', function() {
    window.scrollTo(0, 0);
})

//toggle button
const toggleBtn = document.querySelector('.toggle-btn');
const linkContainer = document.querySelector('.links-container');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    linkContainer.classList.toggle('show');
})