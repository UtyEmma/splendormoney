import { ICourse } from "./course";
import { IStudent } from "./user";

export interface IEnrollment {
    student: IStudent
    course: ICourse
    created_at: string
    updated_at: string
}