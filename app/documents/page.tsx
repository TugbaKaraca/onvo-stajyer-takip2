"use client";

import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

export default function DocumentsPage() {
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
              mb: 1,
            }}
          >
            Belgelerim
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
            }}
          >
            Staj sürecinizle ilgili belgeleri buradan yükleyebilir ve
            görüntüleyebilirsiniz.
          </Typography>

          {/* BELGE YÜKLEME */}
          <Paper
            variant="outlined"
            sx={{
              p: 4,
              textAlign: "center",
              borderStyle: "dashed",
              mb: 4,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 1,
              }}
            >
              📎 Belge Ekle
            </Typography>

            <Typography
              variant="body2"
              sx={{
                mb: 3,
              }}
            >
              Bilgisayarınızdan staj belgesi seçebilirsiniz.
            </Typography>

            <Button
              variant="outlined"
              component="label"
            >
              BİLGİSAYARDAN DOSYA SEÇ
              <input
                type="file"
                hidden
                onChange={(event) => {
                  const file = event.target.files?.[0];

                  if (file) {
                    alert(`Seçilen dosya: ${file.name}`);
                  }
                }}
              />
            </Button>
          </Paper>

          {/* BELGELER */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Yüklenen Belgeler
          </Typography>

          <Paper
            variant="outlined"
            sx={{
              p: 3,
              mb: 2,
            }}
          >
            <Typography variant="body1">
              Henüz yüklenmiş bir belge bulunmamaktadır.
            </Typography>
          </Paper>

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