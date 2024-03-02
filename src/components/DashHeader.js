// import React from 'react'
import { Link } from "react-router-dom";

const DashHeader = () => {

    const content = (
        <header>
            <div>
                <Link to="/dash/record">
                    <h1>User Record</h1>
                </Link>
            </div>
            <nav>
                {/* nav btns to come */}
            </nav>
        </header>
    );
    
    return content;
}

export default DashHeader