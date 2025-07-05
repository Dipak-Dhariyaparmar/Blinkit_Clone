import jwt from "jsonwebtoken";

const generatedAccessToken = async (userId) => {
  const token = await jwt.sign(
    { id: userId },
    process.env.SECRET_KEY_ACCESS_TOKEN,
    { expiresIn: "5h" }
  );

  return token;
};

export default generatedAccessToken;
// This utils is related to generate access token
