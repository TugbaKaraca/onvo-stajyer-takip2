"use client";

import { useMemo, useState } from "react";

import {
  Box,
  Card,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  IconButton,
  Divider,
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
  CalendarMonth,
  CheckCircle,
  Cancel,
  BeachAccess,
  Visibility,
  ArrowBack,
  Close,
} from "@mui/icons-material";

import { useRouter } from "next/navigation";

type DevamDurumu = "Geldi" | "Gelmedi" | "İzinli";

type DevamKaydi = {
  id: number;
  stajyerId: number;
  stajyer: string;
  tarih: string;
  durum: DevamDurumu;
  aciklama: string;
};

type Stajyer = {
  id: number;
  ad: string;
};

export default function DevamPage() {
  const router = useRouter();

  /* =========================
     STAJYERLER
  ========================= */

  const stajyerler: Stajyer[] = [
    {
      id: 1,
      ad: "Zeliha Koyuncu",
    },
    {
      id: 2,
      ad: "Ahmet Yılmaz",
    },
    {
      id: 3,
      ad: "Elif Demir",
    },
    {
      id: 4,
      ad: "Mehmet Kaya",
    },
    {
      id: 5,
      ad: "Ayşe Çelik",
    },
  ];

  /* =========================
     DEVAM KAYITLARI
  ========================= */

  const [devamKayitlari, setDevamKayitlari] =
    useState<DevamKaydi[]>([
      {
        id: 1,
        stajyerId: 1,
        stajyer: "Zeliha Koyuncu",
        tarih: "13 Ağustos 2026",
        durum: "Geldi",
        aciklama: "",
      },
      {
        id: 2,
        stajyerId: 2,
        stajyer: "Ahmet Yılmaz",
        tarih: "13 Ağustos 2026",
        durum: "Geldi",
        aciklama: "",
      },
      {
        id: 3,
        stajyerId: 3,
        stajyer: "Elif Demir",
        tarih: "13 Ağustos 2026",
        durum: "Geldi",
        aciklama: "",
      },
      {
        id: 4,
        stajyerId: 4,
        stajyer: "Mehmet Kaya",
        tarih: "13 Ağustos 2026",
        durum: "İzinli",
        aciklama: "Önceden bildirilmiş izin.",
      },
      {
        id: 5,
        stajyerId: 5,
        stajyer: "Ayşe Çelik",
        tarih: "13 Ağustos 2026",
        durum: "Gelmedi",
        aciklama: "Devamsızlık bildirimi bulunmuyor.",
      },
      {
        id: 6,
        stajyerId: 1,
        stajyer: "Zeliha Koyuncu",
        tarih: "12 Ağustos 2026",
        durum: "Geldi",
        aciklama: "",
      },
      {
        id: 7,
        stajyerId: 2,
        stajyer: "Ahmet Yılmaz",
        tarih: "12 Ağustos 2026",
        durum: "Geldi",
        aciklama: "",
      },
      {
        id: 8,
        stajyerId: 3,
        stajyer: "Elif Demir",
        tarih: "12 Ağustos 2026",
        durum: "Geldi",
        aciklama: "",
      },
      {
        id: 9,
        stajyerId: 4,
        stajyer: "Mehmet Kaya",
        tarih: "12 Ağustos 2026",
        durum: "Gelmedi",
        aciklama: "Devamsızlık.",
      },
      {
        id: 10,
        stajyerId: 5,
        stajyer: "Ayşe Çelik",
        tarih: "12 Ağustos 2026",
        durum: "Geldi",
        aciklama: "",
      },
    ]);

  /* =========================
     STATE
  ========================= */

  const [stajyerId, setStajyerId] =
    useState<string>("");

  const [durum, setDurum] =
    useState<string>("");

  const [selectedKayit, setSelectedKayit] =
    useState<DevamKaydi | null>(null);

  /* =========================
     MENÜ
  ========================= */

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

  /* =========================
     FİLTRELEME
  ========================= */

  const filtrelenmisKayitlar =
    useMemo(() => {
      return devamKayitlari.filter(
        (kayit) => {
          const stajyerUygun =
            stajyerId === "" ||
            kayit.stajyerId ===
              Number(stajyerId);

          const durumUygun =
            durum === "" ||
            kayit.durum === durum;

          return (
            stajyerUygun &&
            durumUygun
          );
        }
      );
    }, [
      devamKayitlari,
      stajyerId,
      durum,
    ]);

  /* =========================
     İSTATİSTİKLER
  ========================= */

  const toplam = filtrelenmisKayitlar.length;

  const geldi = filtrelenmisKayitlar.filter(
    (kayit) => kayit.durum === "Geldi"
  ).length;

  const gelmedi = filtrelenmisKayitlar.filter(
    (kayit) => kayit.durum === "Gelmedi"
  ).length;

  const izinli = filtrelenmisKayitlar.filter(
    (kayit) => kayit.durum === "İzinli"
  ).length;

  /* =========================
     DURUM STİLİ
  ========================= */

  const durumStyle = (
    devamDurumu: DevamDurumu
  ) => {
    switch (devamDurumu) {
      case "Geldi":
        return {
          background: "#e8f5e9",
          color: "#2e7d32",
        };

      case "Gelmedi":
        return {
          background: "#ffebee",
          color: "#c62828",
        };

      case "İzinli":
        return {
          background: "#fff3e0",
          color: "#e65100",
        };
    }
  };

  /* =========================
     İKON
  ========================= */

  const durumIcon = (
    devamDurumu: DevamDurumu
  ) => {
    if (devamDurumu === "Geldi") {
      return (
        <CheckCircle
          sx={{
            fontSize: 18,
            color: "#2e7d32",
          }}
        />
      );
    }

    if (devamDurumu === "Gelmedi") {
      return (
        <Cancel
          sx={{
            fontSize: 18,
            color: "#c62828",
          }}
        />
      );
    }

    return (
      <BeachAccess
        sx={{
          fontSize: 18,
          color: "#e65100",
        }}
      />
    );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F5F7FA",
        display: "flex",
      }}
    >
      {/* =========================
          SOL MENÜ
      ========================= */}

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
              "/yetkili/devam";

            return (
              <Box
                key={item.text}
                onClick={() =>
                  router.push(
                    item.path
                  )
                }
                sx={{
                  display: "flex",
                  alignItems:
                    "center",
                  gap: 1.2,
                  px: 1.3,
                  py: 1.05,
                  mb: 0.35,
                  borderRadius: 1.5,
                  cursor: "pointer",

                  backgroundColor:
                    active
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
                    alignItems:
                      "center",

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
                    fontWeight:
                      active
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
              router.push(
                "/login/yetkili"
              )
            }
            sx={{
              display: "flex",
              alignItems:
                "center",
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

      {/* =========================
          ANA ALAN
      ========================= */}

      <Box
        sx={{
          marginLeft: "195px",
          width:
            "calc(100% - 195px)",
          minHeight: "100vh",
        }}
      >
        {/* ÜST BAR */}

        <Box
          sx={{
            height: 58,
            backgroundColor:
              "white",
            borderBottom:
              "1px solid #e4e7ec",
            display: "flex",
            alignItems:
              "center",
            justifyContent:
              "flex-end",
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
              backgroundColor:
                "#EDF4F9",
              display: "flex",
              alignItems:
                "center",
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
                fontWeight:
                  "bold",
                color:
                  "#17202A",
              }}
            >
              Yetkili Kullanıcı
            </Typography>

            <Typography
              sx={{
                fontSize: 9,
                color:
                  "#64748B",
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

          <Box
            sx={{
              mb: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: 28,
                fontWeight:
                  "bold",
                color:
                  "#0F2742",
                mb: 0.5,
              }}
            >
              Devam Durumu
            </Typography>

            <Typography
              sx={{
                color:
                  "#64748B",
                fontSize: 13,
              }}
            >
              Stajyerlerin devam
              durumlarını
              buradan
              görüntüleyebilirsiniz.
            </Typography>
          </Box>

          {/* =========================
              İSTATİSTİK KARTLARI
          ========================= */}

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns:
                {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                },
              gap: 2,
              mb: 3,
            }}
          >
            {/* TOPLAM */}

            <Card
              elevation={0}
              sx={{
                p: 2.2,
                border:
                  "1px solid #E4E7EC",
                borderRadius: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: 11,
                  color:
                    "#94A3B8",
                  mb: 1,
                }}
              >
                Toplam Kayıt
              </Typography>

              <Typography
                sx={{
                  fontSize: 26,
                  fontWeight:
                    "bold",
                  color:
                    "#0F2742",
                }}
              >
                {toplam}
              </Typography>
            </Card>

            {/* GELDİ */}

            <Card
              elevation={0}
              sx={{
                p: 2.2,
                border:
                  "1px solid #E4E7EC",
                borderRadius: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: 11,
                  color:
                    "#94A3B8",
                  mb: 1,
                }}
              >
                Geldi
              </Typography>

              <Typography
                sx={{
                  fontSize: 26,
                  fontWeight:
                    "bold",
                  color:
                    "#2E7D32",
                }}
              >
                {geldi}
              </Typography>
            </Card>

            {/* GELMEDİ */}

            <Card
              elevation={0}
              sx={{
                p: 2.2,
                border:
                  "1px solid #E4E7EC",
                borderRadius: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: 11,
                  color:
                    "#94A3B8",
                  mb: 1,
                }}
              >
                Gelmedi
              </Typography>

              <Typography
                sx={{
                  fontSize: 26,
                  fontWeight:
                    "bold",
                  color:
                    "#C62828",
                }}
              >
                {gelmedi}
              </Typography>
            </Card>

            {/* İZİNLİ */}

            <Card
              elevation={0}
              sx={{
                p: 2.2,
                border:
                  "1px solid #E4E7EC",
                borderRadius: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: 11,
                  color:
                    "#94A3B8",
                  mb: 1,
                }}
              >
                İzinli
              </Typography>

              <Typography
                sx={{
                  fontSize: 26,
                  fontWeight:
                    "bold",
                  color:
                    "#E65100",
                }}
              >
                {izinli}
              </Typography>
            </Card>
          </Box>

          {/* =========================
              FİLTRELER
          ========================= */}

          <Card
            elevation={0}
            sx={{
              border:
                "1px solid #E4E7EC",
              borderRadius: 2,
              mb: 3,
            }}
          >
            <Box
              sx={{
                p: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: 15,
                  fontWeight:
                    "bold",
                  color:
                    "#0F2742",
                  mb: 2,
                }}
              >
                Devam Durumu Filtreleme
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns:
                    {
                      xs: "1fr",
                      md: "1fr 1fr",
                    },
                  gap: 2,
                }}
              >
                {/* STAJYER */}

                <FormControl
                  fullWidth
                >
                  <InputLabel id="devam-stajyer-label">
                    Stajyer
                  </InputLabel>

                  <Select
                    labelId="devam-stajyer-label"
                    value={
                      stajyerId
                    }
                    label="Stajyer"
                    onChange={(
                      event: SelectChangeEvent
                    ) =>
                      setStajyerId(
                        event
                          .target
                          .value
                      )
                    }
                  >
                    <MenuItem value="">
                      Tüm Stajyerler
                    </MenuItem>

                    {stajyerler.map(
                      (
                        stajyer
                      ) => (
                        <MenuItem
                          key={
                            stajyer.id
                          }
                          value={String(
                            stajyer.id
                          )}
                        >
                          {
                            stajyer.ad
                          }
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>

                {/* DURUM */}

                <FormControl
                  fullWidth
                >
                  <InputLabel id="devam-durum-label">
                    Durum
                  </InputLabel>

                  <Select
                    labelId="devam-durum-label"
                    value={
                      durum
                    }
                    label="Durum"
                    onChange={(
                      event: SelectChangeEvent
                    ) =>
                      setDurum(
                        event
                          .target
                          .value
                      )
                    }
                  >
                    <MenuItem value="">
                      Tüm Durumlar
                    </MenuItem>

                    <MenuItem value="Geldi">
                      Geldi
                    </MenuItem>

                    <MenuItem value="Gelmedi">
                      Gelmedi
                    </MenuItem>

                    <MenuItem value="İzinli">
                      İzinli
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Card>

          {/* =========================
              DEVAM LİSTESİ
          ========================= */}

          <Card
            elevation={0}
            sx={{
              border:
                "1px solid #E4E7EC",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            {/* BAŞLIK */}

            <Box
              sx={{
                px: 2.5,
                py: 2,
                borderBottom:
                  "1px solid #E4E7EC",
                backgroundColor:
                  "#FAFBFC",
              }}
            >
              <Typography
                sx={{
                  fontSize: 15,
                  fontWeight:
                    "bold",
                  color:
                    "#0F2742",
                }}
              >
                Devam Kayıtları
              </Typography>

              <Typography
                sx={{
                  fontSize: 11,
                  color:
                    "#64748B",
                  mt: 0.5,
                }}
              >
                {filtrelenmisKayitlar.length} kayıt
                görüntüleniyor.
              </Typography>
            </Box>

            {/* KAYITLAR */}

            {filtrelenmisKayitlar.length >
            0 ? (
              filtrelenmisKayitlar.map(
                (
                  kayit,
                  index
                ) => (
                  <Box
                    key={
                      kayit.id
                    }
                  >
                    <Box
                      sx={{
                        px: 2.5,
                        py: 2,
                        display:
                          "grid",
                        gridTemplateColumns:
                          {
                            xs: "1fr",
                            md: "2fr 1.5fr 1fr auto",
                          },
                        alignItems:
                          "center",
                        gap: 2,

                        "&:hover": {
                          backgroundColor:
                            "#FAFCFE",
                        },
                      }}
                    >
                      {/* STAJYER */}

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
                            width: 40,
                            height: 40,
                            minWidth: 40,
                            borderRadius:
                              "50%",
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
                          <Person
                            sx={{
                              fontSize:
                                21,
                            }}
                          />
                        </Box>

                        <Box>
                          <Typography
                            sx={{
                              fontSize:
                                13,
                              fontWeight:
                                "bold",
                              color:
                                "#1E293B",
                            }}
                          >
                            {
                              kayit.stajyer
                            }
                          </Typography>

                          <Typography
                            sx={{
                              fontSize:
                                10,
                              color:
                                "#94A3B8",
                            }}
                          >
                            Stajyer
                          </Typography>
                        </Box>
                      </Box>

                      {/* TARİH */}

                      <Box>
                        <Typography
                          sx={{
                            fontSize:
                              10,
                            color:
                              "#94A3B8",
                            mb: 0.3,
                          }}
                        >
                          Tarih
                        </Typography>

                        <Typography
                          sx={{
                            fontSize:
                              12,
                            fontWeight:
                              600,
                          }}
                        >
                          {
                            kayit.tarih
                          }
                        </Typography>
                      </Box>

                      {/* DURUM */}

                      <Chip
                        icon={durumIcon(
                          kayit.durum
                        )}
                        label={
                          kayit.durum
                        }
                        size="small"
                        sx={{
                          ...durumStyle(
                            kayit.durum
                          ),
                          width:
                            "fit-content",
                          fontWeight:
                            600,
                        }}
                      />

                      {/* DETAY */}

                      <IconButton
                        onClick={() =>
                          setSelectedKayit(
                            kayit
                          )
                        }
                        sx={{
                          color:
                            "#286B9D",
                          backgroundColor:
                            "#EDF4F9",

                          "&:hover": {
                            backgroundColor:
                              "#DCEBF4",
                          },
                        }}
                      >
                        <Visibility
                          sx={{
                            fontSize:
                              19,
                          }}
                        />
                      </IconButton>
                    </Box>

                    {index <
                      filtrelenmisKayitlar.length -
                        1 && (
                      <Divider />
                    )}
                  </Box>
                )
              )
            ) : (
              <Box
                sx={{
                  py: 7,
                  textAlign:
                    "center",
                }}
              >
                <EventAvailable
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
                    fontWeight:
                      "bold",
                    color:
                      "#475569",
                    mb: 0.5,
                  }}
                >
                  Kayıt bulunamadı
                </Typography>

                <Typography
                  sx={{
                    fontSize: 12,
                    color:
                      "#94A3B8",
                  }}
                >
                  Seçtiğiniz filtrelere
                  uygun devam kaydı
                  bulunmuyor.
                </Typography>
              </Box>
            )}
          </Card>

          {/* ALT BİLGİ */}

          <Typography
            sx={{
              textAlign:
                "center",
              color:
                "#94A3B8",
              fontSize: 11,
              mt: 3,
            }}
          >
            Devam bilgileri yalnızca
            yetkili kullanıcılar tarafından
            görüntülenmektedir.
          </Typography>
        </Box>
      </Box>

      {/* =========================
          DETAY MODALI
      ========================= */}

      <Dialog
        open={
          selectedKayit !== null
        }
        onClose={() =>
          setSelectedKayit(
            null
          )
        }
        fullWidth
        maxWidth="sm"
      >
        {selectedKayit && (
          <>
            <DialogTitle
              sx={{
                display:
                  "flex",
                alignItems:
                  "center",
                justifyContent:
                  "space-between",
                color:
                  "#0F2742",
                fontWeight:
                  "bold",
              }}
            >
              Devam Kaydı Detayı

              <IconButton
                onClick={() =>
                  setSelectedKayit(
                    null
                  )
                }
              >
                <Close />
              </IconButton>
            </DialogTitle>

            <DialogContent
              dividers
            >
              {/* PROFİL */}

              <Box
                sx={{
                  display:
                    "flex",
                  alignItems:
                    "center",
                  gap: 2,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius:
                      "50%",
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
                  <Person
                    sx={{
                      fontSize:
                        32,
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize:
                        20,
                      fontWeight:
                        "bold",
                      color:
                        "#0F2742",
                    }}
                  >
                    {
                      selectedKayit.stajyer
                    }
                  </Typography>

                  <Chip
                    icon={durumIcon(
                      selectedKayit.durum
                    )}
                    label={
                      selectedKayit.durum
                    }
                    size="small"
                    sx={{
                      ...durumStyle(
                        selectedKayit.durum
                      ),
                      mt: 0.5,
                      fontWeight:
                        600,
                    }}
                  />
                </Box>
              </Box>

              {/* TARİH */}

              <Box
                sx={{
                  p: 2,
                  backgroundColor:
                    "#F8FAFC",
                  borderRadius: 2,
                  mb: 2,
                }}
              >
                <CalendarMonth
                  sx={{
                    fontSize: 21,
                    color:
                      "#286B9D",
                    mb: 0.5,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 10,
                    color:
                      "#94A3B8",
                  }}
                >
                  Tarih
                </Typography>

                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight:
                      600,
                    color:
                      "#1E293B",
                  }}
                >
                  {
                    selectedKayit.tarih
                  }
                </Typography>
              </Box>

              {/* AÇIKLAMA */}

              <Box
                sx={{
                  p: 2,
                  border:
                    "1px solid #E4E7EC",
                  borderRadius: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 10,
                    color:
                      "#94A3B8",
                    mb: 0.7,
                  }}
                >
                  Açıklama
                </Typography>

                <Typography
                  sx={{
                    fontSize: 13,
                    color:
                      "#334155",
                    lineHeight:
                      1.6,
                  }}
                >
                  {selectedKayit.aciklama ||
                    "Bu kayıt için açıklama bulunmamaktadır."}
                </Typography>
              </Box>
            </DialogContent>

            <DialogActions
              sx={{
                p: 2,
              }}
            >
              <Button
                onClick={() =>
                  setSelectedKayit(
                    null
                  )
                }
                variant="outlined"
                sx={{
                  borderColor:
                    "#286B9D",
                  color:
                    "#286B9D",
                }}
              >
                Kapat
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}