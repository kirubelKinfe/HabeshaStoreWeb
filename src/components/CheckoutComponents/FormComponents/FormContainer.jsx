import { Form, ErrorMessage, Field, Formik } from 'formik'
import * as Yup from 'yup'
import FormControl from './FormControl'
import { arrays } from '../../../constants'
const FormContainer = () => {
  const initialValues = {
    name: '',
    phoneNumber: '',
    city: '',
    state: '',
    address: ''
  }
  const validationSchema = Yup.object({
    name: Yup.string().required("Fullname is required"),
    phoneNumber: Yup.number().required("Phone Number is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    address: Yup.string().required("Address is required"),
  })

  const onSubmit = values => console.log("Form data ", values)
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {
        formik => (
          <Form className='shipping_address'>
            <h1>Enter shipping address</h1>
            <FormControl control='input'type='text' label='Name' name='name' />
            <FormControl control='input'type='text' label='PhoneNumber' name='phoneNumber' />
            <FormControl control='select'type='Select a region' options={arrays.regions.sort()} label='Region' name='region' />
            <FormControl control='select'type='Select a city' options={arrays.cities.sort()} label='City' name='city' />
            <FormControl control='input'type='text' label='Address' name='address' />
            <button className='submit-btn' type="submit">Place Order</button>
         </Form> 
        )
      }
    </Formik>
  )
}

export default FormContainer