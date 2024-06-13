import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom";

function BackButton () {
    const navigate=useNavigate();
    return (
        <div className="backButton">
            <button aria-label="back button" onClick={()=>navigate(-1)}>
                <FontAwesomeIcon icon={faCircleArrowLeft} />
            </button>
        </div>
    )
}
export default BackButton;