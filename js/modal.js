export const Modal = {

    wrapper: document.querySelector('.modal-wrapper'),
    wrapperCloseBtn: document.querySelector('.modal .close'),
    message: document.querySelector('.modal span'),

    open() {
    Modal.wrapper.classList.add('open')
    },
    close() {
    Modal.wrapper.classList.remove('open')
    }
}

Modal.wrapperCloseBtn.onclick = () => {
    Modal.close()
}

window.addEventListener('keydown', pressEscape)
function pressEscape(event){
    if(event.key === "Escape"){
        Modal.close()
    }
}