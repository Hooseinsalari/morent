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

async function verifyPassword(pass: string, hashedPass: string) {
  const isSame = await bcrypt.compare(pass, hashedPass);

  return isSame;
}

function verifyToken(token: string) {
  try {
    const validationResult = jwt.verify(token, process.env.privateKey);
    return validationResult;
  } catch (error) {
    console.log("Verify token has faild");
  }
}

export { hashPassword, generateToken, verifyPassword, verifyToken };
