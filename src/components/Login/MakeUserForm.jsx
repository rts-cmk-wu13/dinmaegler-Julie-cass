import React from "react";

function MakeUserForm() {
    return (
        <>
        <div className="makeuser-form">
            <form action="">
                <div className="fieldMU">
                    <label>Fulde navm</label>
                    <input className="makeuser-email-box" type="name" placeholder="Fulde navn" />
                </div>

                <div className="fieldMU">
                    <label>Email adresse</label>
                    <input className="makeuser-email-box" type="email" placeholder="Email adresse" />
                </div>
                <div className="fieldMU">
                    <label>Password</label>
                    <input className="makeuser-password-box" type="text" placeholder="Password" />

                </div>
                <div className="fieldMU">
                    <label>Bekrøft password</label>
                    <input className="makeuser-password-box" type="text" placeholder="Password" />
                </div>
                <button type="submit" className="submit-makeuser-btn">Opret bruger</button>
            </form>
            </div>
        </>
    )
} export default MakeUserForm