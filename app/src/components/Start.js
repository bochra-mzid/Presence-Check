import React from 'react'
import { Link} from 'react-router-dom'
import '../App.css';

function Start() {
    return (
        <body >
            <div className="page1">
                <h1 style={{ textAlign: "center",  color: "#e0ded2", marginBottom:"3%" }}>
                    Click here to start the presence check
                    </h1>
                <Link to={`/Appel/`}>
                    <button variant="primary" size="lg" className="btn-com">
                        Start
                    </button>
                </Link>
            </div>

        </body>
    )
};

export default Start