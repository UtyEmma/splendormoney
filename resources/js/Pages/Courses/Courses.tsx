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
            <div className="breadcrumb-bar">
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

            <section className="course-content">
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
                    <div className="row">
                        {
                            courses.map(course => <CourseCard course={course} />)
                        }
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <ul className="pagination lms-page">
                            <li className="page-item prev">
                            <a className="page-link" href="javascript:void(0)" tabIndex={-1}><i className="fas fa-angle-left" /></a>
                            </li>
                            <li className="page-item first-page active">
                            <a className="page-link" href="javascript:void(0)">1</a>
                            </li>
                            <li className="page-item">
                            <a className="page-link" href="javascript:void(0)">2</a>
                            </li>
                            <li className="page-item">
                            <a className="page-link" href="javascript:void(0)">3</a>
                            </li>
                            <li className="page-item">
                            <a className="page-link" href="javascript:void(0)">4</a>
                            </li>
                            <li className="page-item">
                            <a className="page-link" href="javascript:void(0)">5</a>
                            </li>
                            <li className="page-item next">
                            <a className="page-link" href="javascript:void(0)"><i className="fas fa-angle-right" /></a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </MainLayout>
    )
}
