"use client";

import {
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";

import Link from "next/link";
import { useState } from "react";

const helpSections = [
  {
    icon: "👤",
    title: "Stajyer Rehberi",
    description:
      "Stajyer hesabı üzerinden sistemi nasıl kullanacağınızı öğrenin.",
    content: [
      "Stajyer hesabınızla giriş yaptıktan sonra size ait panel üzerinden staj sürecinizi takip edebilirsiniz.",
      "Günlük çalışmalarınızı staj günlüğüne ekleyebilir ve size atanmış görevleri görüntüleyebilirsiniz.",
      "Staj süreciniz boyunca sistemde yer alan bilgilerin güncel ve doğru tutulması önemlidir.",
    ],
  },
  {
    icon: "🏢",
    title: "Yetkili Rehberi",
    description:
      "Kurumsal kullanıcıların sistem üzerindeki temel işlemlerini öğrenin.",
    content: [
      "Yetkili kullanıcılar; İnsan Kaynakları, Staj Sorumlusu ve Sistem Görevlisi rollerinden oluşur.",
      "Her yetkili rolü, sistem içerisinde kendisine tanımlanan yetkiler doğrultusunda işlem yapar.",
      "Yetkili kullanıcılar staj süreçlerini ve stajyerlerle ilgili işlemleri kendi yetki alanları içerisinde takip edebilir.",
    ],
  },
  {
    icon: "📋",
    title: "Görev Yönetimi",
    description:
      "Görevlerin oluşturulması, takip edilmesi ve tamamlanması hakkında bilgi alın.",
    content: [
      "Staj sürecinde stajyerlere çeşitli görevler atanabilir.",
      "Stajyerler kendilerine atanmış görevleri görüntüleyebilir ve görevlerin durumunu takip edebilir.",
      "Yetkili kullanıcılar kendi yetkileri kapsamında görevlerin durumunu kontrol edebilir.",
    ],
  },
  {
    icon: "📖",
    title: "Staj Günlüğü",
    description:
      "Günlük çalışmalarınızı sisteme nasıl kaydedeceğinizi öğrenin.",
    content: [
      "Staj günlüğü, stajyerlerin günlük çalışmalarını ve staj sürecindeki faaliyetlerini kaydetmesini sağlar.",
      "Her gün gerçekleştirilen çalışmalar mümkün olduğunca açık ve anlaşılır şekilde sisteme girilmelidir.",
      "Girilen günlük kayıtları staj sürecinin düzenli şekilde takip edilmesine yardımcı olur.",
    ],
  },
  {
    icon: "🔐",
    title: "Hesap ve Giriş",
    description:
      "Sisteme giriş ve hesap kullanımı hakkında temel bilgileri görüntüleyin.",
    content: [
      "Ana sayfadaki Giriş Yap butonundan sisteme giriş ekranına ulaşabilirsiniz.",
      "Stajyerler Stajyer Girişi seçeneğini, kurumsal kullanıcılar ise Yetkili Girişi seçeneğini kullanır.",
      "Yetkili Girişi üzerinden İnsan Kaynakları, Staj Sorumlusu veya Sistem Görevlisi olarak ilgili hesabınıza erişebilirsiniz.",
    ],
  },
  {
    icon: "🛠️",
    title: "Teknik Destek",
    description:
      "Sistemi kullanırken teknik bir sorun yaşadığınızda ne yapmanız gerektiğini öğrenin.",
    content: [
      "Sisteme giriş yapamıyorsanız öncelikle kullandığınız e-posta ve şifre bilgilerinin doğru olduğunu kontrol edin.",
      "Sorun devam ediyorsa sistem görevlisi veya ilgili yetkili ile iletişime geçebilirsiniz.",
      "İletişim bilgilerine ulaşmak için İletişim sayfasını kullanabilirsiniz.",
    ],
  },
];

export default function Yardim() {
  const [selectedSection, setSelectedSection] = useState<number | null>(null);

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
          py: { xs: 7, md: 9 },
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
            Yardım Merkezi
          </Typography>

          <Typography
            sx={{
              maxWidth: 700,
              color: "rgba(255,255,255,0.85)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            ONVO Dijital Stajyer Takip Sistemi'ni kullanırken
            ihtiyacınız olan rehberlere buradan ulaşabilirsiniz.
          </Typography>
        </Container>
      </Box>

      {/* ==================== YARDIM KARTLARI ==================== */}
      <Container maxWidth="lg">
        <Box
          sx={{
            py: 8,
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              mb: 6,
            }}
          >
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: 700,
                color: "#0f2742",
                mb: 1,
              }}
            >
              Nasıl Yardımcı Olabiliriz?
            </Typography>

            <Typography
              sx={{
                color: "#64748b",
                maxWidth: 650,
                mx: "auto",
                lineHeight: 1.7,
              }}
            >
              Aşağıdaki başlıklardan ihtiyacınız olan rehberi
              seçerek sistem hakkında detaylı bilgi edinebilirsiniz.
            </Typography>
          </Box>

          {/* KARTLAR */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 3,
            }}
          >
            {helpSections.map((section, index) => (
              <Paper
                key={section.title}
                elevation={0}
                onClick={() =>
                  setSelectedSection(
                    selectedSection === index ? null : index
                  )
                }
                sx={{
                  p: 3.5,
                  borderRadius: 3,
                  border: "1px solid #e5e7eb",
                  cursor: "pointer",
                  transition: "0.25s",
                  background:
                    selectedSection === index
                      ? "#f0f6fa"
                      : "#ffffff",

                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                    borderColor: "#b8c7d6",
                  },
                }}
              >
                {/* İKON */}
                <Box
                  sx={{
                    width: 55,
                    height: 55,
                    borderRadius: 2,
                    background: "#eaf2f8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.7rem",
                    mb: 2.5,
                  }}
                >
                  {section.icon}
                </Box>

                {/* BAŞLIK */}
                <Typography
                  sx={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#0f2742",
                    mb: 1,
                  }}
                >
                  {section.title}
                </Typography>

                {/* AÇIKLAMA */}
                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                  }}
                >
                  {section.description}
                </Typography>

                {/* DETAY */}
                {selectedSection === index && (
                  <Box
                    sx={{
                      mt: 3,
                      pt: 3,
                      borderTop: "1px solid #dbe4eb",
                    }}
                  >
                    {section.content.map((paragraph, paragraphIndex) => (
                      <Typography
                        key={paragraphIndex}
                        sx={{
                          color: "#64748b",
                          fontSize: "0.88rem",
                          lineHeight: 1.8,
                          mb:
                            paragraphIndex ===
                            section.content.length - 1
                              ? 0
                              : 1.5,
                        }}
                      >
                        {paragraph}
                      </Typography>
                    ))}
                  </Box>
                )}

                {/* DETAY GÖSTER */}
                <Typography
                  sx={{
                    mt: 2.5,
                    color: "#286b9d",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                  }}
                >
                  {selectedSection === index
                    ? "Detayı Gizle ↑"
                    : "Detayları Gör →"}
                </Typography>
              </Paper>
            ))}
          </Box>

          {/* ==================== İLETİŞİM ==================== */}
          <Box
            sx={{
              mt: 7,
              background: "#0f2742",
              borderRadius: 3,
              p: { xs: 3, md: 5 },
              textAlign: "center",
              color: "#ffffff",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: 700,
                mb: 1,
              }}
            >
              Yardıma mı ihtiyacınız var?
            </Typography>

            <Typography
              sx={{
                color: "#cbd5e1",
                lineHeight: 1.7,
                mb: 3,
              }}
            >
              Aradığınız bilgiye ulaşamadıysanız iletişim
              sayfamız üzerinden bizimle iletişime geçebilirsiniz.
            </Typography>

            <Link
              href="/iletisim"
              style={{
                textDecoration: "none",
              }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  background: "#ffffff",
                  color: "#0f2742",
                  px: 3,
                  py: 1.3,
                  borderRadius: 1.5,
                  fontWeight: 700,
                  transition: "0.2s",
                  "&:hover": {
                    background: "#f1f5f9",
                  },
                }}
              >
                İLETİŞİME GEÇ
              </Box>
            </Link>
          </Box>
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