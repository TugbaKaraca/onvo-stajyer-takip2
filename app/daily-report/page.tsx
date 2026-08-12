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

import { ChangeEvent, useState } from "react";

export default function DailyReportPage() {
  const router = useRouter();

  const [tarih, setTarih] = useState("");
  const [konu, setKonu] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [dosya, setDosya] = useState<File | null>(null);

  const handleDosyaSec = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const secilenDosya = e.target.files?.[0] || null;

    setDosya(secilenDosya);
  };

  const handleKaydet = () => {
    if (!tarih) {
      alert("Lütfen çalışma tarihini seçiniz.");
      return;
    }

    if (!konu) {
      alert("Lütfen açıklamanın konusunu giriniz.");
      return;
    }

    if (!aciklama) {
      alert("Lütfen yapılan çalışmalar kısmını doldurunuz.");
      return;
    }

    alert("Günlük rapor başarıyla kaydedildi.");

    router.push("/dashboard");
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 4,
        }}
      >
        <Paper
          elevation={4}
          sx={{
            width: "100%",
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
            Günlük Çalışma Raporu
          </Typography>

          <Typography
            variant="body2"
            sx={{
              mb: 3,
              color: "text.secondary",
            }}
          >
            Gün içerisinde yaptığınız çalışmaları aşağıdaki formu doldurarak
            sisteme kaydedebilirsiniz.
          </Typography>

          {/* TARİH */}

          <TextField
            fullWidth
            type="date"
            label="Çalışma Tarihi"
            value={tarih}
            onChange={(e) => setTarih(e.target.value)}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            sx={{
              mb: 2,
            }}
          />

          {/* AÇIKLAMANIN KONUSU */}

          <TextField
            fullWidth
            label="Açıklamanın Konusu"
            value={konu}
            onChange={(e) => setKonu(e.target.value)}
            sx={{
              mb: 2,
            }}
          />

          {/* YAPILAN ÇALIŞMALAR */}

          <TextField
            fullWidth
            multiline
            rows={5}
            label="Yapılan Çalışmalar / Açıklama"
            value={aciklama}
            onChange={(e) => setAciklama(e.target.value)}
            sx={{
              mb: 2,
            }}
          />

          {/* DOSYA EKLEME */}

          <Box
            sx={{
              border: "1px dashed",
              borderColor: "grey.400",
              borderRadius: 2,
              p: 3,
              mb: 2,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 1,
              }}
            >
              📎 Dosya Ekle
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                mb: 2,
              }}
            >
              Çalışmanızla ilgili bir dosyayı bilgisayarınızdan
              ekleyebilirsiniz.
            </Typography>

            <Button
              variant="outlined"
              component="label"
            >
              BİLGİSAYARDAN DOSYA SEÇ

              <input
                type="file"
                hidden
                onChange={handleDosyaSec}
              />
            </Button>

            {/* SEÇİLEN DOSYA */}

            {dosya && (
              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  fontWeight: "bold",
                }}
              >
                Seçilen dosya: {dosya.name}
              </Typography>
            )}
          </Box>

          {/* RAPORU KAYDET */}

          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={handleKaydet}
            sx={{
              py: 1.5,
              mb: 2,
            }}
          >
            RAPORU KAYDET
          </Button>

          {/* DASHBOARD'A DÖN */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="text"
              onClick={() => router.push("/dashboard")}
            >
              ← ANASAYFAYA DÖN
            </Button>
          </Box>

        </Paper>
      </Box>
    </Container>
  );
}