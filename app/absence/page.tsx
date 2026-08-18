"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Paper,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

export default function AbsencePage() {
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
          {/* BAŞLIK */}
          <Box
            component="img"
            src="/logo.png"
            alt="ONVO"
            sx={{
              width: 105,
              height: "auto",
              display: "block",
              objectFit: "contain",
              mb: 1,
            }}
          />

          <Typography
            variant="h5"
            sx={{
              mb: 4,
            }}
          >
            Devamsızlık Durumum
          </Typography>

          {/* ÖZET */}
          <Card
            elevation={2}
            sx={{
              mb: 3,
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                Devamsızlık Özeti
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 1 }}
              >
                Toplam Staj Günü: <strong>22 gün</strong>
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 1 }}
              >
                Katılım Sağlanan Gün: <strong>3 gün</strong>
              </Typography>

              <Typography variant="body1">
                Devamsızlık: <strong>0 gün</strong>
              </Typography>
            </CardContent>
          </Card>

          {/* DURUM */}
          <Card
            elevation={2}
            sx={{
              mb: 4,
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                }}
              >
                Mevcut Durum
              </Typography>

              <Typography variant="body1">
                Şu an için herhangi bir devamsızlığınız bulunmamaktadır.
              </Typography>
            </CardContent>
          </Card>

          {/* DASHBOARD */}
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