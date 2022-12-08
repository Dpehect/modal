const openButton = document.querySelector('.open');
const modelContainer = document.querySelector('.modal-container')
const closeButton = document.querySelector('.close-btn')

openButton.addEventListener("click",function(){
    modelContainer.classList.add('show')
})

closeButton.addEventListener('click',function(){
    modelContainer.classList.remove('show')
})