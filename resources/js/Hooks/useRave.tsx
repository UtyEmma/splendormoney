import { useEffect } from "react"

const src = 'https://checkout.flutterwave.com/v3.js';

const raveScript = {
    src: ""
}

export const useRave = ()  => {
    const onScriptLoad = (): void => {};

    const onScriptError = (): void => {
        raveScript.src = ""
    }

    useEffect(() => {
        if(raveScript.src !== src) {
            raveScript.src = src;

            const script = document.createElement('script');
            script.src = src;
            script.async = true;

            script.addEventListener('load', onScriptLoad);
            script.addEventListener('complete', onScriptLoad);
            script.addEventListener('error', onScriptError);

            document.body.appendChild(script);

            return () => {
                script.removeEventListener('load', onScriptLoad);
                script.removeEventListener('error', onScriptError);
            };
        }
    }, [])
    
    const init = (config?: any, callback?: any, onClose?: any) => {
        // setTimeout(() => {
            if(raveScript.src) {                
                // @ts-ignore
                const flutterwave = window.FlutterwaveCheckout &&
                // @ts-ignore
                window.FlutterwaveCheckout({
                    ...config, 
                    callback: async (payment: any) => {
                        await callback(payment)
                        flutterwave.close()
                    }, 
                    onClose
                })
            }
        // }, 300)
    }

    return {init}
}