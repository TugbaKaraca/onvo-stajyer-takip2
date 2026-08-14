"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
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
  NotificationsOutlined,
} from "@mui/icons-material";

import { usePathname, useRouter } from "next/navigation";

export default function EngineerPage() {
  const router = useRouter();
  const pathname = usePathname();

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

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f5f7fa",
        display: "flex",
        color: "#17202a",
      }}
    >
      {/* =====================================================
          SOL MENÜ
      ===================================================== */}

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
            const active =
              pathname === item.path;

            return (
              <Button
                key={item.path}
                fullWidth
                startIcon={item.icon}
                onClick={() =>
                  router.push(item.path)
                }
                sx={{
                  justifyContent: "flex-start",
                  textTransform: "none",

                  color: active
                    ? "#ffffff"
                    : "#ffffff",

                  backgroundColor: active
                    ? "rgba(255,255,255,0.20)"
                    : "transparent",

                  borderRadius: 1.5,

                  px: 1.3,
                  py: 1.05,

                  mb: 0.35,

                  minHeight: 38,

                  fontSize: 12,

                  fontWeight: active
                    ? 600
                    : 500,

                  "& .MuiButton-startIcon": {
                    marginRight: "9px",
                    marginLeft: "0px",

                    "& svg": {
                      fontSize: 19,
                    },
                  },

                  "&:hover": {
                    backgroundColor:
                      "rgba(255,255,255,0.14)",
                  },

                  transition:
                    "background-color 0.2s",
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
                backgroundColor:
                  "rgba(255,255,255,0.14)",
              },
            }}
          >
            Çıkış Yap
          </Button>
        </Box>
      </Box>

      {/* =====================================================
          ANA ALAN
      ===================================================== */}

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
        {/* =====================================================
            ÜST NAVBAR
        ===================================================== */}

        <Box
          component="header"
          sx={{
            height: 58,

            backgroundColor: "#ffffff",

            borderBottom:
              "1px solid #e4e7ec",

            display: "flex",
            alignItems: "center",

            justifyContent: "flex-end",

            px: 3,
          }}
        >
          {/* BİLDİRİMLER */}

          <IconButton
            sx={{
              mr: 1,
              color: "#286B9D",
            }}
          >
            <NotificationsOutlined />
          </IconButton>

          {/* PROFİL İKONU */}

          <Box
            sx={{
              width: 34,
              height: 34,

              borderRadius: "50%",

              backgroundColor:
                "#EDF4F9",

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

          {/* KULLANICI */}

          <Box>
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: "bold",
                color: "#17202A",
              }}
            >
              Ahmet Yılmaz
            </Typography>

            <Typography
              sx={{
                fontSize: 9,
                color: "#64748B",
              }}
            >
              Yazılım Geliştirme
            </Typography>
          </Box>
        </Box>

        {/* =====================================================
            SAYFA İÇERİĞİ
        ===================================================== */}

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
            <Typography
              sx={{
                fontSize: {
                  xs: "1.7rem",
                  md: "2rem",
                },

                fontWeight: 800,

                color: "#0f2742",

                mb: 0.7,
              }}
            >
              Hoş Geldiniz, Ahmet Yılmaz
            </Typography>

            <Typography
              sx={{
                color: "#64748b",
                fontSize: 13,
              }}
            >
              Mühendis panelinden size bağlı
              stajyerlerin süreçlerini takip
              edebilirsiniz.
            </Typography>
          </Box>

          {/* =====================================================
              ÖZET KARTLARI
          ===================================================== */}

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },

              gap: 2,

              mb: 3,
            }}
          >
            {/* STAJYERLER */}

            <Card
              elevation={0}
              sx={{
                border:
                  "1px solid #dfe5ec",

                borderRadius: 2,

                background: "#ffffff",
              }}
            >
              <CardContent>
                <GroupsOutlined
                  sx={{
                    color: "#1f6fae",
                    fontSize: 32,
                    mb: 1,
                  }}
                />

                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize: "0.85rem",
                  }}
                >
                  Stajyerlerim
                </Typography>

                <Typography
                  sx={{
                    color: "#0f2742",
                    fontSize: "2rem",
                    fontWeight: 800,
                  }}
                >
                  5
                </Typography>
              </CardContent>
            </Card>

            {/* DEVAMSIZLIK */}

            <Card
              elevation={0}
              sx={{
                border:
                  "1px solid #dfe5ec",

                borderRadius: 2,

                background: "#ffffff",
              }}
            >
              <CardContent>
                <EventBusyOutlined
                  sx={{
                    color: "#e65100",
                    fontSize: 32,
                    mb: 1,
                  }}
                />

                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize: "0.85rem",
                  }}
                >
                  Devamsızlık Bekleyen
                </Typography>

                <Typography
                  sx={{
                    color: "#0f2742",
                    fontSize: "2rem",
                    fontWeight: 800,
                  }}
                >
                  2
                </Typography>
              </CardContent>
            </Card>

            {/* RAPOR */}

            <Card
              elevation={0}
              sx={{
                border:
                  "1px solid #dfe5ec",

                borderRadius: 2,

                background: "#ffffff",
              }}
            >
              <CardContent>
                <DescriptionOutlined
                  sx={{
                    color: "#2e7d32",
                    fontSize: 32,
                    mb: 1,
                  }}
                />

                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize: "0.85rem",
                  }}
                >
                  İncelenecek Rapor
                </Typography>

                <Typography
                  sx={{
                    color: "#0f2742",
                    fontSize: "2rem",
                    fontWeight: 800,
                  }}
                >
                  3
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* =====================================================
              HIZLI İŞLEMLER
          ===================================================== */}

          <Card
            elevation={0}
            sx={{
              border:
                "1px solid #dfe5ec",

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
                Hızlı İşlemler
              </Typography>

              <Typography
                sx={{
                  color: "#64748b",
                  fontSize: "0.85rem",
                  mb: 2,
                }}
              >
                Sık kullandığınız işlemlere
                buradan ulaşabilirsiniz.
              </Typography>

              <Divider sx={{ mb: 2 }} />

              <Box
                sx={{
                  display: "grid",

                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(3, 1fr)",
                  },

                  gap: 1.5,
                }}
              >
                {/* STAJYERLER */}

                <Button
                  variant="outlined"
                  startIcon={<GroupsOutlined />}
                  onClick={() =>
                    router.push(
                      "/engineer/stajyerler"
                    )
                  }
                  sx={{
                    py: 1.3,

                    borderColor:
                      "#cbd5e1",

                    color: "#0f2742",

                    textTransform: "none",

                    "&:hover": {
                      borderColor:
                        "#286B9D",
                      backgroundColor:
                        "#f5f9fc",
                    },
                  }}
                >
                  Stajyerlerimi Gör
                </Button>

                {/* DEVAMSIZLIK */}

                <Button
                  variant="outlined"
                  startIcon={
                    <EventBusyOutlined />
                  }
                  onClick={() =>
                    router.push(
                      "/engineer/devamsizlik"
                    )
                  }
                  sx={{
                    py: 1.3,

                    borderColor:
                      "#cbd5e1",

                    color: "#0f2742",

                    textTransform: "none",

                    "&:hover": {
                      borderColor:
                        "#286B9D",
                      backgroundColor:
                        "#f5f9fc",
                    },
                  }}
                >
                  Devamsızlık Gir
                </Button>

                {/* RAPORLAR */}

                <Button
                  variant="outlined"
                  startIcon={
                    <DescriptionOutlined />
                  }
                  onClick={() =>
                    router.push(
                      "/engineer/raporlar"
                    )
                  }
                  sx={{
                    py: 1.3,

                    borderColor:
                      "#cbd5e1",

                    color: "#0f2742",

                    textTransform: "none",

                    "&:hover": {
                      borderColor:
                        "#286B9D",
                      backgroundColor:
                        "#f5f9fc",
                    },
                  }}
                >
                  Raporları Gör
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}