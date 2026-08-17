"use client";

import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function StajyerLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [qrToken, setQrToken] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      setQrToken(token);
      sessionStorage.setItem("stajyer_qr_token", token);
    }
  }, []);

  const handleLogin = () => {
    /*
     * Şimdilik backend olmadığı için supervisor seçimini
     * localStorage üzerinden kontrol ediyoruz.
     *
     * Supervisor daha önce seçilmişse:
     *    → direkt dashboard
     *
     * İlk kez giriş yapıyorsa:
     *    → supervisor seçim ekranı
     */

    const supervisorSelected = localStorage.getItem(
      "stajyer_supervisor_selected"
    );

    if (supervisorSelected === "true") {
      window.location.href = "/dashboard";
    } else {
      window.location.href = "/login/stajyer/supervisor";
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f5f7fa",
        color: "#17202a",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ==================== HEADER ==================== */}

      <Box
        component="header"
        sx={{
          background: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <Box
          sx={{
            height: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {/* LOGO */}

          <Link href="/">
            <Box
              component="img"
              src="/logo.png"
              alt="ONVO"
              sx={{
                width: 120,
                height: "auto",
                objectFit: "contain",
                cursor: "pointer",
              }}
            />
          </Link>

          {/* ANA SAYFA */}

          <Button
            component={Link}
            href="/"
            variant="contained"
            sx={{
              background: "#0f2742",
              px: 3,
              py: 1,
              borderRadius: 1.5,
              fontWeight: 700,
              boxShadow: "none",
              "&:hover": {
                background: "#173b61",
                boxShadow: "none",
              },
            }}
          >
            ANA SAYFA
          </Button>
        </Box>
      </Box>

      {/* ==================== GİRİŞ FORMU ==================== */}

      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              p: { xs: 3, sm: 5, md: 6 },
              borderRadius: 3,
              border: "1px solid #e5e7eb",
              background: "#ffffff",
              boxShadow: "0 12px 35px rgba(15,39,66,0.08)",
            }}
          >
            {/* BAŞLIK */}

            <Box
              sx={{
                textAlign: "center",
                mb: 4,
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "2rem",
                    sm: "2.4rem",
                  },
                  fontWeight: 800,
                  color: "#0f2742",
                  mb: 1,
                }}
              >
                Stajyer Girişi
              </Typography>

              <Typography
                sx={{
                  color: "#64748b",
                  fontSize: "0.95rem",
                }}
              >
                Stajyer hesabınızla sisteme giriş yapın.
              </Typography>
            </Box>

            {/* QR KAYIT BİLGİSİ */}

            <Box
              sx={{
                mb: 3,
                p: 2,
                borderRadius: 2,
                background: qrToken ? "#eef7f1" : "#f4f7fa",
                border: qrToken
                  ? "1px solid #cce8d5"
                  : "1px solid #e2e8f0",
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: qrToken ? "#166534" : "#334155",
                  mb: 0.5,
                }}
              >
                {qrToken
                  ? "Şirket QR kodu doğrulandı"
                  : "Stajyer kaydı QR kodu ile yapılır"}
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.75rem",
                  lineHeight: 1.6,
                  color: "#64748b",
                }}
              >
                {qrToken
                  ? "Bu bağlantı üzerinden kayıt olabilirsiniz. Kayıt sırasında QR doğrulaması korunacaktır."
                  : "Yeni stajyer hesabı oluşturmak için şirket tarafından paylaşılan QR kodu okutun."}
              </Typography>
            </Box>

            {/* E-POSTA */}

            <TextField
              fullWidth
              label="E-posta"
              type="email"
              placeholder="ornek@email.com"
              variant="outlined"
              sx={{
                mb: 2.5,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 1.5,
                },
              }}
            />

            {/* ŞİFRE */}

            <TextField
              fullWidth
              label="Şifre"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              sx={{
                mb: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 1.5,
                },
              }}
            />

            {/* ŞİFRE GÖSTER */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mb: 3,
              }}
            >
              <Button
                onClick={() => setShowPassword(!showPassword)}
                sx={{
                  color: "#286b9d",
                  fontSize: "0.8rem",
                  textTransform: "none",
                  p: 0,
                  minWidth: 0,
                }}
              >
                {showPassword ? "Şifreyi gizle" : "Şifreyi göster"}
              </Button>
            </Box>

            {/* GİRİŞ YAP */}

            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={handleLogin}
              sx={{
                background: "#0f2742",
                py: 1.5,
                borderRadius: 1.5,
                fontWeight: 700,
                fontSize: "0.95rem",
                boxShadow: "none",
                "&:hover": {
                  background: "#173b61",
                  boxShadow: "none",
                },
              }}
            >
              GİRİŞ YAP
            </Button>

            {/* ALT LİNKLER */}

            <Box
              sx={{
                mt: 3,
                pt: 3,
                borderTop: "1px solid #e5e7eb",
                textAlign: "center",
              }}
            >
              <Typography
                component="span"
                sx={{
                  color: "#64748b",
                  fontSize: "0.9rem",
                }}
              >
                Hesabınız yok mu?{" "}
              </Typography>

              {qrToken ? (
                <Link
                  href={`/kayit?token=${encodeURIComponent(qrToken)}`}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      color: "#286b9d",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                    }}
                  >
                    KAYIT OL
                  </Typography>
                </Link>
              ) : (
                <Typography
                  component="span"
                  sx={{
                    color: "#94a3b8",
                    fontSize: "0.85rem",
                  }}
                >
                  Kayıt için şirketin QR kodunu okutun.
                </Typography>
              )}
            </Box>

            {/* GERİ DÖN */}

            <Box
              sx={{
                textAlign: "center",
                mt: 2,
              }}
            >
              <Link
                href="/login"
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize: "0.85rem",
                    "&:hover": {
                      color: "#0f2742",
                    },
                  }}
                >
                  ← Giriş seçeneklerine dön
                </Typography>
              </Link>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* ==================== FOOTER ==================== */}

      <Box
        component="footer"
        sx={{
          background: "#0b1d30",
          color: "#ffffff",
          py: 5,
        }}
      >
        <Box
          sx={{
            width: "100%",
            px: {
              xs: 3,
              sm: 5,
              md: 8,
              lg: 12,
            },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "2fr 1fr 1fr",
              },
              gap: 5,
              pb: 4,
            }}
          >
            {/* LOGO */}

            <Box>
              <Box
                component="img"
                src="/logo.png"
                alt="ONVO"
                sx={{
                  width: 110,
                  mb: 2,
                  filter: "brightness(0) invert(1)",
                }}
              />

              <Typography
                sx={{
                  color: "#94a3b8",
                  maxWidth: 420,
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                }}
              >
                ONVO Dijital Stajyer Takip Sistemi ile staj süreçlerini
                daha düzenli, verimli ve erişilebilir hale getirin.
              </Typography>
            </Box>

            {/* KURUMSAL */}

            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Kurumsal
              </Typography>

              <Link
                href="/hakkimizda"
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  sx={{
                    color: "#94a3b8",
                    fontSize: "0.9rem",
                    mb: 1,
                  }}
                >
                  Hakkımızda
                </Typography>
              </Link>

              <Link
                href="/iletisim"
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  sx={{
                    color: "#94a3b8",
                    fontSize: "0.9rem",
                  }}
                >
                  İletişim
                </Typography>
              </Link>
            </Box>

            {/* DESTEK */}

            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Destek
              </Typography>

              <Link
                href="/yardim"
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  sx={{
                    color: "#94a3b8",
                    fontSize: "0.9rem",
                    mb: 1,
                  }}
                >
                  Yardım Merkezi
                </Typography>
              </Link>

              <Link
                href="/sss"
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  sx={{
                    color: "#94a3b8",
                    fontSize: "0.9rem",
                  }}
                >
                  Sıkça Sorulan Sorular
                </Typography>
              </Link>
            </Box>
          </Box>

          {/* ALT FOOTER */}

          <Box
            sx={{
              borderTop: "1px solid rgba(255,255,255,0.1)",
              pt: 3,
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              justifyContent: "space-between",
              alignItems: {
                xs: "flex-start",
                sm: "center",
              },
              gap: 1,
            }}
          >
            <Typography
              sx={{
                color: "#64748b",
                fontSize: "0.8rem",
              }}
            >
              © 2026 ONVO. Tüm hakları saklıdır.
            </Typography>

            <Typography
              sx={{
                color: "#64748b",
                fontSize: "0.8rem",
              }}
            >
              Dijital Stajyer Takip Sistemi
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}