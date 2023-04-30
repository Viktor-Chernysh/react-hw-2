import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, number } from "yup";
import "./Form.module.css";

let contactSchema = object({
  name: string().min(2).required(),
  number: number().required().positive().integer(),
});

const initialValues = {
  name: "",
  number: "",
};

function ContactForm({ onSubmit }) {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form>
        <label htmlFor="name">
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" />
        </label>
        <label htmlFor="number">
          Number
          <Field type="text" name="number" minLength={2} />
          <ErrorMessage name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
export default ContactForm;
