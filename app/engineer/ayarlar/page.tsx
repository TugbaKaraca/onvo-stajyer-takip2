"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import {
  DashboardOutlined,
  GroupsOutlined,
  EventBusyOutlined,
  DescriptionOutlined,
  CampaignOutlined,
  PersonOutlined,
  SettingsOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function EngineerAyarlarPage() {
  const router = useRouter();
  const pathname = usePathname();

  const [bildirimler, setBildirimler] = useState(true);
  const [emailBildirimleri, setEmailBildirimleri] = useState(true);
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
    setTimeout(() => setBasarili(false), 3000);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f5f7fa",
        display: "flex",
        color: "#17202a",
      }}
    >
      {/* SOL MENÜ */}
      <Box
        component="aside"
        sx={{
          width: 260,
          minHeight: "100vh",
          background: "#0f2742",
          color: "#ffffff",
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Box
          sx={{
            height: 80,
            display: "flex",
            alignItems: "center",
            px: 3,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Box
            component="img"
            src="/logo.png"
            alt="ONVO"
            sx={{
              width: 110,
              filter: "brightness(0) invert(1)",
            }}
          />
        </Box>

        <Box
          sx={{
            px: 1.5,
            py: 2,
            flex: 1,
          }}
        >
          <Typography
            sx={{
              color: "#64748b",
              fontSize: "0.7rem",
              fontWeight: 700,
              px: 1.5,
              mb: 1,
              textTransform: "uppercase",
            }}
          >
            Mühendis Paneli
          </Typography>

          {menuItems.map((item) => {
            const aktif = pathname === item.path;

            return (
              <Button
                key={item.path}
                fullWidth
                startIcon={item.icon}
                onClick={() => router.push(item.path)}
                sx={{
                  justifyContent: "flex-start",
                  textTransform: "none",
                  color: aktif ? "#ffffff" : "#cbd5e1",
                  background: aktif ? "#1f6fae" : "transparent",
                  borderRadius: 1.5,
                  px: 1.5,
                  py: 1.2,
                  mb: 0.5,
                  fontWeight: aktif ? 700 : 500,
                  "& .MuiButton-startIcon": {
                    color: aktif ? "#ffffff" : "#94a3b8",
                  },
                  "&:hover": {
                    background: aktif
                      ? "#1f6fae"
                      : "rgba(255,255,255,0.06)",
                  },
                }}
              >
                {item.label}
              </Button>
            );
          })}
        </Box>

        <Box
          sx={{
            p: 1.5,
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Button
            fullWidth
            startIcon={<LogoutOutlined />}
            onClick={handleLogout}
            sx={{
              justifyContent: "flex-start",
              color: "#fca5a5",
              textTransform: "none",
              px: 1.5,
              py: 1.2,
              borderRadius: 1.5,
              "&:hover": {
                background: "rgba(220,38,38,0.12)",
              },
            }}
          >
            Çıkış Yap
          </Button>
        </Box>
      </Box>

      {/* ANA ALAN */}
      <Box
        component="main"
        sx={{
          flex: 1,
          ml: { xs: 0, md: "260px" },
          minHeight: "100vh",
        }}
      >
        {/* ÜST BAR */}
        <Box
          component="header"
          sx={{
            height: 80,
            background: "#ffffff",
            borderBottom: "1px solid #dfe5ec",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 2, md: 4 },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "1.25rem",
                fontWeight: 800,
                color: "#0f2742",
              }}
            >
              Mühendis Paneli
            </Typography>
            <Typography
              sx={{
                color: "#64748b",
                fontSize: "0.8rem",
              }}
            >
              Ayarlar
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <Typography
              sx={{
                color: "#475569",
                fontSize: "0.85rem",
                fontWeight: 600,
              }}
            >
              Ahmet Yılmaz
            </Typography>
            <Typography
              sx={{
                color: "#94a3b8",
                fontSize: "0.75rem",
                textAlign: "right",
              }}
            >
              Yazılım Geliştirme
            </Typography>
          </Box>
        </Box>

        {/* AYARLAR */}
        <Box
          sx={{
            p: { xs: 2, md: 4 },
            maxWidth: 1100,
          }}
        >
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontSize: { xs: "1.7rem", md: "2rem" },
                fontWeight: 800,
                color: "#0f2742",
                mb: 0.7,
              }}
            >
              Ayarlar
            </Typography>

            <Typography
              sx={{
                color: "#64748b",
              }}
            >
              Hesap ve bildirim ayarlarınızı buradan yönetebilirsiniz.
            </Typography>
          </Box>

          <Card
            elevation={0}
            sx={{
              border: "1px solid #dfe5ec",
              borderRadius: 2,
              background: "#ffffff",
              mb: 3,
            }}
          >
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Typography
                sx={{
                  fontSize: "1.15rem",
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
                  fontSize: "0.85rem",
                  mb: 2,
                }}
              >
                Mühendis hesabınıza ait bilgileri görüntüleyin.
              </Typography>

              <Divider sx={{ mb: 2.5 }} />

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
                  fullWidth
                  label="Ad Soyad"
                  value="Ahmet Yılmaz"
                  disabled
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1.5,
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="E-posta"
                  value="ahmet.yilmaz@onvo.com"
                  disabled
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1.5,
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Görev"
                  value="Yazılım Mühendisi"
                  disabled
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1.5,
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Departman"
                  value="Yazılım Geliştirme"
                  disabled
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1.5,
                    },
                  }}
                />
              </Box>
            </CardContent>
          </Card>

          <Card
            elevation={0}
            sx={{
              border: "1px solid #dfe5ec",
              borderRadius: 2,
              background: "#ffffff",
              mb: 3,
            }}
          >
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Typography
                sx={{
                  fontSize: "1.15rem",
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
                  fontSize: "0.85rem",
                  mb: 2,
                }}
              >
                Bildirimlerin nasıl gönderileceğini belirleyin.
              </Typography>

              <Divider sx={{ mb: 1 }} />

              <FormControlLabel
                control={
                  <Switch
                    checked={bildirimler}
                    onChange={(e) => setBildirimler(e.target.checked)}
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
                        fontSize: "0.8rem",
                      }}
                    >
                      Stajyer süreçleriyle ilgili önemli bildirimleri alın.
                    </Typography>
                  </Box>
                }
                sx={{
                  ml: 0,
                  py: 1.2,
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
                        fontSize: "0.8rem",
                      }}
                    >
                      Önemli bildirimleri e-posta üzerinden alın.
                    </Typography>
                  </Box>
                }
                sx={{
                  ml: 0,
                  py: 1.2,
                }}
              />
            </CardContent>
          </Card>

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
                p: { xs: 2, md: 3 },
                display: "flex",
                alignItems: { xs: "stretch", sm: "center" },
                justifyContent: "space-between",
                gap: 2,
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Box>
                {basarili && (
                  <Typography
                    sx={{
                      color: "#2e7d32",
                      fontWeight: 600,
                      fontSize: "0.9rem",
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
                  py: 1.5,
                  px: 4,
                  borderRadius: 1.5,
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  boxShadow: "none",
                  "&:hover": {
                    background: "#173b61",
                    boxShadow: "none",
                  },
                }}
              >
                AYARLARI KAYDET
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}