"use client";

import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

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
            px: {
              xs: 2,
              sm: 3,
              md: 4,
            },
          }}
        >
          {/* ONVO LOGO */}
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

          {/* HEADER BUTONLARI */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            {/* KAYDOL */}
            <Button
              variant="outlined"
              onClick={() => router.push("/kayit")}
              sx={{
                borderColor: "#0f2742",
                color: "#0f2742",
                px: 3,
                py: 1,
                borderRadius: 1.5,
                fontWeight: 700,
                boxShadow: "none",

                "&:hover": {
                  borderColor: "#173b61",
                  background: "#f5f8fb",
                },
              }}
            >
              KAYIT OL
            </Button>

            {/* ANA SAYFA */}
            <Button
              variant="contained"
              onClick={() => router.push("/")}
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
      </Box>

      {/* ==================== GİRİŞ SEÇİM ALANI ==================== */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: {
            xs: 6,
            md: 8,
          },
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              p: {
                xs: 3,
                sm: 5,
                md: 6,
              },
              borderRadius: 3,
              border: "1px solid #e5e7eb",
              background: "#ffffff",
              boxShadow: "0 12px 35px rgba(15,39,66,0.08)",
              textAlign: "center",
            }}
          >
            {/* BAŞLIK */}
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
              Sisteme Giriş
            </Typography>

            <Typography
              sx={{
                color: "#64748b",
                fontSize: "0.95rem",
                mb: 4,
              }}
            >
              Giriş yapmak istediğiniz hesabı seçin.
            </Typography>

            {/* ==================== STAJYER GİRİŞİ ==================== */}
            <Button
              fullWidth
              variant="outlined"
              onClick={() => router.push("/login/stajyer")}
              sx={{
                height: 90,
                mb: 2,
                borderRadius: 2,
                borderColor: "#0f2742",
                color: "#0f2742",
                fontSize: "1.05rem",
                fontWeight: 700,
                transition: "all 0.2s ease",

                "&:hover": {
                  background: "#0f2742",
                  color: "#ffffff",
                  borderColor: "#0f2742",
                },
              }}
            >
              STAJYER GİRİŞİ
            </Button>

            {/* ==================== YETKİLİ GİRİŞİ ==================== */}
            <Button
              fullWidth
              variant="outlined"
              onClick={() => router.push("/login/yetkili")}
              sx={{
                height: 90,
                borderRadius: 2,
                borderColor: "#0f2742",
                color: "#0f2742",
                fontSize: "1.05rem",
                fontWeight: 700,
                transition: "all 0.2s ease",

                "&:hover": {
                  background: "#0f2742",
                  color: "#ffffff",
                  borderColor: "#0f2742",
                },
              }}
            >
              YETKİLİ GİRİŞİ
            </Button>

            {/* ==================== KAYIT ==================== */}
            <Box
              sx={{
                mt: 4,
                pt: 3,
                borderTop: "1px solid #e5e7eb",
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

              <Link
                href="/kayit"
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    color: "#286b9d",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    cursor: "pointer",

                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  KAYIT OL
                </Typography>
              </Link>
            </Box>

            {/* GERİ DÖN */}
            <Box
              sx={{
                mt: 2,
              }}
            >
              <Link
                href="/"
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
                  ← Ana sayfaya dön
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