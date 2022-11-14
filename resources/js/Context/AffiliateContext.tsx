import { useParams } from "@/Hooks/useParams";
import { createContext, useContext, useEffect, useState } from "react";

interface IAffiliateContext {
    getReferrer: Function,
    setReferrer: Function
}

const AffiliateContext = createContext<IAffiliateContext>({
    getReferrer: () => {},
    setReferrer: () => {}
})

export const useAffiliate = () => useContext(AffiliateContext)

export const AffiliateProvider = (children: any) => {

    const { ref } = useParams()

    const setReferrer = () => {
        localStorage.setItem('referrer', (ref || "") as string) 
    }

    const getReferrer = () => {
        return localStorage.getItem('referrer')
    }

    return (
        <AffiliateContext.Provider value={{setReferrer, getReferrer}} >
            {children}
        </AffiliateContext.Provider>
    )
}