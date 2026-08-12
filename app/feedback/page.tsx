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

export default function FeedbackPage() {
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
            Geri Bildirimler
          </Typography>

          {/* GERİ BİLDİRİM 1 */}
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
                  mb: 1,
                }}
              >
                Ahmet Yılmaz
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mb: 2,
                }}
              >
                Yazılım Mühendisi • 12 Ağustos 2026
              </Typography>

              <Typography variant="body1">
                Günlük rapor girişlerinizi düzenli yapmanız ve yaptığınız
                çalışmaları daha detaylı açıklamanız faydalı olacaktır.
              </Typography>
            </CardContent>
          </Card>

          {/* GERİ BİLDİRİM 2 */}
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
                Ahmet Yılmaz
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mb: 2,
                }}
              >
                Yazılım Mühendisi • 11 Ağustos 2026
              </Typography>

              <Typography variant="body1">
                Proje çalışmalarına hızlı bir şekilde adapte oldunuz.
                Öğrenmeye devam etmeniz ve sorularınızı çekinmeden sormanız
                önemli.
              </Typography>
            </CardContent>
          </Card>

          {/* DASHBOARD'A DÖN */}
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