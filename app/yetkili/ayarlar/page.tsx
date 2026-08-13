"use client";

import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  IconButton,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

import GridViewIcon from "@mui/icons-material/GridView";
import GroupsIcon from "@mui/icons-material/Groups";
import DescriptionIcon from "@mui/icons-material/Description";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import FolderIcon from "@mui/icons-material/Folder";
import CampaignIcon from "@mui/icons-material/Campaign";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";

export default function AyarlarPage() {
  const [bildirimler, setBildirimler] = useState(true);
  const [emailBildirimleri, setEmailBildirimleri] = useState(true);
  const [basarili, setBasarili] = useState(false);

  const handleSave = () => {
    setBasarili(true);

    setTimeout(() => {
      setBasarili(false);
    }, 3000);
  };

  const menuItems = [
    {
      icon: <GridViewIcon />,
      text: "Kontrol Paneli",
      path: "/yetkili",
    },
    {
      icon: <GroupsIcon />,
      text: "Stajyerler",
      path: "/yetkili/stajyerler",
    },
    {
      icon: <DescriptionIcon />,
      text: "Raporlar",
      path: "/yetkili/raporlar",
    },
    {
      icon: <EventAvailableIcon />,
      text: "Devam Durumu",
      path: "/yetkili/devam",
    },
    {
      icon: <FolderIcon />,
      text: "Belgeler",
      path: "/yetkili/belgeler",
    },
    {
      icon: <CampaignIcon />,
      text: "Duyurular",
      path: "/yetkili/duyurular",
    },
    {
      icon: <NotificationsIcon />,
      text: "Bildirimler",
      path: "/yetkili/bildirimler",
    },
    {
      icon: <SettingsIcon />,
      text: "Ayarlar",
      path: "/yetkili/ayarlar",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fa",
        color: "#17202a",
      }}
    >
      {/* =========================
          SOL MENÜ
      ========================= */}

      <Box
        component="aside"
        sx={{
          width: 195,
          minHeight: "100vh",
          background:
            "linear-gradient(180deg, #0F2742 0%, #286B9D 100%)",
          color: "#ffffff",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* LOGO */}

        <Box
          sx={{
            px: 2.2,
            py: 2.2,
            borderBottom:
              "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <Typography
            sx={{
              fontSize: 23,
              fontWeight: "bold",
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

        <Box
          sx={{
            px: 1,
            py: 1.5,
            flex: 1,
          }}
        >
          {menuItems.map((item) => {
            const active = item.path === "/yetkili/ayarlar";

            return (
              <Link
                key={item.text}
                href={item.path}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Box
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
              </Link>
            );
          })}
        </Box>

        {/* ÇIKIŞ */}

        <Box
          sx={{
            px: 1,
            pb: 2,
          }}
        >
          <Link
            href="/login/yetkili"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Box
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
          </Link>
        </Box>
      </Box>

      {/* =========================
          ANA ALAN
      ========================= */}

      <Box
        sx={{
          marginLeft: "195px",
          width: "calc(100% - 195px)",
          minHeight: "100vh",
        }}
      >
        {/* =========================
            ÜST BAR
        ========================= */}

        <Box
          component="header"
          sx={{
            height: 58,
            backgroundColor: "white",
            borderBottom:
              "1px solid #e4e7ec",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: 3,
          }}
        >
          <IconButton
            sx={{
              mr: 1,
              color: "#286B9D",
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
              Yetkili Kullanıcı
            </Typography>

            <Typography
              sx={{
                fontSize: 9,
                color: "#64748B",
              }}
            >
              Yetkili
            </Typography>
          </Box>
        </Box>

        {/* =========================
            İÇERİK
        ========================= */}

        <Box
          component="main"
          sx={{
            p: {
              xs: 3,
              md: 4,
            },
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
              Ayarlar
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 13,
              }}
            >
              Sistem ve hesap ayarlarınızı buradan yönetebilirsiniz.
            </Typography>
          </Box>

          {/* HESAP BİLGİLERİ */}

          <Paper
            elevation={0}
            sx={{
              border: "1px solid #e2e8f0",
              borderRadius: 2,
              p: {
                xs: 2,
                md: 3,
              },
              mb: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#0f2742",
                mb: 0.5,
              }}
            >
              Hesap Bilgileri
            </Typography>

            <Typography
              sx={{
                color: "#64748b",
                fontSize: "0.9rem",
                mb: 3,
              }}
            >
              Yetkili hesabınızla ilgili bilgileri görüntüleyin.
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 1fr",
                },
                gap: 2.5,
              }}
            >
              <TextField
                fullWidth
                label="Ad Soyad"
                value="Yetkili Kullanıcı"
                disabled
              />

              <TextField
                fullWidth
                label="E-posta"
                value="yetkili@onvo.com"
                disabled
              />

              <TextField
                fullWidth
                label="Yetki"
                value="Yetkili"
                disabled
              />

              <TextField
                fullWidth
                label="Hesap Durumu"
                value="Aktif"
                disabled
              />
            </Box>
          </Paper>

          {/* BİLDİRİM AYARLARI */}

          <Paper
            elevation={0}
            sx={{
              border: "1px solid #e2e8f0",
              borderRadius: 2,
              p: {
                xs: 2,
                md: 3,
              },
              mb: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#0f2742",
                mb: 0.5,
              }}
            >
              Bildirim Ayarları
            </Typography>

            <Typography
              sx={{
                color: "#64748b",
                fontSize: "0.9rem",
                mb: 2,
              }}
            >
              Sistem bildirimlerinin nasıl gönderileceğini belirleyin.
            </Typography>

            <Divider sx={{ mb: 1 }} />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <FormControlLabel
                control={
                  <Switch
                    checked={bildirimler}
                    onChange={(e) =>
                      setBildirimler(e.target.checked)
                    }
                  />
                }
                label={
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: "#17202a",
                      }}
                    >
                      Sistem bildirimleri
                    </Typography>

                    <Typography
                      sx={{
                        color: "#64748b",
                        fontSize: "0.85rem",
                      }}
                    >
                      Sistemdeki önemli gelişmeler hakkında bildirim alın.
                    </Typography>
                  </Box>
                }
                sx={{
                  py: 1.5,
                  ml: 0,
                }}
              />

              <FormControlLabel
                control={
                  <Switch
                    checked={emailBildirimleri}
                    onChange={(e) =>
                      setEmailBildirimleri(e.target.checked)
                    }
                  />
                }
                label={
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: "#17202a",
                      }}
                    >
                      E-posta bildirimleri
                    </Typography>

                    <Typography
                      sx={{
                        color: "#64748b",
                        fontSize: "0.85rem",
                      }}
                    >
                      Önemli bildirimleri e-posta üzerinden alın.
                    </Typography>
                  </Box>
                }
                sx={{
                  py: 1.5,
                  ml: 0,
                }}
              />
            </Box>
          </Paper>

          {/* SİSTEM AYARLARI */}

          <Paper
            elevation={0}
            sx={{
              border: "1px solid #e2e8f0",
              borderRadius: 2,
              p: {
                xs: 2,
                md: 3,
              },
              mb: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#0f2742",
                mb: 0.5,
              }}
            >
              Sistem Ayarları
            </Typography>

            <Typography
              sx={{
                color: "#64748b",
                fontSize: "0.9rem",
                mb: 3,
              }}
            >
              Stajyer takip sisteminin genel ayarları.
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 1fr",
                },
                gap: 2.5,
              }}
            >
              <TextField
                fullWidth
                label="Sistem Adı"
                defaultValue="ONVO Stajyer Takip Sistemi"
              />

              <TextField
                fullWidth
                label="Şirket"
                defaultValue="ONVO"
              />

              <TextField
                fullWidth
                label="Çalışma Yılı"
                defaultValue="2026"
              />

              <TextField
                fullWidth
                label="Varsayılan Departman"
                defaultValue="Yazılım"
              />
            </Box>
          </Paper>

          {/* KAYDET */}

          <Paper
            elevation={0}
            sx={{
              border: "1px solid #e2e8f0",
              borderRadius: 2,
              p: 2.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Box>
              {basarili && (
                <Typography
                  sx={{
                    color: "#15803d",
                    fontWeight: 600,
                  }}
                >
                  Ayarlar başarıyla kaydedildi.
                </Typography>
              )}
            </Box>

            <Button
              variant="contained"
              onClick={handleSave}
              sx={{
                background: "#0f2742",
                px: 4,
                py: 1.2,
                borderRadius: 1.5,
                fontWeight: 700,
                boxShadow: "none",

                "&:hover": {
                  background: "#173b61",
                  boxShadow: "none",
                },
              }}
            >
              AYARLARI KAYDET
            </Button>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}