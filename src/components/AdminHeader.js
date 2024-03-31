import { Link } from "react-router-dom";

const AdminHeader = () => {

    const content = (
        <header>
            <div>
                <Link to="/dash/record">
                    <h1>Admin Dash</h1>
                </Link>
            </div>
            <nav>
                {/* nav btns to come */}
            </nav>
        </header>
    );
    
    return content;
}

export default AdminHeader
