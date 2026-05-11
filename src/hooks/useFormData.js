/**
 * Custom Hook: useFormData
 * Manages form state and validation
 */

import { useState, useCallback } from 'react';

export const useFormData = (initialValues = {}, onSubmit = null) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null,
      }));
    }
  }, [errors]);

  const handleSubmit = useCallback(async (e, validationFn = null) => {
    e?.preventDefault();
    setIsSubmitting(true);

    try {
      // Run validation if provided
      if (validationFn) {
        const validationErrors = validationFn(formData);
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          setIsSubmitting(false);
          return;
        }
      }

      // Call submit callback
      if (onSubmit) {
        await onSubmit(formData);
      }

      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, onSubmit]);

  const resetForm = useCallback(() => {
    setFormData(initialValues);
    setErrors({});
  }, [initialValues]);

  return {
    formData,
    setFormData,
    errors,
    setErrors,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
  };
};
