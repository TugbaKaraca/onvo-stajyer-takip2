"use client";

import {
  Box,
  Card,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";

import {
  Dashboard,
  Person,
  Assignment,
  Description,
  MenuBook,
  EventBusy,
  Folder,
  Campaign,
  Notifications,
  Settings,
  Logout,
  CalendarMonth,
  Business,
  School,
} from "@mui/icons-material";

import { useRouter } from "next/navigation";

export default function InternshipPage() {
  const router = useRouter();

  const menuItems = [
    {
      icon: <Dashboard />,
      text: "Kontrol Paneli",
      path: "/dashboard",
    },
    {
      icon: <Person />,
      text: "Profil",
      path: "/profile",
    },
    {
      icon: <Assignment />,
      text: "Staj Bilgilerim",
      path: "/internship",
    },
    {
      icon: <Description />,
      text: "Günlük Rapor",
      path: "/daily-report",
    },
    {
      icon: <MenuBook />,
      text: "Rapor Geçmişi",
      path: "/reports",
    },
    {
      icon: <EventBusy />,
      text: "Devam Durumu",
      path: "/attendance",
    },
    {
      icon: <Folder />,
      text: "Kütüphane",
      path: "/documents",
    },
    {
      icon: <Campaign />,
      text: "Duyurular",
      path: "/announcements",
    },
    {
      icon: <Notifications />,
      text: "Bildirimler",
      path: "/notifications",
    },
    {
      icon: <Settings />,
      text: "Ayarlar",
      path: "/settings",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F5F7FA",
        display: "flex",
      }}
    >
      {/* SOL MENÜ */}
      <Box
        sx={{
          width: 195,
          background:
            "linear-gradient(180deg, #0F2742 0%, #286B9D 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 10,
        }}
      >
        {/* LOGO */}
        <Box
          sx={{
            px: 2.2,
            py: 2.2,
            borderBottom: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <Box
            component="img"
            src="/logo.png"
            alt="ONVO"
            sx={{
              width: 105,
              height: "auto",
              display: "block",
              objectFit: "contain",
              filter: "brightness(0) invert(1)",
              mb: 0.8,
            }}
          />

          <Typography
            sx={{
              fontSize: 11,
              opacity: 0.9,
              mt: 0.3,
            }}
          >
            Stajyer Takip Sistemi
          </Typography>
        </Box>

        {/* MENÜ */}
        <Box
          sx={{
            px: 1,
            py: 1.5,
          }}
        >
          {menuItems.map((item) => {
            const active = item.path === "/internship";

            return (
              <Box
                key={item.text}
                onClick={() => router.push(item.path)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                  px: 1.3,
                  py: 1.05,
                  mb: 0.35,
                  borderRadius: 1.5,
                  cursor: "pointer",

                  backgroundColor: active
                    ? "rgba(255,255,255,0.20)"
                    : "transparent",

                  "&:hover": {
                    backgroundColor:
                      "rgba(255,255,255,0.14)",
                  },

                  transition: "0.2s",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    "& svg": {
                      fontSize: 19,
                    },
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: active ? 600 : 500,
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* ÇIKIŞ */}
        <Box
          sx={{
            mt: "auto",
            px: 1,
            pb: 2,
          }}
        >
          <Box
            onClick={() => router.push("/")}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              px: 1.3,
              py: 1,
              borderRadius: 1.5,
              cursor: "pointer",

              "&:hover": {
                backgroundColor:
                  "rgba(255,255,255,0.14)",
              },
            }}
          >
            <Logout sx={{ fontSize: 19 }} />

            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 500,
              }}
            >
              Çıkış Yap
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* ANA ALAN */}
      <Box
        sx={{
          marginLeft: "195px",
          width: "calc(100% - 195px)",
          minHeight: "100vh",
        }}
      >
        {/* ÜST BAR */}
        <Box
          sx={{
            height: 58,
            backgroundColor: "white",
            borderBottom: "1px solid #e4e7ec",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: 3,
          }}
        >
          <IconButton
            sx={{
              mr: 1,
              color: "#64748B",
            }}
          >
            <Notifications />
          </IconButton>

          <Box
            sx={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              backgroundColor: "#EDF4F9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#286B9D",
              mr: 1,
            }}
          >
            <Person sx={{ fontSize: 20 }} />
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: "bold",
                color: "#17202A",
              }}
            >
              Zeliha Koyuncu
            </Typography>

            <Typography
              sx={{
                fontSize: 9,
                color: "#64748B",
              }}
            >
              Stajyer
            </Typography>
          </Box>
        </Box>

        {/* SAYFA İÇERİĞİ */}
        <Box
          sx={{
            px: {
              xs: 2,
              md: 4,
            },
            py: 3,
            maxWidth: 1200,
            mx: "auto",
          }}
        >
          {/* BAŞLIK */}
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontSize: 28,
                fontWeight: "bold",
                color: "#0F2742",
                mb: 0.5,
              }}
            >
              Staj Bilgilerim
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 13,
              }}
            >
              Stajınızla ilgili temel bilgileri buradan
              görüntüleyebilirsiniz.
            </Typography>
          </Box>

          {/* ÜST KARTLAR */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
              gap: 2.5,
              mb: 2.5,
            }}
          >
            {/* STAJ BİLGİLERİ */}
            <Card
              elevation={0}
              sx={{
                p: 3,
                border: "1px solid #E4E7EC",
                borderRadius: 2,
                backgroundColor: "#FFFFFF",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.3,
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: 1.5,
                    backgroundColor: "#EDF4F9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#286B9D",
                  }}
                >
                  <School />
                </Box>

                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#0F2742",
                  }}
                >
                  Staj Bilgileri
                </Typography>
              </Box>

              <Divider sx={{ mb: 2.5 }} />

              <InfoItem
                label="Öğrenci"
                value="Zeliha Koyuncu"
              />

              <InfoItem
                label="Staj Türü"
                value="Zorunlu Staj"
              />

              <InfoItem
                label="Staj Süresi"
                value="20 İş Günü"
              />

              <Box>
                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: 11,
                    mb: 0.5,
                  }}
                >
                  Staj Durumu
                </Typography>

                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#16A34A",
                  }}
                >
                  ● Devam Ediyor
                </Typography>
              </Box>
            </Card>

            {/* TARİH BİLGİLERİ */}
            <Card
              elevation={0}
              sx={{
                p: 3,
                border: "1px solid #E4E7EC",
                borderRadius: 2,
                backgroundColor: "#FFFFFF",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.3,
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: 1.5,
                    backgroundColor: "#EDF4F9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#286B9D",
                  }}
                >
                  <CalendarMonth />
                </Box>

                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#0F2742",
                  }}
                >
                  Tarih Bilgileri
                </Typography>
              </Box>

              <Divider sx={{ mb: 2.5 }} />

              <InfoItem
                label="Staj Başlangıç Tarihi"
                value="10 Ağustos 2026"
              />

              <InfoItem
                label="Staj Bitiş Tarihi"
                value="04 Eylül 2026"
              />

              <Box>
                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: 11,
                    mb: 0.5,
                  }}
                >
                  Toplam Staj Günü
                </Typography>

                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#286B9D",
                  }}
                >
                  20 Gün
                </Typography>
              </Box>
            </Card>
          </Box>

          {/* KURUM BİLGİLERİ */}
          <Card
            elevation={0}
            sx={{
              p: 3,
              border: "1px solid #E4E7EC",
              borderRadius: 2,
              backgroundColor: "#FFFFFF",
              mb: 2.5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.3,
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: 1.5,
                  backgroundColor: "#EDF4F9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#286B9D",
                }}
              >
                <Business />
              </Box>

              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#0F2742",
                }}
              >
                Kurum Bilgileri
              </Typography>
            </Box>

            <Divider sx={{ mb: 2.5 }} />

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
              <InfoItem
                label="Kurum Adı"
                value="ONVO"
              />

              <InfoItem
                label="Departman"
                value="Yazılım"
              />

              <InfoItem
                label="Stajyer Pozisyonu"
                value="Yazılım Mühendisliği Stajyeri"
              />
            </Box>
          </Card>

          {/* STAJ AÇIKLAMASI */}
          <Card
            elevation={0}
            sx={{
              p: 3,
              border: "1px solid #E4E7EC",
              borderRadius: 2,
              backgroundColor: "#FFFFFF",
            }}
          >
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#0F2742",
                mb: 2,
              }}
            >
              Staj Açıklaması
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 13,
                lineHeight: 1.8,
              }}
            >
              Staj süreciniz boyunca devam durumunuzu, günlük
              raporlarınızı ve stajla ilgili belgelerinizi sistem
              üzerinden takip edebilirsiniz.
            </Typography>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

/* BİLGİ SATIRI */
function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography
        sx={{
          color: "#64748B",
          fontSize: 11,
          mb: 0.5,
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          fontSize: 14,
          fontWeight: "bold",
          color: "#0F2742",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}