import React, { useState } from 'react';
import UrlFrontEnd from "../../models/UrlFrontEnd";


class MustLoggedInPage extends React.Component{
    constructor() {
        super();
    }

    redirectToLogin(){
        window.location.href = UrlFrontEnd + 'login/'
    }
    render() {
        const page =
            <div className="container-fluid" style={{ marginTop: '20%'}}>
                <div className="row mt-5 justify-content-center" >
                    <h6>
                        To access in this page, you must
                    </h6>
                </div>
                <div className="row mt-1 justify-content-center">
                    <input type="button" className="btn btn-primary col-4 pt-2 pb-2" value="Log In" onClick={this.redirectToLogin}/>
                </div>
                <div className="row mt-3 justify-content-center">
                    <h6>
                        Or create a <a href={UrlFrontEnd + 'register/'}> new account </a>
                    </h6>
                </div>
            </div>
    return (page);
    }
}

export default MustLoggedInPage;
