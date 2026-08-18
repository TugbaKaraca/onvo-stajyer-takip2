"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  IconButton,
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
import AttachFileIcon from "@mui/icons-material/AttachFile";

export default function DocumentsPage() {
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
            const active = item.path === "/documents";

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
              Kütüphane
            </Typography>

            <Typography
              sx={{
                fontSize: 14,
                color: "#64748B",
                mt: 0.4,
              }}
            >
              Staj sürecinizle ilgili belgeleri buradan
              yükleyebilir ve görüntüleyebilirsiniz.
            </Typography>
          </Box>

          {/* BELGE YÜKLEME */}
          <Card
            elevation={0}
            sx={{
              border: "1px solid #e4e7ec",
              borderRadius: 2,
              backgroundColor: "#ffffff",
              mb: 2.5,
            }}
          >
            <CardContent
              sx={{
                p: {
                  xs: 2.5,
                  md: 3,
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 2.5,
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
                  <FolderIcon />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: 17,
                      fontWeight: "bold",
                      color: "#0F2742",
                    }}
                  >
                    Belge Ekle
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 10,
                      color: "#64748B",
                      mt: 0.3,
                    }}
                  >
                    Staj sürecinizle ilgili belgeleri
                    bilgisayarınızdan yükleyebilirsiniz.
                  </Typography>
                </Box>
              </Box>

              {/* DOSYA SEÇME ALANI */}
              <Box
                sx={{
                  border: "1px dashed #B8C7D6",
                  borderRadius: 2,
                  p: {
                    xs: 2.5,
                    md: 3.5,
                  },
                  textAlign: "center",
                  backgroundColor: "#FAFCFE",
                }}
              >
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    backgroundColor: "#EDF4F9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#286B9D",
                    mx: "auto",
                    mb: 1.5,
                  }}
                >
                  <AttachFileIcon sx={{ fontSize: 27 }} />
                </Box>

                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#0F2742",
                    mb: 0.7,
                  }}
                >
                  Belge Yükle
                </Typography>

                <Typography
                  sx={{
                    fontSize: 11,
                    color: "#64748B",
                    mb: 2,
                  }}
                >
                  Bilgisayarınızdan staj belgesi
                  seçebilirsiniz.
                </Typography>

                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<AttachFileIcon />}
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
                  BİLGİSAYARDAN DOSYA SEÇ

                  <input
                    type="file"
                    hidden
                    onChange={(event) => {
                      const file =
                        event.target.files?.[0];

                      if (file) {
                        alert(
                          `Seçilen dosya: ${file.name}`
                        );
                      }
                    }}
                  />
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* YÜKLENEN BELGELER */}
          <Card
            elevation={0}
            sx={{
              border: "1px solid #e4e7ec",
              borderRadius: 2,
              backgroundColor: "#ffffff",
            }}
          >
            <CardContent
              sx={{
                p: {
                  xs: 2.5,
                  md: 3,
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 2.5,
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
                  <DescriptionIcon />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: 17,
                      fontWeight: "bold",
                      color: "#0F2742",
                    }}
                  >
                    Yüklenen Belgeler
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 10,
                      color: "#64748B",
                      mt: 0.3,
                    }}
                  >
                    Yüklediğiniz belgeler burada
                    listelenecektir.
                  </Typography>
                </Box>
              </Box>

              {/* BOŞ DURUM */}
              <Box
                sx={{
                  border: "1px dashed #CBD5E1",
                  borderRadius: 2,
                  py: 4,
                  px: 2,
                  textAlign: "center",
                  backgroundColor: "#FAFCFE",
                }}
              >
                <FolderIcon
                  sx={{
                    fontSize: 40,
                    color: "#94A3B8",
                    mb: 1,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#0F2742",
                  }}
                >
                  Henüz yüklenmiş bir belge
                  bulunmamaktadır.
                </Typography>

                <Typography
                  sx={{
                    fontSize: 11,
                    color: "#64748B",
                    mt: 0.6,
                  }}
                >
                  Yüklediğiniz belgeler burada
                  görüntülenecektir.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}