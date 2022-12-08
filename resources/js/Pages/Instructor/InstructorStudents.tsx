import { Pagination } from '@/Components/Pagination/Pagination'
import { useParams } from '@/Hooks/useParams'
import { InstructorLayout } from '@/Layouts/Instructor/InstructorLayout'
import { IPagination } from '@/Types/app'
import { IEnrollment } from '@/Types/enrollments'
import Form from '@/Utils/Form'
import { Inertia } from '@inertiajs/inertia'
import React, { FormEvent } from 'react'

interface InstructorStudentsProps {
    students: IPagination<IEnrollment[]>
}

export default function InstructorStudents({students}: InstructorStudentsProps) {
    
    const {keyword} = useParams()

    const searchUsers = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = Form.entries(e.currentTarget) as any
        Inertia.get(route('instructor.students', {
            keyword: data?.search
        }))
    }

    return (
        <InstructorLayout title='Students'>
            <div className="settings-widget">
                <div className="settings-inner-blk p-0">
                    <div className="comman-space">
                        <div className="settings-tickets-blk course-instruct-blk table-responsive">
                            <div className="d-flex justify-content-between py-4">
                                <form onSubmit={searchUsers}>
                                    <div className="input-group mb-3">
                                            <input type="text" defaultValue={keyword} name="search" className="form-control" placeholder="Search User's Name or Email Address" aria-label="Search User's Name or Email Address" aria-describedby="button-addon2" />
                                            <button className="btn btn-outline-secondary btn-icon btn-primary" type="submit" id="button-addon2">
                                                <i className="feather-search"></i>
                                            </button>
                                    </div>
                                </form>
                            </div>
                            <table className="table table-nowrap mb-0">
                                <thead>
                                    <tr>
                                        <th className='px-2'>Name</th>
                                        <th>Course Name</th>
                                    <th />
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        students.total > 0

                                        ?

                                        students.data.map(enrollment => (
                                            <tr>
                                                <td className="instruct-orders-info">
                                                    <p>{enrollment.student.name}</p>
                                                    <a href={`mailto:${enrollment.student.email}`} className='fs-6'>{enrollment.student.email}</a>
                                                </td>

                                                <td>{enrollment.course?.name}</td>
                                                {/* <td>{Date.toDateTimeString(enrollment.updated_at)}</td> */}
                                            </tr>
                                        ))

                                        :

                                        <tr>
                                            <td colSpan={8} className="text-center" >
                                                <div className='border p-4'>
                                                    <h3>Nothing to Display</h3>

                                                    <p>There are no Students available!</p>
                                                </div>
                                            </td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="d-flex justify-content-between border-t">
                            <div>

                            </div>

                            <div>
                                <Pagination pagination={students} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </InstructorLayout>
    )
}
