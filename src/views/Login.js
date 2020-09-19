import React from 'react'
import {useFormik, Formik} from 'formik'
import * as Yup from 'yup'

const Login = ()=>{
    const formik=useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            email:""
        },
        validationSchema: Yup.object({
            firstname:Yup.string()
            .max(10,'max is 10')
            .min(5,'min is 5 characters')
            .required("this field is required"),
            lastname:Yup.string()
            .max(10,'max is 10')
            .min(5,'min is 5 characters')
            .required("this field is required"),
            email:Yup.string()
            .email("the field should be a valid email")
            .required()

        }),
        onSubmit: values=>{
            console.log(values)
        }
    });

    return(
        <div className="w-full max-w-xs" style={{position:"relative",top:"0px",left:"40%"}}>
        <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Firstname:</label>
            <input type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="firstname"
            onBlur={formik.handleBlur}
            value={formik.values.firstname}
            onChange={formik.handleChange}
            />
            {formik.touched.firstname && formik.errors.firstname ? 
                <div className="text-red-500 text-xs italic">
                    {formik.errors.firstname}
                </div>
                :
                null
        
            }
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-1">Lastname:</label>
            <input type="text" name="lastname"
            className="shadow appearance-none border rounded w-full py-2 
            px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastname}
            />
            {formik.touched.lastname && formik.errors.lastname ?
                <div className="text-red-500 text-xs italic">{formik.errors.lastname}</div>
                :
                null
        
            }
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">email:</label>
            <input type="text" name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3
             text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            />
             {formik.touched.email && formik.errors.email ?
                <div className="text-red-500 text-xs italic">{formik.errors.email}</div>
                :
                null
        
            }
            </div>
            <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold
       py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>

        </form>
        </div>
    )
}
export default Login