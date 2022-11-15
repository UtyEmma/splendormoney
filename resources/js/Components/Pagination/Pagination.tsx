import { IPagination } from '@/Types/app'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'

interface IPaginationProps <T> {
    pagination: IPagination<T>
}

export const Pagination = ({pagination} : IPaginationProps<unknown> ) => {
    return (
        pagination.total > 0

        ?

        <div className="row">
            <div className="col-md-12">
                <ul className="pagination lms-page">
                    {
                        pagination.links?.map(
                            (link, index) => (
                                <li className={`page-item ${link.active && "active"} ${index === 0 && 'prev'} ${index === (pagination.links.length - 1) && 'next'}`}>
                                    <Link className="page-link" href={link.url} >
                                        {index === 0 && <i className="fas fa-angle-left" />}
                                        {
                                            (index !== 0 && index !== (pagination.links.length - 1)) && link.label
                                        }
                                        {index === (pagination.links.length - 1) && <i className="fas fa-angle-right" />}
                                    </Link>
                                </li>
                            ) 
                            
                        )
                    }
                </ul>
            </div>
        </div>

        :

        <></>
    )
}
