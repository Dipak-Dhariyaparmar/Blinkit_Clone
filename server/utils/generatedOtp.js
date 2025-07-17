const generatedOtp = () => {
  return Math.floor(Math.random() * 900000) + 100000; /// 100000 to 999999
};
export default generatedOtp;
// This is a generated otp related utils
