"use client";

import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <Container maxWidth="md">
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
            padding: 6,
            borderRadius: 4,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
            }}
          >
            ONVO
          </Typography>

          <Typography
            variant="h4"
            sx={{
              mb: 3,
            }}
          >
            Dijital Stajyer Takip Sistemi
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
            }}
          >
            Staj süreçlerinizi, günlük çalışmalarınızı ve staj durumunuzu
            kolayca takip edin.
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={() => router.push("/login")}
            sx={{
              px: 5,
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