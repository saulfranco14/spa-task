import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import InputField from "@/app/components/Input";

const TaskUpdateSchema = Yup.object().shape({
  title: Yup.string().required("El título es obligatorio"),
  description: Yup.string().required("La descripción es obligatoria"),
});

const UpdateTaskForm = ({ onTaskUpdate, task, formRef }) => {
    const handleSubmit = (values, { setSubmitting }) => {
        onTaskUpdate(values);
        setSubmitting(false);
      };
 return (
    <Formik
      innerRef={formRef}
      initialValues={{ title: task.title, description: task.description }}
      validationSchema={TaskUpdateSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col md:flex-row md:items-end gap-4">
          <div className="flex-1">
            <Field
              as={InputField}
              label="Título"
              name="title"
              type="text"
              placeholder="Introduce un título"
              error={touched.title && errors.title}
            />
          </div>
          <div className="flex-1">
            <Field
              as={InputField}
              label="Descripción"
              name="description"
              type="text"
              placeholder="Introduce una descripción"
              error={touched.description && errors.description}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateTaskForm;
