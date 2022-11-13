export default class Form {
    static entries <P> (form : HTMLFormElement) {
        return Object.fromEntries(new FormData(form).entries()) as P 
    }

    static value(input : HTMLInputElement) {
        if(input.type === 'checkbox') return  input.checked
        if(input.type === 'file') return input.files!.length < 2 ? input.files![0] : input.files 
        return input.value
    }
}