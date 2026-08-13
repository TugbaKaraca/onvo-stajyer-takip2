"use client";

import {
  Box,
  Card,
  CardContent,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";

import {
  Dashboard,
  People,
  Description,
  EventAvailable,
  Folder,
  Campaign,
  Notifications,
  Settings,
  Logout,
  Person,
  AccessTime,
  CheckCircle,
  Warning,
  ArrowForward,
} from "@mui/icons-material";

import { useRouter } from "next/navigation";

export default function YetkiliPage() {
  const router = useRouter();

  const menuItems = [
    {
      icon: <Dashboard />,
      text: "Kontrol Paneli",
      path: "/yetkili",
    },
    {
      icon: <People />,
      text: "Stajyerler",
      path: "/yetkili/stajyerler",
    },
    {
      icon: <Description />,
      text: "Raporlar",
      path: "/yetkili/raporlar",
    },
    {
      icon: <EventAvailable />,
      text: "Devam Durumu",
      path: "/yetkili/devam",
    },
    {
      icon: <Folder />,
      text: "Belgeler",
      path: "/yetkili/belgeler",
    },
    {
      icon: <Campaign />,
      text: "Duyurular",
      path: "/yetkili/duyurular",
    },
    {
      icon: <Notifications />,
      text: "Bildirimler",
      path: "/yetkili/bildirimler",
    },
    {
      icon: <Settings />,
      text: "Ayarlar",
      path: "/yetkili/ayarlar",
    },
  ];

  const interns = [
    {
      name: "Zeliha Koyuncu",
      department: "Yazılım",
      status: "Aktif",
      report: "İnceleniyor",
    },
    {
      name: "Ahmet Yılmaz",
      department: "Elektrik",
      status: "Aktif",
      report: "Onaylandı",
    },
    {
      name: "Elif Demir",
      department: "Yazılım",
      status: "Aktif",
      report: "Bekliyor",
    },
    {
      name: "Mehmet Kaya",
      department: "Ar-Ge",
      status: "İzinli",
      report: "Onaylandı",
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
        <Box sx={{ px: 1, py: 1.5 }}>
          {menuItems.map((item) => {
            const active = item.path === "/yetkili";

            return (
              <Box
                key={item.text}
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
                  {item.text}
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
            onClick={() => router.push("/login/yetkili")}
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
            <Logout sx={{ fontSize: 19 }} />

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
            onClick={() =>
              router.push("/yetkili/bildirimler")
            }
            sx={{
              mr: 1,
              color: "#286B9D",
            }}
          >
            <Notifications />
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
            <Person sx={{ fontSize: 20 }} />
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

        {/* İÇERİK */}
        <Box
          sx={{
            px: {
              xs: 2,
              md: 4,
            },
            py: 3,
            maxWidth: 1400,
            mx: "auto",
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
              Kontrol Paneli
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 13,
              }}
            >
              Stajyerlerin genel durumunu buradan takip
              edebilirsiniz.
            </Typography>
          </Box>

          {/* İSTATİSTİKLER */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                lg: "repeat(4, 1fr)",
              },
              gap: 2,
              mb: 3,
            }}
          >
            {/* TOPLAM */}
            <Card
              elevation={0}
              sx={{
                border: "1px solid #E4E7EC",
                borderRadius: 2,
              }}
            >
              <CardContent sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 12,
                      color: "#64748B",
                    }}
                  >
                    Toplam Stajyer
                  </Typography>

                  <People
                    sx={{
                      color: "#286B9D",
                      fontSize: 22,
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    fontSize: 26,
                    fontWeight: "bold",
                    mt: 1,
                  }}
                >
                  24
                </Typography>

                <Typography
                  sx={{
                    fontSize: 10,
                    color: "#94A3B8",
                  }}
                >
                  Kayıtlı stajyer
                </Typography>
              </CardContent>
            </Card>

            {/* AKTİF */}
            <Card
              elevation={0}
              sx={{
                border: "1px solid #E4E7EC",
                borderRadius: 2,
              }}
            >
              <CardContent sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 12,
                      color: "#64748B",
                    }}
                  >
                    Aktif Stajyer
                  </Typography>

                  <CheckCircle
                    sx={{
                      color: "#16A34A",
                      fontSize: 22,
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    fontSize: 26,
                    fontWeight: "bold",
                    mt: 1,
                  }}
                >
                  18
                </Typography>

                <Typography
                  sx={{
                    fontSize: 10,
                    color: "#16A34A",
                  }}
                >
                  Stajına devam ediyor
                </Typography>
              </CardContent>
            </Card>

            {/* DEVAM */}
            <Card
              elevation={0}
              sx={{
                border: "1px solid #E4E7EC",
                borderRadius: 2,
              }}
            >
              <CardContent sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 12,
                      color: "#64748B",
                    }}
                  >
                    Bugün Gelenler
                  </Typography>

                  <AccessTime
                    sx={{
                      color: "#286B9D",
                      fontSize: 22,
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    fontSize: 26,
                    fontWeight: "bold",
                    mt: 1,
                  }}
                >
                  16
                </Typography>

                <Typography
                  sx={{
                    fontSize: 10,
                    color: "#94A3B8",
                  }}
                >
                  18 aktif stajyerden
                </Typography>
              </CardContent>
            </Card>

            {/* RAPOR */}
            <Card
              elevation={0}
              sx={{
                border: "1px solid #E4E7EC",
                borderRadius: 2,
              }}
            >
              <CardContent sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 12,
                      color: "#64748B",
                    }}
                  >
                    Bekleyen Rapor
                  </Typography>

                  <Warning
                    sx={{
                      color: "#D97706",
                      fontSize: 22,
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    fontSize: 26,
                    fontWeight: "bold",
                    mt: 1,
                  }}
                >
                  7
                </Typography>

                <Typography
                  sx={{
                    fontSize: 10,
                    color: "#D97706",
                  }}
                >
                  İnceleme bekliyor
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* STAJYERLER + RAPORLAR */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                lg: "1.5fr 1fr",
              },
              gap: 2,
              mb: 3,
            }}
          >
            {/* STAJYERLER */}
            <Card
              elevation={0}
              sx={{
                border: "1px solid #E4E7EC",
                borderRadius: 2,
              }}
            >
              <CardContent sx={{ p: 2.5 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "#0F2742",
                    }}
                  >
                    Stajyerler
                  </Typography>

                  <Typography
                    onClick={() =>
                      router.push("/yetkili/stajyerler")
                    }
                    sx={{
                      fontSize: 12,
                      color: "#286B9D",
                      cursor: "pointer",
                    }}
                  >
                    Tümünü Gör →
                  </Typography>
                </Box>

                {interns.map((intern, index) => (
                  <Box
                    key={intern.name}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      py: 1.4,

                      borderBottom:
                        index !== interns.length - 1
                          ? "1px solid #EEF1F5"
                          : "none",
                    }}
                  >
                    <Box
                      sx={{
                        width: 38,
                        height: 38,
                        borderRadius: "50%",
                        backgroundColor: "#EDF4F9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#286B9D",
                      }}
                    >
                      <Person sx={{ fontSize: 20 }} />
                    </Box>

                    <Box sx={{ flex: 1 }}>
                      <Typography
                        sx={{
                          fontSize: 13,
                          fontWeight: "bold",
                        }}
                      >
                        {intern.name}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 10,
                          color: "#64748B",
                        }}
                      >
                        {intern.department}
                      </Typography>
                    </Box>

                    <Chip
                      label={intern.status}
                      size="small"
                      color={
                        intern.status === "Aktif"
                          ? "success"
                          : "warning"
                      }
                      sx={{
                        fontSize: 10,
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                ))}
              </CardContent>
            </Card>

            {/* RAPORLAR */}
            <Card
              elevation={0}
              sx={{
                border: "1px solid #E4E7EC",
                borderRadius: 2,
              }}
            >
              <CardContent sx={{ p: 2.5 }}>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#0F2742",
                    mb: 2,
                  }}
                >
                  Son Raporlar
                </Typography>

                <Box
                  sx={{
                    p: 1.5,
                    backgroundColor: "#F8FAFC",
                    borderRadius: 2,
                    mb: 1.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: "bold",
                    }}
                  >
                    Zeliha Koyuncu
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 11,
                      color: "#64748B",
                      mt: 0.5,
                    }}
                  >
                    Günlük Çalışma Raporu
                  </Typography>

                  <Chip
                    label="İnceleniyor"
                    size="small"
                    color="warning"
                    sx={{
                      mt: 1,
                      fontSize: 10,
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    p: 1.5,
                    backgroundColor: "#F8FAFC",
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: "bold",
                    }}
                  >
                    Ahmet Yılmaz
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 11,
                      color: "#64748B",
                      mt: 0.5,
                    }}
                  >
                    Günlük Çalışma Raporu
                  </Typography>

                  <Chip
                    label="Onaylandı"
                    size="small"
                    color="success"
                    sx={{
                      mt: 1,
                      fontSize: 10,
                    }}
                  />
                </Box>

                <Box
                  onClick={() =>
                    router.push("/yetkili/raporlar")
                  }
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: 0.5,
                    mt: 2,
                    color: "#286B9D",
                    cursor: "pointer",
                  }}
                >
                  <Typography sx={{ fontSize: 12 }}>
                    Tüm raporları gör
                  </Typography>

                  <ArrowForward sx={{ fontSize: 16 }} />
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* DUYURULAR */}
          <Card
            elevation={0}
            sx={{
              border: "1px solid #E4E7EC",
              borderRadius: 2,
            }}
          >
            <CardContent sx={{ p: 2.5 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#0F2742",
                  }}
                >
                  Duyurular
                </Typography>

                <Typography
                  onClick={() =>
                    router.push("/yetkili/duyurular")
                  }
                  sx={{
                    fontSize: 12,
                    color: "#286B9D",
                    cursor: "pointer",
                  }}
                >
                  Tüm duyuruları gör →
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  py: 1.5,
                  borderBottom: "1px solid #EEF1F5",
                }}
              >
                <Campaign
                  sx={{
                    color: "#286B9D",
                    fontSize: 20,
                  }}
                />

                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: "bold",
                    }}
                  >
                    Stajyer Oryantasyon Programı
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 11,
                      color: "#64748B",
                    }}
                  >
                    Yeni stajyerler için oryantasyon
                    programı gerçekleştirilecektir.
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontSize: 10,
                    color: "#94A3B8",
                  }}
                >
                  12.08.2026
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  py: 1.5,
                }}
              >
                <Campaign
                  sx={{
                    color: "#286B9D",
                    fontSize: 20,
                  }}
                />

                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: "bold",
                    }}
                  >
                    Günlük Rapor Hatırlatması
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 11,
                      color: "#64748B",
                    }}
                  >
                    Stajyerlerin günlük raporlarını sisteme
                    girmeleri gerekmektedir.
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontSize: 10,
                    color: "#94A3B8",
                  }}
                >
                  11.08.2026
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}