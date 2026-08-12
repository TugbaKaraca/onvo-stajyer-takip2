"use client";

import {
  Box,
  Card,
  Container,
  Divider,
  IconButton,
  Paper,
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
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArticleIcon from "@mui/icons-material/Article";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function DashboardPage() {
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
        backgroundColor: "#f5f7fb",
        display: "flex",
      }}
    >
      {/* SOL MENÜ */}
      <Box
        sx={{
          width: 195,
          background:
            "linear-gradient(180deg, #1856ad 0%, #2868c7 100%)",
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
            const active = item.path === "/dashboard";

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
              color: "#667085",
            }}
          >
            <NotificationsIcon />
          </IconButton>

          <Box
            sx={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              backgroundColor: "#e8f0ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#1856ad",
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
                color: "#1d2939",
              }}
            >
              Zeliha Koyuncu
            </Typography>

            <Typography
              sx={{
                fontSize: 9,
                color: "#667085",
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
                color: "#172b4d",
              }}
            >
              Kontrol Paneli
            </Typography>

            <Typography
              sx={{
                fontSize: 14,
                color: "#667085",
                mt: 0.4,
              }}
            >
              Staj sürecinizle ilgili genel durum
            </Typography>
          </Box>

          {/* ÜST İSTATİSTİKLER */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                lg: "repeat(4, 1fr)",
              },
              gap: 1.5,
              mb: 2.5,
            }}
          >
            {/* STAJ SÜRESİ */}
            <Card
              elevation={0}
              sx={{
                p: 1.8,
                border: "1px solid #e4e7ec",
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontSize: 11, color: "#667085" }}>
                  Staj Süresi
                </Typography>

                <AccessTimeIcon
                  sx={{
                    fontSize: 20,
                    color: "#1769e0",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: "bold",
                  mt: 1,
                }}
              >
                20 Gün
              </Typography>

              <Typography
                sx={{
                  fontSize: 9,
                  color: "#98a2b3",
                  mt: 0.5,
                }}
              >
                Toplam
              </Typography>
            </Card>

            {/* GEÇEN SÜRE */}
            <Card
              elevation={0}
              sx={{
                p: 1.8,
                border: "1px solid #e4e7ec",
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontSize: 11, color: "#667085" }}>
                  Geçen Süre
                </Typography>

                <CheckCircleIcon
                  sx={{
                    fontSize: 20,
                    color: "#2769c7",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: "bold",
                  mt: 1,
                }}
              >
                12 Gün
              </Typography>

              <Typography
                sx={{
                  fontSize: 9,
                  color: "#98a2b3",
                  mt: 0.5,
                }}
              >
                %60
              </Typography>
            </Card>

            {/* KALAN SÜRE */}
            <Card
              elevation={0}
              sx={{
                p: 1.8,
                border: "1px solid #e4e7ec",
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontSize: 11, color: "#667085" }}>
                  Kalan Süre
                </Typography>

                <AccessTimeIcon
                  sx={{
                    fontSize: 20,
                    color: "#1769e0",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: "bold",
                  mt: 1,
                }}
              >
                8 Gün
              </Typography>

              <Typography
                sx={{
                  fontSize: 9,
                  color: "#98a2b3",
                  mt: 0.5,
                }}
              >
                %40
              </Typography>
            </Card>

            {/* GENEL DURUM */}
            <Card
              elevation={0}
              sx={{
                p: 1.8,
                border: "1px solid #e4e7ec",
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontSize: 11, color: "#667085" }}>
                  Genel Durum
                </Typography>

                <CheckCircleIcon
                  sx={{
                    fontSize: 20,
                    color: "#16a34a",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: 17,
                  fontWeight: "bold",
                  color: "#16a34a",
                  mt: 1,
                }}
              >
                Devam Ediyor
              </Typography>

              <Typography
                sx={{
                  fontSize: 9,
                  color: "#98a2b3",
                  mt: 0.5,
                }}
              >
                Aktif staj
              </Typography>
            </Card>
          </Box>

          {/* STAJ BİLGİLERİ + SON RAPOR */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                lg: "1.05fr 1fr",
              },
              gap: 2.5,
              mb: 2.5,
            }}
          >
            {/* STAJ BİLGİLERİ */}
            <Card
              elevation={0}
              sx={{
                p: 2.5,
                border: "1px solid #e4e7ec",
                borderRadius: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: "bold",
                  mb: 2.2,
                }}
              >
                Staj Bilgilerim
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1.4,
                }}
              >
                <Typography sx={{ fontSize: 12 }}>
                  Başlangıç Tarihi
                </Typography>

                <Typography sx={{ fontSize: 12 }}>
                  10.08.2026
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1.4,
                }}
              >
                <Typography sx={{ fontSize: 12 }}>
                  Bitiş Tarihi
                </Typography>

                <Typography sx={{ fontSize: 12 }}>
                  10.09.2026
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Typography sx={{ fontSize: 12 }}>
                  Departman
                </Typography>

                <Typography sx={{ fontSize: 12 }}>
                  Yazılım
                </Typography>
              </Box>

              <Divider />

              <Typography
                sx={{
                  fontSize: 11,
                  color: "#667085",
                  mt: 2,
                  mb: 1,
                }}
              >
                Mühendis / Staj Sorumlusu
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    backgroundColor: "#e8f0ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#1769e0",
                  }}
                >
                  <PersonIcon />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: "bold",
                    }}
                  >
                    Ayşe Yılmaz
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 10,
                      color: "#667085",
                    }}
                  >
                    Yazılım Mühendisi
                  </Typography>
                </Box>
              </Box>
            </Card>

            {/* SON RAPOR */}
            <Card
              elevation={0}
              sx={{
                p: 2.5,
                border: "1px solid #e4e7ec",
                borderRadius: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: "bold",
                  mb: 2.2,
                }}
              >
                Son Rapor Durumu
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 48,
                    border: "1px solid #dbe4f0",
                    borderRadius: 1.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#1769e0",
                  }}
                >
                  <ArticleIcon />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: "bold",
                    }}
                  >
                    Günlük Çalışma Raporu
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 10,
                      color: "#667085",
                      mt: 0.3,
                    }}
                  >
                    Dün - 10.08.2026
                  </Typography>

                  <Box
                    sx={{
                      display: "inline-block",
                      mt: 1,
                      px: 1,
                      py: 0.4,
                      borderRadius: 1,
                      backgroundColor: "#fff3e0",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 9,
                        color: "#e65100",
                        fontWeight: "bold",
                      }}
                    >
                      ⚠ Revizyon istendi
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Typography
                sx={{
                  fontSize: 11,
                  color: "#667085",
                  mt: 2,
                }}
              >
                Son raporunuz mühendisiniz tarafından inceleniyor.
              </Typography>

              <Box
                onClick={() => router.push("/reports")}
                sx={{
                  mt: 2,
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: 0.5,
                  color: "#1769e0",
                  cursor: "pointer",
                }}
              >
                <Typography sx={{ fontSize: 11 }}>
                  Tüm Raporlarımı Gör
                </Typography>

                <ArrowForwardIcon sx={{ fontSize: 15 }} />
              </Box>
            </Card>
          </Box>

          {/* DUYURULAR */}
          <Card
            elevation={0}
            sx={{
              p: 2.5,
              border: "1px solid #e4e7ec",
              borderRadius: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Duyurular
              </Typography>

              <Box
                onClick={() => router.push("/announcements")}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  color: "#1769e0",
                  cursor: "pointer",
                }}
              >
                <Typography sx={{ fontSize: 11 }}>
                  Tüm Duyuruları Gör
                </Typography>

                <ArrowForwardIcon sx={{ fontSize: 15 }} />
              </Box>
            </Box>

            {/* DUYURU 1 */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                py: 1.3,
              }}
            >
              <CampaignIcon
                sx={{
                  fontSize: 18,
                  color: "#1769e0",
                  mr: 1.5,
                }}
              />

              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Ofis Tanıtım Etkinliği
                </Typography>

                <Typography
                  sx={{
                    fontSize: 10,
                    color: "#667085",
                    mt: 0.3,
                  }}
                >
                  15 Ağustos Cuma günü saat 14:00'te ofis tanıtım
                  etkinliği yapılacaktır.
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: 9,
                  color: "#667085",
                }}
              >
                10.08.2026
              </Typography>
            </Box>

            <Divider />

            {/* DUYURU 2 */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                py: 1.3,
              }}
            >
              <CampaignIcon
                sx={{
                  fontSize: 18,
                  color: "#1769e0",
                  mr: 1.5,
                }}
              />

              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Resmi Tatil Duyurusu
                </Typography>

                <Typography
                  sx={{
                    fontSize: 10,
                    color: "#667085",
                    mt: 0.3,
                  }}
                >
                  30 Ağustos Zafer Bayramı nedeniyle ofisimiz kapalı
                  olacaktır.
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: 9,
                  color: "#667085",
                }}
              >
                08.08.2026
              </Typography>
            </Box>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}