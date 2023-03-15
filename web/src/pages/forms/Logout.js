import React, { useState } from 'react';
import UrlFrontEnd from "../../models/UrlFrontEnd";
import UrlBackEnd from "../../models/UrlBackEnd";
import axios from "axios";
import MustLoggedInPage from "../statics/MustLoggedInPage";
import Messages from "../onglets/messages/Messages";

function Login ()
    {
        const token = localStorage.getItem('GoVersus_token')

        if(token == null){
            window.location.href = UrlFrontEnd + 'login/'

        } else {
             localStorage.removeItem('GoVersus_token')
            // sending request
            axios.get(UrlBackEnd + 'logout/'+ token, {})
                .then(response => {
                        window.location.href = UrlFrontEnd + 'login/'

                  })
                  .catch(error => {
                      alert(error.toString())
                  });
        }
}

export default Login;
