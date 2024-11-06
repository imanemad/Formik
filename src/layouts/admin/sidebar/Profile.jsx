import React from 'react';

const Profile = () => {
    return (
        <div className="pt-1 pb-2 d-flex flex-column avatar_li position-relative Item">
            <span className="avatar_box">
                <img className="" src="/images/avatar/profile.jpg" style={{width:"55px",height:"55px",objectFit:"cover",borderRadius:"100px"}} alt=''/>
            </span>
            <div className="sidebar_avatar_name text-center hiddenable ">ایمان عمادی</div>
        </div>
    );
}

export default Profile;
