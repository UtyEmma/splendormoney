import { ICourse } from '@/Types/course'
import { percentageDiff } from '@/Utils/Math'
import React from 'react'

export const CourseDetailsPrice = ({course} : {course: ICourse}) => {
    return (
        <>
            {
                course.price

                ?

                <>
                    <h2><span className='fs-4'>NGN</span> { percentageDiff(course.price, course.discount || 0).toLocaleString()}</h2>
                    { course.discount && <p><span>NGN {course.price.toLocaleString()}</span> {course.discount}% off</p> }
                </>

                :

                <h2>FREE</h2>

            }
        </>
    )
}
