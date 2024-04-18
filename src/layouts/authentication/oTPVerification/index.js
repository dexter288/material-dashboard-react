import { useState, useRef } from "react";
import { MuiOtpInput } from 'mui-one-time-password-input'
// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

const OTPVerificationPage = () => {
  const [otp, setOTP] = useState('');
  const [error, setError] = useState('');

  const handleOTPChange = (newValue) => {
    setOTP(newValue);
  };

  const handleVerifyOTP = () => {
    // Here you can add your logic to verify the OTP
    if (otp === '1234') {
      setError('');
      // OTP verified successfully, you can redirect or perform further actions
      console.log('OTP verified successfully');
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Enter OTP to verify
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MuiOtpInput value={otp} onChange={handleOTPChange} />
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={handleVerifyOTP}>
                Verity
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
};

export default OTPVerificationPage;
