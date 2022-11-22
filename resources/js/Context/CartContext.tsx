import React, { createContext, useContext, useEffect, useState } from 'react'
import { ICourse } from '@/Types/course'
import { percentageDiff } from '@/Utils/Math'

export interface ICart {
    add: (course: ICourse) => void,
    remove : (id: string) => void,
    courses: any[],
    amount: number,
    reset: Function
}

const cart_id = 'splendor_money_cart'

export const Context = createContext<ICart | null>(null)

export const CartContext = ({children} : any) => {

    const [courses, setCourses] = useState<ICourse[]>([])
    const [amount, setAmount] = useState<number>(0)

    const add = (course: ICourse) => {
        const exists = courses.find(item => item.id === course.id)
        if(exists) return true
        setCourses([...courses, course])
    }

    const remove = (course_id: string) => setCourses([...courses.filter(course => course.id !== course_id)])

    const calculatePrice = () => {
        if(!courses.length) return setAmount(0)
        const sum = courses.reduce((currentVal, course) => currentVal + percentageDiff(course.price, course.discount), 0)
        return setAmount(sum)
    }

    const store = () => {
        localStorage.setItem(cart_id, JSON.stringify(courses))
    }


    const get = () => {
        const courses = localStorage.getItem(cart_id) || JSON.stringify([])
        setCourses(JSON.parse(courses))
    }

    const reset = () => {
        setCourses([])
    }

    useEffect(() => {
        get()
    }, [])

    useEffect(() => {
        calculatePrice()
        store()
    }, [courses])

    return (
        <Context.Provider value={{amount, courses, add, remove, reset}} >
            {children}
        </Context.Provider>
    )
}
