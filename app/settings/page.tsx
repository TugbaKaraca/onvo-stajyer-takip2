"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LockIcon from "@mui/icons-material/Lock";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fb",
      }}
    >
      {/* ÜST BAR */}
      <Box
        sx={{
          height: 72,
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e0e0e0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 4,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#1557b0",
          }}
        >
          ONVO
        </Typography>

        <Typography
          sx={{
            fontWeight: 600,
            color: "#333",
          }}
        >
          Zeliha Koyuncu
        </Typography>
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>

          {/* BAŞLIK */}
          <Box sx={{ mb: 4 }}>
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={() => router.push("/dashboard")}
              sx={{
                mb: 2,
                color: "#1557b0",
              }}
            >
              Anasayfaya Dön
            </Button>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <SettingsIcon
                sx={{
                  fontSize: 40,
                  color: "#1557b0",
                }}
              />

              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "#172b4d",
                  }}
                >
                  Ayarlar
                </Typography>

                <Typography
                  sx={{
                    color: "#6b7280",
                    mt: 0.5,
                  }}
                >
                  Hesap ve bildirim ayarlarınızı yönetin
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* HESAP BİLGİLERİ */}
          <Paper
            elevation={0}
            sx={{
              p: 4,
              mb: 3,
              borderRadius: 3,
              border: "1px solid #e1e5eb",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 3,
              }}
            >
              Hesap Bilgileri
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 1fr",
                },
                gap: 3,
              }}
            >
              <TextField
                label="Ad Soyad"
                value="Zeliha Koyuncu"
                fullWidth
                disabled
              />

              <TextField
                label="E-posta"
                value="zeliha@example.com"
                fullWidth
                disabled
              />
            </Box>

            <Typography
              variant="body2"
              sx={{
                mt: 2,
                color: "#777",
              }}
            >
              Hesap bilgileri İK tarafından yönetilmektedir.
            </Typography>
          </Paper>

          {/* BİLDİRİMLER */}
          <Paper
            elevation={0}
            sx={{
              p: 4,
              mb: 3,
              borderRadius: 3,
              border: "1px solid #e1e5eb",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 3,
              }}
            >
              <NotificationsIcon sx={{ color: "#1557b0" }} />

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Bildirimler
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 2,
              }}
            >
              <Box>
                <Typography sx={{ fontWeight: 600 }}>
                  E-posta Bildirimleri
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: "#777", mt: 0.5 }}
                >
                  Önemli sistem bildirimlerini e-posta ile alın.
                </Typography>
              </Box>

              <Switch defaultChecked />
            </Box>

            <Divider />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 2,
              }}
            >
              <Box>
                <Typography sx={{ fontWeight: 600 }}>
                  Rapor Bildirimleri
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: "#777", mt: 0.5 }}
                >
                  Raporunuz incelendiğinde bildirim alın.
                </Typography>
              </Box>

              <Switch defaultChecked />
            </Box>

            <Divider />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 2,
              }}
            >
              <Box>
                <Typography sx={{ fontWeight: 600 }}>
                  Duyuru Bildirimleri
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: "#777", mt: 0.5 }}
                >
                  Yeni duyurulardan haberdar olun.
                </Typography>
              </Box>

              <Switch defaultChecked />
            </Box>
          </Paper>

          {/* GÜVENLİK */}
          <Paper
            elevation={0}
            sx={{
              p: 4,
              mb: 3,
              borderRadius: 3,
              border: "1px solid #e1e5eb",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 3,
              }}
            >
              <LockIcon sx={{ color: "#1557b0" }} />

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Güvenlik
              </Typography>
            </Box>

            <Button
              variant="outlined"
              sx={{
                borderColor: "#1557b0",
                color: "#1557b0",
                px: 3,
                py: 1.2,
              }}
            >
              Şifremi Değiştir
            </Button>
          </Paper>

          {/* KAYDET */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            <Button
              variant="outlined"
              onClick={() => router.push("/dashboard")}
              sx={{
                px: 4,
              }}
            >
              İptal
            </Button>

            <Button
              variant="contained"
              sx={{
                px: 4,
                backgroundColor: "#1557b0",
                "&:hover": {
                  backgroundColor: "#0f4690",
                },
              }}
            >
              Ayarları Kaydet
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}