"use client";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import {
  BadgeOutlined,
  BusinessOutlined,
  CampaignOutlined,
  DashboardOutlined,
  DescriptionOutlined,
  EmailOutlined,
  EventBusyOutlined,
  GroupsOutlined,
  LogoutOutlined,
  NotificationsOutlined,
  PersonOutlined,
  PhoneOutlined,
  SaveOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilPage() {
  const router = useRouter();
  const pathname = usePathname();

  const [adSoyad, setAdSoyad] = useState("Ahmet Yılmaz");
  const [email, setEmail] = useState("ahmet.yilmaz@onvo.com");
  const [departman, setDepartman] = useState("Yazılım Geliştirme");
  const [gorev, setGorev] = useState("Mühendis");
  const [telefon, setTelefon] = useState("0555 555 55 55");
  const [basarili, setBasarili] = useState(false);

  const menuItems = [
    {
      label: "Ana Sayfa",
      icon: <DashboardOutlined />,
      path: "/engineer",
    },
    {
      label: "Stajyerlerim",
      icon: <GroupsOutlined />,
      path: "/engineer/stajyerler",
    },
    {
      label: "Devamsızlık",
      icon: <EventBusyOutlined />,
      path: "/engineer/devamsizlik",
    },
    {
      label: "Raporlar",
      icon: <DescriptionOutlined />,
      path: "/engineer/raporlar",
    },
    {
      label: "Duyurular",
      icon: <CampaignOutlined />,
      path: "/engineer/duyurular",
    },
    {
      label: "Profil",
      icon: <PersonOutlined />,
      path: "/engineer/profil",
    },
    {
      label: "Ayarlar",
      icon: <SettingsOutlined />,
      path: "/engineer/ayarlar",
    },
  ];

  const handleLogout = () => {
    router.push("/login");
  };

  const handleSave = () => {
    setBasarili(true);

    setTimeout(() => {
      setBasarili(false);
    }, 3000);
  };

  const initials = adSoyad
    .split(" ")
    .filter(Boolean)
    .map((isim) => isim.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f5f7fa",
        display: "flex",
        color: "#17202a",
      }}
    >
      {/* ================= SOL MENÜ ================= */}

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
          display: {
            xs: "none",
            md: "flex",
          },
          flexDirection: "column",
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

        <Box
          sx={{
            px: 1,
            py: 1.5,
            flex: 1,
          }}
        >
          {menuItems.map((item) => {
            const active = pathname === item.path;

            return (
              <Button
                key={item.path}
                fullWidth
                startIcon={item.icon}
                onClick={() => router.push(item.path)}
                sx={{
                  justifyContent: "flex-start",
                  textTransform: "none",
                  color: "#ffffff",
                  backgroundColor: active
                    ? "rgba(255,255,255,0.20)"
                    : "transparent",
                  borderRadius: 1.5,
                  px: 1.3,
                  py: 1.05,
                  mb: 0.35,
                  minHeight: 38,
                  fontSize: 12,
                  fontWeight: active ? 600 : 500,

                  "& .MuiButton-startIcon": {
                    marginRight: "9px",
                    marginLeft: "0px",

                    "& svg": {
                      fontSize: 19,
                    },
                  },

                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.14)",
                  },

                  transition: "background-color 0.2s",
                }}
              >
                {item.label}
              </Button>
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
          <Button
            fullWidth
            startIcon={<LogoutOutlined />}
            onClick={handleLogout}
            sx={{
              justifyContent: "flex-start",
              textTransform: "none",
              color: "#ffffff",
              px: 1.3,
              py: 1,
              minHeight: 38,
              borderRadius: 1.5,
              fontSize: 12,
              fontWeight: 500,

              "& .MuiButton-startIcon": {
                marginRight: "9px",

                "& svg": {
                  fontSize: 19,
                },
              },

              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.14)",
              },
            }}
          >
            Çıkış Yap
          </Button>
        </Box>
      </Box>

      {/* ================= ANA ALAN ================= */}

      <Box
        component="main"
        sx={{
          flex: 1,
          ml: {
            xs: 0,
            md: "195px",
          },
          minHeight: "100vh",
        }}
      >
        {/* ================= NAVBAR ================= */}

        <Box
          component="header"
          sx={{
            height: 58,
            backgroundColor: "#ffffff",
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
              color: "#286B9D",
            }}
          >
            <NotificationsOutlined />
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
            <PersonOutlined
              sx={{
                fontSize: 20,
              }}
            />
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: "bold",
                color: "#17202A",
              }}
            >
              {adSoyad}
            </Typography>

            <Typography
              sx={{
                fontSize: 9,
                color: "#64748B",
              }}
            >
              {departman}
            </Typography>
          </Box>
        </Box>

        {/* ================= İÇERİK ================= */}

        <Box
          sx={{
            p: {
              xs: 2,
              md: 4,
            },
          }}
        >
          {/* BAŞLIK */}

          <Box sx={{ mb: 3 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 0.7,
              }}
            >
              <PersonOutlined
                sx={{
                  color: "#1f6fae",
                  fontSize: 32,
                }}
              />

              <Typography
                sx={{
                  fontSize: {
                    xs: "1.7rem",
                    md: "2rem",
                  },
                  fontWeight: 800,
                  color: "#0f2742",
                }}
              >
                Profil
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#64748b",
                fontSize: 13,
              }}
            >
              Profil bilgilerinizi buradan görüntüleyebilir ve
              güncelleyebilirsiniz.
            </Typography>
          </Box>

          {/* ================= PROFİL KARTI ================= */}

          <Card
            elevation={0}
            sx={{
              border: "1px solid #dfe5ec",
              borderRadius: 2,
              background: "#ffffff",
              mb: 3,
            }}
          >
            <CardContent
              sx={{
                p: {
                  xs: 2.5,
                  md: 3,
                },
                "&:last-child": {
                  pb: {
                    xs: 2.5,
                    md: 3,
                  },
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Avatar
                  sx={{
                    width: 76,
                    height: 76,
                    background: "#286B9D",
                    fontSize: 28,
                    fontWeight: 700,
                  }}
                >
                  {initials || "AY"}
                </Avatar>

                <Box>
                  <Typography
                    sx={{
                      fontSize: 21,
                      fontWeight: 800,
                      color: "#0f2742",
                    }}
                  >
                    {adSoyad}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#64748b",
                      fontSize: 13,
                      mt: 0.3,
                    }}
                  >
                    {gorev}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#94a3b8",
                      fontSize: 12,
                      mt: 0.2,
                    }}
                  >
                    {departman}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* ================= KİŞİSEL BİLGİLER ================= */}

          <Card
            elevation={0}
            sx={{
              border: "1px solid #dfe5ec",
              borderRadius: 2,
              background: "#ffffff",
            }}
          >
            <CardContent
              sx={{
                p: {
                  xs: 2,
                  md: 3,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#0f2742",
                  mb: 0.5,
                }}
              >
                Kişisel Bilgiler
              </Typography>

              <Typography
                sx={{
                  color: "#64748b",
                  fontSize: "0.85rem",
                  mb: 2,
                }}
              >
                Hesabınıza ait kişisel bilgileri düzenleyebilirsiniz.
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
                {/* AD SOYAD */}

                <TextField
                  fullWidth
                  label="Ad Soyad"
                  value={adSoyad}
                  onChange={(e) => setAdSoyad(e.target.value)}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonOutlined
                            sx={{
                              color: "#94a3b8",
                              fontSize: 20,
                            }}
                          />
                        </InputAdornment>
                      ),
                    },
                  }}
                />

                {/* E-POSTA */}

                <TextField
                  fullWidth
                  label="E-posta"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailOutlined
                            sx={{
                              color: "#94a3b8",
                              fontSize: 20,
                            }}
                          />
                        </InputAdornment>
                      ),
                    },
                  }}
                />

                {/* DEPARTMAN */}

                <TextField
                  fullWidth
                  label="Departman"
                  value={departman}
                  onChange={(e) => setDepartman(e.target.value)}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <BusinessOutlined
                            sx={{
                              color: "#94a3b8",
                              fontSize: 20,
                            }}
                          />
                        </InputAdornment>
                      ),
                    },
                  }}
                />

                {/* GÖREV */}

                <TextField
                  fullWidth
                  label="Görev"
                  value={gorev}
                  onChange={(e) => setGorev(e.target.value)}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <BadgeOutlined
                            sx={{
                              color: "#94a3b8",
                              fontSize: 20,
                            }}
                          />
                        </InputAdornment>
                      ),
                    },
                  }}
                />

                {/* TELEFON */}

                <TextField
                  fullWidth
                  label="Telefon"
                  value={telefon}
                  onChange={(e) => setTelefon(e.target.value)}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneOutlined
                            sx={{
                              color: "#94a3b8",
                              fontSize: 20,
                            }}
                          />
                        </InputAdornment>
                      ),
                    },
                  }}
                />

                {/* HESAP DURUMU */}

                <TextField
                  fullWidth
                  label="Hesap Durumu"
                  value="Aktif"
                  disabled
                />
              </Box>

              {/* ================= KAYDET ================= */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 2,
                  flexWrap: "wrap",
                  mt: 3,
                  pt: 2,
                  borderTop: "1px solid #e2e8f0",
                }}
              >
                <Box>
                  {basarili && (
                    <Typography
                      sx={{
                        color: "#15803d",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      Profil bilgileriniz başarıyla kaydedildi.
                    </Typography>
                  )}
                </Box>

                <Button
                  variant="contained"
                  startIcon={<SaveOutlined />}
                  onClick={handleSave}
                  sx={{
                    background: "#0f2742",
                    px: 3,
                    py: 1.1,
                    borderRadius: 1.5,
                    fontWeight: 700,
                    textTransform: "none",
                    boxShadow: "none",

                    "&:hover": {
                      background: "#173b61",
                      boxShadow: "none",
                    },
                  }}
                >
                  Bilgileri Kaydet
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}