import {
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";

import Link from "next/link";

export default function Hakkimizda() {
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
            Hakkımızda
          </Typography>

          <Typography
            sx={{
              maxWidth: 700,
              color: "rgba(255,255,255,0.85)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
          
          </Typography>
        </Container>
      </Box>

      {/* ==================== İÇERİK ==================== */}
      <Container maxWidth="lg">
        <Box
          sx={{
            py: 8,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {/* KURUMSAL TARİHÇE */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              border: "1px solid #e5e7eb",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: "#0f2742",
                mb: 2,
              }}
            >
              Kurumsal Tarihçe
            </Typography>

            <Typography
              sx={{
                color: "#5f6b7a",
                lineHeight: 1.9,
                mb: 2,
              }}
            >
              ONVO Elektronik, 2020 yılında İstanbul merkezli olarak
              faaliyetlerine başlamıştır. Şirket, yerli üretim gücüyle
              kaliteli ve erişilebilir tüketici elektroniği ürünleri
              geliştirme ve güçlü bir Türk markası oluşturma amacıyla
              çalışmalarını sürdürmektedir.
            </Typography>

            <Typography
              sx={{
                color: "#5f6b7a",
                lineHeight: 1.9,
              }}
            >
              Kuruluşundan itibaren televizyon ve scooter üretimi üzerine
              yoğunlaşan ONVO, zaman içerisinde ürün portföyünü küçük ev
              aletleri, akıllı ev sistemleri ve bağlantılı cihazlar gibi
              farklı teknoloji alanlarına genişletmiştir.
            </Typography>
          </Paper>

          {/* FAALİYET ALANLARI */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              border: "1px solid #e5e7eb",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: "#0f2742",
                mb: 3,
              }}
            >
              Faaliyet Alanları
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                },
                gap: 2,
              }}
            >
              {[
                "Televizyon",
                "Scooter",
                "Küçük Ev Aletleri",
                "Akıllı Teknolojiler",
              ].map((item) => (
                <Box
                  key={item}
                  sx={{
                    p: 3,
                    background: "#f5f7fa",
                    borderRadius: 2,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "#0f2742",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>

          {/* MİSYON */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              border: "1px solid #e5e7eb",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: "#0f2742",
                mb: 2,
              }}
            >
              Misyon
            </Typography>

            <Typography
              sx={{
                color: "#5f6b7a",
                lineHeight: 1.9,
              }}
            >
              Hayatı kolaylaştıran teknolojiler sunmak, günlük yaşamı
              daha konforlu hale getiren yenilikçi ve erişilebilir
              çözümler geliştirmek. Yerli üretim gücüyle teknolojiyle
              uyumlu, kullanımı kolay ve kullanıcıların hayatına değer
              katan ürünler sunmak.
            </Typography>
          </Paper>

          {/* VİZYON */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              border: "1px solid #e5e7eb",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: "#0f2742",
                mb: 2,
              }}
            >
              Vizyon
            </Typography>

            <Typography
              sx={{
                color: "#5f6b7a",
                lineHeight: 1.9,
              }}
            >
              Yerli üretimden alınan güçle teknolojiyi estetik tasarım
              ve yüksek performansla buluşturmak, global pazarlarda
              rekabet edebilecek yenilikçi çözümler geliştirmek ve
              dijital dönüşümün öncü markalarından biri olmak.
            </Typography>
          </Paper>

          {/* ŞİRKET POLİTİKASI */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              border: "1px solid #e5e7eb",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: "#0f2742",
                mb: 2,
              }}
            >
              Şirket Politikası
            </Typography>

            <Typography
              sx={{
                color: "#5f6b7a",
                lineHeight: 1.9,
              }}
            >
              ONVO Elektronik; müşteri memnuniyetini temel ilke edinerek
              kaliteli, sürdürülebilir ve ekonomik çözümler sunmayı
              hedeflemektedir. Şirket faaliyetlerini kalite, iş sağlığı
              ve güvenliği, çevre ve bilgi güvenliği gibi alanlarda
              belirlenen yönetim sistemleri doğrultusunda sürdürmektedir.
            </Typography>
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