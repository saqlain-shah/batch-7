import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Button, TextField } from '@mui/material';
import * as yup from "yup";
const validationSchema=yup.object({
  name:yup.string().required("Name is required"),
});


export default function FormikAndYup() {
  return (
<>

<Formik
validationSchema={validationSchema}
initialvalues={{
    name:'',
    email:'',
    password:'',
}}
onSubmit={(values)=>{
    console.log(values);

}}
>
<Form >
    <Field as={TextField}
    placeholder="Name"
  
    >
    </Field>
    <br></br>
    <ErrorMessage name='name'></ErrorMessage>
    <br></br>
    <Button > submit</Button>
</Form>

</Formik>


</>
  )
}
