"use client";

import { useState } from "react";

import {
  Box,
  Button,
  Chip,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import GridViewIcon from "@mui/icons-material/GridView";
import GroupsIcon from "@mui/icons-material/Groups";
import DescriptionIcon from "@mui/icons-material/Description";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import FolderIcon from "@mui/icons-material/Folder";
import CampaignIcon from "@mui/icons-material/Campaign";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import NotificationsOutlined from "@mui/icons-material/NotificationsOutlined";
import AddIcon from "@mui/icons-material/Add";

import Link from "next/link";

// =====================================================
// TİPLER
// =====================================================

type BildirimTuru = "Bilgi" | "Uyarı" | "Başarı";

type Stajyer = {
  id: number;
  ad: string;
  soyad: string;
};

type Bildirim = {
  id: number;
  baslik: string;
  icerik: string;
  tarih: string;
  tur: BildirimTuru;
  stajyerId: number | null;
};

// =====================================================
// SAYFA
// =====================================================

export default function BildirimlerPage() {
  // ===================================================
  // STAJYERLER
  // ===================================================

  const [stajyerler] = useState<Stajyer[]>([
    {
      id: 1,
      ad: "Zeliha",
      soyad: "Koyuncu",
    },
    {
      id: 2,
      ad: "Ahmet",
      soyad: "Yılmaz",
    },
    {
      id: 3,
      ad: "Elif",
      soyad: "Demir",
    },
    {
      id: 4,
      ad: "Mehmet",
      soyad: "Kaya",
    },
    {
      id: 5,
      ad: "Ayşe",
      soyad: "Çelik",
    },
  ]);

  // ===================================================
  // BİLDİRİMLER
  // ===================================================

  const [bildirimler, setBildirimler] =
    useState<Bildirim[]>([
      {
        id: 1,
        baslik: "Yeni Stajyer Kaydı",
        icerik:
          "Sisteme yeni bir stajyer kaydı oluşturuldu. Stajyer bilgilerini kontrol edebilirsiniz.",
        tarih: "13 Ağustos 2026",
        tur: "Bilgi",
        stajyerId: null,
      },
      {
        id: 2,
        baslik: "Eksik Belge Uyarısı",
        icerik:
          "Bazı stajyerlerin sisteme yüklemesi gereken belgeleri henüz tamamlanmamıştır.",
        tarih: "12 Ağustos 2026",
        tur: "Uyarı",
        stajyerId: 1,
      },
      {
        id: 3,
        baslik: "Staj Süreci Güncellendi",
        icerik:
          "Stajyerlerin devam ve belge takip süreçlerinde yeni güncellemeler yapılmıştır.",
        tarih: "10 Ağustos 2026",
        tur: "Başarı",
        stajyerId: null,
      },
    ]);

  // ===================================================
  // FORM
  // ===================================================

  const [baslik, setBaslik] = useState("");
  const [icerik, setIcerik] = useState("");
  const [tur, setTur] =
    useState<BildirimTuru>("Bilgi");

  const [stajyerId, setStajyerId] =
    useState<number | "">("");

  // ===================================================
  // BİLDİRİM EKLE
  // ===================================================

  const bildirimEkle = () => {
    if (!baslik.trim() || !icerik.trim()) {
      return;
    }

    const yeniBildirim: Bildirim = {
      id: Date.now(),

      baslik: baslik.trim(),

      icerik: icerik.trim(),

      tarih: new Date().toLocaleDateString(
        "tr-TR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),

      tur,

      stajyerId:
        stajyerId === ""
          ? null
          : stajyerId,
    };

    setBildirimler((prev) => [
      yeniBildirim,
      ...prev,
    ]);

    setBaslik("");
    setIcerik("");
    setTur("Bilgi");
    setStajyerId("");
  };

  // ===================================================
  // BİLDİRİM SİL
  // ===================================================

  const bildirimSil = (id: number) => {
    setBildirimler((prev) =>
      prev.filter(
        (bildirim) =>
          bildirim.id !== id
      )
    );
  };

  // ===================================================
  // STAJYER ADI
  // ===================================================

  const stajyerAdiGetir = (
    id: number | null
  ) => {
    if (id === null) {
      return "Tüm Stajyerler";
    }

    const stajyer =
      stajyerler.find(
        (item) => item.id === id
      );

    if (!stajyer) {
      return "Bilinmeyen Stajyer";
    }

    return `${stajyer.ad} ${stajyer.soyad}`;
  };

  // ===================================================
  // CHIP STİLİ
  // ===================================================

  const chipStyle = (
    bildirimTuru: BildirimTuru
  ) => {
    if (bildirimTuru === "Uyarı") {
      return {
        background: "#fff3e0",
        color: "#e65100",
      };
    }

    if (bildirimTuru === "Başarı") {
      return {
        background: "#e8f5e9",
        color: "#2e7d32",
      };
    }

    return {
      background: "#e3f2fd",
      color: "#1565c0",
    };
  };

  // ===================================================
  // RETURN
  // ===================================================

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f5f7fa",
        display: "flex",
        color: "#17202a",
      }}
    >
      {/* ================================================= */}
      {/* SOL MENÜ */}
      {/* ================================================= */}

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
          display: "flex",
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
          {[
            {
              icon: <GridViewIcon />,
              text: "Kontrol Paneli",
              path: "/yetkili",
            },
            {
              icon: <GroupsIcon />,
              text: "Stajyerler",
              path: "/yetkili/stajyerler",
            },
            {
              icon: <DescriptionIcon />,
              text: "Raporlar",
              path: "/yetkili/raporlar",
            },
            {
              icon: <EventAvailableIcon />,
              text: "Devam Durumu",
              path: "/yetkili/devam",
            },
            {
              icon: <FolderIcon />,
              text: "Belgeler",
              path: "/yetkili/belgeler",
            },
            {
              icon: <CampaignIcon />,
              text: "Duyurular",
              path: "/yetkili/duyurular",
            },
            {
              icon: <NotificationsIcon />,
              text: "Bildirimler",
              path: "/yetkili/bildirimler",
            },
            {
              icon: <SettingsIcon />,
              text: "Ayarlar",
              path: "/yetkili/ayarlar",
            },
          ].map((item) => {
            const active =
              item.path === "/yetkili/bildirimler";

            return (
              <Link
                key={item.text}
                href={item.path}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Box
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
              </Link>
            );
          })}
        </Box>

        {/* ÇIKIŞ */}

        <Box
          sx={{
            px: 1,
            pb: 2,
          }}
        >
          <Link
            href="/login/yetkili"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Box
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
              <LogoutIcon sx={{ fontSize: 19 }} />

              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                Çıkış Yap
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>

      {/* ================================================= */}
      {/* ANA ALAN */}
      {/* ================================================= */}

      <Box
        sx={{
          marginLeft: "195px",
          width: "calc(100% - 195px)",
          minHeight: "100vh",
        }}
      >
        {/* ================================================= */}
        {/* ÜST BAR */}
        {/* ================================================= */}

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
          <IconButton
            sx={{
              mr: 1,
              color: "#286B9D",
            }}
          >
            <NotificationsIcon />
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
            <PersonIcon sx={{ fontSize: 20 }} />
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

        {/* ================================================= */}
        {/* İÇERİK */}
        {/* ================================================= */}

        <Box
          component="main"
          sx={{
            p: {
              xs: 3,
              md: 4,
            },
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
              Bildirimler
            </Typography>

            <Typography
              sx={{
                color: "#64748b",
                fontSize: 13,
              }}
            >
              Stajyerlere özel veya tüm stajyerlere
              yönelik bildirimleri buradan yönetebilirsiniz.
            </Typography>
          </Box>

          {/* ================================================= */}
          {/* YENİ BİLDİRİM */}
          {/* ================================================= */}

          <Paper
            elevation={0}
            sx={{
              border:
                "1px solid #dfe5ec",
              borderRadius: 2,
              p: {
                xs: 2,
                md: 3,
              },
              mb: 3,
              background: "#ffffff",
            }}
          >
            {/* KART BAŞLIĞI */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 2,
              }}
            >
              <NotificationsOutlined
                sx={{
                  color: "#1f6fae",
                }}
              />

              <Typography
                sx={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#0f2742",
                }}
              >
                Yeni Bildirim Oluştur
              </Typography>
            </Box>

            <Divider sx={{ mb: 2.5 }} />

            {/* STAJYER */}

            <FormControl
              fullWidth
              sx={{ mb: 2 }}
            >
              <InputLabel id="stajyer-label">
                Stajyer
              </InputLabel>

              <Select
                labelId="stajyer-label"
                value={stajyerId}
                label="Stajyer"
                onChange={(e) => {
                  const value =
                    String(
                      e.target.value
                    );

                  setStajyerId(
                    value === ""
                      ? ""
                      : Number(value)
                  );
                }}
                sx={{
                  borderRadius: 1.5,
                }}
              >
                <MenuItem value="">
                  Tüm Stajyerler
                </MenuItem>

                {stajyerler.map(
                  (stajyer) => (
                    <MenuItem
                      key={stajyer.id}
                      value={stajyer.id}
                    >
                      {stajyer.ad}{" "}
                      {stajyer.soyad}
                    </MenuItem>
                  )
                )}
              </Select>
            </FormControl>

            {/* BAŞLIK */}

            <TextField
              fullWidth
              label="Bildirim Başlığı"
              value={baslik}
              onChange={(e) =>
                setBaslik(
                  e.target.value
                )
              }
              placeholder="Örneğin: Eksik Belge Uyarısı"
              sx={{
                mb: 2,

                "& .MuiOutlinedInput-root":
                  {
                    borderRadius: 1.5,
                  },
              }}
            />

            {/* İÇERİK */}

            <TextField
              fullWidth
              multiline
              minRows={4}
              label="Bildirim İçeriği"
              value={icerik}
              onChange={(e) =>
                setIcerik(
                  e.target.value
                )
              }
              placeholder="Bildirim içeriğini buraya yazın..."
              sx={{
                mb: 2,

                "& .MuiOutlinedInput-root":
                  {
                    borderRadius: 1.5,
                  },
              }}
            />

            {/* TÜR */}

            <Typography
              sx={{
                color: "#475569",
                fontSize: "0.9rem",
                fontWeight: 600,
                mb: 1,
              }}
            >
              Bildirim Türü
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexWrap: "wrap",
                mb: 2.5,
              }}
            >
              {(
                [
                  "Bilgi",
                  "Uyarı",
                  "Başarı",
                ] as BildirimTuru[]
              ).map(
                (bildirimTuru) => (
                  <Button
                    key={
                      bildirimTuru
                    }
                    variant={
                      tur ===
                      bildirimTuru
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      setTur(
                        bildirimTuru
                      )
                    }
                    sx={{
                      textTransform:
                        "none",
                      fontWeight: 600,
                      borderRadius: 1.5,

                      ...(tur ===
                      bildirimTuru
                        ? {
                            background:
                              "#1f6fae",

                            "&:hover":
                              {
                                background:
                                  "#185d91",
                              },
                          }
                        : {
                            borderColor:
                              "#cbd5e1",

                            color:
                              "#475569",

                            "&:hover":
                              {
                                borderColor:
                                  "#1f6fae",

                                background:
                                  "#f5f9fc",
                              },
                          }),
                    }}
                  >
                    {bildirimTuru}
                  </Button>
                )
              )}
            </Box>

            {/* EKLE */}

            <Button
              variant="contained"
              startIcon={
                <AddIcon />
              }
              onClick={
                bildirimEkle
              }
              sx={{
                background:
                  "#1f6fae",
                textTransform:
                  "none",
                fontWeight: 600,
                px: 3,
                borderRadius: 1.5,

                "&:hover": {
                  background:
                    "#185d91",
                },
              }}
            >
              Bildirim Ekle
            </Button>
          </Paper>

          {/* ================================================= */}
          {/* MEVCUT BİLDİRİMLER */}
          {/* ================================================= */}

          <Paper
            elevation={0}
            sx={{
              border:
                "1px solid #dfe5ec",
              borderRadius: 2,
              p: {
                xs: 2,
                md: 3,
              },
              background: "#ffffff",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#0f2742",
                mb: 1,
              }}
            >
              Mevcut Bildirimler
            </Typography>

            <Typography
              sx={{
                color: "#64748b",
                fontSize: "0.9rem",
                mb: 2,
              }}
            >
              Sistemde kayıtlı bildirimleri
              buradan görüntüleyebilirsiniz.
            </Typography>

            <Divider sx={{ mb: 1 }} />

            {/* BİLDİRİM YOK */}

            {bildirimler.length ===
            0 ? (
              <Box
                sx={{
                  py: 6,
                  textAlign: "center",
                }}
              >
                <NotificationsOutlined
                  sx={{
                    fontSize: 50,
                    color: "#94a3b8",
                    mb: 1,
                  }}
                />

                <Typography
                  sx={{
                    color:
                      "#64748b",
                  }}
                >
                  Henüz bildirim
                  bulunmuyor.
                </Typography>
              </Box>
            ) : (
              /* BİLDİRİM LİSTESİ */

              bildirimler.map(
                (
                  bildirim,
                  index
                ) => (
                  <Box
                    key={
                      bildirim.id
                    }
                  >
                    <Box
                      sx={{
                        py: 2.5,
                        display:
                          "flex",
                        justifyContent:
                          "space-between",
                        alignItems:
                          "flex-start",
                        gap: 2,
                      }}
                    >
                      {/* BİLDİRİM BİLGİLERİ */}

                      <Box
                        sx={{
                          flex: 1,
                        }}
                      >
                        {/* BAŞLIK + TÜR */}

                        <Box
                          sx={{
                            display:
                              "flex",
                            alignItems:
                              "center",
                            gap: 1,
                            mb: 0.8,
                            flexWrap:
                              "wrap",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize:
                                "1.05rem",
                              fontWeight:
                                700,
                              color:
                                "#0f2742",
                            }}
                          >
                            {
                              bildirim.baslik
                            }
                          </Typography>

                          <Chip
                            label={
                              bildirim.tur
                            }
                            size="small"
                            sx={{
                              ...chipStyle(
                                bildirim.tur
                              ),
                              fontWeight:
                                600,
                            }}
                          />
                        </Box>

                        {/* ALICI */}

                        <Box
                          sx={{
                            mb: 1,
                          }}
                        >
                          <Chip
                            label={`Alıcı: ${stajyerAdiGetir(
                              bildirim.stajyerId
                            )}`}
                            size="small"
                            variant="outlined"
                            sx={{
                              borderColor:
                                "#cbd5e1",
                              color:
                                "#475569",
                              fontSize:
                                "0.75rem",
                            }}
                          />
                        </Box>

                        {/* İÇERİK */}

                        <Typography
                          sx={{
                            color:
                              "#475569",
                            fontSize:
                              "0.95rem",
                            lineHeight:
                              1.6,
                            mb: 1,
                          }}
                        >
                          {
                            bildirim.icerik
                          }
                        </Typography>

                        {/* TARİH */}

                        <Typography
                          sx={{
                            color:
                              "#94a3b8",
                            fontSize:
                              "0.8rem",
                          }}
                        >
                          {
                            bildirim.tarih
                          }
                        </Typography>
                      </Box>

                      {/* SİL */}

                      <IconButton
                        onClick={() =>
                          bildirimSil(
                            bildirim.id
                          )
                        }
                        aria-label="Bildirimi sil"
                        sx={{
                          color:
                            "#dc2626",

                          "&:hover": {
                            background:
                              "#fee2e2",
                          },
                        }}
                      >
                        <DeleteOutlined />
                      </IconButton>
                    </Box>

                    {/* AYIRICI */}

                    {index <
                      bildirimler.length -
                        1 && (
                      <Divider />
                    )}
                  </Box>
                )
              )
            )}
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}