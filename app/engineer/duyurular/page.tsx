"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
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
  VisibilityOutlined,
  CloseOutlined,
} from "@mui/icons-material";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const duyurular = [
  {
    id: 1,
    baslik: "Stajyer Toplantısı Hakkında",
    tarih: "14 Ağustos 2026",
    tur: "Genel",
    icerik:
      "Tüm stajyerlerin katılım sağlayacağı haftalık değerlendirme toplantısı 15 Ağustos 2026 tarihinde gerçekleştirilecektir. Toplantıda hafta içerisinde yapılan çalışmalar değerlendirilecektir.",
  },
  {
    id: 2,
    baslik: "Haftalık Rapor Teslim Tarihi",
    tarih: "13 Ağustos 2026",
    tur: "Önemli",
    icerik:
      "Stajyerlerin haftalık raporlarını belirtilen teslim tarihine kadar sisteme yüklemeleri gerekmektedir. Raporların eksiksiz olarak gönderilmesine dikkat edilmelidir.",
  },
  {
    id: 3,
    baslik: "Çalışma Saatleri Hakkında",
    tarih: "12 Ağustos 2026",
    tur: "Bilgilendirme",
    icerik:
      "Staj süresince belirlenen çalışma saatlerine uyulması ve mesai başlangıç ve bitiş saatlerine dikkat edilmesi gerekmektedir.",
  },
  {
    id: 4,
    baslik: "Staj Süreci Bilgilendirmesi",
    tarih: "10 Ağustos 2026",
    tur: "Genel",
    icerik:
      "Staj sürecinde gerçekleştirilecek çalışmalar, görev dağılımları ve takip işlemleri hakkında genel bilgilendirme yapılmıştır.",
  },
];

export default function DuyurularPage() {
  const router = useRouter();
  const pathname = usePathname();

  const [seciliDuyuru, setSeciliDuyuru] =
    useState<(typeof duyurular)[number] | null>(null);

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

  const turRengi = (tur: string) => {
    if (tur === "Önemli") {
      return {
        background: "#fee2e2",
        color: "#991b1b",
      };
    }

    if (tur === "Bilgilendirme") {
      return {
        background: "#dbeafe",
        color: "#1d4ed8",
      };
    }

    return {
      background: "#dcfce7",
      color: "#166534",
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
                    backgroundColor:
                      "rgba(255,255,255,0.14)",
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
              <CampaignOutlined
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
                Duyurular
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#64748b",
                fontSize: 13,
              }}
            >
              Sistem ve staj süreciyle ilgili güncel
              duyuruları buradan takip edebilirsiniz.
            </Typography>
          </Box>

          {/* ================= DUYURU KARTI ================= */}

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
                Güncel Duyurular
              </Typography>

              <Typography
                sx={{
                  color: "#64748b",
                  fontSize: "0.85rem",
                  mb: 2,
                }}
              >
                Yayınlanan duyuruları buradan
                görüntüleyebilirsiniz.
              </Typography>

              <Divider sx={{ mb: 2 }} />

              {/* DUYURU LİSTESİ */}

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                }}
              >
                {duyurular.map((duyuru) => {
                  const renk = turRengi(duyuru.tur);

                  return (
                    <Box
                      key={duyuru.id}
                      sx={{
                        border: "1px solid #e2e8f0",
                        borderRadius: 2,
                        p: {
                          xs: 2,
                          md: 2.5,
                        },

                        transition: "all 0.2s ease",

                        "&:hover": {
                          borderColor: "#b8c7d9",
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
                          justifyContent: "space-between",
                          flexDirection: {
                            xs: "column",
                            md: "row",
                          },
                          gap: 2,
                        }}
                      >
                        {/* SOL TARAF */}

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
                              height: 42,
                              borderRadius: 1.5,
                              background: "#EDF4F9",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <CampaignOutlined
                              sx={{
                                color: "#286B9D",
                                fontSize: 22,
                              }}
                            />
                          </Box>

                          <Box>
                            <Typography
                              sx={{
                                fontWeight: 800,
                                color: "#0f2742",
                                fontSize: "0.95rem",
                              }}
                            >
                              {duyuru.baslik}
                            </Typography>

                            <Typography
                              sx={{
                                color: "#64748b",
                                fontSize: "0.8rem",
                                mt: 0.4,
                              }}
                            >
                              {duyuru.tarih}
                            </Typography>
                          </Box>
                        </Box>

                        {/* TÜR */}

                        <Chip
                          label={duyuru.tur}
                          size="small"
                          sx={{
                            background: renk.background,
                            color: renk.color,
                            fontWeight: 700,
                          }}
                        />
                      </Box>

                      {/* ALT KISIM */}

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: {
                            xs: "flex-start",
                            md: "center",
                          },
                          justifyContent: "space-between",
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
                            color: "#64748b",
                            fontSize: "0.8rem",
                            lineHeight: 1.6,
                            maxWidth: {
                              xs: "100%",
                              md: "70%",
                            },
                          }}
                        >
                          {duyuru.icerik}
                        </Typography>

                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<VisibilityOutlined />}
                          onClick={() =>
                            setSeciliDuyuru(duyuru)
                          }
                          sx={{
                            borderColor: "#cbd5e1",
                            color: "#0f2742",
                            textTransform: "none",
                            borderRadius: 1.5,
                            whiteSpace: "nowrap",

                            "&:hover": {
                              borderColor: "#0f2742",
                              background: "#f5f8fb",
                            },
                          }}
                        >
                          Duyuruyu Görüntüle
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

      {/* ================= DUYURU DETAY MODALI ================= */}

      <Dialog
        open={Boolean(seciliDuyuru)}
        onClose={() => setSeciliDuyuru(null)}
        fullWidth
        maxWidth="sm"
      >
        {seciliDuyuru && (
          <>
            <DialogTitle
              sx={{
                color: "#0f2742",
                fontWeight: 800,
                pr: 6,
              }}
            >
              {seciliDuyuru.baslik}

              <IconButton
                onClick={() => setSeciliDuyuru(null)}
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 2,
                }}
              >
                <Chip
                  label={seciliDuyuru.tur}
                  size="small"
                  sx={{
                    background:
                      turRengi(seciliDuyuru.tur).background,
                    color:
                      turRengi(seciliDuyuru.tur).color,
                    fontWeight: 700,
                  }}
                />

                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize: 13,
                  }}
                >
                  {seciliDuyuru.tarih}
                </Typography>
              </Box>

              <Divider sx={{ mb: 2.5 }} />

              <Typography
                sx={{
                  color: "#0f2742",
                  fontWeight: 700,
                  fontSize: 16,
                  mb: 1,
                }}
              >
                Duyuru İçeriği
              </Typography>

              <Box
                sx={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: 2,
                  p: 2,
                }}
              >
                <Typography
                  sx={{
                    color: "#475569",
                    fontSize: 14,
                    lineHeight: 1.8,
                  }}
                >
                  {seciliDuyuru.icerik}
                </Typography>
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
                  onClick={() => setSeciliDuyuru(null)}
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