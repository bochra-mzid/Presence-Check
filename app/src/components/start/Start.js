import React from 'react'
import { Link} from 'react-router-dom'
import './start.css' 
function Start() {
    return (
        <div >
            <div className="page1">
                <h1 className="text" >
                    Click here to start the presence check
                </h1>
                <Link to={`/Appel/`}>
                    <button variant="primary" size="lg" className="btn-com">
                        Start
                    </button>
                </Link>
            </div>
        </div>
    )
};

export default Start