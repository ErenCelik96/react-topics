import React from 'react'
import '../App.css';
import { useFormik } from 'formik';
//formik bize hazir fonksiyonlar verir handleChange gibi
import { Formik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    name:"",
    email:"",
    userName:"",
}

const onSubmit = (values) => {
    console.log("Values", values);
}

////////// YUP İLE (npm install yup) 
const validationSchema=Yup.object({
    name:Yup.string() //içerik string olsun
    .max(15,"Must be 15 characters or less") //15 karakter sınırı olsun aşarsa o hata mesajını versin
    .required("Required.Enter name"),//zorunlu giriş olsun ve bu mesajı versin
    userName:Yup.string() 
    .max(15,"Must be 15 characters or less")
    .required("Required.Enter username"),
    email:Yup.string()
    .email("Invalid email address") //regex içinde gömülü kendisi kontrol edecek
    .required("Required. Enter email address")
})

function SimpleRegister() {

    //HOOK OLARAK
    // const formik=useFormik({
    //     initialValues,
    //     onSubmit,
    //     validationSchema

        // validate: values => {
        //     let errors = {}
        //     if (!values.name){ //input içi boş ise
        //         errors.name="Required.Please fill this area." //hata mesajı
        //     }
        //     if (!values.email){ 
        //         errors.email="Required.Please fill this area."
        //     }
        //     else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        //         // A-Z0-9=a dan z ye kadar harf 0-9 sayı aralığı kullanabilir, 
        //         //+@[A-Z0-9.-]=devamında @ sonrasında a dan z ye kadar harf 0-9 sayı aralığı kullanabilir, 
        //         //+\.[A-Z]{2,4} = devamında . dan sonra a dan z ye kadar 2-4 arası harf kullanabilir
        //         errors.email = 'Invalid email address';}
        //     if (!values.userName){ 
        //         errors.userName="Required.Please fill this area." 
        //     }
        //     return errors
        // }
    // })
    return (

        <div className="container">
           
            <h1>Simple Form</h1>
            
            <form className="formStyle"  onSubmit={formik.handleSubmit}> {/*formik in verdiği handleSubmit sayesinde forma girilen bilgileri submit edip kaydettik*/}
                <label  htmlFor="name">Name</label>
                <input type="text" id="name" name="name" 
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}></input> 
                {formik.touched.name && formik.errors.name ? <div className="errorStyle">{formik.errors.name}</div>:null}
                {/*formik in verdiği handleChange sayesinde forma girilen bilgileri geçici olarak kaydettik, submit etmemiz gerekiyor*/} 
                {/*touch sayesinde inputa tıklayıp çektiğimizde tepki verir*/}

                <label  htmlFor="email">Email</label>
                <input type="text" id="email" name="email" 
                onChange={formik.handleChange} 
                value={formik.values.email}
                onBlur={formik.handleBlur}></input>
                {formik.touched.email && formik.errors.email ? <div className="errorStyle">{formik.errors.email}</div>:null}

                <label htmlFor="userName">User name</label>
                <input type="text" id="userName" name="userName" 
                onChange={formik.handleChange} 
                value={formik.values.userName}
                onBlur={formik.handleBlur}></input>
                {formik.touched.userName && formik.errors.userName ? <div className="errorStyle">{formik.errors.userName}</div>:null}

                <button>Submit</button>
            </form>
        </div>
    )
}

export default SimpleRegister

