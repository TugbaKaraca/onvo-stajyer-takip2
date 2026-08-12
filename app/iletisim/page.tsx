import {
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";

import Link from "next/link";

export default function Iletisim() {
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
          <Link
            href="/login"
            style={{
              textDecoration: "none",
            }}
          >
            <Box
              sx={{
                background: "#0f2742",
                color: "#ffffff",
                px: 3,
                py: 1.2,
                borderRadius: 1.5,
                fontWeight: 700,
                fontSize: "0.9rem",
                transition: "0.2s",
                "&:hover": {
                  background: "#173b61",
                },
              }}
            >
              GİRİŞ YAP
            </Box>
          </Link>
        </Box>
      </Box>

      {/* ==================== HERO ==================== */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #0f2742 0%, #1d527c 55%, #286b9d 100%)",
          color: "#ffffff",
          py: { xs: 7, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontSize: {
                xs: "2.2rem",
                md: "3.5rem",
              },
              fontWeight: 800,
              mb: 2,
            }}
          >
            İletişim
          </Typography>

          <Typography
            sx={{
              maxWidth: 700,
              color: "rgba(255,255,255,0.85)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            ONVO hakkında bilgi almak ve bizimle iletişime geçmek için
            aşağıdaki iletişim kanallarını kullanabilirsiniz.
          </Typography>
        </Container>
      </Box>

      {/* ==================== İLETİŞİM BİLGİLERİ ==================== */}
      <Container maxWidth="lg">
        <Box
          sx={{
            py: 8,
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3, 1fr)",
              },
              gap: 3,
            }}
          >
            {/* ADRES */}
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                border: "1px solid #e5e7eb",
                minHeight: 220,
                transition: "0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                },
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: 2,
                  background: "#eaf2f8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                  fontSize: "1.5rem",
                }}
              >
                📍
              </Box>

              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#0f2742",
                  mb: 1.5,
                }}
              >
                Adres
              </Typography>

              <Typography
                sx={{
                  color: "#64748b",
                  lineHeight: 1.7,
                  fontSize: "0.95rem",
                }}
              >
                Mimaroba Mah. Emirşah Sok.
                <br />
                No: 8/1
                <br />
                Büyükçekmece / İstanbul
              </Typography>
            </Paper>

            {/* TELEFON */}
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                border: "1px solid #e5e7eb",
                minHeight: 220,
                transition: "0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                },
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: 2,
                  background: "#eaf2f8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                  fontSize: "1.5rem",
                }}
              >
                📞
              </Box>

              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#0f2742",
                  mb: 1.5,
                }}
              >
                Telefon
              </Typography>

              <Typography
                component="a"
                href="tel:08508866686"
                sx={{
                  color: "#286b9d",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                0850 886 66 86
              </Typography>

              <Typography
                sx={{
                  color: "#64748b",
                  fontSize: "0.85rem",
                  mt: 1,
                }}
              >
                ONVO Müşteri İletişim Merkezi
              </Typography>
            </Paper>

            {/* E-POSTA */}
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                border: "1px solid #e5e7eb",
                minHeight: 220,
                transition: "0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                },
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: 2,
                  background: "#eaf2f8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                  fontSize: "1.5rem",
                }}
              >
                ✉️
              </Box>

              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#0f2742",
                  mb: 1.5,
                }}
              >
                E-Posta
              </Typography>

              <Typography
                component="a"
                href="mailto:info@onvo.com.tr"
                sx={{
                  color: "#286b9d",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  wordBreak: "break-word",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                info@onvo.com.tr
              </Typography>

              <Typography
                sx={{
                  color: "#64748b",
                  fontSize: "0.85rem",
                  mt: 1,
                }}
              >
                Genel iletişim
              </Typography>
            </Paper>
          </Box>

          {/* ==================== ALT BİLGİ ==================== */}
          <Paper
            elevation={0}
            sx={{
              mt: 4,
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              border: "1px solid #e5e7eb",
              background: "#ffffff",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#0f2742",
                mb: 2,
              }}
            >
              ONVO ile İletişime Geçin
            </Typography>

            <Typography
              sx={{
                color: "#64748b",
                lineHeight: 1.8,
                maxWidth: 850,
              }}
            >
              Ürünler, hizmetler veya diğer konular hakkında bilgi almak
              için ONVO'nun iletişim kanallarından yararlanabilirsiniz.
              Telefon veya e-posta üzerinden ONVO ile iletişime
              geçebilirsiniz.
            </Typography>

            <Box
              sx={{
                mt: 3,
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Box
                component="a"
                href="tel:08508866686"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#0f2742",
                  color: "#ffffff",
                  textDecoration: "none",
                  px: 3,
                  py: 1.3,
                  borderRadius: 1.5,
                  fontWeight: 700,
                  transition: "0.2s",
                  "&:hover": {
                    background: "#173b61",
                  },
                }}
              >
                Bizi Arayın
              </Box>

              <Box
                component="a"
                href="mailto:info@onvo.com.tr"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#ffffff",
                  color: "#0f2742",
                  textDecoration: "none",
                  px: 3,
                  py: 1.3,
                  borderRadius: 1.5,
                  fontWeight: 700,
                  border: "1px solid #0f2742",
                  transition: "0.2s",
                  "&:hover": {
                    background: "#f1f5f9",
                  },
                }}
              >
                E-Posta Gönderin
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>

      {/* ==================== FOOTER ==================== */}
      <Box
        component="footer"
        sx={{
          background: "#0b1d30",
          color: "#ffffff",
          py: 4,
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
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              gap: 2,
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

            <Link
              href="/"
              style={{
                color: "#94a3b8",
                textDecoration: "none",
                fontSize: "0.85rem",
              }}
            >
              Ana Sayfa
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
