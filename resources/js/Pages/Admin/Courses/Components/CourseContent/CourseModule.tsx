import { Swal } from '@/Components/SweetAlert/Swal'
import { Disclose } from '@/Components/Toggle/Disclose'
import { IModule } from '@/Types/course'
import React, { useState } from 'react'
import { CourseLecture } from './CourseLecture'
import { NewLecture } from './NewLecture'

interface ICourseModuleProps {
    module: IModule
    index: number
}

export const CourseModule = ({module, index} : ICourseModuleProps) => {

    const [showNew, setShowNew] = useState(module.lectures.length < 1)

    const deleteModule = () => {

    }
    
    return (
        <div className="bg-light rounded-3 mb-4 py-0 px-4">
            <div className="d-flex justify-content-between align-items-center py-3" >
                <a style={{fontWeight: '500'}} className='mb-0 fs-5 fw-medium text-black' data-bs-toggle="collapse" href={"#collapseOne-"+index}>Section {index}: {module.title}</a>

                <div className='d-flex align-items-center gap-3'>
                    <a onClick={() => setShowNew(true)} data-bs-toggle="collapse" href={"#collapseOne-"+index} className="btn btn-primary">Add Lecture</a>

                    <div className='d-flex gap-3'>
                        <Swal element={'span'} onSuccess={deleteModule} text="Are you sure you wish to delete this module and its contents?" status='warning' className='btn-sm btn btn-danger btn-icon'>
                            <i className='feather-trash'></i>
                        </Swal>
                        <a data-bs-toggle="collapse" href={"#collapseOne-"+index} className="btn btn-sm btn-icon btn-light">
                            <span className="feather-chevron-down fs-4"></span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="curriculum-info collapse pb-3" id={"collapseOne-"+index} data-bs-parent={"#module-accordion"}>
                <div id={"lecture-accordion"}>
                    {
                        module?.lectures?.map((lecture, i) => <CourseLecture lecture={lecture} index={i + 1} module_no={index} />)
                    }
                </div>
                
                <Disclose show={showNew} >
                    <NewLecture module={module} setShowNew={setShowNew} />
                </Disclose>
            </div>
        </div>
    )
}
