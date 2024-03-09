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