import React, { useState } from 'react';
import UrlFrontEnd from "../../models/UrlFrontEnd";
import UrlBackEnd from "../../models/UrlBackEnd";
import axios from "axios";

class Login extends React.Component{

    constructor() {
        super();
        this.state = {
            errorMessage: '',
            data: []
        }

        this.submission = this.submission.bind(this);

    }
    componentDidMount() {
        document.title = 'Login';
        const token = localStorage.getItem('GoVersus_token')

        if(token != null){
            localStorage.removeItem('GoVersus_token')
        }
    }

    submission (event) {
            event.preventDefault();

            let email =  document.getElementById('email').value;
            let password =  document.getElementById('password').value;

            axios.post(UrlBackEnd + 'login/', "email="+email+"&password="+password)
                .then(response => {
                    let result = response.data;

                    if(typeof(result) === 'string'){
                        this.setState({
                            errorMessage: result
                        })
                    }
                    else{
                        // giving token and redirecting
                        localStorage.setItem('GoVersus_token', result['token'])
                        window.location.href = UrlFrontEnd
                    }
                  })
                  .catch(error => {
                    this.setState({
                        errorMessage : 'Error while sending request : \n' + error.toString()
                    });
                  });


    }

    render() {
        const form =
            <div className="container-fluid">
                <div className="row mt-5 pt-5">
                    <div className="col-5 pt-5 text-center">

                        <img src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png" className="img-fluid w-50 mb-5" />
                        <h3>
                            Let 's be in contact
                        </h3>
                    </div>
                    <div className="col-5 ml-5">
                        <div className="login-box">
                            <div className="login-logo">
                                <b>Chat up</b>
                            </div>

                            <div className="card">
                                <div className="card-body login-card-body">
                                    <p className="login-box-msg">Sign in to start your session</p>
                                    <p id='error' className="login-box-msg text-danger">{ this.state.errorMessage }</p>

                                    <form action={UrlBackEnd + 'login/'} method="post" onSubmit={ this.submission } >
                                        <div className="input-group mb-3">
                                            <input name="email" type="email" id="email" className="form-control" placeholder="Email" />
                                                <div className="input-group-append">
                                                    <div className="input-group-text">
                                                        <span className="fas fa-envelope"></span>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input name="password" type="password" id="password" className="form-control" placeholder="Password" />
                                                <div className="input-group-append">
                                                    <div className="input-group-text">
                                                        <span className="fas fa-lock"></span>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="icheck-primary">
                                                    <input type="checkbox" id="remember" />
                                                        <label htmlFor="remember" className="ml-1">
                                                            Remember Me
                                                        </label>
                                                </div>
                                            </div>

                                            <div className="col-4">
                                                <input type="submit" className="btn btn-primary btn-block" value="Sign In" />
                                            </div>

                                        </div>
                                    </form>

                                    <div className="social-auth-links text-center mb-3">
                                        <p>- OR -</p>
                                        <a href="#" className="btn btn-block btn-primary">
                                            <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
                                        </a>
                                        <a href="#" className="btn btn-block btn-danger">
                                            <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
                                        </a>
                                    </div>

                                    <p className="mb-1">
                                        <a href="">I forgot my password</a>
                                    </p>
                                    <p className="mb-0">
                                        <a href={UrlFrontEnd + 'register/'} className="text-center">Register a new membership</a>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        return (form);
    }
}

export default Login;
