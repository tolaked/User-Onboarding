import React, { useState, useEffect } from "react";
import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";
import Form from "./Component/Form";

const initialOnboardForm = {
  name: "",
  email: "",
  password: ""
};

function App() {
  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is a required field."),
    email: yup.number().required("Email is a required field"),
    password: yup.string().required("password is a required field")
  });

  return (
    <div className="App">
      <Formik>
        <Form validation={validationSchema} />
      </Formik>
    </div>
  );
}

export default App;
