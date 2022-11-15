export function debounce(func: any, timeout = 300){
    let timer: any;
    return (...args: any[]) => {
      clearTimeout(timer);
    //   @ts-ignore
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }