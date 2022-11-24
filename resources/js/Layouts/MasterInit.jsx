import master from "@/master"
import { usePage } from "@inertiajs/inertia-react"
import { useEffect } from "react"

export function MasterInit () {
    const page = usePage()
    const location = window.location

    useEffect(() => {
        setTimeout(() => master(), 500)
    }, [location])

    return <></>
}