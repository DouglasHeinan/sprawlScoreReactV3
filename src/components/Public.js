import { Link } from "react-router-dom";

// import React from 'react'

const Public = () => {
    const content = (
        <section>
            <header>
                <h1>Welcome to Sprawlopolis Score Sheet</h1>
            </header>
            <main>
                <p>Record and save results of any game from the -Opolis family of games.</p>
            </main>
            <footer>
                <Link to="./login">User Login</Link>
            </footer>
        </section>
    );

    return content;
}

export default Public