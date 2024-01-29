import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import InputField from "@/app/components/Input";

const TaskFormSchema = Yup.object().shape({
  title: Yup.string().required("El título es obligatorio"),
  description: Yup.string().required("La descripción es obligatoria"),
});

const AddTaskForm = ({ onTaskCreate }) => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await onTaskCreate(values);
      resetForm();
    } catch (error) {
      console.error(error);
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ title: "", description: "" }}
      validationSchema={TaskFormSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className=" w-full  lg:w-auto flex flex-col md:flex-row md:items-end gap-4">
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
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded  gap-2"
          >
            Guardar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddTaskForm;
