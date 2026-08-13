"use client";

import { useState } from "react";

import {
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
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
import CampaignOutlined from "@mui/icons-material/CampaignOutlined";
import AddIcon from "@mui/icons-material/Add";

import Link from "next/link";

type Duyuru = {
  id: number;
  baslik: string;
  icerik: string;
  tarih: string;
  durum: "Yayında" | "Taslak";
};

export default function DuyurularPage() {
  const [duyurular, setDuyurular] = useState<Duyuru[]>([
    {
      id: 1,
      baslik: "Staj Başlangıç Bilgilendirmesi",
      icerik:
        "Stajyerlerin staj başlangıç tarihleri ve gerekli belgeleri kontrol etmeleri gerekmektedir.",
      tarih: "13 Ağustos 2026",
      durum: "Yayında",
    },
    {
      id: 2,
      baslik: "Günlük Devam Bilgilendirmesi",
      icerik:
        "Stajyerlerin günlük devam durumlarını düzenli olarak kontrol etmeleri gerekmektedir.",
      tarih: "12 Ağustos 2026",
      durum: "Yayında",
    },
    {
      id: 3,
      baslik: "Belgelerin Teslimi",
      icerik:
        "Staj sürecinde gerekli belgelerin eksiksiz olarak sisteme yüklenmesi gerekmektedir.",
      tarih: "10 Ağustos 2026",
      durum: "Taslak",
    },
  ]);

  const [baslik, setBaslik] = useState("");
  const [icerik, setIcerik] = useState("");
  const [durum, setDurum] =
    useState<"Yayında" | "Taslak">("Taslak");

  const duyuruEkle = () => {
    if (!baslik.trim() || !icerik.trim()) {
      return;
    }

    const yeniDuyuru: Duyuru = {
      id: Date.now(),
      baslik: baslik.trim(),
      icerik: icerik.trim(),
      tarih: new Date().toLocaleDateString("tr-TR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
      durum,
    };

    setDuyurular((prev) => [
      yeniDuyuru,
      ...prev,
    ]);

    setBaslik("");
    setIcerik("");
    setDurum("Taslak");
  };

  const duyuruSil = (id: number) => {
    setDuyurular((prev) =>
      prev.filter(
        (duyuru) => duyuru.id !== id
      )
    );
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
      {/* ==================== SOL MENÜ ==================== */}

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
              <GridViewIcon
                sx={{ fontSize: 20 }}
              />

              <Typography
                sx={{ fontSize: "0.9rem" }}
              >
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
              <GroupsIcon
                sx={{ fontSize: 20 }}
              />

              <Typography
                sx={{ fontSize: "0.9rem" }}
              >
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
              <DescriptionIcon
                sx={{ fontSize: 20 }}
              />

              <Typography
                sx={{ fontSize: "0.9rem" }}
              >
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
              <EventAvailableIcon
                sx={{ fontSize: 20 }}
              />

              <Typography
                sx={{ fontSize: "0.9rem" }}
              >
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
              <FolderIcon
                sx={{ fontSize: 20 }}
              />

              <Typography
                sx={{ fontSize: "0.9rem" }}
              >
                Belgeler
              </Typography>
            </Box>
          </Link>

          {/* DUYURULAR - AKTİF */}

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
            <CampaignIcon
              sx={{ fontSize: 20 }}
            />

            <Typography
              sx={{
                fontSize: "0.9rem",
                fontWeight: 700,
              }}
            >
              Duyurular
            </Typography>
          </Box>

          {/* BİLDİRİMLER */}

          <Link
            href="/yetkili/bildirimler"
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
              <NotificationsIcon
                sx={{ fontSize: 20 }}
              />

              <Typography
                sx={{ fontSize: "0.9rem" }}
              >
                Bildirimler
              </Typography>
            </Box>
          </Link>

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
              <SettingsIcon
                sx={{ fontSize: 20 }}
              />

              <Typography
                sx={{ fontSize: "0.9rem" }}
              >
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
              <Typography
                sx={{ fontSize: "0.9rem" }}
              >
                ⇥
              </Typography>

              <Typography
                sx={{ fontSize: "0.9rem" }}
              >
                Çıkış Yap
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>

      {/* ==================== ANA ALAN ==================== */}

      <Box
        sx={{
          marginLeft: "215px",
          width:
            "calc(100% - 215px)",
          minHeight: "100vh",
        }}
      >
        {/* ÜST BAR */}

        <Box
          component="header"
          sx={{
            height: 65,
            background: "#ffffff",
            borderBottom:
              "1px solid #e5e7eb",
            display: "flex",
            alignItems: "center",
            justifyContent:
              "flex-end",
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

        {/* ==================== İÇERİK ==================== */}

        <Box
          component="main"
          sx={{
            p: {
              xs: 3,
              md: 4,
            },
            maxWidth: 1400,
            mx: "auto",
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
              Duyurular
            </Typography>

            <Typography
              sx={{
                color: "#64748b",
                fontSize: "0.95rem",
              }}
            >
              Stajyerlere yönelik duyuruları
              buradan yönetebilirsiniz.
            </Typography>
          </Box>

          {/* ==================== YENİ DUYURU ==================== */}

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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 2,
              }}
            >
              <CampaignOutlined
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
                Yeni Duyuru Oluştur
              </Typography>
            </Box>

            <Divider sx={{ mb: 2.5 }} />

            {/* BAŞLIK */}

            <TextField
              fullWidth
              label="Duyuru Başlığı"
              value={baslik}
              onChange={(e) =>
                setBaslik(e.target.value)
              }
              placeholder="Örneğin: Staj Başlangıç Bilgilendirmesi"
              sx={{ mb: 2 }}
            />

            {/* İÇERİK */}

            <TextField
              fullWidth
              multiline
              minRows={4}
              label="Duyuru İçeriği"
              value={icerik}
              onChange={(e) =>
                setIcerik(e.target.value)
              }
              placeholder="Duyuru içeriğini buraya yazın..."
              sx={{ mb: 2 }}
            />

            {/* DURUM */}

            <Select
              fullWidth
              value={durum}
              onChange={(e) =>
                setDurum(
                  e.target.value as
                    | "Yayında"
                    | "Taslak"
                )
              }
              sx={{
                mb: 2,
                background: "#ffffff",
              }}
            >
              <MenuItem value="Taslak">
                Taslak
              </MenuItem>

              <MenuItem value="Yayında">
                Yayında
              </MenuItem>
            </Select>

            {/* EKLE */}

            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={duyuruEkle}
              sx={{
                background: "#1f6fae",
                textTransform: "none",
                fontWeight: 600,
                px: 3,

                "&:hover": {
                  background: "#185d91",
                },
              }}
            >
              Duyuru Ekle
            </Button>
          </Paper>

          {/* ==================== MEVCUT DUYURULAR ==================== */}

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
              Mevcut Duyurular
            </Typography>

            <Typography
              sx={{
                color: "#64748b",
                fontSize: "0.9rem",
                mb: 2,
              }}
            >
              Sistemde kayıtlı duyuruları
              buradan görüntüleyebilirsiniz.
            </Typography>

            <Divider sx={{ mb: 1 }} />

            {duyurular.length === 0 ? (
              <Box
                sx={{
                  py: 6,
                  textAlign: "center",
                }}
              >
                <CampaignOutlined
                  sx={{
                    fontSize: 50,
                    color: "#94a3b8",
                    mb: 1,
                  }}
                />

                <Typography
                  sx={{
                    color: "#64748b",
                  }}
                >
                  Henüz duyuru bulunmuyor.
                </Typography>
              </Box>
            ) : (
              duyurular.map(
                (duyuru, index) => (
                  <Box key={duyuru.id}>
                    <Box
                      sx={{
                        py: 2.5,
                        display: "flex",
                        justifyContent:
                          "space-between",
                        alignItems:
                          "flex-start",
                        gap: 2,
                      }}
                    >
                      <Box sx={{ flex: 1 }}>
                        {/* BAŞLIK + DURUM */}

                        <Box
                          sx={{
                            display: "flex",
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
                              duyuru.baslik
                            }
                          </Typography>

                          <Chip
                            label={
                              duyuru.durum
                            }
                            size="small"
                            sx={{
                              fontWeight:
                                600,
                              background:
                                duyuru.durum ===
                                "Yayında"
                                  ? "#e8f5e9"
                                  : "#fff3e0",
                              color:
                                duyuru.durum ===
                                "Yayında"
                                  ? "#2e7d32"
                                  : "#e65100",
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
                            duyuru.icerik
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
                            duyuru.tarih
                          }
                        </Typography>
                      </Box>

                      {/* SİL */}

                      <IconButton
                        onClick={() =>
                          duyuruSil(
                            duyuru.id
                          )
                        }
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

                    {index <
                      duyurular.length -
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