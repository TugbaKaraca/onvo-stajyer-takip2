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
import BusinessIcon from "@mui/icons-material/Business";
import DescriptionIcon from "@mui/icons-material/Description";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import FolderIcon from "@mui/icons-material/Folder";
import CampaignIcon from "@mui/icons-material/Campaign";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
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
        <Box
          sx={{
            px: 2.2,
            py: 2.2,
            borderBottom:
              "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <Typography sx={{ fontSize: 23, fontWeight: "bold" }}>
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

        <Box sx={{ px: 1, py: 1.5 }}>
          {[
            { icon: <GridViewIcon />, text: "Kontrol Paneli", path: "/yetkili" },
            { icon: <GroupsIcon />, text: "Stajyerler", path: "/yetkili/stajyerler" },
            { icon: <BusinessIcon />, text: "Departman Yönetimi", path: "/yetkili/departmanlar" },
            { icon: <DescriptionIcon />, text: "Raporlar", path: "/yetkili/raporlar" },
            { icon: <EventAvailableIcon />, text: "Devam Durumu", path: "/yetkili/devam" },
            { icon: <FolderIcon />, text: "Belgeler", path: "/yetkili/belgeler" },
            { icon: <CampaignIcon />, text: "Duyurular", path: "/yetkili/duyurular" },
            { icon: <NotificationsIcon />, text: "Bildirimler", path: "/yetkili/bildirimler" },
            { icon: <SettingsIcon />, text: "Ayarlar", path: "/yetkili/ayarlar" },
          ].map((item) => {
            const active = item.path === "/yetkili/duyurular";

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
                      "& svg": { fontSize: 19 },
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

        <Box sx={{ mt: "auto", px: 1, pb: 2 }}>
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

              <Typography sx={{ fontSize: 12, fontWeight: 500 }}>
                Çıkış Yap
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>

      {/* ==================== ANA ALAN ==================== */}

      <Box
        sx={{
          marginLeft: "195px",
          width: "calc(100% - 195px)",
          minHeight: "100vh",
        }}
      >
        {/* =========================
            ÜST BAR
        ========================= */}

        <Box
          component="header"
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
                fontSize: 28,
                fontWeight: "bold",
                color: "#0F2742",
                mb: 0.5,
              }}
            >
              Duyurular
            </Typography>

            <Typography
              sx={{
                color: "#64748b",
                fontSize: 13,
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