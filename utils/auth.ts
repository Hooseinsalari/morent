const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function hashPassword(pass: string) {
  const hashedPassword = await bcrypt.hash(pass, 12);

  return hashedPassword;
}

function generateToken(data: { email: string }) {
  const token = jwt.sign({ ...data }, process.env.privateKey, {
    expiresIn: "7d",
  });

  return token;
}

export { hashPassword, generateToken };
