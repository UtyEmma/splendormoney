export function percentageDiff (num: number, percent?: number){
    if(percent) return num - (num * (percent / 100))
    return num
}