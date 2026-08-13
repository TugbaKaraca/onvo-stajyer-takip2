"use client";

import {
  Box,
  Button,
  Typography,
  TextField,
  Paper,
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
        {/* LOGO / BAŞLIK */}

        <Box
          sx={{
            px: 2.5,
            py: 3,
            borderBottom: "1px solid rgba(255,255,255,0.15)",
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
                  background: "rgba(255,255,255,0.12)",
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
                  background: "rgba(255,255,255,0.12)",
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
                  background: "rgba(255,255,255,0.12)",
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
                  background: "rgba(255,255,255,0.12)",
                },
              }}
            >
              <EventAvailableIcon sx={{ fontSize: 20 }} />

              <Typography sx={{ fontSize: "0.9rem" }}>
                Devam Durumu
              </Typography>
            </Box>
          </Link>

          {/* BELGELER - AKTİF */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              px: 2,
              py: 1.25,
              mx: 1,
              borderRadius: 1.5,
              background: "rgba(255,255,255,0.20)",
            }}
          >
            <FolderIcon sx={{ fontSize: 20 }} />

            <Typography
              sx={{
                fontSize: "0.9rem",
                fontWeight: 700,
              }}
            >
              Belgeler
            </Typography>
          </Box>

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
                  background: "rgba(255,255,255,0.12)",
                },
              }}
            >
              <CampaignIcon sx={{ fontSize: 20 }} />

              <Typography sx={{ fontSize: "0.9rem" }}>
                Duyurular
              </Typography>
            </Box>
          </Link>

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
                  background: "rgba(255,255,255,0.12)",
                },
              }}
            >
              <NotificationsIcon sx={{ fontSize: 20 }} />

              <Typography sx={{ fontSize: "0.9rem" }}>
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
                  background: "rgba(255,255,255,0.12)",
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
            borderTop: "1px solid rgba(255,255,255,0.15)",
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

      {/* ==================== ANA ALAN ==================== */}

      <Box
        sx={{
          marginLeft: "215px",
          width: "calc(100% - 215px)",
          minHeight: "100vh",
        }}
      >
        {/* ==================== ÜST BAR ==================== */}

        <Box
          component="header"
          sx={{
            height: 65,
            background: "#ffffff",
            borderBottom: "1px solid #e5e7eb",
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

        {/* ==================== İÇERİK ==================== */}

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
              Belgeler
            </Typography>

            <Typography
              sx={{
                color: "#64748b",
                fontSize: "0.95rem",
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