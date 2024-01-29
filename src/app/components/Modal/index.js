import React, { useRef } from "react";
import PropTypes from "prop-types";
import UpdateTaskForm from "../Tasks/UpdateTask";

const Modal = ({
  onClose,
  onSave,
  onConfirm,
  task,
  modalTitle,
  confirmOnly,
}) => {
  const formRef = useRef();
  const clickOnSave = (taskData) => {
    if (formRef.current) {
      formRef.current.submitForm().then(() => {
        onSave(taskData);
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg">
        <h3 className="text-lg font-bold mb-4">{modalTitle}</h3>
        {!confirmOnly && (
          <UpdateTaskForm
            onTaskUpdate={clickOnSave}
            task={task}
            formRef={formRef}
          />
        )}{" "}
        <div className="flex justify-end mt-4 space-x-2">
          {!confirmOnly && (
            <button
              onClick={clickOnSave}
              className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-300"
            >
              Guardar
            </button>
          )}
          {confirmOnly && (
            <button
              onClick={onConfirm}
              className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-300"
            >
              Confirmar
            </button>
          )}
          <button
            onClick={onClose}
            className="text-gray-700 hover:text-white border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-300"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func,
  onConfirm: PropTypes.func,
  task: PropTypes.object,
  modalTitle: PropTypes.string.isRequired,
  confirmOnly: PropTypes.bool,
};

export default Modal;
