"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import DescriptionIcon from "@mui/icons-material/Description";
import HistoryIcon from "@mui/icons-material/History";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import FolderIcon from "@mui/icons-material/Folder";
import CampaignIcon from "@mui/icons-material/Campaign";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import LockIcon from "@mui/icons-material/Lock";
import SaveIcon from "@mui/icons-material/Save";

export default function SettingsPage() {
  const router = useRouter();

  const menuItems = [
    {
      title: "Kontrol Paneli",
      icon: <DashboardIcon />,
      path: "/dashboard",
    },
    {
      title: "Profil",
      icon: <PersonIcon />,
      path: "/profile",
    },
    {
      title: "Staj Bilgilerim",
      icon: <BadgeIcon />,
      path: "/internship",
    },
    {
      title: "Günlük Rapor",
      icon: <DescriptionIcon />,
      path: "/daily-report",
    },
    {
      title: "Rapor Geçmişi",
      icon: <HistoryIcon />,
      path: "/reports",
    },
    {
      title: "Devam Durumu",
      icon: <EventBusyIcon />,
      path: "/attendance",
    },
    {
      title: "Kütüphane",
      icon: <FolderIcon />,
      path: "/documents",
    },
    {
      title: "Duyurular",
      icon: <CampaignIcon />,
      path: "/announcements",
    },
    {
      title: "Bildirimler",
      icon: <NotificationsIcon />,
      path: "/notifications",
    },
    {
      title: "Ayarlar",
      icon: <SettingsIcon />,
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
            const active = item.path === "/settings";

            return (
              <Box
                key={item.title}
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
                  {item.title}
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
            <LogoutIcon sx={{ fontSize: 19 }} />

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
            <NotificationsIcon />
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
            <PersonIcon sx={{ fontSize: 20 }} />
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

        {/* İÇERİK */}
        <Box
          sx={{
            px: {
              xs: 2,
              md: 4,
            },
            py: 3,
            maxWidth: 1100,
            mx: "auto",
          }}
        >
          {/* BAŞLIK */}
          <Box sx={{ mb: 3 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 1.5,
                  backgroundColor: "#EDF4F9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#286B9D",
                }}
              >
                <SettingsIcon />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: 28,
                    fontWeight: "bold",
                    color: "#0F2742",
                  }}
                >
                  Ayarlar
                </Typography>

                <Typography
                  sx={{
                    fontSize: 13,
                    color: "#64748B",
                    mt: 0.3,
                  }}
                >
                  Hesap ve bildirim ayarlarınızı yönetin.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* HESAP BİLGİLERİ */}
          <Card
            elevation={0}
            sx={{
              border: "1px solid #e4e7ec",
              borderRadius: 2,
              backgroundColor: "#ffffff",
              mb: 2.5,
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.3,
                  mb: 2.5,
                }}
              >
                <PersonIcon sx={{ color: "#286B9D" }} />

                <Typography
                  sx={{
                    fontSize: 17,
                    fontWeight: "bold",
                    color: "#0F2742",
                  }}
                >
                  Hesap Bilgileri
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "1fr 1fr",
                  },
                  gap: 2,
                }}
              >
                <TextField
                  label="Ad Soyad"
                  value="Zeliha Koyuncu"
                  fullWidth
                  disabled
                />

                <TextField
                  label="E-posta"
                  value="zeliha@example.com"
                  fullWidth
                  disabled
                />
              </Box>

              <Typography
                sx={{
                  fontSize: 11,
                  color: "#64748B",
                  mt: 1.5,
                }}
              >
                Hesap bilgileri İK tarafından yönetilmektedir.
              </Typography>
            </CardContent>
          </Card>

          {/* BİLDİRİMLER */}
          <Card
            elevation={0}
            sx={{
              border: "1px solid #e4e7ec",
              borderRadius: 2,
              backgroundColor: "#ffffff",
              mb: 2.5,
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.3,
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 1.5,
                    backgroundColor: "#EDF4F9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#286B9D",
                  }}
                >
                  <NotificationsIcon />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: 17,
                      fontWeight: "bold",
                      color: "#0F2742",
                    }}
                  >
                    Bildirimler
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 10,
                      color: "#64748B",
                    }}
                  >
                    Hangi bildirimleri almak istediğinizi seçin.
                  </Typography>
                </Box>
              </Box>

              {/* E-POSTA */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: 2,
                }}
              >
                <Box sx={{ pr: 2 }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#0F2742",
                    }}
                  >
                    E-posta Bildirimleri
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 11,
                      color: "#64748B",
                      mt: 0.4,
                    }}
                  >
                    Önemli sistem bildirimlerini e-posta ile alın.
                  </Typography>
                </Box>

                <Switch defaultChecked />
              </Box>

              <Divider />

              {/* RAPOR */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: 2,
                }}
              >
                <Box sx={{ pr: 2 }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#0F2742",
                    }}
                  >
                    Rapor Bildirimleri
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 11,
                      color: "#64748B",
                      mt: 0.4,
                    }}
                  >
                    Raporunuz incelendiğinde bildirim alın.
                  </Typography>
                </Box>

                <Switch defaultChecked />
              </Box>

              <Divider />

              {/* DUYURU */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: 2,
                }}
              >
                <Box sx={{ pr: 2 }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#0F2742",
                    }}
                  >
                    Duyuru Bildirimleri
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 11,
                      color: "#64748B",
                      mt: 0.4,
                    }}
                  >
                    Yeni duyurulardan haberdar olun.
                  </Typography>
                </Box>

                <Switch defaultChecked />
              </Box>
            </CardContent>
          </Card>

          {/* GÜVENLİK */}
          <Card
            elevation={0}
            sx={{
              border: "1px solid #e4e7ec",
              borderRadius: 2,
              backgroundColor: "#ffffff",
              mb: 2.5,
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.3,
                  mb: 2.5,
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 1.5,
                    backgroundColor: "#EDF4F9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#286B9D",
                  }}
                >
                  <LockIcon />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: 17,
                      fontWeight: "bold",
                      color: "#0F2742",
                    }}
                  >
                    Güvenlik
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 10,
                      color: "#64748B",
                    }}
                  >
                    Hesabınızın güvenlik ayarlarını yönetin.
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="outlined"
                startIcon={<LockIcon />}
                sx={{
                  color: "#286B9D",
                  borderColor: "#286B9D",
                  borderRadius: 1.5,
                  px: 2.5,

                  "&:hover": {
                    borderColor: "#0F2742",
                    backgroundColor: "#F5F7FA",
                  },
                }}
              >
                ŞİFREMİ DEĞİŞTİR
              </Button>
            </CardContent>
          </Card>

          {/* BUTONLAR */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 1.5,
              pb: 3,
            }}
          >
            <Button
              variant="outlined"
              onClick={() => router.push("/dashboard")}
              sx={{
                borderColor: "#CBD5E1",
                color: "#475569",
                borderRadius: 1.5,
                px: 3,

                "&:hover": {
                  borderColor: "#94A3B8",
                  backgroundColor: "#F8FAFC",
                },
              }}
            >
              İPTAL
            </Button>

            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              sx={{
                backgroundColor: "#286B9D",
                borderRadius: 1.5,
                px: 3,

                "&:hover": {
                  backgroundColor: "#0F2742",
                },
              }}
              onClick={() => {
                alert("Ayarlar başarıyla kaydedildi.");
              }}
            >
              AYARLARI KAYDET
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}