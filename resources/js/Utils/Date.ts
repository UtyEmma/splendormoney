import moment, { Moment } from "moment";
import { InbuiltDate } from "./Declarations";

export default class Date {

    static toDateTimeString(date: string){
        return moment(date).format("Do MMM YYYY, LT")
    }
    
    static toDateString(date: string){
        return moment(date).format("Do MMM, YYYY")
    }

    static secondsToHms(d: number) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);

        var hDisplay = h > 0 ? h + (h == 1 ? " hr, " : " hrs, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " min, " : " mins, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " sec" : " secs") : "";
        return `${hDisplay} ${mDisplay} ${sDisplay}`; 
    }

}

