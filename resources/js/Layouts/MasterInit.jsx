import master from "@/master"
import { useEffect } from "react"

export function MasterInit () {
    useEffect(() => {
        setTimeout(() => master(), 500)
    }, [])

    return <></>
}