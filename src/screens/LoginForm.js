import * as yup from 'yup'

export const loginForm = yup.object().shape({
     email:yup.string().required("email is required").email("not valid email"),
     password:yup.string().required("password is required")
})