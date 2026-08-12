"use client";

import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  IconButton,
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
import SaveIcon from "@mui/icons-material/Save";

export default function ProfilePage() {
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
      title: "Belgelerim",
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
          <Typography
            sx={{
              fontSize: 23,
              fontWeight: "bold",
              letterSpacing: 0.5,
            }}
          >
            ONVO
          </Typography>

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
        <Box sx={{ px: 1, py: 1.5 }}>
          {menuItems.map((item) => {
            const active = item.path === "/profile";

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
                    backgroundColor: "rgba(255,255,255,0.14)",
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
        <Box sx={{ mt: "auto", px: 1, pb: 2 }}>
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
                backgroundColor: "rgba(255,255,255,0.14)",
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
        <Container
          maxWidth={false}
          sx={{
            px: {
              xs: 2,
              md: 4,
            },
            py: 3,
          }}
        >
          {/* BAŞLIK */}
          <Box sx={{ mb: 2.5 }}>
            <Typography
              sx={{
                fontSize: 28,
                fontWeight: "bold",
                color: "#0F2742",
              }}
            >
              Profilim
            </Typography>

            <Typography
              sx={{
                fontSize: 14,
                color: "#64748B",
                mt: 0.4,
              }}
            >
              Kişisel ve staj bilgilerinizi görüntüleyin ve güncelleyin.
            </Typography>
          </Box>

          {/* PROFİL + STAJ BİLGİLERİ */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                lg: "1.1fr 0.9fr",
              },
              gap: 2.5,
            }}
          >
            {/* KİŞİSEL BİLGİLER */}
            <Card
              elevation={0}
              sx={{
                p: 3,
                border: "1px solid #e4e7ec",
                borderRadius: 2,
                backgroundColor: "#ffffff",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 45,
                    height: 45,
                    borderRadius: "50%",
                    backgroundColor: "#EDF4F9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#286B9D",
                  }}
                >
                  <PersonIcon />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: 17,
                      fontWeight: "bold",
                      color: "#0F2742",
                    }}
                  >
                    Kişisel Bilgiler
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 10,
                      color: "#64748B",
                      mt: 0.3,
                    }}
                  >
                    Hesap bilgilerinizi düzenleyebilirsiniz.
                  </Typography>
                </Box>
              </Box>

              <TextField
                fullWidth
                label="Ad Soyad"
                placeholder="Ad Soyad"
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "#286B9D",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#286B9D",
                  },
                }}
              />

              <TextField
                fullWidth
                label="E-posta"
                placeholder="E-posta"
                type="email"
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "#286B9D",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#286B9D",
                  },
                }}
              />

              <TextField
                fullWidth
                label="Üniversite"
                defaultValue="İstanbul Gelişim Üniversitesi"
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "#286B9D",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#286B9D",
                  },
                }}
              />

              <TextField
                fullWidth
                label="Bölüm"
                defaultValue="Yazılım Mühendisliği"
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "#286B9D",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#286B9D",
                  },
                }}
              />

              <Button
                variant="contained"
                fullWidth
                startIcon={<SaveIcon />}
                sx={{
                  mt: 1,
                  py: 1.25,
                  backgroundColor: "#0F2742",
                  borderRadius: 1.5,
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#173B61",
                  },
                }}
                onClick={() => {
                  alert("Profil bilgileri güncellendi.");
                }}
              >
                BİLGİLERİ GÜNCELLE
              </Button>
            </Card>

            {/* STAJ BİLGİLERİ */}
            <Card
              elevation={0}
              sx={{
                p: 3,
                border: "1px solid #e4e7ec",
                borderRadius: 2,
                backgroundColor: "#ffffff",
                height: "fit-content",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 45,
                    height: 45,
                    borderRadius: 1.5,
                    backgroundColor: "#EDF4F9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#286B9D",
                  }}
                >
                  <BadgeIcon />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: 17,
                      fontWeight: "bold",
                      color: "#0F2742",
                    }}
                  >
                    Staj Bilgileri
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 10,
                      color: "#64748B",
                      mt: 0.3,
                    }}
                  >
                    Mevcut staj süreciniz
                  </Typography>
                </Box>
              </Box>

              {/* BAŞLANGIÇ */}
              <Box
                sx={{
                  p: 2,
                  backgroundColor: "#F8FAFC",
                  border: "1px solid #E5E7EB",
                  borderRadius: 1.5,
                  mb: 1.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 10,
                    color: "#64748B",
                    mb: 0.5,
                  }}
                >
                  Staj Başlangıcı
                </Typography>

                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#0F2742",
                  }}
                >
                  10 Ağustos 2026
                </Typography>
              </Box>

              {/* BİTİŞ */}
              <Box
                sx={{
                  p: 2,
                  backgroundColor: "#F8FAFC",
                  border: "1px solid #E5E7EB",
                  borderRadius: 1.5,
                  mb: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 10,
                    color: "#64748B",
                    mb: 0.5,
                  }}
                >
                  Staj Bitişi
                </Typography>

                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#0F2742",
                  }}
                >
                  10 Eylül 2026
                </Typography>
              </Box>

              <Divider sx={{ mb: 2 }} />

              <Typography
                sx={{
                  fontSize: 11,
                  color: "#64748B",
                  mb: 0.7,
                }}
              >
                Staj Süresi
              </Typography>

              <Typography
                sx={{
                  fontSize: 22,
                  fontWeight: "bold",
                  color: "#286B9D",
                }}
              >
                20 Gün
              </Typography>

              <Typography
                sx={{
                  fontSize: 10,
                  color: "#94A3B8",
                  mt: 0.4,
                }}
              >
                Toplam staj süresi
              </Typography>
            </Card>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}