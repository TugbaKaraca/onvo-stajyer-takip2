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

const raporlar = [
  {
    id: 1,
    stajyer: "Zeynep Kaya",
    bolum: "Yazılım Mühendisliği",
    rapor: "1. Hafta Staj Raporu",
    tarih: "15 Ağustos 2026",
    durum: "İnceleniyor",
    aciklama:
      "İlk hafta içerisinde gerçekleştirilen çalışmalar, öğrenilen teknolojiler ve yapılan görevler hakkında staj raporu.",
  },
  {
    id: 2,
    stajyer: "Mehmet Demir",
    bolum: "Bilgisayar Mühendisliği",
    rapor: "1. Hafta Staj Raporu",
    tarih: "15 Ağustos 2026",
    durum: "Onaylandı",
    aciklama:
      "İlk hafta içerisinde gerçekleştirilen çalışmalar ve proje sürecinde yapılan görevlerin özeti.",
  },
  {
    id: 3,
    stajyer: "Elif Çelik",
    bolum: "Yazılım Mühendisliği",
    rapor: "1. Hafta Staj Raporu",
    tarih: "15 Ağustos 2026",
    durum: "İnceleniyor",
    aciklama:
      "Staj sürecinde gerçekleştirilen çalışmalar ve edinilen teknik kazanımlar hakkında rapor.",
  },
  {
    id: 4,
    stajyer: "Burak Yılmaz",
    bolum: "Bilgisayar Mühendisliği",
    rapor: "1. Hafta Staj Raporu",
    tarih: "15 Ağustos 2026",
    durum: "Onaylandı",
    aciklama:
      "Hafta boyunca gerçekleştirilen yazılım geliştirme çalışmaları ve proje görevleri.",
  },
  {
    id: 5,
    stajyer: "Sena Aydın",
    bolum: "Yazılım Mühendisliği",
    rapor: "1. Hafta Staj Raporu",
    tarih: "15 Ağustos 2026",
    durum: "Bekliyor",
    aciklama:
      "Stajyer tarafından hazırlanması beklenen haftalık staj raporu.",
  },
];

export default function RaporlarPage() {
  const router = useRouter();
  const pathname = usePathname();

  const [seciliRapor, setSeciliRapor] =
    useState<(typeof raporlar)[number] | null>(null);

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

  const onaylanan = raporlar.filter(
    (rapor) => rapor.durum === "Onaylandı"
  ).length;

  const incelenen = raporlar.filter(
    (rapor) => rapor.durum === "İnceleniyor"
  ).length;

  const bekleyen = raporlar.filter(
    (rapor) => rapor.durum === "Bekliyor"
  ).length;

  const durumRengi = (durum: string) => {
    if (durum === "Onaylandı") {
      return {
        background: "#dcfce7",
        color: "#166534",
      };
    }

    if (durum === "İnceleniyor") {
      return {
        background: "#fef3c7",
        color: "#92400e",
      };
    }

    return {
      background: "#fee2e2",
      color: "#991b1b",
    };
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
            NAVBAR
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

          <Box sx={{ mb: 3 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 0.7,
              }}
            >
              <DescriptionOutlined
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
                Raporlar
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#64748b",
                fontSize: 13,
              }}
            >
              Stajyerleriniz tarafından gönderilen
              raporları buradan inceleyebilirsiniz.
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
            {/* ONAYLANAN */}

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
                  Onaylanan Rapor
                </Typography>

                <Typography
                  sx={{
                    color: "#0f2742",
                    fontSize: "2rem",
                    fontWeight: 800,
                  }}
                >
                  {onaylanan}
                </Typography>
              </CardContent>
            </Card>

            {/* İNCELENEN */}

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
                    color: "#d97706",
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
                  İncelenen Rapor
                </Typography>

                <Typography
                  sx={{
                    color: "#0f2742",
                    fontSize: "2rem",
                    fontWeight: 800,
                  }}
                >
                  {incelenen}
                </Typography>
              </CardContent>
            </Card>

            {/* BEKLEYEN */}

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
                    color: "#dc2626",
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
                  Bekleyen Rapor
                </Typography>

                <Typography
                  sx={{
                    color: "#0f2742",
                    fontSize: "2rem",
                    fontWeight: 800,
                  }}
                >
                  {bekleyen}
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* =====================================================
              RAPOR LİSTESİ
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
                Stajyer Raporları
              </Typography>

              <Typography
                sx={{
                  color: "#64748b",
                  fontSize: "0.85rem",
                  mb: 2,
                }}
              >
                Gönderilen raporları ve inceleme
                durumlarını görüntüleyebilirsiniz.
              </Typography>

              <Divider sx={{ mb: 2 }} />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                }}
              >
                {raporlar.map((rapor) => {
                  const renk = durumRengi(
                    rapor.durum
                  );

                  return (
                    <Box
                      key={rapor.id}
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
                          borderColor:
                            "#b8c7d9",
                          boxShadow:
                            "0 4px 15px rgba(15,39,66,0.06)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: {
                            xs: "flex-start",
                            md: "center",
                          },
                          justifyContent:
                            "space-between",
                          flexDirection: {
                            xs: "column",
                            md: "row",
                          },
                          gap: 2,
                        }}
                      >
                        {/* RAPOR BİLGİSİ */}

                        <Box
                          sx={{
                            display: "flex",
                            alignItems:
                              "flex-start",
                            gap: 1.5,
                          }}
                        >
                          <Box
                            sx={{
                              width: 42,
                              height: 42,
                              borderRadius: 1.5,
                              background:
                                "#EDF4F9",
                              display: "flex",
                              alignItems:
                                "center",
                              justifyContent:
                                "center",
                              flexShrink: 0,
                            }}
                          >
                            <DescriptionOutlined
                              sx={{
                                color:
                                  "#286B9D",
                                fontSize: 22,
                              }}
                            />
                          </Box>

                          <Box>
                            <Typography
                              sx={{
                                fontWeight: 800,
                                color:
                                  "#0f2742",
                                fontSize:
                                  "0.95rem",
                              }}
                            >
                              {rapor.rapor}
                            </Typography>

                            <Typography
                              sx={{
                                color:
                                  "#64748b",
                                fontSize:
                                  "0.8rem",
                                mt: 0.3,
                              }}
                            >
                              {rapor.stajyer}
                            </Typography>

                            <Typography
                              sx={{
                                color:
                                  "#94a3b8",
                                fontSize:
                                  "0.75rem",
                                mt: 0.2,
                              }}
                            >
                              {rapor.bolum}
                            </Typography>
                          </Box>
                        </Box>

                        {/* DURUM */}

                        <Chip
                          label={rapor.durum}
                          size="small"
                          sx={{
                            background:
                              renk.background,
                            color:
                              renk.color,
                            fontWeight: 700,
                          }}
                        />
                      </Box>

                      {/* ALT BİLGİLER */}

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: {
                            xs: "flex-start",
                            md: "center",
                          },
                          justifyContent:
                            "space-between",
                          flexDirection: {
                            xs: "column",
                            md: "row",
                          },
                          gap: 2,
                          mt: 2,
                          pt: 2,
                          borderTop:
                            "1px solid #f1f5f9",
                        }}
                      >
                        <Typography
                          sx={{
                            color:
                              "#64748b",
                            fontSize:
                              "0.8rem",
                          }}
                        >
                          Gönderim Tarihi:{" "}
                          <strong>
                            {rapor.tarih}
                          </strong>
                        </Typography>

                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={
                            <VisibilityOutlined />
                          }
                          onClick={() =>
                            setSeciliRapor(
                              rapor
                            )
                          }
                          sx={{
                            borderColor:
                              "#cbd5e1",
                            color:
                              "#0f2742",
                            textTransform:
                              "none",
                            borderRadius:
                              1.5,

                            "&:hover": {
                              borderColor:
                                "#0f2742",
                              background:
                                "#f5f8fb",
                            },
                          }}
                        >
                          Raporu Görüntüle
                        </Button>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* =====================================================
          RAPOR DETAY MODALI
      ===================================================== */}

      <Dialog
        open={Boolean(seciliRapor)}
        onClose={() =>
          setSeciliRapor(null)
        }
        fullWidth
        maxWidth="sm"
      >
        {seciliRapor && (
          <>
            <DialogTitle
              sx={{
                color: "#0f2742",
                fontWeight: 800,
                pr: 6,
              }}
            >
              {seciliRapor.rapor}

              <IconButton
                onClick={() =>
                  setSeciliRapor(null)
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
                {seciliRapor.stajyer} •{" "}
                {seciliRapor.bolum}
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
                  mb: 3,
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
                    Stajyer
                  </Typography>

                  <Typography
                    sx={{
                      color: "#334155",
                      fontWeight: 600,
                    }}
                  >
                    {seciliRapor.stajyer}
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
                    Gönderim Tarihi
                  </Typography>

                  <Typography
                    sx={{
                      color: "#334155",
                      fontWeight: 600,
                    }}
                  >
                    {seciliRapor.tarih}
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
                    label={seciliRapor.durum}
                    size="small"
                    sx={{
                      background:
                        durumRengi(
                          seciliRapor.durum
                        ).background,
                      color:
                        durumRengi(
                          seciliRapor.durum
                        ).color,
                      fontWeight: 700,
                    }}
                  />
                </Box>
              </Box>

              <Typography
                sx={{
                  color: "#0f2742",
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                Rapor Özeti
              </Typography>

              <Box
                sx={{
                  background: "#f8fafc",
                  border:
                    "1px solid #e2e8f0",
                  borderRadius: 2,
                  p: 2,
                  mb: 3,
                }}
              >
                <Typography
                  sx={{
                    color: "#475569",
                    fontSize: 14,
                    lineHeight: 1.7,
                  }}
                >
                  {seciliRapor.aciklama}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent:
                    "flex-end",
                }}
              >
                <Button
                  variant="contained"
                  onClick={() =>
                    setSeciliRapor(null)
                  }
                  sx={{
                    background: "#0f2742",
                    textTransform:
                      "none",
                    borderRadius: 1.5,
                    px: 3,
                    boxShadow: "none",

                    "&:hover": {
                      background:
                        "#173b61",
                      boxShadow:
                        "none",
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