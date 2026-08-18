"use client";

import {
  Box,
  Card,
  Chip,
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
  CheckCircle,
  Warning,
  Info,
} from "@mui/icons-material";

import { useRouter } from "next/navigation";

export default function NotificationsPage() {
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

  const notifications = [
    {
      title: "Staj devam kaydınız oluşturuldu",
      message:
        "12 Ağustos 2026 tarihli staj devam kaydınız başarıyla oluşturuldu.",
      date: "12 Ağustos 2026",
      type: "Devam",
      color: "success" as const,
      icon: <CheckCircle />,
    },
    {
      title: "Günlük rapor hatırlatması",
      message:
        "Bugünkü staj günlük raporunuzu doldurmayı unutmayın.",
      date: "12 Ağustos 2026",
      type: "Hatırlatma",
      color: "warning" as const,
      icon: <Warning />,
    },
    {
      title: "Stajınız devam ediyor",
      message:
        "Staj süreciniz aktif olarak devam etmektedir. Kalan staj gününüzü devam durumundan takip edebilirsiniz.",
      date: "11 Ağustos 2026",
      type: "Bilgi",
      color: "info" as const,
      icon: <Info />,
    },
    {
      title: "Raporunuz onaylandı",
      message:
        "Göndermiş olduğunuz günlük staj raporu başarıyla onaylandı.",
      date: "11 Ağustos 2026",
      type: "Onay",
      color: "success" as const,
      icon: <CheckCircle />,
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
            const active = item.path === "/notifications";

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
            onClick={() => router.push("/notifications")}
            sx={{
              mr: 1,
              color: "#286B9D",
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
              Bildirimler
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 13,
              }}
            >
              Staj sürecinizle ilgili bildirimleri buradan takip
              edebilirsiniz.
            </Typography>
          </Box>

          {/* BİLDİRİMLER */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {notifications.map((notification, index) => {
              const isSuccess =
                notification.color === "success";
              const isWarning =
                notification.color === "warning";

              return (
                <Card
                  key={index}
                  elevation={0}
                  sx={{
                    border: "1px solid #E4E7EC",
                    borderRadius: 2,
                    backgroundColor: "#FFFFFF",
                    transition: "0.2s",

                    "&:hover": {
                      boxShadow:
                        "0 5px 18px rgba(15,39,66,0.08)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      p: 2.5,
                      display: "flex",
                      alignItems: {
                        xs: "flex-start",
                        sm: "center",
                      },
                      gap: 2,
                    }}
                  >
                    {/* İKON */}
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        minWidth: 48,
                        borderRadius: "50%",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                        backgroundColor: isSuccess
                          ? "#ECFDF3"
                          : isWarning
                          ? "#FFF7ED"
                          : "#EDF4F9",

                        color: isSuccess
                          ? "#16A34A"
                          : isWarning
                          ? "#D97706"
                          : "#286B9D",

                        "& svg": {
                          fontSize: 25,
                        },
                      }}
                    >
                      {notification.icon}
                    </Box>

                    {/* İÇERİK */}
                    <Box
                      sx={{
                        flex: 1,
                        minWidth: 0,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: {
                            xs: "flex-start",
                            sm: "center",
                          },
                          flexDirection: {
                            xs: "column",
                            sm: "row",
                          },
                          gap: 1,
                          mb: 0.7,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#0F2742",
                          }}
                        >
                          {notification.title}
                        </Typography>

                        <Chip
                          label={notification.type}
                          size="small"
                          color={notification.color}
                          sx={{
                            fontWeight: 600,
                            height: 24,
                          }}
                        />
                      </Box>

                      <Typography
                        sx={{
                          color: "#64748B",
                          fontSize: 13,
                          lineHeight: 1.6,
                          mb: 1,
                        }}
                      >
                        {notification.message}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#94A3B8",
                          fontSize: 11,
                        }}
                      >
                        {notification.date}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              );
            })}
          </Box>

          {/* ALT BİLGİ */}
          <Divider sx={{ my: 4 }} />

          <Typography
            sx={{
              textAlign: "center",
              color: "#94A3B8",
              fontSize: 12,
            }}
          >
            Tüm bildirimleriniz burada görüntülenmektedir.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}