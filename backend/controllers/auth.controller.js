export const login = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
  } catch (error) {
    console.error(error);
  }
};

export const logout = (req, res) => {
  console.log("logoutUser");
};

export const signup = (req, res) => {
  console.log("signupUser");
};
