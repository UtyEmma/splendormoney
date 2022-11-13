import { ICourse } from "@/Types/course";
import React, { createContext, PropsWithChildren, useContext, useState } from "react";

interface ICourseContext {
    course: ICourse | null,
    setCourse: React.Dispatch<React.SetStateAction<ICourse | null>>
}

const defaultContext = {
    course: null,
    setCourse: () => {}
}

const CourseContext = createContext<ICourseContext>(defaultContext)

export const useCourse = () => useContext(CourseContext)

interface ICourseProviderProps extends PropsWithChildren {
    defaultCourse?: ICourse
}


export const CourseProvider = ({children, defaultCourse} : ICourseProviderProps ) => {
    
    const [course, setCourse] = useState<ICourse|null>(defaultCourse || null)

    return (
        <CourseContext.Provider  value={{course, setCourse}}>
            {children}
        </CourseContext.Provider>
    )
}