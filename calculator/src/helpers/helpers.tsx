const settings = require('../settings');

export type item = {
    label: string,
    value: string,
    price: number,
    exempt: boolean
}
export type job = {
    label: string,
    value: string,
    quantity: number,
    price: number,
    exempt: boolean
}
export const roundToEvenFixed = (n:number) => {
    const value = `${n}`.split('.')
        .map((item, index) => {
            if (index === 0) return item
            let num = item.slice(0, 2)
            if (!num[1]) num = num + '0'
            const fixed = Number(num)
            return Math.floor(fixed - fixed%2)
        })
        .join('.')
    return Number(value)
}

export const calcTax = (val:job) => {
    let amount = val.price;
    if (!val.exempt){
        amount = amount + val.price * (settings['sales-tax'] / 100)
    }
    const fixed = (val.quantity * amount).toFixed(2)
    return Number(fixed)
}