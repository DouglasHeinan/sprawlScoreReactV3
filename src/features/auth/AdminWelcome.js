import { Link } from "react-router-dom"


const AdminWelcome = () => {
    const date = new Date()
    const today = new Intl.DateTimeFormat(
        "en-US", {
            dateStyle: "full", 
            timeStyle: "long"
        }
    ).format(date);

    const content = (

        <section>

            <p>{today}</p>

            <h1>Welcome Admin!</h1>

            <p><Link to="/admin/users">All Users</Link></p>

            {/* <p><Link to="/dash/users">Users</Link></p> */}
        </section>
    );

    return content;
}

export default AdminWelcome