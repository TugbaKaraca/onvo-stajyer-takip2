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

export default function AnnouncementsPage() {
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
            Duyurular
          </Typography>

          {/* DUYURU 1 */}
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
                📢 Stajyer Oryantasyon Programı
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mb: 2,
                }}
              >
                İK Departmanı • 10 Ağustos 2026
              </Typography>

              <Typography variant="body1">
                Yeni stajyerlerimiz için oryantasyon programı
                gerçekleştirilecektir. Program ile ilgili detaylar
                stajyerlere ayrıca bildirilecektir.
              </Typography>
            </CardContent>
          </Card>

          {/* DUYURU 2 */}
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
                📢 Günlük Rapor Hatırlatması
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mb: 2,
                }}
              >
                İK Departmanı • 11 Ağustos 2026
              </Typography>

              <Typography variant="body1">
                Stajyerlerin günlük çalışmalarını her iş günü sonunda
                sisteme girmeleri gerekmektedir.
              </Typography>
            </CardContent>
          </Card>

          {/* DUYURU 3 */}
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
                📢 Staj Süreci Hakkında
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mb: 2,
                }}
              >
                İK Departmanı • 12 Ağustos 2026
              </Typography>

              <Typography variant="body1">
                Staj süreciniz boyunca herhangi bir sorun yaşamanız
                durumunda bağlı bulunduğunuz mühendis veya İK departmanı
                ile iletişime geçebilirsiniz.
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