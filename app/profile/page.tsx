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

export default function ProfilePage() {
  const router = useRouter();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: "100vh",
          py: 4,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 1,
            }}
          >
            ONVO
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 3,
            }}
          >
            Profilim
          </Typography>

          <TextField
            fullWidth
            label="Ad Soyad"
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="E-posta"
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Üniversite"
            defaultValue="İstanbul Gelişim Üniversitesi"
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Bölüm"
            defaultValue="Yazılım Mühendisliği"
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Staj Başlangıcı"
            defaultValue="10 Ağustos 2026"
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Staj Bitişi"
            defaultValue="10 Eylül 2026"
            sx={{ mb: 3 }}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ mb: 2 }}
            onClick={() => {
              alert("Profil bilgileri güncellendi.");
            }}
          >
            BİLGİLERİ GÜNCELLE
          </Button>

          <Button
            variant="text"
            fullWidth
            onClick={() => router.push("/dashboard")}
          >
            ← ANASAYFAYA DÖN
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}