import { handleInput, handleSubmit, switchCurrencies } from "./convert.js";
import { fetchCodes, handleTabClick } from "./script.js";
import variables from "./variables.js";

const {amountInput,form,swithButton, tabs} = variables

fetchCodes()

amountInput.addEventListener('keyup', handleInput)

form.addEventListener('submit', handleSubmit)

swithButton.addEventListener('click', switchCurrencies)

tabs.forEach(tab => tab.addEventListener('click', handleTabClick));