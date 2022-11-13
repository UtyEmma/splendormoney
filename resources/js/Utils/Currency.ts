
class Currency {

    static formatter (currency: string, locale: string){
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency,
            maximumFractionDigits: 0
        })
    }
    
    static format(currency: string, amount: number, locale = 'en-US') {
        return this.formatter(currency, locale).format(amount)
    }

    static naira = "&#x20A6;"
    

}

export default Currency;