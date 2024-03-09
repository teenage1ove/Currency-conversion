import state from './state.js'
import variables from './variables.js'

const {success} = variables

export const handleChange = ({target: {value,name}}) => {
    state.pair = {
        ...state.pair,
        [name]: value
    }
}

export const handleInput = ({target: {value, name}}) => {
    state[name] = Number(value)
}

const insertResults = ({base_code: baseCode, target_code: targetCode, conversion_rate: rate, conversion_result: result, time_last_update_utc: time}) => {
    
} // rename base_code to baseCode 

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