import variables from "./variables.js";
import state from "./state.js";

const {selects, success} = variables



const fetchCodes = async () => {
    try {
        const response = await fetch(`${state.url}/codes`)
        const data = await response.json()
        
        if (data.result === success) {
            state.codes = data.supported_codes
        }
    } catch (err) {
        console.log(err)
    }
}

fetchCodes()
