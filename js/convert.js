import state from './state.js'
import variables from './variables.js'
import { formatToCurrency, getFullTitle } from './utils.js'
import { renderResult } from './markups.js'
const {success, resultFrom, resultTo, formResults, rateConversion, rateLast, toSelect, fromSelect} = variables

export const handleChange = ({target: {value,name}}) => {
    state.pair = {
        ...state.pair,
        [name]: value
    }
}

export const handleInput = ({target: {value, name}}) => {
    state[name] = Number(value)
}

const insertResults = ({base_code: baseCode, target_code: targetCode, conversion_rate: rate, conversion_result: result, time_last_update_utc: time}) => { // renaming 
    const from = {
        code: baseCode,
        amount: state.amount,
        full: getFullTitle(state.codes, baseCode)
    }

    const to = {
        code: targetCode,
        amount: result,
        full: getFullTitle(state.codes, targetCode)
    }

    resultFrom.innerHTML = renderResult(from)
    resultTo.innerHTML = renderResult(to)

    const baseValue = formatToCurrency(baseCode, state.amount)
    const targetValue = formatToCurrency(targetCode, result)

    rateConversion.innerText = `${baseValue} = ${targetValue}`
    
    formResults.classList.add('show')
}



export const handleSubmit = async (e) => {
    e?.preventDefault()

    const { url,amount, pair: {from, to} } = state // get from state 

    state.loading = true // lock button

    if(!amount || !from || !to) return

    try {
        const response = await fetch(`${url}/pair/${from}/${to}/${amount}`) // get JSON
        const data = await response.json() // convert to object

        if (data.result === success) insertResults(data)

        state.loading = false // unlock button
        console.log(data)
    } catch(err) {
        console.log(err)
    }
}

export const switchCurrencies = () => {
    const {pair: {to, from} } = state

    if (!to || !from) return

    state.pair = {
        to: from,
        from: to,
    }

    toSelect.value = from
    fromSelect.value = to
}