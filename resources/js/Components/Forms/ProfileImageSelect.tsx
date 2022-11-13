import React from 'react'

export const ProfileImageSelect = () => {
    return (
        <div className="course-group mb-0 d-flex">
            <div className="course-group-img d-flex align-items-center">
                <a href="instructor-profile.html"><img src="/assets/img/user/user11.jpg" alt="" className="img-fluid" /></a>
                <div className="course-name">
                <h4><a href="instructor-profile.html">Your avatar</a></h4>
                <p>PNG or JPG no bigger than 800px wide and tall.</p>
                </div>
            </div>
            <div className="profile-share d-flex align-items-center justify-content-center">
                <label className="btn btn-success">
                    <input type="file" name="avatar" accept='image/*' hidden />
                    Update
                </label>
                <a href="javascript:;" className="btn btn-danger">Delete</a>
            </div>
        </div>
    )
}
