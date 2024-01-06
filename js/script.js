import {Modal} from './modal.js'
import {alertError} from './alert-error.js'
import * as utils from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = (event) => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showError = utils.notNumber(weight) || utils.notNumber(height)

    if(showError){
        alertError.open()
        return;
    }

    alertError.close()

    const result =  utils.IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

inputWeight.oninput = () => alertError.close()
inputHeight.oninput = () => alertError.close()