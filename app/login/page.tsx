"use client";

import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/dashboard");
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={4}
          sx={{
            width: "100%",
            padding: 5,
            borderRadius: 4,
            textAlign: "center",
          }}
        >
          {/* ONVO başlık */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
            }}
          >
            ONVO
          </Typography>

          {/* Sayfa başlığı */}
          <Typography
            variant="h5"
            sx={{
              mb: 4,
            }}
          >
            Stajyer Giriş
          </Typography>

          {/* E-posta */}
          <TextField
            fullWidth
            label="E-posta"
            type="email"
            variant="outlined"
            sx={{
              mb: 3,
            }}
          />

          {/* Şifre */}
          <TextField
            fullWidth
            label="Şifre"
            type="password"
            variant="outlined"
            sx={{
              mb: 3,
            }}
          />

          {/* Giriş butonu */}
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={handleLogin}
            sx={{
              py: 1.5,
              borderRadius: 2,
            }}
          >
            GİRİŞ YAP
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}