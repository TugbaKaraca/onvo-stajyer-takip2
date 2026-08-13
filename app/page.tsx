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

export default function Home() {
  const router = useRouter();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f5f7fa",
        color: "#17202a",
      }}
    >
      {/* ==================== HEADER ==================== */}
      <Box
        component="header"
        sx={{
          background: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          position: "relative",
          zIndex: 10,
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
          {/* ONVO LOGO */}
          <Box
            component="img"
            src="/logo.png"
            alt="ONVO"
            sx={{
              width: 120,
              height: "auto",
              objectFit: "contain",
            }}
          />

          {/* BUTONLAR */}
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

            {/* GİRİŞ YAP */}
            <Button
              variant="contained"
              onClick={() => router.push("/login")}
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
      </Box>

      {/* ==================== HERO ==================== */}
      <Box
        sx={{
          minHeight: "600px",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #0f2742 0%, #1d527c 55%, #286b9d 100%)",
        }}
      >
        {/* Dekoratif şekil */}
        <Box
          sx={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            right: -150,
            top: -150,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
            left: -150,
            bottom: -150,
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              maxWidth: 700,
              py: 10,
            }}
          >
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: {
                  xs: "2.4rem",
                  sm: "3.5rem",
                  md: "4.2rem",
                },
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-1.5px",
                mb: 2,
              }}
            >
              Dijital Stajyer
              <br />
              Takip Sistemi
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.85)",
                fontSize: {
                  xs: "1rem",
                  sm: "1.15rem",
                },
                lineHeight: 1.8,
                maxWidth: 620,
                mb: 4,
              }}
            >
              Staj süreçlerinizi, günlük çalışmalarınızı ve görevlerinizi
              tek bir platform üzerinden kolayca yönetin ve takip edin.
            </Typography>

            <Button
              variant="contained"
              size="large"
              onClick={() => router.push("/login")}
              sx={{
                background: "#ffffff",
                color: "#0f2742",
                px: 5,
                py: 1.6,
                borderRadius: 1.5,
                fontSize: "1rem",
                fontWeight: 700,
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                "&:hover": {
                  background: "#f1f5f9",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                },
              }}
            >
              SİSTEME GİRİŞ
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ==================== ÖZELLİKLER ==================== */}
      <Box
        component="section"
        sx={{
          py: 10,
          background: "#ffffff",
        }}
      >
        <Container maxWidth="lg">
          {/* BAŞLIK */}
          <Box
            sx={{
              textAlign: "center",
              mb: 7,
            }}
          >
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: 700,
                color: "#111827",
                mb: 1.5,
              }}
            >
              Staj Sürecinizi Kolayca Yönetin
            </Typography>

            <Typography
              sx={{
                color: "#6b7280",
                maxWidth: 650,
                mx: "auto",
                lineHeight: 1.7,
              }}
            >
              Staj sürecinin farklı aşamalarını tek bir sistem üzerinden
              takip ederek daha düzenli ve verimli bir çalışma ortamı oluşturun.
            </Typography>
          </Box>

          {/* ÖZELLİK KARTLARI */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 3,
            }}
          >
            {/* GÖREV TAKİBİ */}
            <Paper
              elevation={0}
              sx={{
                p: 3.5,
                border: "1px solid #e5e7eb",
                borderRadius: 2,
                height: "100%",
                transition: "0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "2rem",
                  mb: 2,
                }}
              >
                📋
              </Typography>

              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "#0f2742",
                  mb: 1,
                }}
              >
                Görev Takibi
              </Typography>

              <Typography
                sx={{
                  color: "#6b7280",
                  fontSize: "0.88rem",
                  lineHeight: 1.6,
                }}
              >
                Stajyerlerin günlük görevlerini ve çalışmalarını takip edin.
              </Typography>
            </Paper>

            {/* STAJ GÜNLÜĞÜ */}
            <Paper
              elevation={0}
              sx={{
                p: 3.5,
                border: "1px solid #e5e7eb",
                borderRadius: 2,
                height: "100%",
                transition: "0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "2rem",
                  mb: 2,
                }}
              >
                📖
              </Typography>

              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "#0f2742",
                  mb: 1,
                }}
              >
                Staj Günlüğü
              </Typography>

              <Typography
                sx={{
                  color: "#6b7280",
                  fontSize: "0.88rem",
                  lineHeight: 1.6,
                }}
              >
                Günlük yapılan çalışmaların düzenli şekilde kaydedilmesini
                sağlayın.
              </Typography>
            </Paper>

            {/* İLERLEME TAKİBİ */}
            <Paper
              elevation={0}
              sx={{
                p: 3.5,
                border: "1px solid #e5e7eb",
                borderRadius: 2,
                height: "100%",
                transition: "0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "2rem",
                  mb: 2,
                }}
              >
                📊
              </Typography>

              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "#0f2742",
                  mb: 1,
                }}
              >
                İlerleme Takibi
              </Typography>

              <Typography
                sx={{
                  color: "#6b7280",
                  fontSize: "0.88rem",
                  lineHeight: 1.6,
                }}
              >
                Staj sürecindeki ilerlemeyi ve tamamlanan çalışmaları
                görüntüleyin.
              </Typography>
            </Paper>

            {/* KULLANICI YÖNETİMİ */}
            <Paper
              elevation={0}
              sx={{
                p: 3.5,
                border: "1px solid #e5e7eb",
                borderRadius: 2,
                height: "100%",
                transition: "0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "2rem",
                  mb: 2,
                }}
              >
                👥
              </Typography>

              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "#0f2742",
                  mb: 1,
                }}
              >
                Kullanıcı Yönetimi
              </Typography>

              <Typography
                sx={{
                  color: "#6b7280",
                  fontSize: "0.88rem",
                  lineHeight: 1.6,
                }}
              >
                Stajyer ve yetkili kullanıcıların sisteme erişimini yönetin.
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* ==================== FOOTER ==================== */}
      <Box
        component="footer"
        sx={{
          background: "#0b1d30",
          color: "#ffffff",
          pt: 7,
          pb: 3,
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
          {/* FOOTER ANA İÇERİK */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "2fr 1fr 1fr",
                md: "2.5fr 1fr 1fr",
              },
              gap: {
                xs: 4,
                md: 8,
              },
              pb: 5,
            }}
          >
            {/* LOGO / AÇIKLAMA */}
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
                    cursor: "pointer",
                    transition: "0.2s",
                    "&:hover": {
                      color: "#ffffff",
                    },
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
                    cursor: "pointer",
                    transition: "0.2s",
                    "&:hover": {
                      color: "#ffffff",
                    },
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
                    cursor: "pointer",
                    transition: "0.2s",
                    "&:hover": {
                      color: "#ffffff",
                    },
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
                    cursor: "pointer",
                    transition: "0.2s",
                    "&:hover": {
                      color: "#ffffff",
                    },
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