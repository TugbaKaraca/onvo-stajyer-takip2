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
  AccessTime,
  CheckCircle,
  Cancel,
  Warning,
} from "@mui/icons-material";

import { useRouter } from "next/navigation";

export default function AttendancePage() {
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
            const active = item.path === "/attendance";

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
              Devam Durumu
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 13,
              }}
            >
              Staj süreniz boyunca devam durumunuzu buradan takip
              edebilirsiniz.
            </Typography>
          </Box>

          {/* ÖZET KARTLARI */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: 2,
              mb: 3,
            }}
          >
            {/* TOPLAM */}
            <Card
              elevation={0}
              sx={{
                p: 2.5,
                border: "1px solid #E4E7EC",
                borderRadius: 2,
                backgroundColor: "#FFFFFF",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#64748B",
                  }}
                >
                  Toplam Staj Günü
                </Typography>

                <AccessTime
                  sx={{
                    color: "#286B9D",
                    fontSize: 22,
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: 25,
                  fontWeight: "bold",
                  mt: 1,
                  color: "#0F2742",
                }}
              >
                20 Gün
              </Typography>
            </Card>

            {/* GELİNEN */}
            <Card
              elevation={0}
              sx={{
                p: 2.5,
                border: "1px solid #E4E7EC",
                borderRadius: 2,
                backgroundColor: "#FFFFFF",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#64748B",
                  }}
                >
                  Gelinen Gün
                </Typography>

                <CheckCircle
                  sx={{
                    color: "#16A34A",
                    fontSize: 22,
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: 25,
                  fontWeight: "bold",
                  mt: 1,
                  color: "#16A34A",
                }}
              >
                12 Gün
              </Typography>
            </Card>

            {/* DEVAMSIZLIK */}
            <Card
              elevation={0}
              sx={{
                p: 2.5,
                border: "1px solid #E4E7EC",
                borderRadius: 2,
                backgroundColor: "#FFFFFF",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#64748B",
                  }}
                >
                  Devamsızlık
                </Typography>

                <Cancel
                  sx={{
                    color: "#DC2626",
                    fontSize: 22,
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: 25,
                  fontWeight: "bold",
                  mt: 1,
                  color: "#DC2626",
                }}
              >
                0 Gün
              </Typography>
            </Card>

            {/* KALAN */}
            <Card
              elevation={0}
              sx={{
                p: 2.5,
                border: "1px solid #E4E7EC",
                borderRadius: 2,
                backgroundColor: "#FFFFFF",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#64748B",
                  }}
                >
                  Kalan Staj
                </Typography>

                <Warning
                  sx={{
                    color: "#F59E0B",
                    fontSize: 22,
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: 25,
                  fontWeight: "bold",
                  mt: 1,
                  color: "#F59E0B",
                }}
              >
                8 Gün
              </Typography>
            </Card>
          </Box>

          {/* ALT BÖLÜM */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                lg: "1.2fr 0.8fr",
              },
              gap: 2.5,
            }}
          >
            {/* DEVAM DURUMU */}
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
                Devam Durumu
              </Typography>

              <Divider sx={{ mb: 2 }} />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    backgroundColor: "#ECFDF3",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CheckCircle
                    sx={{
                      fontSize: 30,
                      color: "#16A34A",
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: 17,
                      fontWeight: "bold",
                      color: "#16A34A",
                    }}
                  >
                    Devam Ediyor
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 12,
                      color: "#64748B",
                    }}
                  >
                    Stajınıza düzenli olarak devam ediyorsunuz.
                  </Typography>
                </Box>
              </Box>

              <Typography
                sx={{
                  fontSize: 13,
                  color: "#64748B",
                  mb: 1,
                }}
              >
                Staj İlerlemesi
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  height: 10,
                  backgroundColor: "#E5E7EB",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    width: "60%",
                    height: "100%",
                    backgroundColor: "#286B9D",
                    borderRadius: 10,
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 11,
                    color: "#64748B",
                  }}
                >
                  12 / 20 gün
                </Typography>

                <Typography
                  sx={{
                    fontSize: 11,
                    color: "#286B9D",
                    fontWeight: "bold",
                  }}
                >
                  %60
                </Typography>
              </Box>
            </Card>

            {/* SON DEVAM KAYDI */}
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
                Son Devam Kaydı
              </Typography>

              <Divider sx={{ mb: 2 }} />

              <Typography
                sx={{
                  fontSize: 12,
                  color: "#64748B",
                  mb: 0.5,
                }}
              >
                Tarih
              </Typography>

              <Typography
                sx={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#0F2742",
                  mb: 2,
                }}
              >
                12 Ağustos 2026
              </Typography>

              <Typography
                sx={{
                  fontSize: 12,
                  color: "#64748B",
                  mb: 0.8,
                }}
              >
                Durum
              </Typography>

              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.7,
                  px: 1.5,
                  py: 0.7,
                  borderRadius: 5,
                  backgroundColor: "#ECFDF3",
                }}
              >
                <CheckCircle
                  sx={{
                    fontSize: 16,
                    color: "#16A34A",
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#16A34A",
                    fontWeight: "bold",
                  }}
                >
                  Devam
                </Typography>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}