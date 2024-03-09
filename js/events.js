import { handleInput } from "./convert";
import { fetchCodes } from "./script";
import variables from "./variables";

const {amountInput} = variables

fetchCodes()

amountInput.addEventListener('keyup', handleInput)