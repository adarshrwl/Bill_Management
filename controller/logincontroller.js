const login = (req, res) => {
  res.send("Login Accessed!!");
};

const register = (req, res) => {
  res.send("Register Accessed!!");
};

module.exports = {
  login,
  register,
};
