module.exports = {
  success: (res, { message, ...data }, status = 200) => {
    return res.status(status).json({
      success: true,
      message,
      ...data,
    });
  },
};
