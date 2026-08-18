"use client";

import { useMemo, useState } from "react";

import {
  Box,
  Button,
  Chip,
  Paper,
  Divider,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
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
import EditOutlined from "@mui/icons-material/EditOutlined";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import SearchIcon from "@mui/icons-material/Search";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import CloseIcon from "@mui/icons-material/Close";

import Link from "next/link";

type Duyuru = {
  id: number;
  baslik: string;
  icerik: string;
  tarih: string;
  durum: "Yayında" | "Taslak";
  kategori: "Genel" | "Staj" | "Belge" | "Devam";
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
      kategori: "Staj",
    },
    {
      id: 2,
      baslik: "Günlük Devam Bilgilendirmesi",
      icerik:
        "Stajyerlerin günlük devam durumlarını düzenli olarak kontrol etmeleri gerekmektedir.",
      tarih: "12 Ağustos 2026",
      durum: "Yayında",
      kategori: "Devam",
    },
    {
      id: 3,
      baslik: "Belgelerin Teslimi",
      icerik:
        "Staj sürecinde gerekli belgelerin eksiksiz olarak sisteme yüklenmesi gerekmektedir.",
      tarih: "10 Ağustos 2026",
      durum: "Taslak",
      kategori: "Belge",
    },
  ]);

  const [baslik, setBaslik] = useState("");
  const [icerik, setIcerik] = useState("");
  const [durum, setDurum] =
    useState<"Yayında" | "Taslak">("Taslak");
  const [kategori, setKategori] =
    useState<Duyuru["kategori"]>("Genel");
  const [arama, setArama] = useState("");
  const [durumFiltre, setDurumFiltre] = useState<"Tümü" | "Yayında" | "Taslak">("Tümü");
  const [kategoriFiltre, setKategoriFiltre] = useState<"Tümü" | Duyuru["kategori"]>("Tümü");
  const [duzenlenenId, setDuzenlenenId] = useState<number | null>(null);
  const [detayOpen, setDetayOpen] = useState(false);
  const [seciliDuyuru, setSeciliDuyuru] = useState<Duyuru | null>(null);
  const [mesaj, setMesaj] = useState("");

  const formuTemizle = () => {
    setBaslik("");
    setIcerik("");
    setDurum("Taslak");
    setKategori("Genel");
    setDuzenlenenId(null);
  };

  const duyuruEkle = () => {
    if (!baslik.trim() || !icerik.trim()) {
      setMesaj("Başlık ve içerik alanları zorunludur.");
      window.setTimeout(() => setMesaj(""), 3000);
      return;
    }

    if (duzenlenenId !== null) {
      setDuyurular((prev) =>
        prev.map((duyuru) =>
          duyuru.id === duzenlenenId
            ? {
                ...duyuru,
                baslik: baslik.trim(),
                icerik: icerik.trim(),
                durum,
                kategori,
              }
            : duyuru
        )
      );
      setMesaj("Duyuru başarıyla güncellendi.");
    } else {
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
        kategori,
      };

      setDuyurular((prev) => [yeniDuyuru, ...prev]);
      setMesaj("Duyuru başarıyla oluşturuldu.");
    }

    formuTemizle();
    window.setTimeout(() => setMesaj(""), 3000);
  };

  const duyuruSil = (id: number) => {
    setDuyurular((prev) => prev.filter((duyuru) => duyuru.id !== id));
  };

  const duyuruDuzenle = (duyuru: Duyuru) => {
    setDuzenlenenId(duyuru.id);
    setBaslik(duyuru.baslik);
    setIcerik(duyuru.icerik);
    setDurum(duyuru.durum);
    setKategori(duyuru.kategori);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const duyuruDetay = (duyuru: Duyuru) => {
    setSeciliDuyuru(duyuru);
    setDetayOpen(true);
  };

  const yayinla = (id: number) => {
    setDuyurular((prev) =>
      prev.map((duyuru) =>
        duyuru.id === id ? { ...duyuru, durum: "Yayında" } : duyuru
      )
    );
    setMesaj("Duyuru yayına alındı.");
    window.setTimeout(() => setMesaj(""), 3000);
  };

  const filtrelenmisDuyurular = useMemo(() => {
    const q = arama.toLocaleLowerCase("tr-TR").trim();

    return duyurular.filter((duyuru) => {
      const metin = `${duyuru.baslik} ${duyuru.icerik} ${duyuru.kategori}`
        .toLocaleLowerCase("tr-TR");

      return (
        metin.includes(q) &&
        (durumFiltre === "Tümü" || duyuru.durum === durumFiltre) &&
        (kategoriFiltre === "Tümü" || duyuru.kategori === kategoriFiltre)
      );
    });
  }, [duyurular, arama, durumFiltre, kategoriFiltre]);

  const yayindaki = duyurular.filter((d) => d.durum === "Yayında").length;
  const taslaklar = duyurular.filter((d) => d.durum === "Taslak").length;

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
     <Box
  component="img"
  src="/logo.png"
  alt="ONVO"
  sx={{
    width: 105,
    height: "auto",
    display: "block",
    objectFit: "contain",
    filter: "brightness(0) invert(1)",
    mb: 0.8,
  }}
/>

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
            { icon: <FolderIcon />, text: "Kütüphane", path: "/yetkili/belgeler" },
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
              Stajyerlere yönelik duyuruları oluşturun, düzenleyin ve yayın durumlarını yönetin.
            </Typography>
          </Box>

          {mesaj && (
            <Paper
              elevation={0}
              sx={{
                mb: 2,
                px: 2,
                py: 1.4,
                borderRadius: 1.8,
                border: "1px solid #bbf7d0",
                background: "#f0fdf4",
                color: "#15803d",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              {mesaj}
            </Paper>
          )}

          {/* ==================== ÖZET ==================== */}

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(3, 1fr)",
              },
              gap: 2,
              mb: 3,
            }}
          >
            {[
              {
                title: "Toplam Duyuru",
                value: duyurular.length,
                icon: <CampaignOutlined />,
              },
              {
                title: "Yayında",
                value: yayindaki,
                icon: <CampaignOutlined />,
              },
              {
                title: "Taslak",
                value: taslaklar,
                icon: <DraftsOutlinedIcon />,
              },
            ].map((item) => (
              <Paper
                key={item.title}
                elevation={0}
                sx={{
                  border: "1px solid #dfe5ec",
                  borderRadius: 2.2,
                  p: 2,
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  transition: "0.2s",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 7px 18px rgba(15,39,66,0.07)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: 1.5,
                    background: "#edf4f9",
                    color: "#1f6fae",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </Box>
                <Box>
                  <Typography sx={{ fontSize: 11, color: "#64748b" }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: 23, fontWeight: 800, color: "#0f2742" }}>
                    {item.value}
                  </Typography>
                </Box>
              </Paper>
            ))}
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
                {duzenlenenId !== null ? "Duyuruyu Düzenle" : "Yeni Duyuru Oluştur"}
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

            {/* KATEGORİ + DURUM */}

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 2,
                mb: 2,
              }}
            >
              <FormControl fullWidth>
                <InputLabel id="duyuru-kategori-label">Kategori</InputLabel>
                <Select
                  labelId="duyuru-kategori-label"
                  label="Kategori"
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value as Duyuru["kategori"])}
                >
                  <MenuItem value="Genel">Genel</MenuItem>
                  <MenuItem value="Staj">Staj</MenuItem>
                  <MenuItem value="Belge">Belge</MenuItem>
                  <MenuItem value="Devam">Devam</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="duyuru-durum-label">Durum</InputLabel>
                <Select
                  labelId="duyuru-durum-label"
                  label="Durum"
                  value={durum}
                  onChange={(e) => setDurum(e.target.value as "Yayında" | "Taslak")}
                >
                  <MenuItem value="Taslak">Taslak</MenuItem>
                  <MenuItem value="Yayında">Yayında</MenuItem>
                </Select>
              </FormControl>
            </Box>

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
              {duzenlenenId !== null ? "Değişiklikleri Kaydet" : "Duyuru Ekle"}
            </Button>

            {duzenlenenId !== null && (
              <Button
                variant="text"
                onClick={formuTemizle}
                sx={{ ml: 1, textTransform: "none", color: "#64748b" }}
              >
                Düzenlemeyi İptal Et
              </Button>
            )}
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap",
                mb: 1,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#0f2742",
                  }}
                >
                  Duyuru Yönetimi
                </Typography>
                <Typography sx={{ color: "#64748b", fontSize: 12, mt: 0.3 }}>
                  {filtrelenmisDuyurular.length} duyuru listeleniyor
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1.7fr 1fr 1fr" },
                gap: 1.5,
                mb: 2,
              }}
            >
              <TextField
                size="small"
                fullWidth
                placeholder="Duyurularda ara..."
                value={arama}
                onChange={(e) => setArama(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: <SearchIcon sx={{ mr: 1, color: "#94a3b8" }} />,
                  },
                }}
              />

              <FormControl size="small" fullWidth>
                <InputLabel id="filtre-durum-label">Durum</InputLabel>
                <Select
                  labelId="filtre-durum-label"
                  label="Durum"
                  value={durumFiltre}
                  onChange={(e) => setDurumFiltre(e.target.value as typeof durumFiltre)}
                >
                  <MenuItem value="Tümü">Tümü</MenuItem>
                  <MenuItem value="Yayında">Yayında</MenuItem>
                  <MenuItem value="Taslak">Taslak</MenuItem>
                </Select>
              </FormControl>

              <FormControl size="small" fullWidth>
                <InputLabel id="filtre-kategori-label">Kategori</InputLabel>
                <Select
                  labelId="filtre-kategori-label"
                  label="Kategori"
                  value={kategoriFiltre}
                  onChange={(e) =>
                    setKategoriFiltre(e.target.value as typeof kategoriFiltre)
                  }
                >
                  <MenuItem value="Tümü">Tümü</MenuItem>
                  <MenuItem value="Genel">Genel</MenuItem>
                  <MenuItem value="Staj">Staj</MenuItem>
                  <MenuItem value="Belge">Belge</MenuItem>
                  <MenuItem value="Devam">Devam</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Typography
              sx={{
                color: "#64748b",
                fontSize: "0.9rem",
                mb: 2,
              }}
            >
              Duyuruları arayın, filtreleyin, düzenleyin veya doğrudan yayına alın.
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
                        borderRadius: 1.5,
                        px: 1,
                        cursor: "pointer",
                        transition: "0.2s",
                        "&:hover": {
                          background: "#f8fafc",
                        },
                      }}
                      onClick={() => duyuruDetay(duyuru)}
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
                            label={duyuru.durum}
                            size="small"
                            icon={
                              duyuru.durum === "Yayında"
                                ? <CampaignOutlined />
                                : <DraftsOutlinedIcon />
                            }
                            sx={{
                              fontWeight: 600,
                              background:
                                duyuru.durum === "Yayında" ? "#e8f5e9" : "#fff3e0",
                              color:
                                duyuru.durum === "Yayında" ? "#2e7d32" : "#e65100",
                              "& .MuiChip-icon": { color: "inherit" },
                            }}
                          />

                          <Chip
                            label={duyuru.kategori}
                            size="small"
                            variant="outlined"
                            sx={{
                              borderColor: "#cbd5e1",
                              color: "#475569",
                              fontSize: 10,
                              fontWeight: 600,
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

                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
                        <IconButton
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            duyuruDetay(duyuru);
                          }}
                          sx={{ color: "#286B9D" }}
                          aria-label="Duyuruyu görüntüle"
                        >
                          <VisibilityOutlined />
                        </IconButton>

                        <IconButton
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            duyuruDuzenle(duyuru);
                          }}
                          sx={{ color: "#475569" }}
                          aria-label="Duyuruyu düzenle"
                        >
                          <EditOutlined />
                        </IconButton>

                        {duyuru.durum === "Taslak" && (
                          <IconButton
                            size="small"
                            onClick={(e) => {
                              e.stopPropagation();
                              yayinla(duyuru.id);
                            }}
                            sx={{ color: "#15803d" }}
                            aria-label="Duyuruyu yayınla"
                          >
                            <CampaignOutlined />
                          </IconButton>
                        )}

                        <IconButton
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            duyuruSil(duyuru.id);
                          }}
                          sx={{
                            color: "#dc2626",
                            "&:hover": { background: "#fee2e2" },
                          }}
                          aria-label="Duyuruyu sil"
                        >
                          <DeleteOutlined />
                        </IconButton>
                      </Box>
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

      <Dialog
        open={detayOpen}
        onClose={() => {
          setDetayOpen(false);
          setSeciliDuyuru(null);
        }}
        fullWidth
        maxWidth="sm"
      >
        {seciliDuyuru && (
          <>
            <DialogTitle
              sx={{
                color: "#0f2742",
                fontWeight: 800,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box>
                <Typography sx={{ fontSize: 20, fontWeight: 800, color: "#0f2742" }}>
                  {seciliDuyuru.baslik}
                </Typography>
                <Box sx={{ display: "flex", gap: 0.8, mt: 1 }}>
                  <Chip
                    label={seciliDuyuru.durum}
                    size="small"
                    sx={{
                      background: seciliDuyuru.durum === "Yayında" ? "#e8f5e9" : "#fff3e0",
                      color: seciliDuyuru.durum === "Yayında" ? "#2e7d32" : "#e65100",
                      fontWeight: 600,
                    }}
                  />
                  <Chip
                    label={seciliDuyuru.kategori}
                    size="small"
                    variant="outlined"
                  />
                </Box>
              </Box>
              <IconButton onClick={() => setDetayOpen(false)}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <DialogContent dividers>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  borderRadius: 1.8,
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  mb: 2,
                }}
              >
                <Typography
                  sx={{
                    color: "#334155",
                    fontSize: 14,
                    lineHeight: 1.8,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {seciliDuyuru.icerik}
                </Typography>
              </Paper>

              <Typography sx={{ color: "#94a3b8", fontSize: 12 }}>
                Oluşturulma tarihi: {seciliDuyuru.tarih}
              </Typography>
            </DialogContent>

            <DialogActions sx={{ p: 2 }}>
              {seciliDuyuru.durum === "Taslak" && (
                <Button
                  onClick={() => {
                    yayinla(seciliDuyuru.id);
                    setSeciliDuyuru((prev) =>
                      prev ? { ...prev, durum: "Yayında" } : prev
                    );
                  }}
                  startIcon={<CampaignOutlined />}
                  sx={{ textTransform: "none", color: "#15803d", mr: "auto" }}
                >
                  Yayına Al
                </Button>
              )}
              <Button
                onClick={() => setDetayOpen(false)}
                variant="contained"
                sx={{
                  background: "#1f6fae",
                  textTransform: "none",
                  "&:hover": { background: "#185d91" },
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