"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Dialog,
  DialogContent,
  DialogTitle,
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
  VisibilityOutlined,
  CloseOutlined,
} from "@mui/icons-material";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const stajyerler = [
  {
    id: 1,
    adSoyad: "Zeynep Kaya",
    universite: "İstanbul Gelişim Üniversitesi",
    bolum: "Yazılım Mühendisliği",
    baslangic: "10 Ağustos 2026",
    bitis: "4 Eylül 2026",
    stajSuresi: 20,
    devamsizlik: 1,
    rapor: "3 / 20",
    durum: "Aktif",
  },
  {
    id: 2,
    adSoyad: "Mehmet Demir",
    universite: "Yıldız Teknik Üniversitesi",
    bolum: "Bilgisayar Mühendisliği",
    baslangic: "10 Ağustos 2026",
    bitis: "4 Eylül 2026",
    stajSuresi: 20,
    devamsizlik: 0,
    rapor: "4 / 20",
    durum: "Aktif",
  },
  {
    id: 3,
    adSoyad: "Elif Çelik",
    universite: "İstanbul Üniversitesi",
    bolum: "Yazılım Mühendisliği",
    baslangic: "10 Ağustos 2026",
    bitis: "4 Eylül 2026",
    stajSuresi: 20,
    devamsizlik: 2,
    rapor: "2 / 20",
    durum: "Aktif",
  },
  {
    id: 4,
    adSoyad: "Burak Yılmaz",
    universite: "Marmara Üniversitesi",
    bolum: "Bilgisayar Mühendisliği",
    baslangic: "10 Ağustos 2026",
    bitis: "4 Eylül 2026",
    stajSuresi: 20,
    devamsizlik: 0,
    rapor: "5 / 20",
    durum: "Aktif",
  },
  {
    id: 5,
    adSoyad: "Sena Aydın",
    universite: "İstanbul Teknik Üniversitesi",
    bolum: "Yazılım Mühendisliği",
    baslangic: "10 Ağustos 2026",
    bitis: "4 Eylül 2026",
    stajSuresi: 20,
    devamsizlik: 1,
    rapor: "3 / 20",
    durum: "Aktif",
  },
];

export default function StajyerlerPage() {
  const router = useRouter();
  const pathname = usePathname();

  const [seciliStajyer, setSeciliStajyer] = useState<
    (typeof stajyerler)[number] | null
  >(null);

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
            İÇERİK
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

          <Box
            sx={{
              mb: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 1,
              }}
            >
              <GroupsOutlined
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
                Stajyerlerim
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#64748b",
                fontSize: 13,
              }}
            >
              Size bağlı stajyerleri ve staj süreçlerini
              buradan takip edebilirsiniz.
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
                background: "#ffffff",
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
                    fontSize: "0.85rem",
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
                    fontSize: 30,
                    mb: 1,
                  }}
                />

                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize: "0.85rem",
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
                  {
                    stajyerler.filter(
                      (stajyer) =>
                        stajyer.devamsizlik > 0
                    ).length
                  }
                </Typography>
              </CardContent>
            </Card>

            {/* RAPORLAR */}

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
                    fontSize: 30,
                    mb: 1,
                  }}
                />

                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize: "0.85rem",
                  }}
                >
                  Stajyer Sayısı
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
          </Box>

          {/* =====================================================
              STAJYER LİSTESİ
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
                Stajyer Listesi
              </Typography>

              <Typography
                sx={{
                  color: "#64748b",
                  fontSize: "0.85rem",
                  mb: 2,
                }}
              >
                Size bağlı stajyerlerin güncel durumlarını
                görüntüleyebilirsiniz.
              </Typography>

              <Divider sx={{ mb: 2 }} />

              {/* LİSTE */}

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                }}
              >
                {stajyerler.map((stajyer) => (
                  <Box
                    key={stajyer.id}
                    sx={{
                      border:
                        "1px solid #e2e8f0",
                      borderRadius: 2,
                      p: {
                        xs: 2,
                        md: 2.5,
                      },

                      transition:
                        "all 0.2s ease",

                      "&:hover": {
                        borderColor: "#b8c7d9",
                        boxShadow:
                          "0 4px 15px rgba(15,39,66,0.06)",
                      },
                    }}
                  >
                    {/* ÜST KISIM */}

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent:
                          "space-between",
                        alignItems: {
                          xs: "flex-start",
                          sm: "center",
                        },
                        flexDirection: {
                          xs: "column",
                          sm: "row",
                        },
                        gap: 1.5,
                      }}
                    >
                      {/* AD */}

                      <Box>
                        <Typography
                          sx={{
                            fontWeight: 800,
                            color: "#0f2742",
                            fontSize:
                              "1.05rem",
                          }}
                        >
                          {stajyer.adSoyad}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#64748b",
                            fontSize:
                              "0.85rem",
                            mt: 0.3,
                          }}
                        >
                          {stajyer.bolum}
                        </Typography>
                      </Box>

                      {/* DURUM */}

                      <Chip
                        label={stajyer.durum}
                        size="small"
                        sx={{
                          background:
                            "#dcfce7",
                          color: "#166534",
                          fontWeight: 700,
                        }}
                      />
                    </Box>

                    {/* DETAYLAR */}

                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: {
                          xs: "1fr",
                          sm: "repeat(2, 1fr)",
                          md: "repeat(5, 1fr)",
                        },
                        gap: 2,
                        mt: 2,
                      }}
                    >
                      {/* ÜNİVERSİTE */}

                      <Box>
                        <Typography
                          sx={{
                            color: "#94a3b8",
                            fontSize:
                              "0.75rem",
                            mb: 0.4,
                          }}
                        >
                          Üniversite
                        </Typography>

                        <Typography
                          sx={{
                            color: "#334155",
                            fontSize:
                              "0.85rem",
                          }}
                        >
                          {stajyer.universite}
                        </Typography>
                      </Box>

                      {/* STAJ TARİHİ */}

                      <Box>
                        <Typography
                          sx={{
                            color: "#94a3b8",
                            fontSize:
                              "0.75rem",
                            mb: 0.4,
                          }}
                        >
                          Staj Tarihi
                        </Typography>

                        <Typography
                          sx={{
                            color: "#334155",
                            fontSize:
                              "0.85rem",
                          }}
                        >
                          {stajyer.baslangic}
                          <br />
                          {stajyer.bitis}
                        </Typography>
                      </Box>

                      {/* STAJ SÜRESİ */}

                      <Box>
                        <Typography
                          sx={{
                            color: "#94a3b8",
                            fontSize:
                              "0.75rem",
                            mb: 0.4,
                          }}
                        >
                          Staj Süresi
                        </Typography>

                        <Typography
                          sx={{
                            color: "#334155",
                            fontWeight: 700,
                            fontSize:
                              "0.85rem",
                          }}
                        >
                          {stajyer.stajSuresi} gün
                        </Typography>
                      </Box>

                      {/* DEVAMSIZLIK */}

                      <Box>
                        <Typography
                          sx={{
                            color: "#94a3b8",
                            fontSize:
                              "0.75rem",
                            mb: 0.4,
                          }}
                        >
                          Devamsızlık
                        </Typography>

                        <Typography
                          sx={{
                            color:
                              stajyer.devamsizlik >
                              0
                                ? "#c2410c"
                                : "#166534",
                            fontWeight: 700,
                            fontSize:
                              "0.85rem",
                          }}
                        >
                          {stajyer.devamsizlik} / {stajyer.stajSuresi} gün
                        </Typography>
                      </Box>

                      {/* RAPOR */}

                      <Box>
                        <Typography
                          sx={{
                            color: "#94a3b8",
                            fontSize:
                              "0.75rem",
                            mb: 0.4,
                          }}
                        >
                          Rapor
                        </Typography>

                        <Typography
                          sx={{
                            color: "#334155",
                            fontWeight: 700,
                            fontSize:
                              "0.85rem",
                          }}
                        >
                          {stajyer.rapor}
                        </Typography>
                      </Box>
                    </Box>

                    {/* BUTON */}

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent:
                          "flex-end",
                        mt: 2,
                      }}
                    >
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={
                          <VisibilityOutlined />
                        }
                        onClick={() =>
                          setSeciliStajyer(
                            stajyer
                          )
                        }
                        sx={{
                          borderColor:
                            "#cbd5e1",
                          color: "#0f2742",
                          textTransform:
                            "none",
                          borderRadius: 1.5,

                          "&:hover": {
                            borderColor:
                              "#0f2742",
                            background:
                              "#f5f8fb",
                          },
                        }}
                      >
                        Detayları Gör
                      </Button>
                    </Box>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* =====================================================
          STAJYER DETAY PENCERESİ
      ===================================================== */}

      <Dialog
        open={Boolean(seciliStajyer)}
        onClose={() =>
          setSeciliStajyer(null)
        }
        fullWidth
        maxWidth="sm"
      >
        {seciliStajyer && (
          <>
            <DialogTitle
              sx={{
                color: "#0f2742",
                fontWeight: 800,
                pr: 6,
              }}
            >
              {seciliStajyer.adSoyad}

              <IconButton
                onClick={() =>
                  setSeciliStajyer(null)
                }
                sx={{
                  position: "absolute",
                  right: 12,
                  top: 12,
                  color: "#64748b",
                }}
              >
                <CloseOutlined />
              </IconButton>
            </DialogTitle>

            <DialogContent>
              <Typography
                sx={{
                  color: "#64748b",
                  fontSize: 14,
                  mb: 2,
                }}
              >
                {seciliStajyer.bolum}
              </Typography>

              <Divider sx={{ mb: 2 }} />

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                  },
                  gap: 2,
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: "#94a3b8",
                      fontSize: 12,
                      mb: 0.5,
                    }}
                  >
                    Üniversite
                  </Typography>

                  <Typography
                    sx={{
                      color: "#334155",
                      fontWeight: 600,
                    }}
                  >
                    {seciliStajyer.universite}
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#94a3b8",
                      fontSize: 12,
                      mb: 0.5,
                    }}
                  >
                    Durum
                  </Typography>

                  <Chip
                    label={seciliStajyer.durum}
                    size="small"
                    sx={{
                      background: "#dcfce7",
                      color: "#166534",
                      fontWeight: 700,
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#94a3b8",
                      fontSize: 12,
                      mb: 0.5,
                    }}
                  >
                    Staj Başlangıcı
                  </Typography>

                  <Typography
                    sx={{
                      color: "#334155",
                      fontWeight: 600,
                    }}
                  >
                    {seciliStajyer.baslangic}
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#94a3b8",
                      fontSize: 12,
                      mb: 0.5,
                    }}
                  >
                    Staj Bitişi
                  </Typography>

                  <Typography
                    sx={{
                      color: "#334155",
                      fontWeight: 600,
                    }}
                  >
                    {seciliStajyer.bitis}
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#94a3b8",
                      fontSize: 12,
                      mb: 0.5,
                    }}
                  >
                    Staj Süresi
                  </Typography>

                  <Typography
                    sx={{
                      color: "#334155",
                      fontWeight: 600,
                    }}
                  >
                    {seciliStajyer.stajSuresi} gün
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#94a3b8",
                      fontSize: 12,
                      mb: 0.5,
                    }}
                  >
                    Devamsızlık
                  </Typography>

                  <Typography
                    sx={{
                      color:
                        seciliStajyer.devamsizlik >
                        0
                          ? "#c2410c"
                          : "#166534",
                      fontWeight: 700,
                    }}
                  >
                    {seciliStajyer.devamsizlik} / {seciliStajyer.stajSuresi} gün
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#94a3b8",
                      fontSize: 12,
                      mb: 0.5,
                    }}
                  >
                    Rapor Durumu
                  </Typography>

                  <Typography
                    sx={{
                      color: "#334155",
                      fontWeight: 700,
                    }}
                  >
                    {seciliStajyer.rapor}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  mt: 3,
                }}
              >
                <Button
                  variant="contained"
                  onClick={() =>
                    setSeciliStajyer(null)
                  }
                  sx={{
                    background: "#0f2742",
                    textTransform: "none",
                    borderRadius: 1.5,
                    px: 3,
                    boxShadow: "none",

                    "&:hover": {
                      background: "#173b61",
                      boxShadow: "none",
                    },
                  }}
                >
                  Kapat
                </Button>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
}