import { ErrorMessage, Field, Form, Formik } from "formik";
import { addProfileSchema } from "../../utils/schemas";
import styles from "./ContactsForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addProfileSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          <span>Name: </span>
          <Field
            type="text"
            name="name"
            className={styles.input}
            placeholder="Name"
          />
          <ErrorMessage
            className={styles.ErrorMessage}
            name="name"
            component="span"
          />
        </label>
        <label className={styles.label}>
          <span>Number: </span>
          <Field
            className={styles.input}
            name="number"
            type="phone"
            placeholder="+380*******"
          />
          <ErrorMessage
            className={styles.ErrorMessage}
            name="number"
            component="span"
          />
        </label>
        <button className={styles.button} type="submit">
          Add profile
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
