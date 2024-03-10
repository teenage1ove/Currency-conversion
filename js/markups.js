import { getFullTitle } from "./utils.js"
import state from "./state.js"

export const renderResult = ({code,amount,full}) => {
    return `
    <div class = "form__results-item-icon icon">
        <img src="imgs/arrow.svg" alt="">
    </div>
    <div class="form__results-item-titles">
        <div class="form__results-item-title">${code}</div>
        <div class="form__results-item-full">${full}</div>
    </div>

    <div class="form__results-item-value">${amount.toFixed(2)}</div>`
}

const getCurrencyItemAction = (isBase) => {
    const {actions: {remove, change}} = state
    const actionName = isBase ? change : remove

    return `<button data-action="${actionName}" class="currensy-${actionName} currency-button">${actionName}</button>`
}

export const renderCurrencyItem =({code, base_code: baseCode, rate = 1}) => {
    const isBase = code === baseCode
    const action = getCurrencyItemAction(isBase)
    const full = getFullTitle(state.codes, code)
    return `<div class="currency-item ${isBase ? "currency-current" : ""}" data-item="${code}">
                <div class="currency-titles">
                    <div class="currency-title">${code}</div>
                    <div class="currency-full">${full}</div>
                </div>

                <div class="currency-amount">${rate.toFixed(2)}</div>
                <div class="currency-action">
                    ${action}
                </div>
            </div>`
}