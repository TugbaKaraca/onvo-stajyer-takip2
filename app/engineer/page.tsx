"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

import {
  DashboardOutlined,
  GroupsOutlined,
  EventBusyOutlined,
  DescriptionOutlined,
  CampaignOutlined,
  PersonOutlined,
  LogoutOutlined,
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
      }}
    >
      {/* =========================
          SOL MENÜ
      ========================= */}

      <Box
        component="aside"
        sx={{
          width: 260,
          minHeight: "100vh",
          background: "#0f2742",
          color: "#ffffff",
          display: {
            xs: "none",
            md: "flex",
          },
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
            height: 80,
            display: "flex",
            alignItems: "center",
            px: 3,
            borderBottom:
              "1px solid rgba(255,255,255,0.1)",
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

        {/* KULLANICI */}

        <Box
          sx={{
            px: 2.5,
            py: 2.5,
            borderBottom:
              "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "0.95rem",
            }}
          >
            Ahmet Yılmaz
          </Typography>

          <Typography
            sx={{
              color: "#94a3b8",
              fontSize: "0.8rem",
              mt: 0.5,
            }}
          >
            Yazılım Mühendisi
          </Typography>
        </Box>

        {/* MENÜ */}

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
            const aktif =
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
                  color: aktif
                    ? "#ffffff"
                    : "#cbd5e1",
                  background: aktif
                    ? "#1f6fae"
                    : "transparent",
                  borderRadius: 1.5,
                  px: 1.5,
                  py: 1.2,
                  mb: 0.5,
                  fontWeight: aktif
                    ? 700
                    : 500,

                  "& .MuiButton-startIcon": {
                    color: aktif
                      ? "#ffffff"
                      : "#94a3b8",
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

        {/* ÇIKIŞ */}

        <Box
          sx={{
            p: 1.5,
            borderTop:
              "1px solid rgba(255,255,255,0.1)",
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
                background:
                  "rgba(220,38,38,0.12)",
              },
            }}
          >
            Çıkış Yap
          </Button>
        </Box>
      </Box>

      {/* =========================
          ANA İÇERİK
      ========================= */}

      <Box
        component="main"
        sx={{
          flex: 1,
          ml: {
            xs: 0,
            md: "260px",
          },
          minHeight: "100vh",
        }}
      >
        {/* ÜST BAR */}

        <Box
          sx={{
            height: 80,
            background: "#ffffff",
            borderBottom:
              "1px solid #dfe5ec",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: {
              xs: 2,
              md: 4,
            },
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
              Stajyerlerinizi buradan
              yönetebilirsiniz.
            </Typography>
          </Box>

          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
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

        {/* SAYFA */}

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
              }}
            >
              Mühendis panelinden size bağlı
              stajyerlerin süreçlerini
              takip edebilirsiniz.
            </Typography>
          </Box>

          {/* ÖZET KARTLARI */}

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
            {/* STAJYER */}

            <Card
              elevation={0}
              sx={{
                border:
                  "1px solid #dfe5ec",
                borderRadius: 2,
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

          {/* SON İŞLEMLER */}

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
                <Button
                  variant="outlined"
                  startIcon={
                    <GroupsOutlined />
                  }
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
                    textTransform:
                      "none",
                  }}
                >
                  Stajyerlerimi Gör
                </Button>

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
                    textTransform:
                      "none",
                  }}
                >
                  Devamsızlık Gir
                </Button>

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
                    textTransform:
                      "none",
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