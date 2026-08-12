"use client";

import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Divider,
} from "@mui/material";

export default function InternshipPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fb",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* BAŞLIK */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#173f73",
              mb: 1,
            }}
          >
            Staj Bilgilerim
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#6b7280",
            }}
          >
            Stajınızla ilgili temel bilgileri buradan görüntüleyebilirsiniz.
          </Typography>
        </Box>

        {/* STAJ ÖZETİ */}
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 3,
                border: "1px solid #e1e5eb",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    color: "#173f73",
                  }}
                >
                  Staj Bilgileri
                </Typography>

                <Divider sx={{ mb: 2 }} />

                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "#777", mb: 0.5 }}
                  >
                    Öğrenci
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    Zeliha Koyuncu
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "#777", mb: 0.5 }}
                  >
                    Staj Türü
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    Zorunlu Staj
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "#777", mb: 0.5 }}
                  >
                    Staj Süresi
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    20 İş Günü
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    variant="body2"
                    sx={{ color: "#777", mb: 0.5 }}
                  >
                    Staj Durumu
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      color: "#16a34a",
                    }}
                  >
                    Devam Ediyor
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* TARİH BİLGİLERİ */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 3,
                border: "1px solid #e1e5eb",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    color: "#173f73",
                  }}
                >
                  Tarih Bilgileri
                </Typography>

                <Divider sx={{ mb: 2 }} />

                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "#777", mb: 0.5 }}
                  >
                    Staj Başlangıç Tarihi
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold" }}
                  >
                    10 Ağustos 2026
                  </Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "#777", mb: 0.5 }}
                  >
                    Staj Bitiş Tarihi
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold" }}
                  >
                    04 Eylül 2026
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    variant="body2"
                    sx={{ color: "#777", mb: 0.5 }}
                  >
                    Toplam Staj Günü
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#1976d2",
                    }}
                  >
                    20 Gün
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* KURUM BİLGİLERİ */}
          <Grid size={{ xs: 12 }}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 3,
                border: "1px solid #e1e5eb",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    color: "#173f73",
                  }}
                >
                  Kurum Bilgileri
                </Typography>

                <Divider sx={{ mb: 3 }} />

                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Typography
                      variant="body2"
                      sx={{ color: "#777", mb: 0.5 }}
                    >
                      Kurum Adı
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold" }}
                    >
                      ONVO
                    </Typography>
                  </Grid>

                  <Grid size={{ xs: 12, md: 4 }}>
                    <Typography
                      variant="body2"
                      sx={{ color: "#777", mb: 0.5 }}
                    >
                      Departman
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold" }}
                    >
                      Yazılım
                    </Typography>
                  </Grid>

                  <Grid size={{ xs: 12, md: 4 }}>
                    <Typography
                      variant="body2"
                      sx={{ color: "#777", mb: 0.5 }}
                    >
                      Stajyer Pozisyonu
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold" }}
                    >
                      Yazılım Mühendisliği Stajyeri
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* AÇIKLAMA */}
          <Grid size={{ xs: 12 }}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 3,
                border: "1px solid #e1e5eb",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    color: "#173f73",
                  }}
                >
                  Staj Açıklaması
                </Typography>

                <Divider sx={{ mb: 2 }} />

                <Typography
                  variant="body1"
                  sx={{
                    color: "#555",
                    lineHeight: 1.8,
                  }}
                >
                  Staj süreciniz boyunca devam durumunuzu, günlük
                  raporlarınızı ve stajla ilgili belgelerinizi sistem
                  üzerinden takip edebilirsiniz.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}