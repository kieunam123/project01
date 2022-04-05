
const BuyBtns = document.querySelectorAll('.button-buy-ticket')
const modal = document.querySelector('.modal')
const modalcontainer = document.querySelector('.modal-container')

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

// modal exception
modal.addEventListener('click',closemodal)
modalcontainer.addEventListener('click',function(event){
    event.stopImmediatePropagation()
})

// mobile menu open event

const header = document.getElementById("headerid");
const mobileMenu = document.getElementById("mobilemenuid");

mobileMenu.onclick = function(){
    var isClosed = header.clientHeight === 46;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = '46px';
    }

}



