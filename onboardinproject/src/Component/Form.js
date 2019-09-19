import React, { useState, useEffect } from "react";

function Form() {
  return (
    <div>
      <div>
        <label>
          Name
          <Field name="name" type="text" placeholder="Name" />
          <ErrorMessage name="name" component="div" />
        </label>
      </div>
      <div>
        <label>
          Email
          <Field name="Email" type="text" placeholder="Email" />
          <ErrorMessage name="age" component="div" />
        </label>
      </div>
      <div>
        <label>
          Password
          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="age" component="div" />
        </label>
      </div>
      <button type="submit">Submit</button>
    </div>
  );
}

export default Form;
