import React from "react";


function InstaLink() {
    return (
        <>
            <div className="insta-grid ">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div className="insta-images" key={i}>
                        <img src={`https://picsum.photos/150?random=${i + 1}`} alt="" />
                    </div>
                ))}
            </div>
        </>
    )
}

export default InstaLink;