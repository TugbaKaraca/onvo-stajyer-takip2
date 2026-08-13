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
          width: 215,
          minHeight: "100vh",
          background:
            "linear-gradient(180deg, #123457 0%, #1d5a88 100%)",
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
            px: 2.5,
            py: 3,
            borderBottom:
              "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.6rem",
              fontWeight: 800,
              letterSpacing: "-0.5px",
            }}
          >
            ONVO
          </Typography>

          <Typography
            sx={{
              fontSize: "0.75rem",
              mt: 0.5,
              color: "#dbeafe",
            }}
          >
            Stajyer Takip Sistemi
          </Typography>
        </Box>

        {/* MENÜ */}

        <Box
          sx={{
            py: 2,
            flex: 1,
          }}
        >
          {/* KONTROL PANELİ */}

          <Link
            href="/yetkili"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                px: 2,
                py: 1.25,
                mx: 1,
                borderRadius: 1.5,
                cursor: "pointer",

                "&:hover": {
                  background:
                    "rgba(255,255,255,0.12)",
                },
              }}
            >
              <GridViewIcon sx={{ fontSize: 20 }} />

              <Typography sx={{ fontSize: "0.9rem" }}>
                Kontrol Paneli
              </Typography>
            </Box>
          </Link>

          {/* STAJYERLER */}

          <Link
            href="/yetkili/stajyerler"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                px: 2,
                py: 1.25,
                mx: 1,
                borderRadius: 1.5,
                cursor: "pointer",

                "&:hover": {
                  background:
                    "rgba(255,255,255,0.12)",
                },
              }}
            >
              <GroupsIcon sx={{ fontSize: 20 }} />

              <Typography sx={{ fontSize: "0.9rem" }}>
                Stajyerler
              </Typography>
            </Box>
          </Link>

          {/* RAPORLAR */}

          <Link
            href="/yetkili/raporlar"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                px: 2,
                py: 1.25,
                mx: 1,
                borderRadius: 1.5,
                cursor: "pointer",

                "&:hover": {
                  background:
                    "rgba(255,255,255,0.12)",
                },
              }}
            >
              <DescriptionIcon sx={{ fontSize: 20 }} />

              <Typography sx={{ fontSize: "0.9rem" }}>
                Raporlar
              </Typography>
            </Box>
          </Link>

          {/* DEVAM DURUMU */}

          <Link
            href="/yetkili/devam"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                px: 2,
                py: 1.25,
                mx: 1,
                borderRadius: 1.5,
                cursor: "pointer",

                "&:hover": {
                  background:
                    "rgba(255,255,255,0.12)",
                },
              }}
            >
              <EventAvailableIcon sx={{ fontSize: 20 }} />

              <Typography sx={{ fontSize: "0.9rem" }}>
                Devam Durumu
              </Typography>
            </Box>
          </Link>

          {/* BELGELER */}

          <Link
            href="/yetkili/belgeler"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                px: 2,
                py: 1.25,
                mx: 1,
                borderRadius: 1.5,
                cursor: "pointer",

                "&:hover": {
                  background:
                    "rgba(255,255,255,0.12)",
                },
              }}
            >
              <FolderIcon sx={{ fontSize: 20 }} />

              <Typography sx={{ fontSize: "0.9rem" }}>
                Belgeler
              </Typography>
            </Box>
          </Link>

          {/* DUYURULAR */}

          <Link
            href="/yetkili/duyurular"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                px: 2,
                py: 1.25,
                mx: 1,
                borderRadius: 1.5,
                cursor: "pointer",

                "&:hover": {
                  background:
                    "rgba(255,255,255,0.12)",
                },
              }}
            >
              <CampaignIcon sx={{ fontSize: 20 }} />

              <Typography sx={{ fontSize: "0.9rem" }}>
                Duyurular
              </Typography>
            </Box>
          </Link>

          {/* BİLDİRİMLER - AKTİF */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              px: 2,
              py: 1.25,
              mx: 1,
              borderRadius: 1.5,
              background:
                "rgba(255,255,255,0.20)",
            }}
          >
            <NotificationsIcon sx={{ fontSize: 20 }} />

            <Typography
              sx={{
                fontSize: "0.9rem",
                fontWeight: 700,
              }}
            >
              Bildirimler
            </Typography>
          </Box>

          {/* AYARLAR */}

          <Link
            href="/yetkili/ayarlar"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                px: 2,
                py: 1.25,
                mx: 1,
                borderRadius: 1.5,
                cursor: "pointer",

                "&:hover": {
                  background:
                    "rgba(255,255,255,0.12)",
                },
              }}
            >
              <SettingsIcon sx={{ fontSize: 20 }} />

              <Typography sx={{ fontSize: "0.9rem" }}>
                Ayarlar
              </Typography>
            </Box>
          </Link>
        </Box>

        {/* ÇIKIŞ */}

        <Box
          sx={{
            px: 2,
            py: 2,
            borderTop:
              "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <Link
            href="/login"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                cursor: "pointer",
              }}
            >
              <Typography sx={{ fontSize: "0.9rem" }}>
                ⇥
              </Typography>

              <Typography sx={{ fontSize: "0.9rem" }}>
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
          marginLeft: "215px",
          width: "calc(100% - 215px)",
          minHeight: "100vh",
        }}
      >
        {/* ================================================= */}
        {/* ÜST BAR */}
        {/* ================================================= */}

        <Box
          component="header"
          sx={{
            height: 65,
            background: "#ffffff",
            borderBottom:
              "1px solid #e5e7eb",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <NotificationsIcon
              sx={{
                color: "#286b9d",
                fontSize: 23,
              }}
            />

            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: "#eaf3fa",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PersonIcon
                sx={{
                  color: "#286b9d",
                  fontSize: 21,
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  color: "#17202a",
                }}
              >
                Yetkili Kullanıcı
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.7rem",
                  color: "#64748b",
                }}
              >
                Yetkili
              </Typography>
            </Box>
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
                fontSize: {
                  xs: "2rem",
                  md: "2.5rem",
                },
                fontWeight: 800,
                color: "#0f2742",
                mb: 0.5,
              }}
            >
              Bildirimler
            </Typography>

            <Typography
              sx={{
                color: "#64748b",
                fontSize: "0.95rem",
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