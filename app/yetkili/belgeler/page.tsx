"use client";

import {
  Box,
  Button,
  Typography,
  TextField,
  Paper,
  IconButton,
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
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";

import Link from "next/link";
import { useState } from "react";

export default function BelgelerPage() {
  const [search, setSearch] = useState("");

  const belgeler = [
    {
      ad: "Zeliha Koyuncu",
      departman: "Yazılım",
      belge: "Staj Başvuru Formu",
      tarih: "10 Ağustos 2026",
      durum: "Onaylandı",
    },
    {
      ad: "Ahmet Yılmaz",
      departman: "Elektrik",
      belge: "Staj Sözleşmesi",
      tarih: "11 Ağustos 2026",
      durum: "Bekliyor",
    },
    {
      ad: "Elif Demir",
      departman: "Yazılım",
      belge: "Staj Başvuru Formu",
      tarih: "12 Ağustos 2026",
      durum: "Onaylandı",
    },
    {
      ad: "Mehmet Kaya",
      departman: "Ar-Ge",
      belge: "Staj Sözleşmesi",
      tarih: "12 Ağustos 2026",
      durum: "Bekliyor",
    },
  ];

  const filtrelenmisBelgeler = belgeler.filter((belge) => {
    const aranacak = search.toLowerCase();

    return (
      belge.ad.toLowerCase().includes(aranacak) ||
      belge.departman.toLowerCase().includes(aranacak) ||
      belge.belge.toLowerCase().includes(aranacak)
    );
  });

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
            sx={{ fontSize: 11, opacity: 0.9, mt: 0.3 }}
          >
            Stajyer Takip Sistemi
          </Typography>
        </Box>

        <Box sx={{ px: 1, py: 1.5, flex: 1 }}>
          {[
            { icon: <GridViewIcon />, text: "Kontrol Paneli", path: "/yetkili" },
            { icon: <GroupsIcon />, text: "Stajyerler", path: "/yetkili/stajyerler" },
            { icon: <DescriptionIcon />, text: "Raporlar", path: "/yetkili/raporlar" },
            { icon: <EventAvailableIcon />, text: "Devam Durumu", path: "/yetkili/devam" },
            { icon: <FolderIcon />, text: "Belgeler", path: "/yetkili/belgeler" },
            { icon: <CampaignIcon />, text: "Duyurular", path: "/yetkili/duyurular" },
            { icon: <NotificationsIcon />, text: "Bildirimler", path: "/yetkili/bildirimler" },
            { icon: <SettingsIcon />, text: "Ayarlar", path: "/yetkili/ayarlar" },
          ].map((item) => {
            const active = item.path === "/yetkili/belgeler";
            return (
              <Link
                key={item.text}
                href={item.path}
                style={{ textDecoration: "none", color: "inherit" }}
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
            style={{ textDecoration: "none", color: "inherit" }}
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
              <Typography sx={{ fontSize: 19 }}>⇥</Typography>
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
              Belgeler
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 13,
              }}
            >
              Stajyer belgelerini buradan yönetebilirsiniz.
            </Typography>
          </Box>

          {/* ARAMA ALANI */}

          <Paper
            elevation={0}
            sx={{
              p: 2,
              border: "1px solid #e2e8f0",
              borderRadius: 2,
              background: "#ffffff",
              mb: 3,
            }}
          >
            <TextField
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Stajyer adı, departman veya belge ara..."
              slotProps={{
                input: {
                  startAdornment: (
                    <SearchIcon
                      sx={{
                        color: "#94a3b8",
                        mr: 1,
                      }}
                    />
                  ),
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 1.5,
                  background: "#ffffff",
                },
              }}
            />
          </Paper>

          {/* BELGE LİSTESİ */}

          <Paper
            elevation={0}
            sx={{
              border: "1px solid #e2e8f0",
              borderRadius: 2,
              background: "#ffffff",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                px: 3,
                py: 2.5,
                borderBottom: "1px solid #e2e8f0",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "#0f2742",
                }}
              >
                Stajyer Belgeleri
              </Typography>
            </Box>

            {filtrelenmisBelgeler.length === 0 ? (
              <Box
                sx={{
                  p: 5,
                  textAlign: "center",
                }}
              >
                <FolderIcon
                  sx={{
                    fontSize: 45,
                    color: "#cbd5e1",
                    mb: 1,
                  }}
                />

                <Typography
                  sx={{
                    color: "#64748b",
                  }}
                >
                  Aramanızla eşleşen belge bulunamadı.
                </Typography>
              </Box>
            ) : (
              filtrelenmisBelgeler.map((belge, index) => (
                <Box
                  key={index}
                  sx={{
                    px: 3,
                    py: 2.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    borderBottom:
                      index !== filtrelenmisBelgeler.length - 1
                        ? "1px solid #e2e8f0"
                        : "none",

                    "&:hover": {
                      background: "#f8fafc",
                    },

                    flexWrap: "wrap",
                  }}
                >
                  {/* SOL TARAF */}

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      flex: 1,
                      minWidth: 300,
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background: "#eaf3fa",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <PersonIcon
                        sx={{
                          color: "#286b9d",
                        }}
                      />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: "#17202a",
                          fontSize: "0.95rem",
                        }}
                      >
                        {belge.ad}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#64748b",
                          fontSize: "0.8rem",
                          mt: 0.3,
                        }}
                      >
                        {belge.departman}
                      </Typography>
                    </Box>
                  </Box>

                  {/* BELGE */}

                  <Box
                    sx={{
                      minWidth: 220,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#94a3b8",
                        fontSize: "0.72rem",
                        mb: 0.4,
                      }}
                    >
                      Belge
                    </Typography>

                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: "#334155",
                        fontSize: "0.85rem",
                      }}
                    >
                      {belge.belge}
                    </Typography>
                  </Box>

                  {/* TARİH */}

                  <Box
                    sx={{
                      minWidth: 140,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#94a3b8",
                        fontSize: "0.72rem",
                        mb: 0.4,
                      }}
                    >
                      Yüklenme Tarihi
                    </Typography>

                    <Typography
                      sx={{
                        color: "#334155",
                        fontSize: "0.85rem",
                      }}
                    >
                      {belge.tarih}
                    </Typography>
                  </Box>

                  {/* DURUM */}

                  <Box
                    sx={{
                      minWidth: 110,
                    }}
                  >
                    <Typography
                      sx={{
                        display: "inline-block",
                        px: 1.5,
                        py: 0.6,
                        borderRadius: 5,
                        background:
                          belge.durum === "Onaylandı"
                            ? "#dcfce7"
                            : "#fef3c7",
                        color:
                          belge.durum === "Onaylandı"
                            ? "#15803d"
                            : "#b45309",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                      }}
                    >
                      {belge.durum}
                    </Typography>
                  </Box>

                  {/* İNDİR */}

                  <Button
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                    sx={{
                      borderColor: "#286b9d",
                      color: "#286b9d",
                      textTransform: "none",
                      borderRadius: 1.5,
                      fontWeight: 600,

                      "&:hover": {
                        borderColor: "#0f2742",
                        background: "#f1f7fb",
                      },
                    }}
                  >
                    Görüntüle
                  </Button>
                </Box>
              ))
            )}
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}