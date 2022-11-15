import { useParams } from '@/Hooks/useParams'
import MainLayout from '@/Layouts/MainLayout'
import { ICourse } from '@/Types/course'
import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/inertia-react'
import React, { ChangeEvent, useEffect } from 'react'
import { CourseCard } from './Components/CourseCard'

interface ICoursesProps {
    courses: ICourse[]
}

export default function Courses({courses}: ICoursesProps) {

    const {keyword} = useParams()

    const searchCourses = (e: ChangeEvent<HTMLInputElement>) => {
        const keyword = e.currentTarget.value
        Inertia.get(route('courses.list', {
            keyword: keyword
        }))
    }

    return (
        <MainLayout title='Courses' >
            <section className="course-content pt-4">
                <div className="breadcrumb-bar bg-transparent">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-12">
                            <div className="breadcrumb-list">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link href={route('pages.home')}>Home</Link></li>
                                    <li className="breadcrumb-item" aria-current="page">Courses</li>
                                </ol>
                                </nav>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="showing-list">
                                <div className="row">
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <div className="show-filter add-course-info w-100">
                                            <form action="#">
                                                <div className=" search-group w-75">
                                                    <i className="feather-search" />
                                                    <input type="text" defaultValue={keyword} onChange={searchCourses} name="search" className="w-100 form-control" placeholder="Search our courses" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="col-md-8 offset-md-4">
                                        <div className="form-group select-form mb-0">
                                            <select className="form-select select" id="sel1" name="sellist1">
                                                <option>Newly published </option>
                                                <option>published 1</option>
                                                <option>published 2</option>
                                                <option>published 3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                            {
                                courses.length > 0

                                ?

                                <>
                                    <div className="row">
                                        {courses.map(course => <CourseCard course={course} />)}
                                    </div>
                                </>

                                :

                                <div>
                                    
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}
