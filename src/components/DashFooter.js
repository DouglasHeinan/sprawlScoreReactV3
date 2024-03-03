// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";

const DashFooter = () => {

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const homeButtonClicked = () => navigate("/dash");
    
    let homeButton = null;
    if (pathname !== "/dash") {
        homeButton = (
            <button 
                className="dash-footer__button icon-button"
                title="Home"
                onClick={homeButtonClicked}
            >
                <FontAwesomeIcon icon={faHouse} />
            </button>
        )

    }

    const content = (
        <footer className="dash-footer">
            {homeButton}
            <p>Current User:</p>
            <p>Status:</p>
        </footer>
    );

    return content;
}

export default DashFooter;