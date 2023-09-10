import React from "react";

const PersonalTestimonial = ({ testimonial, userImage, userName, userProfession }) => {
    return (
        <div className="flex flex-col gap-4 w-80 border rounded-lg px-6 py-10 font-WorkSans">
            <p>
                {testimonial}
            </p>
            <div className="flex flex-row items-center gap-2">
                <img src={userImage} className="h-12 w-12 object-cover rounded-full" alt="personal" />
                <div className="flex flex-col">
                    <h2 className="font-semibold">{userName}</h2>
                    <h3>{userProfession}</h3>
                </div>
            </div>
        </div>
    );
};

export default PersonalTestimonial;