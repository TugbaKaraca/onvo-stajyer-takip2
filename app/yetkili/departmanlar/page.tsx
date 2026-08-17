"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Chip,
  Switch,
  FormControlLabel,
  Divider,
} from "@mui/material";

import {
  Add,
  Edit,
  Delete,
  Business,
  People,
  CheckCircle,
  Block,
  Palette,
  Dashboard,
  Description,
  EventAvailable,
  Folder,
  Campaign,
  Notifications,
  Settings,
  Logout,
  Person,
  Close,
} from "@mui/icons-material";

interface Stajyer {
  id: number;
  ad: string;
  pozisyon: string;
  supervisor: string;
}

interface Departman {
  id: number;
  ad: string;
  sorumlu: string;
  stajyer: number;
  stajyerler: Stajyer[];
  renk: string;
  aktif: boolean;
}

export default function DepartmanlarPage() {
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
      icon: <Business />,
      text: "Departman Yönetimi",
      path: "/yetkili/departmanlar",
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
      text: "Kütüphane",
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

  // =========================================================
  // DEPARTMANLAR
  // =========================================================

  const [departmanlar, setDepartmanlar] = useState<Departman[]>([
    {
      id: 1,
      ad: "Yazılım",
      sorumlu: "Yetkili Kullanıcı",
      stajyer: 8,
      stajyerler: [
        {
          id: 1,
          ad: "Zeliha Koyuncu",
          pozisyon: "Yazılım Stajyeri",
          supervisor: "Ahmet Yılmaz",
        },
        {
          id: 2,
          ad: "Elif Demir",
          pozisyon: "Yazılım Stajyeri",
          supervisor: "Mehmet Kaya",
        },
        {
          id: 3,
          ad: "Mehmet Kaya",
          pozisyon: "Frontend Stajyeri",
          supervisor: "Ahmet Yılmaz",
        },
        {
          id: 4,
          ad: "Ayşe Yıldız",
          pozisyon: "Backend Stajyeri",
          supervisor: "Ahmet Yılmaz",
        },
        {
          id: 5,
          ad: "Can Aydın",
          pozisyon: "Yazılım Stajyeri",
          supervisor: "Mehmet Kaya",
        },
        {
          id: 6,
          ad: "Ece Şahin",
          pozisyon: "Frontend Stajyeri",
          supervisor: "Ahmet Yılmaz",
        },
        {
          id: 7,
          ad: "Burak Çelik",
          pozisyon: "Yazılım Stajyeri",
          supervisor: "Mehmet Kaya",
        },
        {
          id: 8,
          ad: "Derya Arslan",
          pozisyon: "Mobil Uygulama Stajyeri",
          supervisor: "Ahmet Yılmaz",
        },
      ],
      renk: "#132453",
      aktif: true,
    },
    {
      id: 2,
      ad: "Ar-Ge",
      sorumlu: "Ahmet Yılmaz",
      stajyer: 5,
      stajyerler: [
        {
          id: 9,
          ad: "Berk Özdemir",
          pozisyon: "Ar-Ge Stajyeri",
          supervisor: "Ahmet Yılmaz",
        },
        {
          id: 10,
          ad: "Sude Kaya",
          pozisyon: "Ar-Ge Stajyeri",
          supervisor: "Ahmet Yılmaz",
        },
        {
          id: 11,
          ad: "Emir Koç",
          pozisyon: "Ar-Ge Stajyeri",
          supervisor: "Ahmet Yılmaz",
        },
        {
          id: 12,
          ad: "İrem Aksoy",
          pozisyon: "Ar-Ge Stajyeri",
          supervisor: "Ahmet Yılmaz",
        },
        {
          id: 13,
          ad: "Mert Yıldırım",
          pozisyon: "Ar-Ge Stajyeri",
          supervisor: "Ahmet Yılmaz",
        },
      ],
      renk: "#2563EB",
      aktif: true,
    },
    {
      id: 3,
      ad: "Elektrik-Elektronik",
      sorumlu: "Mehmet Demir",
      stajyer: 4,
      stajyerler: [
        {
          id: 14,
          ad: "Kerem Acar",
          pozisyon: "Elektrik-Elektronik Stajyeri",
          supervisor: "Mehmet Demir",
        },
        {
          id: 15,
          ad: "Buse Karaca",
          pozisyon: "Elektrik-Elektronik Stajyeri",
          supervisor: "Mehmet Demir",
        },
        {
          id: 16,
          ad: "Oğuzhan Kurt",
          pozisyon: "Elektronik Stajyeri",
          supervisor: "Mehmet Demir",
        },
        {
          id: 17,
          ad: "Selin Er",
          pozisyon: "Elektronik Stajyeri",
          supervisor: "Mehmet Demir",
        },
      ],
      renk: "#059669",
      aktif: true,
    },
    {
      id: 4,
      ad: "Mekanik",
      sorumlu: "Ayşe Çelik",
      stajyer: 3,
      stajyerler: [
        {
          id: 18,
          ad: "Ali Demir",
          pozisyon: "Mekanik Stajyeri",
          supervisor: "Ayşe Çelik",
        },
        {
          id: 19,
          ad: "Nazlı Yılmaz",
          pozisyon: "Mekanik Stajyeri",
          supervisor: "Ayşe Çelik",
        },
        {
          id: 20,
          ad: "Kaan Şen",
          pozisyon: "Mekanik Stajyeri",
          supervisor: "Ayşe Çelik",
        },
      ],
      renk: "#D97706",
      aktif: true,
    },
  ]);

  // =========================================================
  // DEPARTMAN DİYALOĞU
  // =========================================================

  const [dialogOpen, setDialogOpen] = useState(false);

  const [duzenlenenDepartman, setDuzenlenenDepartman] =
    useState<Departman | null>(null);

  const [departmanAdi, setDepartmanAdi] = useState("");
  const [sorumlu, setSorumlu] = useState("");
  const [renk, setRenk] = useState("#132453");

  // =========================================================
  // STAJYER DİYALOĞU
  // =========================================================

  const [stajyerDialogOpen, setStajyerDialogOpen] = useState(false);

  const [seciliDepartman, setSeciliDepartman] =
    useState<Departman | null>(null);

  // =========================================================
  // YENİ DEPARTMAN
  // =========================================================

  const yeniDepartmanAc = () => {
    setDuzenlenenDepartman(null);
    setDepartmanAdi("");
    setSorumlu("");
    setRenk("#132453");
    setDialogOpen(true);
  };

  // =========================================================
  // DÜZENLE
  // =========================================================

  const departmanDuzenle = (departman: Departman) => {
    setDuzenlenenDepartman(departman);
    setDepartmanAdi(departman.ad);
    setSorumlu(departman.sorumlu);
    setRenk(departman.renk);
    setDialogOpen(true);
  };

  // =========================================================
  // DEPARTMAN STAJYERLERİNİ GÖSTER
  // =========================================================

  const departmanStajyerleriniGoster = (
    departman: Departman
  ) => {
    setSeciliDepartman(departman);
    setStajyerDialogOpen(true);
  };

  // =========================================================
  // KAYDET
  // =========================================================

  const departmanKaydet = () => {
    if (!departmanAdi.trim()) return;

    if (duzenlenenDepartman) {
      setDepartmanlar((prev) =>
        prev.map((departman) =>
          departman.id === duzenlenenDepartman.id
            ? {
                ...departman,
                ad: departmanAdi,
                sorumlu: sorumlu,
                renk: renk,
              }
            : departman
        )
      );
    } else {
      const yeniDepartman: Departman = {
        id: Date.now(),
        ad: departmanAdi,
        sorumlu: sorumlu || "Atanmadı",
        stajyer: 0,
        stajyerler: [],
        renk: renk,
        aktif: true,
      };

      setDepartmanlar((prev) => [
        ...prev,
        yeniDepartman,
      ]);
    }

    setDialogOpen(false);
  };

  // =========================================================
  // SİL
  // =========================================================

  const departmanSil = (id: number) => {
    const onay = window.confirm(
      "Bu departmanı silmek istediğinize emin misiniz?"
    );

    if (!onay) return;

    setDepartmanlar((prev) =>
      prev.filter((departman) => departman.id !== id)
    );
  };

  // =========================================================
  // AKTİF / PASİF
  // =========================================================

  const durumDegistir = (id: number) => {
    setDepartmanlar((prev) =>
      prev.map((departman) =>
        departman.id === id
          ? {
              ...departman,
              aktif: !departman.aktif,
            }
          : departman
      )
    );
  };

  // =========================================================
  // İSTATİSTİKLER
  // =========================================================

  const toplamDepartman = departmanlar.length;

  const aktifDepartman = departmanlar.filter(
    (departman) => departman.aktif
  ).length;

  const toplamStajyer = departmanlar.reduce(
    (toplam, departman) =>
      toplam + departman.stajyer,
    0
  );

  // =========================================================
  // RETURN
  // =========================================================

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F5F7FA",
      }}
    >
      {/* ===================================================== */}
      {/* SOL MENÜ */}
      {/* ===================================================== */}

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
            const active =
              item.path === "/yetkili/departmanlar";

            return (
              <Box
                key={item.text}
                onClick={() =>
                  router.push(item.path)
                }
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
                    fontWeight: active
                      ? 600
                      : 500,
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
            onClick={() => router.push("/")}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              px: 1.3,
              py: 1.05,
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

      {/* ===================================================== */}
      {/* ANA ALAN */}
      {/* ===================================================== */}

      <Box
        sx={{
          marginLeft: "195px",
          width: "calc(100% - 195px)",
          minHeight: "100vh",
        }}
      >
        {/* ÜST BAR */}

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

        {/* =================================================== */}
        {/* İÇERİK */}
        {/* =================================================== */}

        <Box
          component="main"
          sx={{
            minHeight: "calc(100vh - 58px)",
            backgroundColor: "#F5F7FA",
            px: {
              xs: 2,
              md: 4,
            },
            py: 3,
          }}
        >
          {/* BAŞLIK */}

          <Box
            sx={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
              mb: 4,
              gap: 2,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: 25,
                    md: 30,
                  },
                  fontWeight: 700,
                  color: "#0F2742",
                }}
              >
                Departman Yönetimi
              </Typography>

              <Typography
                sx={{
                  mt: 0.7,
                  fontSize: 13,
                  color: "#64748B",
                }}
              >
                Stajyerlerin bağlı olduğu
                departmanları buradan
                yönetebilirsiniz.
              </Typography>
            </Box>

            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={yeniDepartmanAc}
              sx={{
                backgroundColor: "#0F2742",
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 2,
                px: 2.5,
                py: 1.2,
                "&:hover": {
                  backgroundColor: "#17395D",
                },
              }}
            >
              Yeni Departman
            </Button>
          </Box>

          {/* ================================================= */}
          {/* İSTATİSTİK KARTLARI */}
          {/* ================================================= */}

          <Grid
            container
            spacing={2.5}
            sx={{ mb: 4 }}
          >
            {/* TOPLAM DEPARTMAN */}

            <Grid
              size={{
                xs: 12,
                md: 4,
              }}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  border:
                    "1px solid #E2E8F0",
                  boxShadow: "none",
                  height: "100%",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent:
                        "space-between",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: 13,
                          color: "#64748B",
                        }}
                      >
                        Toplam Departman
                      </Typography>

                      <Typography
                        sx={{
                          mt: 1,
                          fontSize: 30,
                          fontWeight: 700,
                          color: "#0F2742",
                        }}
                      >
                        {toplamDepartman}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        width: 45,
                        height: 45,
                        borderRadius: 2,
                        backgroundColor:
                          "#EDF4F9",
                        display: "flex",
                        alignItems:
                          "center",
                        justifyContent:
                          "center",
                        color: "#286B9D",
                      }}
                    >
                      <Business />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* AKTİF DEPARTMAN */}

            <Grid
              size={{
                xs: 12,
                md: 4,
              }}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  border:
                    "1px solid #E2E8F0",
                  boxShadow: "none",
                  height: "100%",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent:
                        "space-between",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: 13,
                          color: "#64748B",
                        }}
                      >
                        Aktif Departman
                      </Typography>

                      <Typography
                        sx={{
                          mt: 1,
                          fontSize: 30,
                          fontWeight: 700,
                          color: "#16A34A",
                        }}
                      >
                        {aktifDepartman}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        width: 45,
                        height: 45,
                        borderRadius: 2,
                        backgroundColor:
                          "#ECFDF3",
                        display: "flex",
                        alignItems:
                          "center",
                        justifyContent:
                          "center",
                        color: "#16A34A",
                      }}
                    >
                      <CheckCircle />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* TOPLAM STAJYER */}

            <Grid
              size={{
                xs: 12,
                md: 4,
              }}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  border:
                    "1px solid #E2E8F0",
                  boxShadow: "none",
                  height: "100%",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent:
                        "space-between",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: 13,
                          color: "#64748B",
                        }}
                      >
                        Toplam Stajyer
                      </Typography>

                      <Typography
                        sx={{
                          mt: 1,
                          fontSize: 30,
                          fontWeight: 700,
                          color: "#286B9D",
                        }}
                      >
                        {toplamStajyer}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        width: 45,
                        height: 45,
                        borderRadius: 2,
                        backgroundColor:
                          "#EDF4F9",
                        display: "flex",
                        alignItems:
                          "center",
                        justifyContent:
                          "center",
                        color: "#286B9D",
                      }}
                    >
                      <People />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* ================================================= */}
          {/* DEPARTMAN KARTLARI */}
          {/* ================================================= */}

          <Box
            sx={{
              backgroundColor: "white",
              border:
                "1px solid #E2E8F0",
              borderRadius: 3,
              p: {
                xs: 2,
                md: 3,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 700,
                color: "#0F2742",
                mb: 0.5,
              }}
            >
              Departmanlar
            </Typography>

            <Typography
              sx={{
                fontSize: 12,
                color: "#64748B",
                mb: 3,
              }}
            >
              Bir departmana tıklayarak o
              departmanda bulunan stajyerleri
              görüntüleyebilirsiniz.
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Grid
              container
              spacing={2.5}
            >
              {departmanlar.map(
                (departman) => (
                  <Grid
                    size={{
                      xs: 12,
                      sm: 6,
                      lg: 4,
                    }}
                    key={departman.id}
                  >
                    <Card
                      onClick={() =>
                        departmanStajyerleriniGoster(
                          departman
                        )
                      }
                      sx={{
                        borderRadius: 3,
                        border:
                          "1px solid #E2E8F0",
                        boxShadow: "none",
                        height: "100%",
                        opacity:
                          departman.aktif
                            ? 1
                            : 0.65,
                        transition:
                          "0.2s",
                        cursor:
                          "pointer",
                        "&:hover": {
                          boxShadow:
                            "0 5px 18px rgba(15,39,66,0.12)",
                          transform:
                            "translateY(-2px)",
                        },
                      }}
                    >
                      <CardContent
                        sx={{ p: 2.5 }}
                      >
                        {/* RENK + BAŞLIK */}

                        <Box
                          sx={{
                            display:
                              "flex",
                            alignItems:
                              "flex-start",
                            justifyContent:
                              "space-between",
                          }}
                        >
                          <Box
                            sx={{
                              display:
                                "flex",
                              alignItems:
                                "center",
                              gap: 1.5,
                            }}
                          >
                            <Box
                              sx={{
                                width: 48,
                                height: 48,
                                borderRadius: 2,
                                backgroundColor:
                                  departman.renk,
                                display:
                                  "flex",
                                alignItems:
                                  "center",
                                justifyContent:
                                  "center",
                                color:
                                  "white",
                                boxShadow:
                                  "0 3px 8px rgba(0,0,0,0.12)",
                              }}
                            >
                              <Business />
                            </Box>

                            <Box>
                              <Typography
                                sx={{
                                  fontSize: 16,
                                  fontWeight: 700,
                                  color:
                                    "#17202A",
                                }}
                              >
                                {departman.ad}
                              </Typography>

                              <Typography
                                sx={{
                                  fontSize: 11,
                                  color:
                                    "#64748B",
                                  mt: 0.3,
                                }}
                              >
                                Sorumlu:{" "}
                                {
                                  departman.sorumlu
                                }
                              </Typography>
                            </Box>
                          </Box>

                          <Chip
                            icon={
                              departman.aktif ? (
                                <CheckCircle />
                              ) : (
                                <Block />
                              )
                            }
                            label={
                              departman.aktif
                                ? "Aktif"
                                : "Pasif"
                            }
                            size="small"
                            sx={{
                              height: 27,
                              fontSize: 11,
                              fontWeight: 600,
                              color:
                                departman.aktif
                                  ? "#166534"
                                  : "#991B1B",
                              backgroundColor:
                                departman.aktif
                                  ? "#DCFCE7"
                                  : "#FEE2E2",
                              "& .MuiChip-icon":
                                {
                                  fontSize: 15,
                                  color:
                                    "inherit",
                                },
                            }}
                          />
                        </Box>

                        <Divider
                          sx={{ my: 2 }}
                        />

                        {/* BİLGİLER */}

                        <Box
                          sx={{
                            display:
                              "flex",
                            justifyContent:
                              "space-between",
                            alignItems:
                              "center",
                          }}
                        >
                          <Box>
                            <Typography
                              sx={{
                                fontSize: 11,
                                color:
                                  "#64748B",
                              }}
                            >
                              Stajyer Sayısı
                            </Typography>

                            <Box
                              sx={{
                                display:
                                  "flex",
                                alignItems:
                                  "center",
                                gap: 0.7,
                                mt: 0.4,
                              }}
                            >
                              <People
                                sx={{
                                  fontSize: 18,
                                  color:
                                    "#286B9D",
                                }}
                              />

                              <Typography
                                sx={{
                                  fontSize: 15,
                                  fontWeight: 700,
                                  color:
                                    "#0F2742",
                                }}
                              >
                                {
                                  departman.stajyer
                                }{" "}
                                stajyer
                              </Typography>
                            </Box>
                          </Box>

                          <Box>
                            <Typography
                              sx={{
                                fontSize: 11,
                                color:
                                  "#64748B",
                              }}
                            >
                              Departman Rengi
                            </Typography>

                            <Box
                              sx={{
                                display:
                                  "flex",
                                alignItems:
                                  "center",
                                gap: 0.7,
                                mt: 0.5,
                              }}
                            >
                              <Box
                                sx={{
                                  width: 22,
                                  height: 22,
                                  borderRadius: 1,
                                  backgroundColor:
                                    departman.renk,
                                  border:
                                    "1px solid rgba(0,0,0,0.1)",
                                }}
                              />

                              <Typography
                                sx={{
                                  fontSize: 11,
                                  fontFamily:
                                    "monospace",
                                  color:
                                    "#475569",
                                }}
                              >
                                {
                                  departman.renk
                                }
                              </Typography>
                            </Box>
                          </Box>
                        </Box>

                        <Divider
                          sx={{ my: 2 }}
                        />

                        {/* STAJYERLERİ GÖR */}

                        <Box
                          sx={{
                            display:
                              "flex",
                            alignItems:
                              "center",
                            justifyContent:
                              "center",
                            gap: 0.7,
                            py: 0.8,
                            borderRadius: 1.5,
                            backgroundColor:
                              "#F8FAFC",
                            color:
                              "#286B9D",
                            mb: 1.5,
                          }}
                        >
                          <People
                            sx={{
                              fontSize: 17,
                            }}
                          />

                          <Typography
                            sx={{
                              fontSize: 11,
                              fontWeight: 600,
                            }}
                          >
                            Stajyerleri Görüntüle
                          </Typography>
                        </Box>

                        {/* AKSİYONLAR */}

                        <Box
                          sx={{
                            display:
                              "flex",
                            justifyContent:
                              "space-between",
                            alignItems:
                              "center",
                          }}
                        >
                          <FormControlLabel
                            sx={{
                              m: 0,
                            }}
                            control={
                              <Switch
                                size="small"
                                checked={
                                  departman.aktif
                                }
                                onClick={(e) =>
                                  e.stopPropagation()
                                }
                                onChange={() =>
                                  durumDegistir(
                                    departman.id
                                  )
                                }
                              />
                            }
                            label={
                              <Typography
                                sx={{
                                  fontSize: 11,
                                  color:
                                    "#475569",
                                }}
                              >
                                {departman.aktif
                                  ? "Aktif"
                                  : "Pasif"}
                              </Typography>
                            }
                          />

                          <Box
                            sx={{
                              display:
                                "flex",
                              gap: 0.5,
                            }}
                          >
                            {/* DÜZENLE */}

                            <IconButton
                              size="small"
                              onClick={(e) => {
                                e.stopPropagation();
                                departmanDuzenle(
                                  departman
                                );
                              }}
                              sx={{
                                color:
                                  "#286B9D",
                                backgroundColor:
                                  "#EDF4F9",
                                "&:hover": {
                                  backgroundColor:
                                    "#DCECF7",
                                },
                              }}
                            >
                              <Edit
                                sx={{
                                  fontSize: 18,
                                }}
                              />
                            </IconButton>

                            {/* SİL */}

                            <IconButton
                              size="small"
                              onClick={(e) => {
                                e.stopPropagation();
                                departmanSil(
                                  departman.id
                                );
                              }}
                              sx={{
                                color:
                                  "#DC2626",
                                backgroundColor:
                                  "#FEF2F2",
                                "&:hover": {
                                  backgroundColor:
                                    "#FEE2E2",
                                },
                              }}
                            >
                              <Delete
                                sx={{
                                  fontSize: 18,
                                }}
                              />
                            </IconButton>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              )}
            </Grid>
          </Box>
        </Box>
      </Box>

      {/* ===================================================== */}
      {/* YENİ / DÜZENLEME DİYALOĞU */}
      {/* ===================================================== */}

      <Dialog
        open={dialogOpen}
        onClose={() =>
          setDialogOpen(false)
        }
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle
          sx={{
            fontWeight: 700,
            color: "#0F2742",
          }}
        >
          {duzenlenenDepartman
            ? "Departmanı Düzenle"
            : "Yeni Departman"}
        </DialogTitle>

        <DialogContent>
          <TextField
            fullWidth
            label="Departman Adı"
            value={departmanAdi}
            onChange={(e) =>
              setDepartmanAdi(
                e.target.value
              )
            }
            margin="normal"
          />

          <TextField
            fullWidth
            label="Departman Sorumlusu"
            value={sorumlu}
            onChange={(e) =>
              setSorumlu(e.target.value)
            }
            margin="normal"
          />

          {/* RENK SEÇİMİ */}

          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 600,
                color: "#0F2742",
                mb: 1.5,
              }}
            >
              Departman Rengi
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems:
                  "center",
                gap: 2,
                p: 2,
                border:
                  "1px solid #E2E8F0",
                borderRadius: 2,
                backgroundColor:
                  "#F8FAFC",
              }}
            >
              <Box
                sx={{
                  position:
                    "relative",
                  width: 52,
                  height: 52,
                  borderRadius: 1.5,
                  overflow:
                    "hidden",
                  border:
                    "1px solid #CBD5E1",
                }}
              >
                <input
                  type="color"
                  value={renk}
                  onChange={(e) =>
                    setRenk(
                      e.target.value
                    )
                  }
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    padding: 0,
                    cursor:
                      "pointer",
                    backgroundColor:
                      "transparent",
                  }}
                />
              </Box>

              <Box>
                <Box
                  sx={{
                    display:
                      "flex",
                    alignItems:
                      "center",
                    gap: 0.8,
                    mb: 0.5,
                  }}
                >
                  <Palette
                    sx={{
                      fontSize: 18,
                      color:
                        "#64748B",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: 12,
                      color:
                        "#64748B",
                    }}
                  >
                    Seçilen Renk
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontSize: 15,
                    fontWeight: 700,
                    fontFamily:
                      "monospace",
                    color:
                      "#0F2742",
                  }}
                >
                  {renk.toUpperCase()}
                </Typography>
              </Box>
            </Box>

            {/* HAZIR RENKLER */}

            <Typography
              sx={{
                mt: 2,
                mb: 1,
                fontSize: 12,
                color: "#64748B",
              }}
            >
              Hazır renkler
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexWrap: "wrap",
              }}
            >
              {[
                "#132453",
                "#2563EB",
                "#059669",
                "#D97706",
                "#7C3AED",
                "#DB2777",
                "#0891B2",
                "#475569",
              ].map(
                (color) => (
                  <Box
                    key={color}
                    onClick={() =>
                      setRenk(color)
                    }
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: 1,
                      backgroundColor:
                        color,
                      cursor:
                        "pointer",
                      border:
                        renk.toUpperCase() ===
                        color.toUpperCase()
                          ? "3px solid #0F2742"
                          : "2px solid white",
                      boxShadow:
                        "0 1px 4px rgba(0,0,0,0.2)",
                    }}
                  />
                )
              )}
            </Box>
          </Box>
        </DialogContent>

        <DialogActions
          sx={{ p: 2.5 }}
        >
          <Button
            onClick={() =>
              setDialogOpen(false)
            }
            sx={{
              textTransform:
                "none",
              color: "#64748B",
            }}
          >
            İptal
          </Button>

          <Button
            variant="contained"
            onClick={
              departmanKaydet
            }
            sx={{
              backgroundColor:
                "#0F2742",
              textTransform:
                "none",
              px: 3,
              "&:hover": {
                backgroundColor:
                  "#17395D",
              },
            }}
          >
            Kaydet
          </Button>
        </DialogActions>
      </Dialog>

      {/* ===================================================== */}
      {/* DEPARTMAN STAJYERLERİ DİYALOĞU */}
      {/* ===================================================== */}

      <Dialog
        open={stajyerDialogOpen}
        onClose={() =>
          setStajyerDialogOpen(
            false
          )
        }
        fullWidth
        maxWidth="md"
      >
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent:
              "space-between",
            color: "#0F2742",
            fontWeight: 700,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 21,
                fontWeight: 700,
                color: "#0F2742",
              }}
            >
              {seciliDepartman?.ad}{" "}
              Departmanı
            </Typography>

            <Typography
              sx={{
                fontSize: 12,
                color: "#64748B",
                mt: 0.4,
              }}
            >
              Bu departmanda bulunan
              stajyerler
            </Typography>
          </Box>

          <IconButton
            onClick={() =>
              setStajyerDialogOpen(
                false
              )
            }
            sx={{
              color: "#64748B",
              "&:hover": {
                backgroundColor:
                  "#F1F5F9",
              },
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>

        <DialogContent
          dividers
        >
          {seciliDepartman &&
          seciliDepartman.stajyerler &&
          seciliDepartman.stajyerler
            .length > 0 ? (
            <Grid
              container
              spacing={2}
            >
              {seciliDepartman.stajyerler.map(
                (stajyer) => (
                  <Grid
                    size={{
                      xs: 12,
                      md: 6,
                    }}
                    key={stajyer.id}
                  >
                    <Card
                      sx={{
                        border:
                          "1px solid #E2E8F0",
                        borderRadius: 2.5,
                        boxShadow:
                          "none",
                        transition:
                          "0.2s",
                        "&:hover": {
                          boxShadow:
                            "0 4px 14px rgba(15,39,66,0.08)",
                        },
                      }}
                    >
                      <CardContent
                        sx={{
                          p: 2.2,
                        }}
                      >
                        <Box
                          sx={{
                            display:
                              "flex",
                            alignItems:
                              "center",
                            gap: 1.5,
                          }}
                        >
                          <Box
                            sx={{
                              width: 42,
                              height: 42,
                              borderRadius:
                                "50%",
                              backgroundColor:
                                seciliDepartman.renk,
                              color:
                                "white",
                              display:
                                "flex",
                              alignItems:
                                "center",
                              justifyContent:
                                "center",
                              flexShrink: 0,
                            }}
                          >
                            <Person
                              sx={{
                                fontSize: 21,
                              }}
                            />
                          </Box>

                          <Box
                            sx={{
                              minWidth: 0,
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: 14,
                                fontWeight: 700,
                                color:
                                  "#17202A",
                              }}
                            >
                              {
                                stajyer.ad
                              }
                            </Typography>

                            <Typography
                              sx={{
                                fontSize: 11,
                                color:
                                  "#64748B",
                                mt: 0.3,
                              }}
                            >
                              {
                                stajyer.pozisyon
                              }
                            </Typography>
                          </Box>
                        </Box>

                        <Divider
                          sx={{
                            my: 1.5,
                          }}
                        />

                        <Typography
                          sx={{
                            fontSize: 11,
                            color:
                              "#64748B",
                          }}
                        >
                          Supervisor
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: 13,
                            fontWeight: 600,
                            color:
                              "#0F2742",
                            mt: 0.3,
                          }}
                        >
                          {
                            stajyer.supervisor
                          }
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              )}
            </Grid>
          ) : (
            <Box
              sx={{
                py: 6,
                textAlign:
                  "center",
              }}
            >
              <People
                sx={{
                  fontSize: 45,
                  color:
                    "#CBD5E1",
                  mb: 1,
                }}
              />

              <Typography
                sx={{
                  fontSize: 15,
                  fontWeight: 600,
                  color:
                    "#475569",
                }}
              >
                Bu departmanda henüz
                stajyer bulunmuyor.
              </Typography>

              <Typography
                sx={{
                  fontSize: 12,
                  color:
                    "#94A3B8",
                  mt: 0.5,
                }}
              >
                Stajyer kayıtları
                tamamlandığında
                burada
                görüntülenecektir.
              </Typography>
            </Box>
          )}
        </DialogContent>

        <DialogActions
          sx={{ p: 2 }}
        >
          <Button
            onClick={() =>
              setStajyerDialogOpen(
                false
              )
            }
            sx={{
              textTransform:
                "none",
              color: "#64748B",
            }}
          >
            Kapat
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}