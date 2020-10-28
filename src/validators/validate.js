const validate = (schema, data) => {
  try {
    const { value, error } = schema.validate(data);
    if (error) {
      throw error;
    }
    return value;
  } catch (error) {
    const err = error.message;
    throw new Error(err);
  }
};

export default validate;
