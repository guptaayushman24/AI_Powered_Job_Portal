import { React, useState } from "react"
import './Profile_Page.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faUser, faCalendar, faEye, faPen } from '@fortawesome/free-solid-svg-icons';

function Profile_Page() {
    const [open, setopen] = useState(false);
    const [skillsarray, setskillsarray] = useState(new Set());
    const [skills, setskills] = useState();

    function openinputtext() {
        setopen(!open);
        // setskills.add(skills);
        skillsarray.add(skills);
        setskillsarray(skillsarray);
        console.log("The type is",typeof(skillsarray));
    }
    return (
        <>
            <div className="pp-parent">
                <div className="pp-heading">
                    Compete Your profile to proceed further
                </div>

                {/* First Card*/}
                <div className="pp-careerpreference">
                    <div className="pp-careerpreference-skill">
                        Add your skills
                        <div className="pen-icon"><FontAwesomeIcon icon={faPen} onClick={openinputtext}></FontAwesomeIcon>
                            {
                                open && (
                                    <input type="text" className="inputstyle" onChange={(e) => setskills(e.target.value)}></input>
                                )
                            }
                        </div>
                    </div>
                    <div className="user-skills">
                        {
                            !open && (
                                <div className="skills-div">
                                    {Array.from(skillsarray).map((skill, index) => (
                                        <div style={{marginInline:'0.5rem'}} key={index}>{skill}</div>
                                    ))}
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="profile-page-emailaddress">
                    Email Address
                    <input placeholder="Enter your email address"></input>
                </div>

                <div className="profile-page-submitprofile">
                    <button>Submit Profile</button>
                </div>
            </div>
        </>
    )
}
export default Profile_Page;