import React from 'react'
import axios from 'axios';

 const baseURL = "http://127.0.0.1:5000/login"

const AxiosRequest = ({ formData, on_sucess, on_failure }) => {
  console.log("request...................")
  axios.post(baseURL, formData)
     .then(response => {
        on_sucess(response)
     })
     .catch(error => {
        on_failure(error)
    });
}

export { AxiosRequest }


