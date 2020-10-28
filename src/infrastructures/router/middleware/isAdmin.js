// from a role collection maybe
const adminRoles = ["admin", "superadmin"];

const isAdmin = async (req, res, next) => {
  try {
    const userRole = req.user.role;
    if (adminRoles.includes(userRole)) {
      return next();
    }
    throw new Error("Unauthorized, only admins can access this functionality");
  } catch (error) {
    next(error);
  }
};

export default isAdmin;
