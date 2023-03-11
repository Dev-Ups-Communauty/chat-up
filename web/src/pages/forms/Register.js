import React, { useState } from 'react';
import UrlBackEnd from "../../models/UrlBackEnd";
import UrlFrontEnd from "../../models/UrlFrontEnd";
import axios from "axios";

class Register extends React.Component{

    constructor() {
        super();
        this.state = {
            errorMessage: '',
            data: []
        }

        this.submission = this.submission.bind(this);

    }

    componentDidMount() {
        document.title = 'Register';
    }

    submission (event) {
            event.preventDefault();

            let password =  document.getElementById('password').value;
            let password2 =  document.getElementById('password2').value;
            let first_name =  document.getElementById('first_name').value;
            let last_name =  document.getElementById('last_name').value;
            let email =  document.getElementById('email').value;
            let birthday =  document.getElementById('birthday').value;
            let address =  document.getElementById('address').value;


            if(password !== password2){
                this.setState({
                    errorMessage: 'Two passwords did not match'
                })
            }
            else{
                axios.post(UrlBackEnd + 'register/',
                'first_name='+first_name+'&password='+password+'&last_name='+last_name+'&email='
                +email+'&birthday='+birthday+'&address='+address)

                .then(response => {
                    let result = response.data;
                    if(typeof(result) === 'string'){
                        this.setState({
                            errorMessage: result
                        })
                    }
                    else{
                        window.location.replace(UrlFrontEnd + 'login/');
                    }
                  })
                  .catch(error => {
                    this.setState({
                        errorMessage : 'Error while sending request : \n' + error.toString()
                    });
                  });
            }


    }
    render() {
        const form =
            <div className="container-fluid">
                <div className="row mt-5 mb-5 justify-content-center">
                    <div className="col-5">
                        <div className="register-box">
                            <div className="register-logo">
                                <b>GoVersus</b>
                            </div>

                            <div className="card">
                                <div className="card-body register-card-body">
                                    <p className="login-box-msg">Register as a new membership</p>

                                    <p className="login-box-msg text-danger">{this.state.errorMessage}</p>

                                    <form action={UrlBackEnd + 'register/'} method="post" onSubmit={this.submission}>
                                        <div className="input-group mb-3">
                                            <input id="first_name" type="text" className="form-control" placeholder="First name" required/>
                                                <div className="input-group-append">
                                                    <div className="input-group-text">
                                                        <span className="fas fa-user"></span>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input id="last_name" type="text" className="form-control" placeholder="Last name" required/>
                                                <div className="input-group-append">
                                                    <div className="input-group-text">
                                                        <span className="fas fa-user"></span>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input id="birthday" type="date" max="2020-12-31" className="form-control" placeholder="Birthday" required/>
                                                <div className="input-group-append">
                                                    <div className="input-group-text">
                                                        <span className="fas fa-calendar"></span>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input id="address" type="text" className="form-control" placeholder="Address" required/>
                                                <div className="input-group-append">
                                                    <div className="input-group-text">
                                                        <span className="fas fa-location-arrow"></span>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input id="email" type="email" className="form-control" placeholder="Email" required/>
                                                <div className="input-group-append">
                                                    <div className="input-group-text">
                                                        <span className="fas fa-envelope"></span>
                                                    </div>
                                                </div>
                                        </div>
                                        <br />
                                        <div className="input-group mb-3">
                                            <input name="password" id="password" type="password" className="form-control" placeholder="Password" required/>
                                                <div className="input-group-append">
                                                    <div className="input-group-text">
                                                        <span className="fas fa-lock"></span>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input id="password2" type="password" className="form-control"
                                                   placeholder="Retype password" required/>
                                                <div className="input-group-append">
                                                    <div className="input-group-text">
                                                        <span className="fas fa-lock"></span>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="icheck-primary">
                                                    <input type="checkbox" id="agreeTerms" name="terms" value="agree" required/>
                                                        <label htmlFor="agreeTerms" className="ml-1">
                                                             I agree to the <a href="#">terms</a>
                                                        </label>
                                                </div>
                                            </div>

                                            <div className="col-4">
                                                <button type="submit" onSubmit="submission()" className="btn btn-primary btn-block">Register
                                                </button>
                                            </div>

                                        </div>
                                    </form>

                                    <div className="social-auth-links text-center">
                                        <p>- OR -</p>
                                        <a href="#" className="btn btn-block btn-primary">
                                            <i className="fab fa-facebook mr-2"></i>
                                            Sign up using Facebook
                                        </a>
                                        <a href="#" className="btn btn-block btn-danger">
                                            <i className="fab fa-google-plus mr-2"></i>
                                            Sign up using Google+
                                        </a>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <a href={UrlFrontEnd + "login/"} className="text-center " >I already have a membership</a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        return (form);
    }
}

export default Register;
