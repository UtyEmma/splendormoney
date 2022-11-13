import { ILecture, IModule } from '@/Types/course'
import React from 'react'

interface ICourseModuleItemProps {
    module: IModule
    index: number
}

export const CourseModuleItem = ({module, index}: ICourseModuleItemProps) => {
    return (
        <div className="course-card">
            <h6 className="cou-title">
                <a className="collapsed" data-bs-toggle="collapse" data-bs-accordion={"#module-accordion"} href={"#collapseOne"+module.id} aria-expanded="false">{module.title}</a>
            </h6>

            <div id={"collapseOne"+module.id} className="card-collapse collapse" style={{}}>
                <ul>
                    {
                        module.lectures.map((lecture, i) => <ModuleLecture module_index={index} lecture={lecture} index={i + 1} />)
                    }
                </ul>
            </div>
        </div>
    )
}

interface IModuleLectureProps {
    lecture: ILecture
    index: number
    module_index: number
}

export const ModuleLecture = ({lecture, module_index, index}: IModuleLectureProps) => {
    return (
        <li>
            <p>
                <img src="assets/img/icon/play.svg" alt="" className="me-2" />Lecture {module_index}.{index} {lecture.title}</p>
            <div>
                <span>{lecture.duration}</span>
            </div>
        </li>
    )
}
