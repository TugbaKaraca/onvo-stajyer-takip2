"use client";

import {
  Box,
  Button,
  Typography,
  TextField,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
} from "@mui/material";

import GridViewIcon from "@mui/icons-material/GridView";
import GroupsIcon from "@mui/icons-material/Groups";
import DescriptionIcon from "@mui/icons-material/Description";
import BusinessIcon from "@mui/icons-material/Business";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import FolderIcon from "@mui/icons-material/Folder";
import CampaignIcon from "@mui/icons-material/Campaign";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";
import CloseIcon from "@mui/icons-material/Close";

import Link from "next/link";
import { useState } from "react";

export default function BelgelerPage() {
  const [search, setSearch] = useState("");
  const [seciliBelge, setSeciliBelge] = useState<Belge | null>(null);
  const [goruntuleOpen, setGoruntuleOpen] = useState(false);
  const [dosyaBulunamadi, setDosyaBulunamadi] = useState(false);

  type Belge = {
    id: number;
    ad: string;
    departman: string;
    belge: string;
    tarih: string;
    durum: "Onaylandı" | "Bekliyor" | "Eksik" | "Reddedildi";
    dosyaUrl?: string;
    dosyaTipi: "pdf" | "word";
  };

  const belgeler: Belge[] = [
    {
      id: 1,
      ad: "Zeliha Koyuncu",
      departman: "Yazılım",
      belge: "Staj Başvuru Formu",
      tarih: "10 Ağustos 2026",
      durum: "Onaylandı",
      dosyaUrl: "/belgeler/zeliha-staj-basvuru-formu.pdf",
      dosyaTipi: "pdf",
    },
    {
      id: 2,
      ad: "Ahmet Yılmaz",
      departman: "Elektrik",
      belge: "Staj Sözleşmesi",
      tarih: "11 Ağustos 2026",
      durum: "Bekliyor",
      dosyaUrl: "/belgeler/ahmet-staj-sozlesmesi.pdf",
      dosyaTipi: "pdf",
    },
    {
      id: 3,
      ad: "Elif Demir",
      departman: "Yazılım",
      belge: "Staj Başvuru Formu",
      tarih: "12 Ağustos 2026",
      durum: "Onaylandı",
      dosyaUrl: "/belgeler/elif-staj-basvuru-formu.pdf",
      dosyaTipi: "pdf",
    },
    {
      id: 4,
      ad: "Mehmet Kaya",
      departman: "Ar-Ge",
      belge: "Staj Sözleşmesi",
      tarih: "12 Ağustos 2026",
      durum: "Bekliyor",
      dosyaUrl: "/belgeler/mehmet-staj-sozlesmesi.pdf",
      dosyaTipi: "pdf",
    },
  ];

  const belgeGoruntule = (belge: Belge) => {
    setSeciliBelge(belge);
    setDosyaBulunamadi(false);
    setGoruntuleOpen(true);
  };

  const belgeKapat = () => {
    setGoruntuleOpen(false);
    setSeciliBelge(null);
    setDosyaBulunamadi(false);
  };

  const belgeIndir = () => {
    if (!seciliBelge?.dosyaUrl) return;

    const link = document.createElement("a");
    link.href = seciliBelge.dosyaUrl;
    link.download = seciliBelge.dosyaUrl.split("/").pop() || "belge";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const durumRengi = (durum: Belge["durum"]) => {
    if (durum === "Onaylandı") {
      return { background: "#dcfce7", color: "#15803d" };
    }

    if (durum === "Reddedildi") {
      return { background: "#fee2e2", color: "#b91c1c" };
    }

    if (durum === "Eksik") {
      return { background: "#f1f5f9", color: "#475569" };
    }

    return { background: "#fef3c7", color: "#b45309" };
  };

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
            { icon: <BusinessIcon />, text: "Departman Yönetimi", path: "/yetkili/departmanlar" },
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

          {/* BİLGİ / ÖZET KARTLARI */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: 2,
              mb: 3,
            }}
          >
            {[
              {
                label: "Toplam Belge",
                value: belgeler.length,
                icon: <FolderIcon />,
                bg: "#eaf3fa",
                color: "#286b9d",
              },
              {
                label: "Onaylanan",
                value: belgeler.filter((b) => b.durum === "Onaylandı").length,
                icon: <EventAvailableIcon />,
                bg: "#dcfce7",
                color: "#15803d",
              },
              {
                label: "Bekleyen",
                value: belgeler.filter((b) => b.durum === "Bekliyor").length,
                icon: <DescriptionIcon />,
                bg: "#fef3c7",
                color: "#b45309",
              },
              {
                label: "Eksik / Reddedilen",
                value: belgeler.filter(
                  (b) => b.durum === "Eksik" || b.durum === "Reddedildi"
                ).length,
                icon: <FolderIcon />,
                bg: "#f1f5f9",
                color: "#64748b",
              },
            ].map((kart) => (
              <Paper
                key={kart.label}
                elevation={0}
                sx={{
                  p: 2.2,
                  border: "1px solid #e2e8f0",
                  borderRadius: 2,
                  background: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  minHeight: 96,
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: "#94a3b8",
                      fontSize: 11,
                      mb: 0.5,
                    }}
                  >
                    {kart.label}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#0f2742",
                      fontSize: 25,
                      fontWeight: 800,
                    }}
                  >
                    {kart.value}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: 1.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: kart.bg,
                    color: kart.color,
                  }}
                >
                  {kart.icon}
                </Box>
              </Paper>
            ))}
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
              <Typography sx={{ mt: 0.5, color: "#64748b", fontSize: 12 }}>
                {filtrelenmisBelgeler.length} belge görüntüleniyor
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
                    startIcon={<DescriptionIcon />}
                    onClick={() => belgeGoruntule(belge)}
                    sx={{
                      borderColor: "#286b9d",
                      color: "#286b9d",
                      textTransform: "none",
                      borderRadius: 1.5,
                      fontWeight: 600,
                      minWidth: 125,

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

      <Dialog
        open={goruntuleOpen}
        onClose={belgeKapat}
        fullWidth
        maxWidth="lg"
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: 2.5,
            overflow: "hidden",
          },
        }}
      >
        {seciliBelge && (
          <>
            <DialogTitle
              sx={{
                px: 3,
                py: 2,
                borderBottom: "1px solid #e2e8f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: "#0f2742",
                    fontSize: 19,
                    fontWeight: 800,
                  }}
                >
                  {seciliBelge.belge}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mt: 0.8,
                    flexWrap: "wrap",
                  }}
                >
                  <Typography sx={{ color: "#64748b", fontSize: 12 }}>
                    {seciliBelge.ad} • {seciliBelge.departman}
                  </Typography>

                  <Chip
                    label={seciliBelge.durum}
                    size="small"
                    sx={{
                      ...durumRengi(seciliBelge.durum),
                      fontWeight: 700,
                      fontSize: 10,
                    }}
                  />
                </Box>
              </Box>

              <IconButton onClick={belgeKapat} aria-label="Kapat">
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <DialogContent
              sx={{
                p: 0,
                background: "#eef2f6",
                minHeight: 620,
              }}
            >
              {seciliBelge.dosyaUrl &&
              seciliBelge.dosyaTipi === "pdf" &&
              !dosyaBulunamadi ? (
                <Box
                  sx={{
                    width: "100%",
                    height: {
                      xs: 500,
                      md: 680,
                    },
                    background: "#525659",
                  }}
                >
                  <iframe
                    src={`${seciliBelge.dosyaUrl}#toolbar=1&navpanes=0`}
                    title={seciliBelge.belge}
                    onError={() => setDosyaBulunamadi(true)}
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      display: "block",
                    }}
                  />
                </Box>
              ) : (
                <Box
                  sx={{
                    minHeight: 620,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 4,
                  }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      maxWidth: 500,
                      width: "100%",
                      p: 4,
                      textAlign: "center",
                      border: "1px solid #e2e8f0",
                      borderRadius: 2.5,
                    }}
                  >
                    <DescriptionIcon
                      sx={{
                        fontSize: 58,
                        color: "#286b9d",
                        mb: 1.5,
                      }}
                    />

                    <Typography
                      sx={{
                        fontSize: 18,
                        fontWeight: 800,
                        color: "#0f2742",
                        mb: 1,
                      }}
                    >
                      {seciliBelge.belge}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#64748b",
                        fontSize: 13,
                        lineHeight: 1.7,
                        mb: 2.5,
                      }}
                    >
                      {dosyaBulunamadi
                        ? "Bu belge için tanımlanan dosya bulunamadı. Gerçek PDF dosyasını public/belgeler klasörüne eklediğinizde burada doğrudan görüntülenecektir."
                        : "Bu dosya türü tarayıcı içinde önizlenemiyor. Dosyayı indirerek cihazınızda açabilirsiniz."}
                    </Typography>

                    <Button
                      variant="contained"
                      startIcon={<DownloadIcon />}
                      onClick={belgeIndir}
                      disabled={!seciliBelge.dosyaUrl || dosyaBulunamadi}
                      sx={{
                        background: "#1f6fae",
                        textTransform: "none",
                        borderRadius: 1.5,
                        "&:hover": {
                          background: "#185d91",
                        },
                      }}
                    >
                      Belgeyi İndir
                    </Button>
                  </Paper>
                </Box>
              )}
            </DialogContent>

            <DialogActions
              sx={{
                px: 3,
                py: 1.5,
                borderTop: "1px solid #e2e8f0",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ color: "#94a3b8", fontSize: 11 }}>
                Yüklenme tarihi: {seciliBelge.tarih}
              </Typography>

              <Box sx={{ display: "flex", gap: 1 }}>
                <Button
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                  onClick={belgeIndir}
                  disabled={!seciliBelge.dosyaUrl}
                  sx={{
                    textTransform: "none",
                    borderRadius: 1.5,
                    borderColor: "#286b9d",
                    color: "#286b9d",
                  }}
                >
                  İndir
                </Button>

                <Button
                  variant="contained"
                  onClick={belgeKapat}
                  sx={{
                    textTransform: "none",
                    borderRadius: 1.5,
                    background: "#1f6fae",
                    "&:hover": {
                      background: "#185d91",
                    },
                  }}
                >
                  Kapat
                </Button>
              </Box>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}