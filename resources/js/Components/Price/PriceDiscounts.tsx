import { ICourse } from '@/Types/course';
import Currency from '@/Utils/Currency'
import { percentageDiff } from '@/Utils/Math'
import React from 'react'

export const PriceDiscount = ({course, showDiscount = true}: {course: ICourse, showDiscount?: boolean}) => {
    return (
        course.price

        ?

        <h3>&#x20A6; {percentageDiff(course.price, course.discount).toLocaleString()} {showDiscount && <span >&#x20A6; {course.price.toLocaleString()}</span>}</h3>
    
        :

        <h3 className='free-color'>FREE</h3>
    )
}
