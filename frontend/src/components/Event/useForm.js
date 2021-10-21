import { useEffect, useState } from "react";

const useForm = ({ initState, callback, validator }) => {
  const [state, setState] = useState(initState);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const isValidErrors = () =>
      Object.values(errors).filter((error) => typeof error !== "undefined")
        .length > 0;
    if (isSubmitted && !isValidErrors()) callback();
  }, [errors, callback, isSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(() => ({
      ...state,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name: fieldName } = e.target;
    const failFields = validator(state, fieldName);
    setErrors(() => ({
      ...errors,
      [fieldName]: Object.values(failFields)[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name: fieldName } = e.target;
    const failFields = validator(state, fieldName);
    setErrors(() => ({
      ...errors,
      [fieldName]: Object.values(failFields)[0],
    }));
    setIsSubmitted(true);
  };

  return {
    handleChange,
    handleSubmit,
    handleBlur,
    state,
    errors,
  };
};

export default useForm;
