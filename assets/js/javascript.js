
const BuyBtns = document.querySelectorAll('.button-buy-ticket')
const modal = document.querySelector('.modal')

// open modal
function openmodal(){
modal.classList.add('open')
}

for(const BuyBtn of BuyBtns){
BuyBtn.addEventListener('click', openmodal)
}

// close modal
function closemodal(){
modal.classList.remove('open')
}

const close = document.querySelector('.modal-close')
close.addEventListener('click',closemodal)
