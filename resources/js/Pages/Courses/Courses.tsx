import { Pagination } from '@/Components/Pagination/Pagination'
import { useParams } from '@/Hooks/useParams'
import MainLayout from '@/Layouts/MainLayout'
import { IPagination } from '@/Types/app'
import { ICategory } from '@/Types/category'
import { ICourse } from '@/Types/course'
import Form from '@/Utils/Form'
import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/inertia-react'
import React, { ChangeEvent, useEffect } from 'react'
import { CourseCard } from './Components/CourseCard'

interface ICoursesProps {
    courses: IPagination<ICourse[]>,
    categories: ICategory[]
}

export default function Courses({courses, categories}: ICoursesProps) {

    const params = useParams()

    const searchCourses = (e: ChangeEvent<HTMLFormElement>) => {
        Inertia.get(route('courses.list', Form.entries(e.currentTarget)))
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
                            <form onChange={searchCourses}>
                                <div className="row">
                                    <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <div className="show-filter add-course-info w-100">
                                                    <div className=" search-group w-75">
                                                        <i className="feather-search" />
                                                        <input type="text" defaultValue={params.keyword}  name="keyword" className="w-100 form-control" placeholder="Search our courses" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="col-md-8 offset-md-4">
                                                <div className="form-group select-form mb-0">
                                                    <select name="category"  className="form-select " id="sel1" >
                                                        <option value={''}>Select Category</option>
                                                        {categories.map(category => <option selected={params.category === category.slug} value={category.slug}>{category.name}</option>)}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            {
                                courses.total > 0

                                ?

                                <>
                                    <div className="row">
                                        {
                                            courses.data.map(course => (
                                                    <div className="col-lg-4 col-md-6 d-flex">
                                                        <CourseCard course={course} />
                                                    </div>
                                                )
                                            )
                                        }
                                    </div>
                                </>

                                :

                                <div>
                                    
                                </div>
                            }
                        </div>
                    </div>
                    <Pagination pagination={courses} />
                </div>
            </section>
        </MainLayout>
    )
}
