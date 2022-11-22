import { Notify } from "notiflix";

export class Navigator {

    static share(url: string){
        navigator.share({url})
    }

    static copy(text: string){
        navigator.clipboard.writeText(text);
        Notify.success('Copied To Clipboard')
    }
}