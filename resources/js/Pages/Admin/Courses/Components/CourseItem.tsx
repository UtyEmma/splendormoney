import Naira from '@/Components/Currency/Naira'
import { Swal } from '@/Components/SweetAlert/Swal'
import { ICourse } from '@/Types/course'
import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import moment from "moment";
import Date from '@/Utils/Date'
import pluralize from 'pluralize'
interface ICourseItemProps {
    course: ICourse
}

export const CourseItem = ({course} : ICourseItemProps) => {

    const deleteCourse = () => {
        Inertia.delete(route('admin.courses.delete', {
            course: course.id
        }))
    }

    return (
        <tr>
            <td>
                <div className="sell-table-group d-flex align-items-center">
                <div className="sell-group-img overflow-hidden rounded-3">
                    <Link href={route('admin.courses.edit', {
                        course: course.slug
                    })}>
                        <img src={course.image} className="img-fluid" style={{objectFit: 'cover'}} alt="" />
                    </Link>
                </div>
                <div className="sell-tabel-info">
                    <p><Link href={route('admin.courses.edit', {
                        course: course.slug
                    })}>{course.name}</Link></p>
                    <div className="course-info d-flex align-items-center border-bottom-0 pb-0">
                        <div className="rating-img d-flex align-items-center">
                            <img src="/assets/img/icon/icon-01.svg" alt="" />
                            <p>{course.lectures_count} {pluralize('Lesson', course.lectures_count)}</p>
                        </div>
                        <div className="course-view d-flex align-items-center">
                            <img src="/assets/img/icon/timer-start.svg" alt="" />
                            <p>{Date.secondsToHms(course.course_duration!) }</p>
                        </div>
                    </div>
                </div>
                </div>
            </td>
            <td>{course.enrollments_count}</td>
            <td><Naira /> {course.transactions_sum_amount ? course.transactions_sum_amount.toLocaleString() : 0}</td>
            <td><span className="badge info-low">{course.status.toUpperCase()}</span></td>
            <td >
                <div className='d-flex gap-2'>
                    <Link href={route('admin.courses.edit', {
                        slug: course.slug
                    })} className='btn btn-primary btn-sm btn-icon'>
                        <span className='feather-edit-2'></span>
                    </Link>
                    <Swal element={'span'} status='warning' text='Are you sure you want to delete this Course?' onSuccess={deleteCourse} className='btn btn-danger btn-sm btn-icon'>
                        <span className='feather-trash-2'></span>
                    </Swal>
                </div>
            </td>
        </tr> 
    )
}
