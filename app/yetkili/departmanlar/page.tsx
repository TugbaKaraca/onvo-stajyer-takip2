"use client";

import { useState } from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

import {
  Dashboard,
  People,
  Business,
  Description,
  EventAvailable,
  Folder,
  Campaign,
  Notifications,
  Settings,
  Logout,
  Person,
  Add,
  Edit,
  Delete,
  Groups,
  Close,
} from "@mui/icons-material";

import { usePathname, useRouter } from "next/navigation";

type Departman = {
  id: number;
  ad: string;
  sorumlu: string;
  stajyerSayisi: number;
  durum: "Aktif" | "Pasif";
};

type Stajyer = {
  ad: string;
  universite: string;
  bolum: string;
};

export default function DepartmanlarPage() {
  const router = useRouter();
  const pathname = usePathname();

  const [departmanlar, setDepartmanlar] = useState<
    Departman[]
  >([
    {
      id: 1,
      ad: "Yazılım",
      sorumlu: "Yetkili Kullanıcı",
      stajyerSayisi: 8,
      durum: "Aktif",
    },
    {
      id: 2,
      ad: "Ar-Ge",
      sorumlu: "Ahmet Yılmaz",
      stajyerSayisi: 5,
      durum: "Aktif",
    },
    {
      id: 3,
      ad: "Elektrik-Elektronik",
      sorumlu: "Mehmet Demir",
      stajyerSayisi: 4,
      durum: "Aktif",
    },
    {
      id: 4,
      ad: "Mekanik",
      sorumlu: "Ayşe Çelik",
      stajyerSayisi: 3,
      durum: "Aktif",
    },
  ]);

  const [dialogOpen, setDialogOpen] =
    useState(false);

  const [duzenlemeId, setDuzenlemeId] =
    useState<number | null>(null);

  const [departmanAdi, setDepartmanAdi] =
    useState("");

  const [sorumlu, setSorumlu] =
    useState("");

  // Stajyer modalı
  const [stajyerDialogOpen, setStajyerDialogOpen] =
    useState(false);

  const [seciliDepartman, setSeciliDepartman] =
    useState<Departman | null>(null);

  // --------------------------------------------------
  // DEPARTMANLARA AİT STAJYERLER
  // --------------------------------------------------

  const departmanStajyerleri: Record<
    string,
    Stajyer[]
  > = {
    Yazılım: [
      {
        ad: "Zeliha Koyuncu",
        universite:
          "İstanbul Gelişim Üniversitesi",
        bolum: "Yazılım Mühendisliği",
      },
      {
        ad: "Zeynep Kaya",
        universite:
          "İstanbul Gelişim Üniversitesi",
        bolum: "Bilgisayar Mühendisliği",
      },
      {
        ad: "Elif Çelik",
        universite:
          "İstanbul Üniversitesi",
        bolum: "Yazılım Mühendisliği",
      },
      {
        ad: "Mehmet Demir",
        universite:
          "Yıldız Teknik Üniversitesi",
        bolum: "Bilgisayar Mühendisliği",
      },
      {
        ad: "Ahmet Yılmaz",
        universite:
          "İstanbul Teknik Üniversitesi",
        bolum: "Bilgisayar Mühendisliği",
      },
      {
        ad: "Ayşe Çelik",
        universite:
          "Marmara Üniversitesi",
        bolum: "Yazılım Mühendisliği",
      },
      {
        ad: "Can Kaya",
        universite:
          "İstanbul Üniversitesi",
        bolum: "Bilgisayar Mühendisliği",
      },
      {
        ad: "Deniz Şahin",
        universite:
          "İstanbul Gelişim Üniversitesi",
        bolum: "Yazılım Mühendisliği",
      },
    ],

    "Ar-Ge": [
      {
        ad: "Ahmet Yılmaz",
        universite:
          "İstanbul Teknik Üniversitesi",
        bolum: "Elektronik Mühendisliği",
      },
      {
        ad: "Mert Kaya",
        universite:
          "Yıldız Teknik Üniversitesi",
        bolum: "Elektrik-Elektronik Mühendisliği",
      },
      {
        ad: "Buse Demir",
        universite:
          "Marmara Üniversitesi",
        bolum: "Bilgisayar Mühendisliği",
      },
      {
        ad: "Ece Yıldız",
        universite:
          "İstanbul Üniversitesi",
        bolum: "Endüstri Mühendisliği",
      },
      {
        ad: "Kerem Aydın",
        universite:
          "İstanbul Gelişim Üniversitesi",
        bolum: "Yazılım Mühendisliği",
      },
    ],

    "Elektrik-Elektronik": [
      {
        ad: "Mehmet Demir",
        universite:
          "Yıldız Teknik Üniversitesi",
        bolum:
          "Elektrik-Elektronik Mühendisliği",
      },
      {
        ad: "Burak Kaya",
        universite:
          "İstanbul Teknik Üniversitesi",
        bolum:
          "Elektrik-Elektronik Mühendisliği",
      },
      {
        ad: "Emre Yılmaz",
        universite:
          "Marmara Üniversitesi",
        bolum:
          "Elektrik-Elektronik Mühendisliği",
      },
      {
        ad: "Selin Çelik",
        universite:
          "İstanbul Üniversitesi",
        bolum:
          "Elektrik-Elektronik Mühendisliği",
      },
    ],

    Mekanik: [
      {
        ad: "Ayşe Çelik",
        universite:
          "Marmara Üniversitesi",
        bolum: "Makine Mühendisliği",
      },
      {
        ad: "Hasan Demir",
        universite:
          "Yıldız Teknik Üniversitesi",
        bolum: "Makine Mühendisliği",
      },
      {
        ad: "Mert Şahin",
        universite:
          "İstanbul Teknik Üniversitesi",
        bolum: "Makine Mühendisliği",
      },
    ],
  };

  // --------------------------------------------------
  // MENÜ
  // --------------------------------------------------

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

  // --------------------------------------------------
  // YENİ DEPARTMAN
  // --------------------------------------------------

  const handleOpenAdd = () => {
    setDuzenlemeId(null);
    setDepartmanAdi("");
    setSorumlu("");
    setDialogOpen(true);
  };

  // --------------------------------------------------
  // DEPARTMAN DÜZENLE
  // --------------------------------------------------

  const handleOpenEdit = (
    departman: Departman
  ) => {
    setDuzenlemeId(departman.id);
    setDepartmanAdi(departman.ad);
    setSorumlu(departman.sorumlu);
    setDialogOpen(true);
  };

  // --------------------------------------------------
  // DEPARTMAN DİYALOG KAPAT
  // --------------------------------------------------

  const handleClose = () => {
    setDialogOpen(false);
    setDepartmanAdi("");
    setSorumlu("");
    setDuzenlemeId(null);
  };

  // --------------------------------------------------
  // DEPARTMAN KAYDET
  // --------------------------------------------------

  const handleSave = () => {
    if (
      !departmanAdi.trim() ||
      !sorumlu.trim()
    ) {
      return;
    }

    if (duzenlemeId !== null) {
      setDepartmanlar((prev) =>
        prev.map((departman) =>
          departman.id === duzenlemeId
            ? {
                ...departman,
                ad: departmanAdi.trim(),
                sorumlu: sorumlu.trim(),
              }
            : departman
        )
      );
    } else {
      const yeniDepartman: Departman = {
        id: Date.now(),
        ad: departmanAdi.trim(),
        sorumlu: sorumlu.trim(),
        stajyerSayisi: 0,
        durum: "Aktif",
      };

      setDepartmanlar((prev) => [
        ...prev,
        yeniDepartman,
      ]);
    }

    handleClose();
  };

  // --------------------------------------------------
  // DEPARTMAN SİL
  // --------------------------------------------------

  const handleDelete = (id: number) => {
    const onay = window.confirm(
      "Bu departmanı silmek istediğinize emin misiniz?"
    );

    if (!onay) {
      return;
    }

    setDepartmanlar((prev) =>
      prev.filter(
        (departman) => departman.id !== id
      )
    );
  };

  // --------------------------------------------------
  // STAJYERLERİ GÖSTER
  // --------------------------------------------------

  const handleStajyerleriGoster = (
    departman: Departman
  ) => {
    setSeciliDepartman(departman);
    setStajyerDialogOpen(true);
  };

  // --------------------------------------------------
  // STAJYER DİYALOG KAPAT
  // --------------------------------------------------

  const handleStajyerDialogClose = () => {
    setStajyerDialogOpen(false);
    setSeciliDepartman(null);
  };

  // --------------------------------------------------
  // İSTATİSTİKLER
  // --------------------------------------------------

  const toplamStajyer =
    departmanlar.reduce(
      (toplam, departman) =>
        toplam + departman.stajyerSayisi,
      0
    );

  const aktifDepartman =
    departmanlar.filter(
      (departman) =>
        departman.durum === "Aktif"
    ).length;

  const seciliStajyerler =
    seciliDepartman
      ? departmanStajyerleri[
          seciliDepartman.ad
        ] || []
      : [];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F5F7FA",
        display: "flex",
        color: "#17202A",
      }}
    >
      {/* =====================================================
          SOL MENÜ
      ===================================================== */}

      <Box
        component="aside"
        sx={{
          width: 195,
          background:
            "linear-gradient(180deg, #0F2742 0%, #286B9D 100%)",
          color: "#ffffff",
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

        <Box
          sx={{
            px: 1,
            py: 1.5,
          }}
        >
          {menuItems.map((item) => {
            const active =
              pathname === item.path;

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
            onClick={() =>
              router.push("/login/yetkili")
            }
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
            <Logout
              sx={{
                fontSize: 19,
              }}
            />

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

      {/* =====================================================
          ANA ALAN
      ===================================================== */}

      <Box
        component="main"
        sx={{
          marginLeft: "195px",
          width: "calc(100% - 195px)",
          minHeight: "100vh",
        }}
      >
        {/* NAVBAR */}

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
            onClick={() =>
              router.push(
                "/yetkili/bildirimler"
              )
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
            <Person
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

        {/* =====================================================
            İÇERİK
        ===================================================== */}

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

          <Box
            sx={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: {
                xs: "flex-start",
                md: "center",
              },
              flexDirection: {
                xs: "column",
                md: "row",
              },
              gap: 2,
              mb: 3,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: 28,
                  fontWeight: "bold",
                  color: "#0F2742",
                  mb: 0.5,
                }}
              >
                Departman Yönetimi
              </Typography>

              <Typography
                sx={{
                  color: "#64748B",
                  fontSize: 13,
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
              onClick={handleOpenAdd}
              sx={{
                backgroundColor: "#0F2742",
                borderRadius: 1.5,
                textTransform: "none",
                fontWeight: 600,
                px: 2,

                "&:hover": {
                  backgroundColor: "#173B61",
                },
              }}
            >
              Yeni Departman
            </Button>
          </Box>

          {/* =====================================================
              İSTATİSTİKLER
          ===================================================== */}

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "repeat(3, 1fr)",
              },
              gap: 2,
              mb: 3,
            }}
          >
            {/* TOPLAM DEPARTMAN */}

            <Card
              elevation={0}
              sx={{
                border:
                  "1px solid #E4E7EC",
                borderRadius: 2,
              }}
            >
              <CardContent
                sx={{
                  p: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#64748B",
                  }}
                >
                  Toplam Departman
                </Typography>

                <Typography
                  sx={{
                    fontSize: 27,
                    fontWeight: "bold",
                    color: "#0F2742",
                    mt: 1,
                  }}
                >
                  {departmanlar.length}
                </Typography>
              </CardContent>
            </Card>

            {/* AKTİF DEPARTMAN */}

            <Card
              elevation={0}
              sx={{
                border:
                  "1px solid #E4E7EC",
                borderRadius: 2,
              }}
            >
              <CardContent
                sx={{
                  p: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#64748B",
                  }}
                >
                  Aktif Departman
                </Typography>

                <Typography
                  sx={{
                    fontSize: 27,
                    fontWeight: "bold",
                    color: "#16A34A",
                    mt: 1,
                  }}
                >
                  {aktifDepartman}
                </Typography>
              </CardContent>
            </Card>

            {/* TOPLAM STAJYER */}

            <Card
              elevation={0}
              sx={{
                border:
                  "1px solid #E4E7EC",
                borderRadius: 2,
              }}
            >
              <CardContent
                sx={{
                  p: 2,
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

                <Typography
                  sx={{
                    fontSize: 27,
                    fontWeight: "bold",
                    color: "#286B9D",
                    mt: 1,
                  }}
                >
                  {toplamStajyer}
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* =====================================================
              DEPARTMANLAR
          ===================================================== */}

          <Card
            elevation={0}
            sx={{
              border:
                "1px solid #E4E7EC",
              borderRadius: 2,
            }}
          >
            <CardContent
              sx={{
                p: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#0F2742",
                  mb: 2,
                }}
              >
                Departmanlar
              </Typography>

              <Divider
                sx={{
                  mb: 1,
                }}
              />

              {departmanlar.length === 0 ? (
                <Box
                  sx={{
                    py: 7,
                    textAlign: "center",
                  }}
                >
                  <Business
                    sx={{
                      fontSize: 48,
                      color: "#CBD5E1",
                      mb: 1,
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#64748B",
                      fontSize: 14,
                    }}
                  >
                    Henüz departman
                    bulunmuyor.
                  </Typography>
                </Box>
              ) : (
                departmanlar.map(
                  (
                    departman,
                    index
                  ) => (
                    <Box
                      key={departman.id}
                      sx={{
                        display: "flex",
                        alignItems:
                          "center",
                        gap: 2,
                        py: 2,

                        borderBottom:
                          index !==
                          departmanlar.length -
                            1
                            ? "1px solid #EEF1F5"
                            : "none",
                      }}
                    >
                      {/* DEPARTMAN İKONU */}

                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: 1.5,
                          backgroundColor:
                            "#EDF4F9",
                          color: "#286B9D",
                          display: "flex",
                          alignItems:
                            "center",
                          justifyContent:
                            "center",
                          flexShrink: 0,
                        }}
                      >
                        <Business
                          sx={{
                            fontSize: 22,
                          }}
                        />
                      </Box>

                      {/* DEPARTMAN BİLGİLERİ */}

                      <Box
                        sx={{
                          flex: 1,
                          minWidth: 0,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 14,
                            fontWeight:
                              "bold",
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
                            mt: 0.4,
                          }}
                        >
                          Sorumlu:{" "}
                          {
                            departman.sorumlu
                          }
                        </Typography>
                      </Box>

                      {/* STAJYER SAYISI */}

                      <Box
                        onClick={() =>
                          handleStajyerleriGoster(
                            departman
                          )
                        }
                        sx={{
                          display: {
                            xs: "none",
                            sm: "flex",
                          },
                          alignItems:
                            "center",
                          gap: 0.7,
                          minWidth: 120,
                          cursor:
                            "pointer",
                          borderRadius: 1,
                          px: 1,
                          py: 0.7,

                          "&:hover": {
                            backgroundColor:
                              "#EDF4F9",
                          },
                        }}
                      >
                        <Groups
                          sx={{
                            fontSize: 18,
                            color:
                              "#286B9D",
                          }}
                        />

                        <Typography
                          sx={{
                            fontSize: 12,
                            color:
                              "#286B9D",
                            fontWeight: 600,
                          }}
                        >
                          {
                            departman.stajyerSayisi
                          }{" "}
                          stajyer
                        </Typography>
                      </Box>

                      {/* DURUM */}

                      <Chip
                        label={
                          departman.durum
                        }
                        size="small"
                        color={
                          departman.durum ===
                          "Aktif"
                            ? "success"
                            : "default"
                        }
                        sx={{
                          fontSize: 10,
                          fontWeight: 600,
                        }}
                      />

                      {/* DÜZENLE */}

                      <IconButton
                        onClick={() =>
                          handleOpenEdit(
                            departman
                          )
                        }
                        sx={{
                          color:
                            "#286B9D",
                        }}
                      >
                        <Edit
                          sx={{
                            fontSize: 19,
                          }}
                        />
                      </IconButton>

                      {/* SİL */}

                      <IconButton
                        onClick={() =>
                          handleDelete(
                            departman.id
                          )
                        }
                        sx={{
                          color:
                            "#DC2626",
                        }}
                      >
                        <Delete
                          sx={{
                            fontSize: 19,
                          }}
                        />
                      </IconButton>
                    </Box>
                  )
                )
              )}
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* =====================================================
          YENİ DEPARTMAN / DÜZENLEME MODALI
      ===================================================== */}

      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle
          sx={{
            color: "#0F2742",
            fontWeight: "bold",
            display: "flex",
            alignItems:
              "center",
            justifyContent:
              "space-between",
          }}
        >
          {duzenlemeId !== null
            ? "Departmanı Düzenle"
            : "Yeni Departman Ekle"}

          <IconButton
            onClick={handleClose}
          >
            <Close />
          </IconButton>
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
            sx={{
              mt: 1,
              mb: 2,
            }}
          />

          <TextField
            fullWidth
            label="Departman Sorumlusu"
            value={sorumlu}
            onChange={(e) =>
              setSorumlu(
                e.target.value
              )
            }
          />
        </DialogContent>

        <DialogActions
          sx={{
            px: 3,
            pb: 2.5,
          }}
        >
          <Button
            onClick={handleClose}
            sx={{
              color: "#64748B",
              textTransform:
                "none",
            }}
          >
            İptal
          </Button>

          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              backgroundColor:
                "#0F2742",
              textTransform:
                "none",

              "&:hover": {
                backgroundColor:
                  "#173B61",
              },
            }}
          >
            {duzenlemeId !== null
              ? "Güncelle"
              : "Kaydet"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* =====================================================
          STAJYERLER MODALI
      ===================================================== */}

      <Dialog
        open={stajyerDialogOpen}
        onClose={
          handleStajyerDialogClose
        }
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle
          sx={{
            color: "#0F2742",
            fontWeight: "bold",
            display: "flex",
            alignItems:
              "center",
            justifyContent:
              "space-between",
          }}
        >
          <Box>
            {seciliDepartman?.ad}{" "}
            Departmanı

            <Typography
              sx={{
                fontSize: 12,
                color: "#64748B",
                fontWeight: 400,
                mt: 0.5,
              }}
            >
              Departmana bağlı
              stajyerler
            </Typography>
          </Box>

          <IconButton
            onClick={
              handleStajyerDialogClose
            }
          >
            <Close />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          {/* TOPLAM */}

          <Box
            sx={{
              display: "flex",
              alignItems:
                "center",
              gap: 1,
              mb: 2,
              p: 1.5,
              backgroundColor:
                "#EDF4F9",
              borderRadius: 1.5,
            }}
          >
            <Groups
              sx={{
                color: "#286B9D",
              }}
            />

            <Typography
              sx={{
                fontSize: 13,
                color: "#286B9D",
                fontWeight: 600,
              }}
            >
              {
                seciliDepartman?.stajyerSayisi
              }{" "}
              stajyer
            </Typography>
          </Box>

          {seciliStajyerler.length >
          0 ? (
            <Box
              sx={{
                display: "flex",
                flexDirection:
                  "column",
                gap: 1,
              }}
            >
              {seciliStajyerler.map(
                (
                  stajyer,
                  index
                ) => (
                  <Box
                    key={`${stajyer.ad}-${index}`}
                    sx={{
                      display:
                        "flex",
                      alignItems:
                        "center",
                      gap: 1.5,
                      p: 1.5,
                      border:
                        "1px solid #E4E7EC",
                      borderRadius: 1.5,
                      backgroundColor:
                        "#F8FAFC",
                    }}
                  >
                    {/* PROFİL İKONU */}

                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius:
                          "50%",
                        backgroundColor:
                          "#EDF4F9",
                        color:
                          "#286B9D",
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

                    {/* BİLGİLER */}

                    <Box
                      sx={{
                        flex: 1,
                        minWidth: 0,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 13,
                          fontWeight:
                            700,
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
                          stajyer.universite
                        }
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 10,
                          color:
                            "#94A3B8",
                          mt: 0.2,
                        }}
                      >
                        {
                          stajyer.bolum
                        }
                      </Typography>
                    </Box>
                  </Box>
                )
              )}
            </Box>
          ) : (
            <Box
              sx={{
                textAlign:
                  "center",
                py: 5,
              }}
            >
              <People
                sx={{
                  fontSize: 48,
                  color:
                    "#CBD5E1",
                  mb: 1,
                }}
              />

              <Typography
                sx={{
                  color:
                    "#64748B",
                  fontSize: 14,
                }}
              >
                Bu departmanda
                kayıtlı stajyer
                bulunmuyor.
              </Typography>
            </Box>
          )}
        </DialogContent>

        <DialogActions
          sx={{
            px: 3,
            pb: 2.5,
          }}
        >
          <Button
            variant="contained"
            onClick={
              handleStajyerDialogClose
            }
            sx={{
              backgroundColor:
                "#0F2742",
              textTransform:
                "none",
              px: 3,

              "&:hover": {
                backgroundColor:
                  "#173B61",
              },
            }}
          >
            Kapat
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}