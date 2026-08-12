"use client";

import {
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";

import Link from "next/link";
import { useState } from "react";

const questions = [
  {
    question: "Sisteme kimler giriş yapabilir?",
    answer:
      "Sistemi stajyerler ve yetkili kullanıcılar kullanabilir. Yetkili kullanıcılar İnsan Kaynakları, Staj Sorumlusu ve Sistem Görevlisi rollerinden oluşur.",
  },
  {
    question: "Stajyer ve yetkili girişleri arasındaki fark nedir?",
    answer:
      "Stajyer Girişi stajyerlerin kendi staj süreçlerini takip etmesi için kullanılır. Yetkili Girişi ise İnsan Kaynakları, Staj Sorumlusu ve Sistem Görevlisi gibi kurumsal kullanıcıların kendi yetkileri doğrultusunda sisteme erişmesini sağlar.",
  },
  {
    question: "Staj günlüğümü kimler görebilir?",
    answer:
      "Staj günlüğü, sistemde tanımlanan yetkilere bağlı olarak ilgili yetkili kullanıcılar tarafından görüntülenebilir. Erişim yetkileri kullanıcının rolüne göre belirlenir.",
  },
  {
    question: "Görevlerimi kim oluşturur?",
    answer:
      "Stajyerlere atanacak görevler, sistemdeki yetkilerine bağlı olarak ilgili yetkili kullanıcılar tarafından oluşturulabilir ve takip edilebilir.",
  },
  {
    question: "Staj sürecimi kim takip eder?",
    answer:
      "Staj süreci, kullanıcının yetkilendirme yapısına bağlı olarak İnsan Kaynakları, Staj Sorumlusu ve Sistem Görevlisi tarafından takip edilebilir.",
  },
  {
    question: "Staj sürecimle ilgili bilgileri nereden görebilirim?",
    answer:
      "Staj sürecinizle ilgili bilgiler, sisteme giriş yaptıktan sonra hesabınıza tanımlanan ilgili bölümler üzerinden görüntülenebilir.",
  },
  {
    question: "Şifremi unuttuğumda ne yapmalıyım?",
    answer:
      "Şifrenizle ilgili sorun yaşamanız durumunda sistem görevlisi veya ilgili yetkili ile iletişime geçerek hesabınızın kontrol edilmesini sağlayabilirsiniz.",
  },
  {
    question: "Sisteme giriş yapamıyorum, ne yapmalıyım?",
    answer:
      "Öncelikle e-posta ve şifre bilgilerinizin doğru olduğunu kontrol edin. Sorun devam ederse sistem görevlisiyle veya ilgili yetkiliyle iletişime geçebilirsiniz.",
  },
  {
    question: "Stajyer hesabı ile yetkili hesabı aynı mıdır?",
    answer:
      "Hayır. Stajyer ve yetkili kullanıcıların sistem içerisindeki görevleri ve erişebilecekleri alanlar farklıdır. Her kullanıcı kendisine tanımlanan hesap ve yetkiler üzerinden sisteme erişir.",
  },
  {
    question: "Bir sorun yaşadığımda nereden destek alabilirim?",
    answer:
      "Sistemle ilgili sorunlarınız için Yardım Merkezi'ni inceleyebilir veya İletişim sayfasında bulunan iletişim kanallarını kullanabilirsiniz.",
  },
];

export default function SSS() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            Sıkça Sorulan Sorular
          </Typography>

          <Typography
            sx={{
              maxWidth: 720,
              color: "rgba(255,255,255,0.85)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            ONVO Dijital Stajyer Takip Sistemi hakkında merak
            edilen soruların cevaplarını burada bulabilirsiniz.
          </Typography>
        </Container>
      </Box>

      {/* ==================== SORULAR ==================== */}
      <Container maxWidth="md">
        <Box
          sx={{
            py: 8,
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              mb: 5,
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
              Merak Ettikleriniz
            </Typography>

            <Typography
              sx={{
                color: "#64748b",
                lineHeight: 1.7,
              }}
            >
              Sorunun üzerine tıklayarak cevabı görüntüleyebilirsiniz.
            </Typography>
          </Box>

          {/* SORU LİSTESİ */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {questions.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <Paper
                  key={item.question}
                  elevation={0}
                  onClick={() => toggleQuestion(index)}
                  sx={{
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor: isOpen ? "#286b9d" : "#e5e7eb",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    background: "#ffffff",

                    "&:hover": {
                      borderColor: "#286b9d",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                    },
                  }}
                >
                  {/* SORU */}
                  <Box
                    sx={{
                      minHeight: 70,
                      px: { xs: 2.5, md: 3 },
                      py: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          minWidth: 34,
                          width: 34,
                          height: 34,
                          borderRadius: "50%",
                          background: isOpen
                            ? "#0f2742"
                            : "#eaf2f8",
                          color: isOpen
                            ? "#ffffff"
                            : "#0f2742",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.8rem",
                          fontWeight: 700,
                        }}
                      >
                        {index + 1}
                      </Box>

                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "#0f2742",
                          fontSize: {
                            xs: "0.9rem",
                            md: "1rem",
                          },
                        }}
                      >
                        {item.question}
                      </Typography>
                    </Box>

                    {/* AÇ / KAPAT */}
                    <Typography
                      sx={{
                        color: "#286b9d",
                        fontSize: "1.4rem",
                        fontWeight: 400,
                        minWidth: 25,
                        textAlign: "center",
                      }}
                    >
                      {isOpen ? "−" : "+"}
                    </Typography>
                  </Box>

                  {/* CEVAP */}
                  {isOpen && (
                    <Box
                      sx={{
                        px: { xs: 2.5, md: 3 },
                        pb: 3,
                        pt: 0,
                      }}
                    >
                      <Box
                        sx={{
                          ml: {
                            xs: 0,
                            md: 6,
                          },
                          pl: 2,
                          borderLeft: "3px solid #286b9d",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#64748b",
                            fontSize: "0.92rem",
                            lineHeight: 1.8,
                          }}
                        >
                          {item.answer}
                        </Typography>
                      </Box>
                    </Box>
                  )}
                </Paper>
              );
            })}
          </Box>

          {/* ==================== DESTEK ==================== */}
          <Box
            sx={{
              mt: 6,
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              background: "#0f2742",
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.4rem",
                fontWeight: 700,
                mb: 1,
              }}
            >
              Sorunuzun cevabını bulamadınız mı?
            </Typography>

            <Typography
              sx={{
                color: "#cbd5e1",
                lineHeight: 1.7,
                mb: 3,
              }}
            >
              Daha fazla bilgi için Yardım Merkezi'ni
              inceleyebilir veya bizimle iletişime geçebilirsiniz.
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/yardim"
                style={{
                  textDecoration: "none",
                }}
              >
                <Box
                  sx={{
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
                  YARDIM MERKEZİ
                </Box>
              </Link>

              <Link
                href="/iletisim"
                style={{
                  textDecoration: "none",
                }}
              >
                <Box
                  sx={{
                    background: "transparent",
                    color: "#ffffff",
                    px: 3,
                    py: 1.3,
                    borderRadius: 1.5,
                    fontWeight: 700,
                    border: "1px solid rgba(255,255,255,0.5)",
                    transition: "0.2s",
                    "&:hover": {
                      background: "rgba(255,255,255,0.08)",
                    },
                  }}
                >
                  İLETİŞİM
                </Box>
              </Link>
            </Box>
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
