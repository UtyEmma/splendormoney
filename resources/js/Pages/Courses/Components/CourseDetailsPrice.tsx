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
                    <h2>
                        <span style={{fontWeight: '600'}} className='fs-4 me-1'>NGN</span> 
                        <span style={{fontWeight: '600'}}>{ percentageDiff(course.price, course.discount || 0).toLocaleString()}</span>
                    </h2>
                    { course.discount && <p><span>NGN {course.price.toLocaleString()}</span> {course.discount}% off</p> }
                </>

                :

                <h2>FREE</h2>

            }
        </>
    )
}
