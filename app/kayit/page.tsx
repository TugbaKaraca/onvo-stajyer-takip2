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
import { useState } from "react";

export default function KayitPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordAgain, setShowPasswordAgain] = useState(false);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Tarihi GG/AA/YYYY formatına çevirir.
  // Sadece 8 rakama kadar izin verir.
  const formatDate = (value: string) => {
    const numbers = value.replace(/\D/g, "").slice(0, 8);

    if (numbers.length <= 2) {
      return numbers;
    }

    if (numbers.length <= 4) {
      return `${numbers.slice(0, 2)}/${numbers.slice(2)}`;
    }

    return `${numbers.slice(0, 2)}/${numbers.slice(
      2,
      4
    )}/${numbers.slice(4, 8)}`;
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

          {/* GİRİŞ YAP */}
          <Button
            component={Link}
            href="/login"
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
            GİRİŞ YAP
          </Button>
        </Box>
      </Box>

      {/* ==================== KAYIT FORMU ==================== */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: {
            xs: 5,
            md: 7,
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
            }}
          >
            {/* ==================== BAŞLIK ==================== */}
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
                Stajyer Kayıt
              </Typography>

              <Typography
                sx={{
                  color: "#64748b",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                }}
              >
                Stajyer hesabınızı oluşturmak için bilgilerinizi eksiksiz
                doldurun.
              </Typography>
            </Box>

            {/* ==================== AD SOYAD ==================== */}
            <TextField
              fullWidth
              label="Ad Soyad"
              placeholder="Ad Soyad"
              variant="outlined"
              sx={{
                mb: 2.5,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 1.5,
                },
              }}
            />

            {/* ==================== E-POSTA ==================== */}
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

            {/* ==================== ŞİFRE ==================== */}
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
                mb: 2.5,
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
                {showPassword
                  ? "Şifreyi gizle"
                  : "Şifreyi göster"}
              </Button>
            </Box>

            {/* ==================== ŞİFRE TEKRAR ==================== */}
            <TextField
              fullWidth
              label="Şifre Tekrar"
              type={showPasswordAgain ? "text" : "password"}
              variant="outlined"
              sx={{
                mb: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 1.5,
                },
              }}
            />

            {/* ŞİFRE TEKRAR GÖSTER */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mb: 3,
              }}
            >
              <Button
                onClick={() =>
                  setShowPasswordAgain(!showPasswordAgain)
                }
                sx={{
                  color: "#286b9d",
                  fontSize: "0.8rem",
                  textTransform: "none",
                  p: 0,
                  minWidth: 0,
                }}
              >
                {showPasswordAgain
                  ? "Şifreyi gizle"
                  : "Şifreyi göster"}
              </Button>
            </Box>

            {/* ==================== STAJ BİLGİLERİ ==================== */}
            <Typography
              sx={{
                color: "#0f2742",
                fontSize: "0.95rem",
                fontWeight: 700,
                mb: 2,
              }}
            >
              Staj Bilgileri
            </Typography>

            {/* ==================== TARİHLER ==================== */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr 1fr",
                },
                gap: 2,
                mb: 3,
              }}
            >
              {/* STAJ BAŞLANGIÇ TARİHİ */}
              <Box>
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    color: "#475569",
                    mb: 0.8,
                  }}
                >
                  Staj Başlangıç Tarihi
                </Typography>

                <Box
                  component="input"
                  type="text"
                  value={startDate}
                  placeholder="GG/AA/YYYY"
                  onChange={(e) => {
                    setStartDate(formatDate(e.target.value));
                  }}
                  sx={{
                    width: "100%",
                    height: 56,
                    boxSizing: "border-box",
                    border: "1px solid #cbd5e1",
                    borderRadius: "6px",
                    padding: "0 16px",
                    fontSize: "16px",
                    color: "#17202a",
                    outline: "none",
                    fontFamily: "inherit",
                    background: "#ffffff",

                    "&::placeholder": {
                      color: "#94a3b8",
                      opacity: 1,
                    },

                    "&:focus": {
                      border: "2px solid #0f2742",
                      padding: "0 15px",
                    },
                  }}
                />
              </Box>

              {/* STAJ BİTİŞ TARİHİ */}
              <Box>
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    color: "#475569",
                    mb: 0.8,
                  }}
                >
                  Staj Bitiş Tarihi
                </Typography>

                <Box
                  component="input"
                  type="text"
                  value={endDate}
                  placeholder="GG/AA/YYYY"
                  onChange={(e) => {
                    setEndDate(formatDate(e.target.value));
                  }}
                  sx={{
                    width: "100%",
                    height: 56,
                    boxSizing: "border-box",
                    border: "1px solid #cbd5e1",
                    borderRadius: "6px",
                    padding: "0 16px",
                    fontSize: "16px",
                    color: "#17202a",
                    outline: "none",
                    fontFamily: "inherit",
                    background: "#ffffff",

                    "&::placeholder": {
                      color: "#94a3b8",
                      opacity: 1,
                    },

                    "&:focus": {
                      border: "2px solid #0f2742",
                      padding: "0 15px",
                    },
                  }}
                />
              </Box>
            </Box>

            {/* ==================== KAYIT OL ==================== */}
            <Button
              fullWidth
              variant="contained"
              size="large"
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
              KAYIT OL
            </Button>

            {/* ==================== GİRİŞ LİNKİ ==================== */}
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
                Zaten hesabınız var mı?{" "}
              </Typography>

              <Link
                href="/login"
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
                  GİRİŞ YAP
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
          {/* FOOTER ANA ALAN */}
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