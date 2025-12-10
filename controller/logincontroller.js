const login = (req, res) => {
  res.send("login Accessed!!");
};

const register = (req, res) => {
  console.log(req.body);
  const { businessName, email, password } = req.body;
  res.send("Signup Accessed")
};

module.exports = {
  login,
  register,
};
