import React from 'react';
import './BodyText.css';

function BodyText() {
    return (
        <div>
            <div className = 'container-fluid'>
                <div className = 'row'>
                    <div className = "Col md={12} mdPull={12} xs={12} xsHidden md={12} xsOffset={12} mdPush={12}">
                        <div className = 'text-header'>
                            <h2>MERDEON BEAUTY</h2>
                        </div>
                        <div className = 'text-body'>
                            <p id = 'text'>
                                 At MERDEON, we put the safistfaction of our client at heart. We offer all forms and
                                types of beauty therapyst.
                            </p>
                            <p id = 'text'>
                            Welcome! Our shops are opened to server you. Freel free and comfortable to run into any
                                of our branch and get yourself satisfied like you've never been.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyText
