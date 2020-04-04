import React from 'react';

import { useFormik } from 'formik';

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

    return errors
};

export default function RegistrationForm({setFormType}) {
    //const [formType, setFormType] = useState('registration');

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
                      id="name"
                      name="name"
                      value={formik.values.name}
                      required/>
                  {errors.name && touched.name ?( <div className='authorization__error'>{errors.name}</div>) : null}
                  <label className='authorization__label' htmlFor="name">Your name</label>
              </p>
              <p className='authorization__row'>
                  <input
                      className='authorization__input input'
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="email"
                      id="email"
                      name="email"
                      value={formik.values.email}
                      required/>
                  {errors.email && touched.email ?( <div className='authorization__error'>{errors.email}</div>) : null}
                  <label className='authorization__label' htmlFor="email">E-mail</label>
              </p>
              <p className='authorization__row'>
                  <input
                      className='authorization__input input'
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="tel"
                      id="tel"
                      name="tel"
                      value={formik.values.phone}
                      required/>
                  {errors.phone && touched.phone ?( <div className='authorization__error'>{errors.phone}</div>) : null}
                  <label className='authorization__label' htmlFor="tel">Phone</label>
              </p>
              <p>
                  <input
                      className='authorization__checkbox visually-hidden checkbox'
                      type="checkbox"
                      value="agree"
                      name="accept"
                      id="accept"
                      required/>
                  <label className='authorization__accept-text' htmlFor="accept">I accept the terms of the offer of <a  className='authorization__link' href='https://ibb.co/k4njN8P'>the privacy
                      policy</a></label>
              </p>
              <button
                  className={btnClassNames}
                  disabled={isSubmitting}
                  type='submit'>
                  Registration
              </button>
          </form>
          <button
              className='authorization__sing-in btn btn--colored'
              onClick={() => setFormType('authorization')}
              type="button">
              Sing in
          </button>
      </div>
  );
}