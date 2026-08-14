"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
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
  NotificationsOutlined,
  SaveOutlined,
} from "@mui/icons-material";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const baslangicStajyerler = [
  {
    id: 1,
    adSoyad: "Zeynep Kaya",
    bolum: "Yazılım Mühendisliği",
    devamsizlik: 1,
  },
  {
    id: 2,
    adSoyad: "Mehmet Demir",
    bolum: "Bilgisayar Mühendisliği",
    devamsizlik: 0,
  },
  {
    id: 3,
    adSoyad: "Elif Çelik",
    bolum: "Yazılım Mühendisliği",
    devamsizlik: 2,
  },
  {
    id: 4,
    adSoyad: "Burak Yılmaz",
    bolum: "Bilgisayar Mühendisliği",
    devamsizlik: 0,
  },
  {
    id: 5,
    adSoyad: "Sena Aydın",
    bolum: "Yazılım Mühendisliği",
    devamsizlik: 1,
  },
];

export default function DevamsizlikPage() {
  const router = useRouter();
  const pathname = usePathname();

  const [stajyerler, setStajyerler] =
    useState(baslangicStajyerler);

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

  const handleChange = (
    id: number,
    value: string
  ) => {
    if (value === "") {
      setStajyerler((prev) =>
        prev.map((stajyer) =>
          stajyer.id === id
            ? {
                ...stajyer,
                devamsizlik: 0,
              }
            : stajyer
        )
      );

      return;
    }

    const sayi = Number(value);

    if (!isNaN(sayi) && sayi >= 0) {
      setStajyerler((prev) =>
        prev.map((stajyer) =>
          stajyer.id === id
            ? {
                ...stajyer,
                devamsizlik: sayi,
              }
            : stajyer
        )
      );
    }
  };

  const handleSave = () => {
    setBasarili(true);

    setTimeout(() => {
      setBasarili(false);
    }, 3000);
  };

  const toplamDevamsizlik =
    stajyerler.reduce(
      (toplam, stajyer) =>
        toplam + stajyer.devamsizlik,
      0
    );

  const devamsizligiOlan =
    stajyerler.filter(
      (stajyer) =>
        stajyer.devamsizlik > 0
    ).length;

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
                  justifyContent:
                    "flex-start",
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
              justifyContent:
                "flex-start",
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
        {/* ================= ÜST NAVBAR ================= */}

        <Box
          component="header"
          sx={{
            height: 58,
            backgroundColor: "#ffffff",
            borderBottom:
              "1px solid #e4e7ec",
            display: "flex",
            alignItems: "center",
            justifyContent:
              "flex-end",
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
              backgroundColor:
                "#EDF4F9",
              display: "flex",
              alignItems: "center",
              justifyContent:
                "center",
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
              <EventBusyOutlined
                sx={{
                  color: "#e65100",
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
                Devamsızlık
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#64748b",
                fontSize: 13,
              }}
            >
              Size bağlı stajyerlerin
              devamsızlık durumlarını
              buradan takip ve
              güncelleyebilirsiniz.
            </Typography>
          </Box>

          {/* ================= ÖZET KARTLARI ================= */}

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(3, 1fr)",
              },
              gap: 2,
              mb: 3,
            }}
          >
            {/* TOPLAM STAJYER */}

            <Card
              elevation={0}
              sx={{
                border:
                  "1px solid #dfe5ec",
                borderRadius: 2,
                background:
                  "#ffffff",
              }}
            >
              <CardContent>
                <GroupsOutlined
                  sx={{
                    color: "#1f6fae",
                    fontSize: 30,
                    mb: 1,
                  }}
                />

                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize:
                      "0.85rem",
                  }}
                >
                  Toplam Stajyer
                </Typography>

                <Typography
                  sx={{
                    color: "#0f2742",
                    fontSize: "2rem",
                    fontWeight: 800,
                  }}
                >
                  {stajyerler.length}
                </Typography>
              </CardContent>
            </Card>

            {/* DEVAMSIZLIĞI OLAN */}

            <Card
              elevation={0}
              sx={{
                border:
                  "1px solid #dfe5ec",
                borderRadius: 2,
                background:
                  "#ffffff",
              }}
            >
              <CardContent>
                <EventBusyOutlined
                  sx={{
                    color: "#e65100",
                    fontSize: 30,
                    mb: 1,
                  }}
                />

                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize:
                      "0.85rem",
                  }}
                >
                  Devamsızlığı Olan
                </Typography>

                <Typography
                  sx={{
                    color: "#0f2742",
                    fontSize: "2rem",
                    fontWeight: 800,
                  }}
                >
                  {devamsizligiOlan}
                </Typography>
              </CardContent>
            </Card>

            {/* TOPLAM GÜN */}

            <Card
              elevation={0}
              sx={{
                border:
                  "1px solid #dfe5ec",
                borderRadius: 2,
                background:
                  "#ffffff",
              }}
            >
              <CardContent>
                <EventBusyOutlined
                  sx={{
                    color: "#c2410c",
                    fontSize: 30,
                    mb: 1,
                  }}
                />

                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize:
                      "0.85rem",
                  }}
                >
                  Toplam Devamsızlık
                </Typography>

                <Typography
                  sx={{
                    color: "#0f2742",
                    fontSize: "2rem",
                    fontWeight: 800,
                  }}
                >
                  {toplamDevamsizlik}
                </Typography>

                <Typography
                  sx={{
                    color: "#94a3b8",
                    fontSize: 11,
                  }}
                >
                  gün
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* ================= DEVAMSIZLIK LİSTESİ ================= */}

          <Card
            elevation={0}
            sx={{
              border:
                "1px solid #dfe5ec",
              borderRadius: 2,
              background:
                "#ffffff",
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
                  fontSize:
                    "1.15rem",
                  fontWeight: 700,
                  color: "#0f2742",
                  mb: 0.5,
                }}
              >
                Stajyer Devamsızlıkları
              </Typography>

              <Typography
                sx={{
                  color: "#64748b",
                  fontSize:
                    "0.85rem",
                  mb: 2,
                }}
              >
                Her stajyerin toplam
                devamsızlık gününü
                güncelleyebilirsiniz.
              </Typography>

              <Divider
                sx={{ mb: 2 }}
              />

              {/* TABLO BAŞLIĞI */}

              <Box
                sx={{
                  display: {
                    xs: "none",
                    md: "grid",
                  },
                  gridTemplateColumns:
                    "2fr 2fr 1fr 1.2fr",
                  gap: 2,
                  px: 2,
                  py: 1.2,
                  background:
                    "#f8fafc",
                  borderRadius: 1.5,
                  mb: 1,
                }}
              >
                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  STAJYER
                </Typography>

                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  BÖLÜM
                </Typography>

                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  DEVAMSIZLIK
                </Typography>

                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  DURUM
                </Typography>
              </Box>

              {/* STAJYERLER */}

              <Box
                sx={{
                  display: "flex",
                  flexDirection:
                    "column",
                  gap: 1,
                }}
              >
                {stajyerler.map(
                  (stajyer) => (
                    <Box
                      key={stajyer.id}
                      sx={{
                        display: "grid",
                        gridTemplateColumns: {
                          xs: "1fr",
                          md: "2fr 2fr 1fr 1.2fr",
                        },
                        gap: 2,
                        alignItems:
                          "center",
                        p: 2,

                        border:
                          "1px solid #e2e8f0",

                        borderRadius: 1.5,

                        transition:
                          "0.2s",

                        "&:hover": {
                          borderColor:
                            "#b8c7d9",
                          background:
                            "#fcfdff",
                        },
                      }}
                    >
                      {/* STAJYER */}

                      <Box>
                        <Typography
                          sx={{
                            fontWeight: 700,
                            color:
                              "#0f2742",
                            fontSize:
                              14,
                          }}
                        >
                          {
                            stajyer.adSoyad
                          }
                        </Typography>

                        <Typography
                          sx={{
                            display: {
                              xs: "block",
                              md: "none",
                            },
                            color:
                              "#94a3b8",
                            fontSize:
                              11,
                            mt: 0.3,
                          }}
                        >
                          Stajyer
                        </Typography>
                      </Box>

                      {/* BÖLÜM */}

                      <Box>
                        <Typography
                          sx={{
                            color:
                              "#334155",
                            fontSize:
                              13,
                          }}
                        >
                          {
                            stajyer.bolum
                          }
                        </Typography>
                      </Box>

                      {/* DEVAMSIZLIK */}

                      <Box>
                        <TextField
                          type="number"
                          size="small"
                          value={
                            stajyer.devamsizlik
                          }
                          onChange={(e) =>
                            handleChange(
                              stajyer.id,
                              e.target.value
                            )
                          }
                          slotProps={{
                            htmlInput: {
                              min: 0,
                            },
                          }}
                          sx={{
                            width: {
                              xs: "100%",
                              md: 100,
                            },

                            "& .MuiOutlinedInput-root":
                              {
                                borderRadius:
                                  1.5,
                              },
                          }}
                        />
                      </Box>

                      {/* DURUM */}

                      <Box>
                        <Typography
                          sx={{
                            fontSize:
                              12,
                            fontWeight: 700,
                            color:
                              stajyer.devamsizlik >
                              0
                                ? "#c2410c"
                                : "#166534",
                            mb: 0.8,
                          }}
                        >
                          {stajyer.devamsizlik >
                          0
                            ? `${stajyer.devamsizlik} gün devamsızlık`
                            : "Devamsızlık yok"}
                        </Typography>
                      </Box>
                    </Box>
                  )
                )}
              </Box>

              {/* KAYDET */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent:
                    "space-between",
                  gap: 2,
                  flexWrap:
                    "wrap",
                  mt: 3,
                  pt: 2,
                  borderTop:
                    "1px solid #e2e8f0",
                }}
              >
                <Box>
                  {basarili && (
                    <Typography
                      sx={{
                        color:
                          "#15803d",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      Devamsızlık
                      bilgileri
                      başarıyla
                      kaydedildi.
                    </Typography>
                  )}
                </Box>

                <Button
                  variant="contained"
                  startIcon={
                    <SaveOutlined />
                  }
                  onClick={
                    handleSave
                  }
                  sx={{
                    background:
                      "#0f2742",
                    px: 3,
                    py: 1.1,
                    borderRadius: 1.5,
                    fontWeight: 700,
                    textTransform:
                      "none",
                    boxShadow:
                      "none",

                    "&:hover": {
                      background:
                        "#173b61",
                      boxShadow:
                        "none",
                    },
                  }}
                >
                  Devamsızlıkları Kaydet
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}