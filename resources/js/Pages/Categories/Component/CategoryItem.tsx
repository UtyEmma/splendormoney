import { ICategory } from '@/Types/category'
import pluralize from 'pluralize'
import React from 'react'

export const CategoryItem = ({category} : {category: ICategory}) => {
    return (
        <div className="feature-box text-center ">
            <div className="feature-bg">
                <div className="feature-header">
                <div className="feature-icon">
                    <img src={category.image} alt="" />
                </div>
                <div className="feature-cont">
                    <div className="feature-text">{category.name}</div>
                </div>
                </div>
                <p>{category.courses.length} {pluralize('Course', category.courses.length)}</p>
            </div>
        </div>
    )
}
