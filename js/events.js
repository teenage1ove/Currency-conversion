import { handleInput, handleSubmit, switchCurrencies } from "./convert.js";
import { fetchCodes, handleTabClick } from "./script.js";
import {handleActionClick} from './single.js'
import variables from "./variables.js";


const {amountInput,form,swithButton, tabs, currentCurrency, currentCurrencyList} = variables

fetchCodes()

amountInput.addEventListener('keyup', handleInput)

form.addEventListener('submit', handleSubmit)

swithButton.addEventListener('click', switchCurrencies)

tabs.forEach(tab => tab.addEventListener('click', handleTabClick));

currentCurrency.addEventListener('click', handleActionClick)
currentCurrencyList.addEventListener('click', handleActionClick)