// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";

const AdminFooter = () => {

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const homeButtonClicked = () => navigate("/admin");
    
    let homeButton = null;
    if (pathname !== "/admin") {
        homeButton = (
            <button 
                className="admin-footer__button icon-button"
                title="Home"
                onClick={homeButtonClicked}
            >
                <FontAwesomeIcon icon={faHouse} />
            </button>
        )

    }

    const content = (
        <footer className="admin-footer">
            {homeButton}
            <p>Current User:</p>
            <p>Status:</p>
        </footer>
    );

    return content;
}

export default AdminFooter;