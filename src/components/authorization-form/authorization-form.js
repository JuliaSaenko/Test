import React from "react";
import {useFormik} from "formik";

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors['name'] = 'Name is required'
    } else if (
        !/[A-Z][a-zA-Z][^#&<>"~;$^%{}?]{1,20}$/.test(values.name)
    ) {
        errors['name'] = 'Invalid name params';
    }
    if (!values.email) {
        errors['email'] = 'Please enter email'
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors['email'] = 'Invalid email address';
    }
    if (!values.phone) {
        errors['phone'] = 'Please enter phone number'
    } else if (!/^[(]{?}[0-9]{1,4}[)]{?}[-\s./0-9]*$/.test(values.phone)) {
        errors['phone'] = 'Enter phone in format (000)-000-00-00';
    }
    if (!values.userName) {
        errors['userName'] = 'Please enter username'
    } else if (!/^[a-z0-9_-]{3,16}$/.test(values.userName)) {
        errors['userName'] = 'Enter correct username';
    }
    if (!values.password) {
        errors['password'] = 'Please enter password';
    }
    return errors
};

export default function AuthorizationForm({setFormType}) {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            userName: '',
            password: '',
        },
        validate,
        validateOnBlur: true,
        //onSubmit
    });

    const { isSubmitting, errors, touched } = formik;

    const btnClassNames = isSubmitting ? 'authorization__btn btn btn--wide btn--disabled' : 'authorization__btn btn btn--wide';

  return (
      <div className='authorization__wrapper'>
          <form
              className='authorization__form'
              onSubmit={formik.handleSubmit}>
              <p className='authorization__row'>
                  <input
                      className='authorization__input input'
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="text"
                      id="userName"
                      name="userName"
                      value={formik.values.userName}
                      required/>
                  {errors.userName && touched.userName ?( <div className='authorization__error'>{errors.userName}</div>) : null}
                  <label className='authorization__label' htmlFor="userName">Username</label>
              </p>
              <p className='authorization__row'>
                  <input
                      className='authorization__input input'
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="password"
                      id="password"
                      name="password"
                      value={formik.values.password}
                      required/>
                  {errors.password && touched.password ?( <div className='authorization__error'>{errors.password}</div>) : null}
                  <label className='authorization__label' htmlFor="password">Password</label>
              </p>
              <button
                  className={btnClassNames}
                  disabled={isSubmitting}
                  type='submit'>
                  Sing in
              </button>
          </form>
          <button
              className='authorization__sing-in btn btn--colored'
              onClick={() => setFormType('registration')}
              type="button">
              Registration
          </button>
      </div>

  )
}