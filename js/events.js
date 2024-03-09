import { handleInput, handleSubmit, switchCurrencies } from "./convert.js";
import { fetchCodes } from "./script.js";
import variables from "./variables.js";

const {amountInput,form,swithButton} = variables

fetchCodes()

amountInput.addEventListener('keyup', handleInput)

form.addEventListener('submit', handleSubmit)

swithButton.addEventListener('click', switchCurrencies)