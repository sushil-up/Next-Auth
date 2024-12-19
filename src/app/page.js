"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <>
      <Container>
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="h3" gutterBottom>
            Welcome to NextAuth
          </Typography>
          <Typography variant="body1" paragraph>
            Your gateway to a seamless, secure, and user-friendly authentication
            experience. Get started with ease and explore our app's powerful
            features.
          </Typography>

          <Box sx={{ mt: 4, textAlign: "left" }}>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Informative:
            </Typography>
            <Typography variant="body1" paragraph>
              NextAuth is a robust authentication system designed to provide
              secure, user-friendly access. Explore its features and learn how
              to get started with confidence.
            </Typography>

            <Typography variant="h6" sx={{ mt: 2 }}>
              Friendly and Welcoming:
            </Typography>
            <Typography variant="body1" paragraph>
              Welcome! Start your journey with NextAuth as we guide you through
              our app's intuitive login process and powerful features.
            </Typography>

            <Typography variant="h6" sx={{ mt: 2 }}>
              Feature-Oriented:
            </Typography>
            <Typography variant="body1" paragraph>
              Experience hassle-free, secure authentication with NextAuth. Dive
              into the app and discover how quickly you can get started.
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}
