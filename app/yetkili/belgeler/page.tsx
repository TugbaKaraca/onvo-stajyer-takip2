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
  Divider,
  MenuItem,
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
  Search,
  PictureAsPdf,
  DescriptionOutlined,
  Visibility,
  Delete,
  Close,
  CheckCircle,
  RadioButtonUnchecked,
  CloudUpload,
  MenuBook,
  Groups,
} from "@mui/icons-material";

interface StajyerOkuma {
  id: number;
  ad: string;
  okundu: boolean;
  okumaTarihi?: string;
}

interface Belge {
  id: number;
  baslik: string;
  aciklama: string;
  kategori: string;
  dosyaAdi: string;
  dosyaTuru: string;
  yuklenmeTarihi: string;
  stajyerler: StajyerOkuma[];
}

export default function BelgelerPage() {
  const router = useRouter();

  // =========================================================
  // MENÜ
  // =========================================================

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
  // ÖRNEK STAJYERLER
  // =========================================================

  const ornekStajyerler: StajyerOkuma[] = [
    {
      id: 1,
      ad: "Zeliha Koyuncu",
      okundu: true,
      okumaTarihi: "17 Ağustos 2026",
    },
    {
      id: 2,
      ad: "Elif Demir",
      okundu: true,
      okumaTarihi: "17 Ağustos 2026",
    },
    {
      id: 3,
      ad: "Mehmet Kaya",
      okundu: false,
    },
    {
      id: 4,
      ad: "Ayşe Yıldız",
      okundu: false,
    },
    {
      id: 5,
      ad: "Can Aydın",
      okundu: true,
      okumaTarihi: "17 Ağustos 2026",
    },
    {
      id: 6,
      ad: "Ece Şahin",
      okundu: false,
    },
  ];

  // =========================================================
  // BELGELER
  // =========================================================

  const [belgeler, setBelgeler] = useState<Belge[]>([
    {
      id: 1,
      baslik: "ONVO İş Güvenliği Eğitimi",
      aciklama:
        "Stajyerlerin iş güvenliği konusunda bilmesi gereken temel bilgileri içeren eğitim dokümanı.",
      kategori: "Eğitim",
      dosyaAdi: "is-guvenligi-egitimi.pdf",
      dosyaTuru: "PDF",
      yuklenmeTarihi: "17 Ağustos 2026",
      stajyerler: ornekStajyerler,
    },
    {
      id: 2,
      baslik: "Stajyer Oryantasyon Dokümantasyonu",
      aciklama:
        "ONVO staj sürecinde uyulması gereken kurallar ve çalışma düzeni hakkında bilgilendirme dokümanı.",
      kategori: "Dokümantasyon",
      dosyaAdi: "stajyer-oryantasyon.pdf",
      dosyaTuru: "PDF",
      yuklenmeTarihi: "16 Ağustos 2026",
      stajyerler: ornekStajyerler.map((stajyer) => ({
        ...stajyer,
        okundu: true,
        okumaTarihi: "16 Ağustos 2026",
      })),
    },
    {
      id: 3,
      baslik: "ONVO Çalışma Kuralları",
      aciklama:
        "Stajyerlerin çalışma süresince dikkat etmesi gereken genel kurallar.",
      kategori: "Genel",
      dosyaAdi: "calisma-kurallari.pdf",
      dosyaTuru: "PDF",
      yuklenmeTarihi: "15 Ağustos 2026",
      stajyerler: ornekStajyerler.map((stajyer) => ({
        ...stajyer,
        okundu: false,
        okumaTarihi: undefined,
      })),
    },
  ]);

  // =========================================================
  // ARAMA
  // =========================================================

  const [arama, setArama] = useState("");

  const aramaMetni = arama
    .trim()
    .toLocaleLowerCase("tr-TR");

  const filtreliBelgeler = belgeler.filter((belge) => {
    if (!aramaMetni) {
      return true;
    }

    const aranacakAlanlar = [
      belge.baslik,
      belge.aciklama,
      belge.kategori,
      belge.dosyaAdi,
      belge.dosyaTuru,
    ];

    return aranacakAlanlar.some((alan) =>
      alan
        .toLocaleLowerCase("tr-TR")
        .includes(aramaMetni)
    );
  });

  // =========================================================
  // BELGE YÜKLEME
  // =========================================================

  const [yuklemeDialogOpen, setYuklemeDialogOpen] =
    useState(false);

  const [belgeBaslik, setBelgeBaslik] = useState("");
  const [belgeAciklama, setBelgeAciklama] =
    useState("");
  const [belgeKategori, setBelgeKategori] =
    useState("Eğitim");
  const [secilenDosya, setSecilenDosya] =
    useState<File | null>(null);

  // =========================================================
  // DİĞER DİYALOGLAR
  // =========================================================

  const [okumaDialogOpen, setOkumaDialogOpen] =
    useState(false);

  const [belgeDetayOpen, setBelgeDetayOpen] =
    useState(false);

  const [seciliBelge, setSeciliBelge] =
    useState<Belge | null>(null);

  // =========================================================
  // BELGE YÜKLEME DİYALOĞU
  // =========================================================

  const belgeYuklemeAc = () => {
    setBelgeBaslik("");
    setBelgeAciklama("");
    setBelgeKategori("Eğitim");
    setSecilenDosya(null);
    setYuklemeDialogOpen(true);
  };

  // =========================================================
  // DOSYA SEÇ
  // =========================================================

  const dosyaSec = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const dosya = event.target.files?.[0];

    if (dosya) {
      setSecilenDosya(dosya);

      if (!belgeBaslik) {
        setBelgeBaslik(
          dosya.name.replace(/\.[^/.]+$/, "")
        );
      }
    }
  };

  // =========================================================
  // BELGE YÜKLE
  // =========================================================

  const belgeYukle = () => {
    if (!belgeBaslik.trim() || !secilenDosya) {
      return;
    }

    const yeniBelge: Belge = {
      id: Date.now(),
      baslik: belgeBaslik,
      aciklama:
        belgeAciklama ||
        "Yetkili tarafından ortak kütüphaneye yüklenen doküman.",
      kategori: belgeKategori,
      dosyaAdi: secilenDosya.name,
      dosyaTuru:
        secilenDosya.name
          .split(".")
          .pop()
          ?.toUpperCase() || "DOSYA",
      yuklenmeTarihi: "17 Ağustos 2026",
      stajyerler: ornekStajyerler.map(
        (stajyer) => ({
          ...stajyer,
          okundu: false,
          okumaTarihi: undefined,
        })
      ),
    };

    setBelgeler((prev) => [
      yeniBelge,
      ...prev,
    ]);

    setYuklemeDialogOpen(false);
  };

  // =========================================================
  // OKUMA DURUMLARINI GÖSTER
  // =========================================================

  const okumaDurumlariniGoster = (
    belge: Belge
  ) => {
    setSeciliBelge(belge);
    setOkumaDialogOpen(true);
  };

  // =========================================================
  // BELGE DETAY
  // =========================================================

  const belgeDetayGoster = (
    belge: Belge
  ) => {
    setSeciliBelge(belge);
    setBelgeDetayOpen(true);
  };

  // =========================================================
  // BELGE SİL
  // =========================================================

  const belgeSil = (id: number) => {
    const onay = window.confirm(
      "Bu belgeyi ortak kütüphaneden silmek istediğinize emin misiniz?"
    );

    if (!onay) {
      return;
    }

    setBelgeler((prev) =>
      prev.filter(
        (belge) => belge.id !== id
      )
    );
  };

  // =========================================================
  // İSTATİSTİKLER
  // =========================================================

  const toplamBelge = belgeler.length;

  const toplamOkuma = belgeler.reduce(
    (toplam, belge) =>
      toplam +
      belge.stajyerler.filter(
        (stajyer) => stajyer.okundu
      ).length,
    0
  );

  const toplamOkunmasiGereken =
    belgeler.reduce(
      (toplam, belge) =>
        toplam +
        belge.stajyerler.length,
      0
    );

  // =========================================================
  // SAYFA
  // =========================================================

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F5F7FA",
      }}
    >
      {/* =====================================================
          SOL MENÜ
      ===================================================== */}

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

        <Box
          sx={{
            px: 1,
            py: 1.5,
          }}
        >
          {menuItems.map((item) => {
            const active =
              item.path ===
              "/yetkili/belgeler";

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
            justifyContent:
              "flex-end",
            px: 3,
          }}
        >
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

        {/* ===================================================
            İÇERİK
        =================================================== */}

        <Box
          component="main"
          sx={{
            minHeight:
              "calc(100vh - 58px)",
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
                Kütüphane
              </Typography>

              <Typography
                sx={{
                  mt: 0.7,
                  fontSize: 13,
                  color: "#64748B",
                  maxWidth: 700,
                }}
              >
                Stajyerlerin eğitim ve
                dokümantasyonlara
                ulaşabileceği ortak
                belge havuzunu
                buradan yönetebilirsiniz.
              </Typography>
            </Box>

            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={belgeYuklemeAc}
              sx={{
                backgroundColor:
                  "#0F2742",
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 2,
                px: 2.5,
                py: 1.2,
                whiteSpace: "nowrap",
                "&:hover": {
                  backgroundColor:
                    "#17395D",
                },
              }}
            >
              Belge Yükle
            </Button>
          </Box>

          {/* ===================================================
              İSTATİSTİKLER
          =================================================== */}

          <Grid
            container
            spacing={2.5}
            sx={{ mb: 4 }}
          >
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
                }}
              >
                <CardContent
                  sx={{ p: 3 }}
                >
                  <Box
                    sx={{
                      display:
                        "flex",
                      alignItems:
                        "center",
                      justifyContent:
                        "space-between",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: 13,
                          color:
                            "#64748B",
                        }}
                      >
                        Kütüphanedeki
                        Belge
                      </Typography>

                      <Typography
                        sx={{
                          mt: 1,
                          fontSize: 30,
                          fontWeight: 700,
                          color:
                            "#0F2742",
                        }}
                      >
                        {toplamBelge}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        width: 45,
                        height: 45,
                        borderRadius: 2,
                        backgroundColor:
                          "#EDF4F9",
                        display:
                          "flex",
                        alignItems:
                          "center",
                        justifyContent:
                          "center",
                        color:
                          "#286B9D",
                      }}
                    >
                      <MenuBook />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

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
                }}
              >
                <CardContent
                  sx={{ p: 3 }}
                >
                  <Box
                    sx={{
                      display:
                        "flex",
                      alignItems:
                        "center",
                      justifyContent:
                        "space-between",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: 13,
                          color:
                            "#64748B",
                        }}
                      >
                        Gerçekleşen
                        Okuma
                      </Typography>

                      <Typography
                        sx={{
                          mt: 1,
                          fontSize: 30,
                          fontWeight: 700,
                          color:
                            "#16A34A",
                        }}
                      >
                        {toplamOkuma}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        width: 45,
                        height: 45,
                        borderRadius: 2,
                        backgroundColor:
                          "#ECFDF3",
                        display:
                          "flex",
                        alignItems:
                          "center",
                        justifyContent:
                          "center",
                        color:
                          "#16A34A",
                      }}
                    >
                      <CheckCircle />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

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
                }}
              >
                <CardContent
                  sx={{ p: 3 }}
                >
                  <Box
                    sx={{
                      display:
                        "flex",
                      alignItems:
                        "center",
                      justifyContent:
                        "space-between",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: 13,
                          color:
                            "#64748B",
                        }}
                      >
                        Toplam Okuma
                        Beklentisi
                      </Typography>

                      <Typography
                        sx={{
                          mt: 1,
                          fontSize: 30,
                          fontWeight: 700,
                          color:
                            "#D97706",
                        }}
                      >
                        {
                          toplamOkunmasiGereken
                        }
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        width: 45,
                        height: 45,
                        borderRadius: 2,
                        backgroundColor:
                          "#FFF7ED",
                        display:
                          "flex",
                        alignItems:
                          "center",
                        justifyContent:
                          "center",
                        color:
                          "#D97706",
                      }}
                    >
                      <Groups />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* ===================================================
              ARAMA
          =================================================== */}

          <Box
            sx={{
              backgroundColor:
                "white",
              border:
                "1px solid #E2E8F0",
              borderRadius: 3,
              p: 2,
              mb: 3,
            }}
          >
            <Box
              sx={{
                position:
                  "relative",
              }}
            >
              <Search
                sx={{
                  position:
                    "absolute",
                  left: 14,
                  top: "50%",
                  transform:
                    "translateY(-50%)",
                  color:
                    "#94A3B8",
                  fontSize: 21,
                  zIndex: 1,
                }}
              />

              <TextField
                fullWidth
                size="small"
                placeholder="Kütüphanede ara..."
                value={arama}
                onChange={(e) =>
                  setArama(
                    e.target.value
                  )
                }
                sx={{
                  "& .MuiOutlinedInput-root":
                    {
                      borderRadius: 2,
                    },
                  "& .MuiInputBase-input":
                    {
                      paddingLeft:
                        "44px",
                    },
                }}
              />
            </Box>
          </Box>

          {/* ===================================================
              KÜTÜPHANE
          =================================================== */}

          <Box
            sx={{
              backgroundColor:
                "white",
              border:
                "1px solid #E2E8F0",
              borderRadius: 3,
              p: {
                xs: 2,
                md: 3,
              },
            }}
          >
            <Box
              sx={{
                display:
                  "flex",
                alignItems:
                  "center",
                justifyContent:
                  "space-between",
                mb: 3,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 700,
                    color:
                      "#0F2742",
                  }}
                >
                  Eğitim ve
                  Dokümantasyonlar
                </Typography>

                <Typography
                  sx={{
                    fontSize: 12,
                    color:
                      "#64748B",
                    mt: 0.5,
                  }}
                >
                  Stajyerlerin
                  okuması gereken
                  ortak dokümanlar
                </Typography>
              </Box>

              <Chip
                icon={<Folder />}
                label={`${filtreliBelgeler.length} belge`}
                size="small"
                sx={{
                  backgroundColor:
                    "#EDF4F9",
                  color:
                    "#286B9D",
                  fontWeight: 600,
                }}
              />
            </Box>

            <Divider
              sx={{ mb: 3 }}
            />

            {filtreliBelgeler.length >
            0 ? (
              <Grid
                container
                spacing={2.5}
              >
                {filtreliBelgeler.map(
                  (belge) => {
                    const okuyan =
                      belge.stajyerler.filter(
                        (stajyer) =>
                          stajyer.okundu
                      ).length;

                    const toplam =
                      belge
                        .stajyerler
                        .length;

                    const oran =
                      toplam > 0
                        ? Math.round(
                            (okuyan /
                              toplam) *
                              100
                          )
                        : 0;

                    return (
                      <Grid
                        size={{
                          xs: 12,
                          md: 6,
                          lg: 4,
                        }}
                        key={
                          belge.id
                        }
                      >
                        <Card
                          sx={{
                            height:
                              "100%",
                            border:
                              "1px solid #E2E8F0",
                            borderRadius:
                              3,
                            boxShadow:
                              "none",
                            transition:
                              "0.2s",
                            "&:hover":
                              {
                                boxShadow:
                                  "0 5px 18px rgba(15,39,66,0.08)",
                                transform:
                                  "translateY(-2px)",
                              },
                          }}
                        >
                          <CardContent
                            sx={{
                              p: 2.5,
                            }}
                          >
                            <Box
                              sx={{
                                display:
                                  "flex",
                                justifyContent:
                                  "space-between",
                                alignItems:
                                  "flex-start",
                              }}
                            >
                              <Box
                                sx={{
                                  width: 48,
                                  height: 48,
                                  borderRadius:
                                    2,
                                  backgroundColor:
                                    "#FEF2F2",
                                  color:
                                    "#DC2626",
                                  display:
                                    "flex",
                                  alignItems:
                                    "center",
                                  justifyContent:
                                    "center",
                                }}
                              >
                                <PictureAsPdf
                                  sx={{
                                    fontSize:
                                      27,
                                  }}
                                />
                              </Box>

                              <Chip
                                label={
                                  belge.kategori
                                }
                                size="small"
                                sx={{
                                  fontSize:
                                    10,
                                  fontWeight:
                                    600,
                                  backgroundColor:
                                    "#EDF4F9",
                                  color:
                                    "#286B9D",
                                }}
                              />
                            </Box>

                            <Typography
                              sx={{
                                fontSize:
                                  15,
                                fontWeight:
                                  700,
                                color:
                                  "#17202A",
                                mt: 2,
                                lineHeight:
                                  1.4,
                              }}
                            >
                              {
                                belge.baslik
                              }
                            </Typography>

                            <Typography
                              sx={{
                                fontSize:
                                  11,
                                color:
                                  "#64748B",
                                mt: 1,
                                lineHeight:
                                  1.6,
                                minHeight:
                                  54,
                              }}
                            >
                              {
                                belge.aciklama
                              }
                            </Typography>

                            <Divider
                              sx={{
                                my: 2,
                              }}
                            />

                            <Box
                              sx={{
                                display:
                                  "flex",
                                alignItems:
                                  "center",
                                gap: 1,
                              }}
                            >
                              <DescriptionOutlined
                                sx={{
                                  fontSize:
                                    17,
                                  color:
                                    "#64748B",
                                }}
                              />

                              <Typography
                                sx={{
                                  fontSize:
                                    11,
                                  color:
                                    "#64748B",
                                  overflow:
                                    "hidden",
                                  textOverflow:
                                    "ellipsis",
                                  whiteSpace:
                                    "nowrap",
                                }}
                              >
                                {
                                  belge.dosyaAdi
                                }
                              </Typography>
                            </Box>

                            <Typography
                              sx={{
                                fontSize:
                                  10,
                                color:
                                  "#94A3B8",
                                mt: 0.7,
                              }}
                            >
                              Yüklendi:{" "}
                              {
                                belge.yuklenmeTarihi
                              }
                            </Typography>

                            <Box
                              sx={{
                                mt: 2,
                                p: 1.5,
                                borderRadius:
                                  2,
                                backgroundColor:
                                  oran ===
                                  100
                                    ? "#ECFDF3"
                                    : "#F8FAFC",
                              }}
                            >
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
                                <Box
                                  sx={{
                                    display:
                                      "flex",
                                    alignItems:
                                      "center",
                                    gap: 0.7,
                                  }}
                                >
                                  {oran ===
                                  100 ? (
                                    <CheckCircle
                                      sx={{
                                        fontSize:
                                          17,
                                        color:
                                          "#16A34A",
                                      }}
                                    />
                                  ) : (
                                    <Groups
                                      sx={{
                                        fontSize:
                                          17,
                                        color:
                                          "#64748B",
                                      }}
                                    />
                                  )}

                                  <Typography
                                    sx={{
                                      fontSize:
                                        11,
                                      fontWeight:
                                        600,
                                      color:
                                        oran ===
                                        100
                                          ? "#166534"
                                          : "#475569",
                                    }}
                                  >
                                    {
                                      okuyan
                                    }{" "}
                                    /{" "}
                                    {
                                      toplam
                                    }{" "}
                                    stajyer
                                    okudu
                                  </Typography>
                                </Box>

                                <Typography
                                  sx={{
                                    fontSize:
                                      11,
                                    fontWeight:
                                      700,
                                    color:
                                      oran ===
                                      100
                                        ? "#16A34A"
                                        : "#286B9D",
                                  }}
                                >
                                  {oran}%
                                </Typography>
                              </Box>

                              <Box
                                sx={{
                                  mt: 1,
                                  height: 5,
                                  borderRadius:
                                    10,
                                  backgroundColor:
                                    "#E2E8F0",
                                  overflow:
                                    "hidden",
                                }}
                              >
                                <Box
                                  sx={{
                                    width: `${oran}%`,
                                    height:
                                      "100%",
                                    backgroundColor:
                                      oran ===
                                      100
                                        ? "#16A34A"
                                        : "#286B9D",
                                    borderRadius:
                                      10,
                                    transition:
                                      "0.3s",
                                  }}
                                />
                              </Box>
                            </Box>

                            <Box
                              sx={{
                                display:
                                  "flex",
                                gap: 1,
                                mt: 2,
                              }}
                            >
                              <Button
                                fullWidth
                                size="small"
                                startIcon={
                                  <Visibility />
                                }
                                onClick={() =>
                                  belgeDetayGoster(
                                    belge
                                  )
                                }
                                sx={{
                                  textTransform:
                                    "none",
                                  fontSize:
                                    11,
                                  color:
                                    "#286B9D",
                                  backgroundColor:
                                    "#EDF4F9",
                                  "&:hover":
                                    {
                                      backgroundColor:
                                        "#DCECF7",
                                    },
                                }}
                              >
                                Görüntüle
                              </Button>

                              <Button
                                fullWidth
                                size="small"
                                startIcon={
                                  <Groups />
                                }
                                onClick={() =>
                                  okumaDurumlariniGoster(
                                    belge
                                  )
                                }
                                sx={{
                                  textTransform:
                                    "none",
                                  fontSize:
                                    11,
                                  color:
                                    "#0F2742",
                                  backgroundColor:
                                    "#F1F5F9",
                                  "&:hover":
                                    {
                                      backgroundColor:
                                        "#E2E8F0",
                                    },
                                }}
                              >
                                Okuma
                              </Button>

                              <IconButton
                                size="small"
                                onClick={() =>
                                  belgeSil(
                                    belge.id
                                  )
                                }
                                sx={{
                                  color:
                                    "#DC2626",
                                  backgroundColor:
                                    "#FEF2F2",
                                  borderRadius:
                                    1.5,
                                  "&:hover":
                                    {
                                      backgroundColor:
                                        "#FEE2E2",
                                    },
                                }}
                              >
                                <Delete
                                  sx={{
                                    fontSize:
                                      18,
                                  }}
                                />
                              </IconButton>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  }
                )}
              </Grid>
            ) : (
              <Box
                sx={{
                  textAlign:
                    "center",
                  py: 7,
                }}
              >
                <MenuBook
                  sx={{
                    fontSize: 50,
                    color:
                      "#CBD5E1",
                  }}
                />

                <Typography
                  sx={{
                    mt: 1,
                    fontSize: 16,
                    fontWeight: 600,
                    color:
                      "#475569",
                  }}
                >
                  Belge bulunamadı.
                </Typography>

                <Typography
                  sx={{
                    mt: 0.5,
                    fontSize: 12,
                    color:
                      "#94A3B8",
                  }}
                >
                  Arama kriterlerinizi
                  değiştirmeyi
                  deneyin.
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      {/* =====================================================
          BELGE YÜKLEME DİYALOĞU
      ===================================================== */}

      <Dialog
        open={yuklemeDialogOpen}
        onClose={() =>
          setYuklemeDialogOpen(
            false
          )
        }
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle
          sx={{
            display:
              "flex",
            alignItems:
              "center",
            justifyContent:
              "space-between",
            fontWeight: 700,
            color:
              "#0F2742",
          }}
        >
          Ortak Kütüphaneye
          Belge Yükle

          <IconButton
            onClick={() =>
              setYuklemeDialogOpen(
                false
              )
            }
          >
            <Close />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Typography
            sx={{
              fontSize: 12,
              color:
                "#64748B",
              mb: 2,
            }}
          >
            Yüklediğiniz belge
            tüm stajyerlerin
            ortak
            kütüphanesinde
            görüntülenecektir.
          </Typography>

          <TextField
            fullWidth
            label="Belge Başlığı"
            value={belgeBaslik}
            onChange={(e) =>
              setBelgeBaslik(
                e.target.value
              )
            }
            margin="normal"
            placeholder="Örn. İş Güvenliği Eğitimi"
          />

          <TextField
            fullWidth
            select
            label="Kategori"
            value={belgeKategori}
            onChange={(e) =>
              setBelgeKategori(
                e.target.value
              )
            }
            margin="normal"
          >
            <MenuItem value="Eğitim">
              Eğitim
            </MenuItem>

            <MenuItem value="Dokümantasyon">
              Dokümantasyon
            </MenuItem>

            <MenuItem value="Genel">
              Genel
            </MenuItem>
          </TextField>

          <TextField
            fullWidth
            multiline
            rows={3}
            label="Açıklama"
            value={belgeAciklama}
            onChange={(e) =>
              setBelgeAciklama(
                e.target.value
              )
            }
            margin="normal"
            placeholder="Belgenin içeriği hakkında kısa bilgi..."
          />

          <Box sx={{ mt: 2 }}>
            <Button
              component="label"
              fullWidth
              variant="outlined"
              startIcon={
                <CloudUpload />
              }
              sx={{
                py: 2,
                borderRadius: 2,
                borderStyle:
                  "dashed",
                borderColor:
                  "#CBD5E1",
                color:
                  "#286B9D",
                textTransform:
                  "none",
                "&:hover": {
                  borderColor:
                    "#286B9D",
                  backgroundColor:
                    "#F8FAFC",
                },
              }}
            >
              {secilenDosya
                ? secilenDosya.name
                : "Doküman Seç"}

              <input
                hidden
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                onChange={dosyaSec}
              />
            </Button>
          </Box>

          {secilenDosya && (
            <Box
              sx={{
                mt: 1.5,
                p: 1.5,
                borderRadius: 2,
                backgroundColor:
                  "#ECFDF3",
                display:
                  "flex",
                alignItems:
                  "center",
                gap: 1,
              }}
            >
              <CheckCircle
                sx={{
                  fontSize: 18,
                  color:
                    "#16A34A",
                }}
              />

              <Typography
                sx={{
                  fontSize: 11,
                  color:
                    "#166534",
                }}
              >
                {
                  secilenDosya.name
                } seçildi.
              </Typography>
            </Box>
          )}
        </DialogContent>

        <DialogActions
          sx={{ p: 2.5 }}
        >
          <Button
            onClick={() =>
              setYuklemeDialogOpen(
                false
              )
            }
            sx={{
              textTransform:
                "none",
              color:
                "#64748B",
            }}
          >
            İptal
          </Button>

          <Button
            variant="contained"
            startIcon={
              <CloudUpload />
            }
            onClick={
              belgeYukle
            }
            disabled={
              !belgeBaslik.trim() ||
              !secilenDosya
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
            Kütüphaneye Yükle
          </Button>
        </DialogActions>
      </Dialog>

      {/* =====================================================
          BELGE DETAY DİYALOĞU
      ===================================================== */}

      <Dialog
        open={belgeDetayOpen}
        onClose={() =>
          setBelgeDetayOpen(false)
        }
        fullWidth
        maxWidth="md"
      >
        <DialogTitle
          sx={{
            display:
              "flex",
            alignItems:
              "center",
            justifyContent:
              "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 700,
                color:
                  "#0F2742",
              }}
            >
              {seciliBelge?.baslik}
            </Typography>

            <Typography
              sx={{
                fontSize: 11,
                color:
                  "#64748B",
                mt: 0.5,
              }}
            >
              {
                seciliBelge?.dosyaAdi
              }
            </Typography>
          </Box>

          <IconButton
            onClick={() =>
              setBelgeDetayOpen(
                false
              )
            }
          >
            <Close />
          </IconButton>
        </DialogTitle>

        <DialogContent
          dividers
        >
          <Box
            sx={{
              backgroundColor:
                "#F8FAFC",
              borderRadius: 2,
              p: 3,
              minHeight: 350,
              display:
                "flex",
              flexDirection:
                "column",
              alignItems:
                "center",
              justifyContent:
                "center",
              textAlign:
                "center",
            }}
          >
            <PictureAsPdf
              sx={{
                fontSize: 65,
                color:
                  "#DC2626",
              }}
            />

            <Typography
              sx={{
                mt: 2,
                fontSize: 17,
                fontWeight: 700,
                color:
                  "#0F2742",
              }}
            >
              {
                seciliBelge?.baslik
              }
            </Typography>

            <Typography
              sx={{
                mt: 1,
                fontSize: 12,
                color:
                  "#64748B",
                maxWidth: 500,
              }}
            >
              {
                seciliBelge?.aciklama
              }
            </Typography>

            <Button
              variant="contained"
              startIcon={
                <Visibility />
              }
              sx={{
                mt: 3,
                backgroundColor:
                  "#0F2742",
                textTransform:
                  "none",
                "&:hover": {
                  backgroundColor:
                    "#17395D",
                },
              }}
            >
              Dokümanı Aç
            </Button>
          </Box>
        </DialogContent>

        <DialogActions
          sx={{ p: 2 }}
        >
          <Button
            onClick={() =>
              setBelgeDetayOpen(
                false
              )
            }
            sx={{
              textTransform:
                "none",
              color:
                "#64748B",
            }}
          >
            Kapat
          </Button>
        </DialogActions>
      </Dialog>

      {/* =====================================================
          OKUMA DURUMU DİYALOĞU
      ===================================================== */}

      <Dialog
        open={okumaDialogOpen}
        onClose={() =>
          setOkumaDialogOpen(false)
        }
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle
          sx={{
            display:
              "flex",
            alignItems:
              "center",
            justifyContent:
              "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 19,
                fontWeight: 700,
                color:
                  "#0F2742",
              }}
            >
              Okuma Durumu
            </Typography>

            <Typography
              sx={{
                fontSize: 11,
                color:
                  "#64748B",
                mt: 0.4,
              }}
            >
              {
                seciliBelge?.baslik
              }
            </Typography>
          </Box>

          <IconButton
            onClick={() =>
              setOkumaDialogOpen(
                false
              )
            }
          >
            <Close />
          </IconButton>
        </DialogTitle>

        <DialogContent
          dividers
        >
          {seciliBelge?.stajyerler.map(
            (stajyer) => (
              <Box
                key={
                  stajyer.id
                }
                sx={{
                  display:
                    "flex",
                  alignItems:
                    "center",
                  justifyContent:
                    "space-between",
                  py: 1.5,
                  borderBottom:
                    "1px solid #F1F5F9",
                }}
              >
                <Box
                  sx={{
                    display:
                      "flex",
                    alignItems:
                      "center",
                    gap: 1.2,
                  }}
                >
                  {stajyer.okundu ? (
                    <CheckCircle
                      sx={{
                        fontSize:
                          21,
                        color:
                          "#16A34A",
                      }}
                    />
                  ) : (
                    <RadioButtonUnchecked
                      sx={{
                        fontSize:
                          21,
                        color:
                          "#CBD5E1",
                      }}
                    />
                  )}

                  <Box>
                    <Typography
                      sx={{
                        fontSize:
                          13,
                        fontWeight:
                          600,
                        color:
                          "#17202A",
                      }}
                    >
                      {
                        stajyer.ad
                      }
                    </Typography>

                    {stajyer.okundu &&
                      stajyer.okumaTarihi && (
                        <Typography
                          sx={{
                            fontSize:
                              10,
                            color:
                              "#64748B",
                            mt: 0.2,
                          }}
                        >
                          Okundu:{" "}
                          {
                            stajyer.okumaTarihi
                          }
                        </Typography>
                      )}
                  </Box>
                </Box>

                <Chip
                  label={
                    stajyer.okundu
                      ? "Okudu"
                      : "Okumadı"
                  }
                  size="small"
                  sx={{
                    fontSize:
                      10,
                    fontWeight:
                      600,
                    color:
                      stajyer.okundu
                        ? "#166534"
                        : "#991B1B",
                    backgroundColor:
                      stajyer.okundu
                        ? "#DCFCE7"
                        : "#FEE2E2",
                  }}
                />
              </Box>
            )
          )}
        </DialogContent>

        <DialogActions
          sx={{ p: 2 }}
        >
          <Button
            onClick={() =>
              setOkumaDialogOpen(
                false
              )
            }
            sx={{
              textTransform:
                "none",
              color:
                "#64748B",
            }}
          >
            Kapat
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}