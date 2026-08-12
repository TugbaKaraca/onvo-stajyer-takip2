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

export default function EngineerPage() {
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
              mb: 4,
            }}
          >
            Mühendisim
          </Typography>

          {/* MÜHENDİS BİLGİLERİ */}
          <Card
            elevation={2}
            sx={{
              mb: 2,
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
                👤 Ad Soyad
              </Typography>

              <Typography variant="body1">
                Ahmet Yılmaz
              </Typography>
            </CardContent>
          </Card>

          <Card
            elevation={2}
            sx={{
              mb: 2,
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
                💼 Görevi
              </Typography>

              <Typography variant="body1">
                Yazılım Mühendisi
              </Typography>
            </CardContent>
          </Card>

          <Card
            elevation={2}
            sx={{
              mb: 2,
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
                🏢 Departman
              </Typography>

              <Typography variant="body1">
                Yazılım Geliştirme
              </Typography>
            </CardContent>
          </Card>

          <Card
            elevation={2}
            sx={{
              mb: 2,
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
                📧 E-posta
              </Typography>

              <Typography variant="body1">
                ahmet.yilmaz@onvo.com.tr
              </Typography>
            </CardContent>
          </Card>

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
                  mb: 2,
                }}
              >
                📱 Telefon
              </Typography>

              <Typography variant="body1">
                05XX XXX XX XX
              </Typography>
            </CardContent>
          </Card>

          {/* GERİ DÖN */}
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