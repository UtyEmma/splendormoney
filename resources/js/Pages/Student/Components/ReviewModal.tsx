import { Button } from '@/Components/Buttons/Button'
import { InputError } from '@/Components/Forms/InputError'
import Modal from '@/Components/Modals/Modal'
import { RatingInput } from '@/Components/Rating/Rating'
import { ICourse } from '@/Types/course'
import { useForm } from '@inertiajs/inertia-react'
import React, { FormEvent, PropsWithChildren, useEffect } from 'react'

interface IReviewModalProps extends PropsWithChildren {
    course: ICourse
    review: any
}

export const ReviewModal = ({children, course, review} : IReviewModalProps ) => {

    const {data, setData, processing, errors, post, put} = useForm({
        course_id: course.id,
        rating: review.rating,
        review: review.review || ''
    })

    const handleChange = (e: FormEvent<any>) => {
        setData(e.currentTarget.name, e.currentTarget.value)
    }

    const submitReview = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()


        if(review) {
            put(route('reviews.update', {
                review: review.id
            }))
        }else{
            post(route('reviews.store', {
                course: course.id
            }))
        }
    }

    return (
        <>  
            <Modal.Button id='review-modal' as={'button'} type={'button'} className=''>{children}</Modal.Button>
        
            <Modal id='review-modal'>
                <form onSubmit={submitReview}>
                    <div className="form-group">
                        <label htmlFor="" className="form-label">Select Rating</label>
                        <RatingInput name='rating' defaultValue={data.rating || 1} onChange={(val) => setData('rating', val)} />
                        <InputError message={errors.rating} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="form-label">Write a Review</label>
                        <textarea rows={4} className="form-control" name='review' onChange={handleChange} placeholder="Your Review" >{data.review}</textarea>
                        <InputError message={errors.review} />
                    </div>
                    <div className="submit-section mt-3">
                        <Button loading={processing} className="btn btn-primary float-right" type="submit">Submit Review</Button>
                    </div>
                </form>
            </Modal>
        </>
    )
}
