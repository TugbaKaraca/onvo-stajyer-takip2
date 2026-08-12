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

export default function ReportsPage() {
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
              mb: 1,
            }}
          >
            Rapor Geçmişi
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
            }}
          >
            Daha önce sisteme kaydettiğiniz günlük raporları buradan
            görüntüleyebilirsiniz.
          </Typography>

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
                }}
              >
                Henüz rapor bulunmuyor
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                }}
              >
                Sisteme kaydettiğiniz raporlar burada listelenecektir.
              </Typography>
            </CardContent>
          </Card>

          <Button
            variant="contained"
            fullWidth
            onClick={() => router.push("/daily-report")}
          >
            YENİ RAPOR GİR
          </Button>

          <Button
            variant="text"
            fullWidth
            sx={{
              mt: 1,
            }}
            onClick={() => router.push("/dashboard")}
          >
            ← ANASAYFAYA DÖN
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}