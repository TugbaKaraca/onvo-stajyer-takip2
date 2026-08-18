"use client";

import { useMemo, useState } from "react";

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
import NotificationsOutlined from "@mui/icons-material/NotificationsOutlined";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import ScheduleIcon from "@mui/icons-material/Schedule";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

import Link from "next/link";

// =====================================================
// TİPLER
// =====================================================

type BildirimTuru = "Bilgi" | "Uyarı" | "Başarı";
type Oncelik = "Normal" | "Önemli" | "Acil";
type Kategori =
  | "Stajyer"
  | "Rapor"
  | "Devamsızlık"
  | "Belge"
  | "Duyuru"
  | "Sistem";

type Stajyer = {
  id: number;
  ad: string;
  soyad: string;
  departman: string;
};

type Bildirim = {
  id: number;
  baslik: string;
  icerik: string;
  tarih: string;
  saat: string;
  tur: BildirimTuru;
  kategori: Kategori;
  oncelik: Oncelik;
  stajyerId: number | null;
  departman: string | null;
  okundu: boolean;
  sistem: boolean;
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
      departman: "Yazılım",
    },
    {
      id: 2,
      ad: "Ahmet",
      soyad: "Yılmaz",
      departman: "Ar-Ge",
    },
    {
      id: 3,
      ad: "Elif",
      soyad: "Demir",
      departman: "Elektrik-Elektronik",
    },
    {
      id: 4,
      ad: "Mehmet",
      soyad: "Kaya",
      departman: "Yazılım",
    },
    {
      id: 5,
      ad: "Ayşe",
      soyad: "Çelik",
      departman: "Mekanik",
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
        saat: "09:15",
        tur: "Bilgi",
        kategori: "Stajyer",
        oncelik: "Normal",
        stajyerId: null,
        departman: null,
        okundu: false,
        sistem: true,
      },
      {
        id: 2,
        baslik: "Eksik Belge Uyarısı",
        icerik:
          "Bazı stajyerlerin sisteme yüklemesi gereken belgeleri henüz tamamlanmamıştır.",
        tarih: "12 Ağustos 2026",
        saat: "14:30",
        tur: "Uyarı",
        kategori: "Belge",
        oncelik: "Önemli",
        stajyerId: 1,
        departman: null,
        okundu: false,
        sistem: true,
      },
      {
        id: 3,
        baslik: "Staj Süreci Güncellendi",
        icerik:
          "Stajyerlerin devam ve belge takip süreçlerinde yeni güncellemeler yapılmıştır.",
        tarih: "10 Ağustos 2026",
        saat: "11:10",
        tur: "Başarı",
        kategori: "Sistem",
        oncelik: "Normal",
        stajyerId: null,
        departman: null,
        okundu: true,
        sistem: true,
      },
    ]);

  // ===================================================
  // FORM VE FİLTRELER
  // ===================================================

  const [baslik, setBaslik] = useState("");
  const [icerik, setIcerik] = useState("");
  const [tur, setTur] = useState<BildirimTuru>("Bilgi");
  const [kategori, setKategori] = useState<Kategori>("Duyuru");
  const [oncelik, setOncelik] = useState<Oncelik>("Normal");
  const [alici, setAlici] = useState("Tüm Stajyerler");
  const [departman, setDepartman] = useState("Tüm Departmanlar");
  const [stajyerId, setStajyerId] = useState<number | null>(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [detayOpen, setDetayOpen] = useState(false);
  const [seciliBildirim, setSeciliBildirim] =
    useState<Bildirim | null>(null);
  const [arama, setArama] = useState("");
  const [kategoriFiltre, setKategoriFiltre] = useState("Tümü");
  const [durumFiltre, setDurumFiltre] = useState("Tümü");
  const [oncelikFiltre, setOncelikFiltre] = useState("Tümü");
  const [mesaj, setMesaj] = useState("");

  // ===================================================
  // BİLDİRİM EKLE
  // ===================================================

  const bildirimEkle = () => {
    if (!baslik.trim() || !icerik.trim()) {
      setMesaj("Başlık ve bildirim içeriği zorunludur.");
      return;
    }

    const hedefStajyerId =
      alici === "Belirli Stajyer" ? stajyerId : null;

    const yeniBildirim: Bildirim = {
      id: Date.now(),
      baslik: baslik.trim(),
      icerik: icerik.trim(),
      tarih: new Date().toLocaleDateString("tr-TR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
      saat: new Date().toLocaleTimeString("tr-TR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      tur,
      kategori,
      oncelik,
      stajyerId: hedefStajyerId,
      departman: alici === "Belirli Departman" ? departman : null,
      okundu: false,
      sistem: false,
    };

    setBildirimler((prev) => [yeniBildirim, ...prev]);
    setModalOpen(false);
    formuTemizle();
    setMesaj("Bildirim başarıyla oluşturuldu.");
    window.setTimeout(() => setMesaj(""), 3000);
  };

  const formuTemizle = () => {
    setBaslik("");
    setIcerik("");
    setTur("Bilgi");
    setKategori("Duyuru");
    setOncelik("Normal");
    setAlici("Tüm Stajyerler");
    setDepartman("Tüm Departmanlar");
    setStajyerId(null);
  };

  // ===================================================
  // BİLDİRİM İŞLEMLERİ
  // ===================================================

  const bildirimSil = (id: number) => {
    setBildirimler((prev) =>
      prev.filter((bildirim) => bildirim.id !== id)
    );
  };

  const bildirimOkundu = (id: number) => {
    setBildirimler((prev) =>
      prev.map((bildirim) =>
        bildirim.id === id
          ? { ...bildirim, okundu: true }
          : bildirim
      )
    );
  };

  const bildirimiAc = (bildirim: Bildirim) => {
    setSeciliBildirim(bildirim);
    setDetayOpen(true);

    // Bildirim açıldığı anda okunmuş kabul edilir.
    if (!bildirim.okundu) {
      bildirimOkundu(bildirim.id);
    }
  };

  const tumunuOkunduYap = () => {
    setBildirimler((prev) => {
      const okunmamisVar = prev.some((bildirim) => !bildirim.okundu);

      if (!okunmamisVar) {
        return prev;
      }

      return prev.map((bildirim) => ({
        ...bildirim,
        okundu: true,
      }));
    });

    setMesaj("Tüm bildirimler okundu olarak işaretlendi.");
    window.setTimeout(() => setMesaj(""), 3000);
  };

  const okunmamis = bildirimler.filter(
    (bildirim) => !bildirim.okundu
  ).length;

  const bugun = bildirimler.filter(
    (bildirim) => bildirim.tarih === "13 Ağustos 2026"
  ).length;

  const acilBildirimler = bildirimler.filter(
    (bildirim) => bildirim.oncelik === "Acil" && !bildirim.okundu
  ).length;

  const filtrelenmisBildirimler = useMemo(() => {
    return bildirimler.filter((bildirim) => {
      const metin =
        `${bildirim.baslik} ${bildirim.icerik} ${bildirim.kategori}`
          .toLocaleLowerCase("tr-TR");

      const aramaUyuyor = metin.includes(
        arama.toLocaleLowerCase("tr-TR")
      );

      const kategoriUyuyor =
        kategoriFiltre === "Tümü" ||
        bildirim.kategori === kategoriFiltre;

      const durumUyuyor =
        durumFiltre === "Tümü" ||
        (durumFiltre === "Okundu" && bildirim.okundu) ||
        (durumFiltre === "Okunmamış" && !bildirim.okundu);

      const oncelikUyuyor =
        oncelikFiltre === "Tümü" ||
        bildirim.oncelik === oncelikFiltre;

      return aramaUyuyor && kategoriUyuyor && durumUyuyor && oncelikUyuyor;
    });
  }, [bildirimler, arama, kategoriFiltre, durumFiltre, oncelikFiltre]);

  // ===================================================
  // STAJYER ADI
  // ===================================================

  const stajyerAdiGetir = (id: number | null) => {
    if (id === null) {
      return "Tüm Stajyerler";
    }

    const stajyer = stajyerler.find(
      (item) => item.id === id
    );

    if (!stajyer) {
      return "Bilinmeyen Stajyer";
    }

    return `${stajyer.ad} ${stajyer.soyad}`;
  };

  const aliciAdiGetir = (bildirim: Bildirim) => {
    if (bildirim.stajyerId !== null) {
      return stajyerAdiGetir(bildirim.stajyerId);
    }

    if (bildirim.departman) {
      return `${bildirim.departman} Departmanı`;
    }

    return "Tüm Stajyerler";
  };

  // ===================================================
  // CHIP STİLLERİ
  // ===================================================

  const chipStyle = (bildirimTuru: BildirimTuru) => {
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

  const priorityStyle = (value: Oncelik) => {
    if (value === "Acil") {
      return {
        background: "#fee2e2",
        color: "#b91c1c",
      };
    }

    if (value === "Önemli") {
      return {
        background: "#fff7ed",
        color: "#c2410c",
      };
    }

    return {
      background: "#f1f5f9",
      color: "#475569",
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
              icon: <BusinessIcon />,
              text: "Departman Yönetimi",
              path: "/yetkili/departmanlar",
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
              text: "Kütüphane",
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
            onClick={() => {
              const ilkOkunmamis = bildirimler.find((b) => !b.okundu);
              if (ilkOkunmamis) bildirimiAc(ilkOkunmamis);
            }}
            aria-label="Bildirimleri aç"
            sx={{ mr: 1, color: "#286B9D", position: "relative" }}
          >
            <NotificationsIcon />
            {okunmamis > 0 && (
              <Box sx={{
                position: "absolute", top: 6, right: 5,
                minWidth: 17, height: 17, px: 0.4,
                borderRadius: "10px", background: "#dc2626",
                color: "#fff", fontSize: 9, fontWeight: 800,
                display: "flex", alignItems: "center",
                justifyContent: "center", border: "2px solid #fff"
              }}>
                {okunmamis > 9 ? "9+" : okunmamis}
              </Box>
            )}
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

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: {
                xs: "flex-start",
                md: "center",
              },
              gap: 2,
              mb: 3,
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            <Box>
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
                Sistem bildirimlerini yönetin, önceliklendirin ve stajyerlere yeni bildirimler gönderin.
              </Typography>
            </Box>

            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => {
                formuTemizle();
                setModalOpen(true);
              }}
              sx={{
                background: "#1f6fae",
                textTransform: "none",
                fontWeight: 700,
                borderRadius: 1.5,
                px: 2.5,
                py: 1.1,
                "&:hover": {
                  background: "#185d91",
                },
              }}
            >
              Yeni Bildirim Oluştur
            </Button>
          </Box>

          {mesaj && (
            <Paper
              elevation={0}
              sx={{
                mb: 2.5,
                px: 2,
                py: 1.5,
                borderRadius: 1.5,
                border: "1px solid #bbf7d0",
                background: "#f0fdf4",
                color: "#15803d",
                fontWeight: 600,
                fontSize: 13,
              }}
            >
              {mesaj}
            </Paper>
          )}

          {/* ÖZET KARTLARI */}

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
                title: "Toplam Bildirim",
                value: bildirimler.length,
                icon: <NotificationsOutlined />,
              },
              {
                title: "Okunmamış",
                value: okunmamis,
                icon: <MarkEmailReadIcon />,
              },
              {
                title: "Bugünkü Bildirim",
                value: bugun,
                icon: <ScheduleIcon />,
              },
              {
                title: "Acil Bildirim",
                value: acilBildirimler,
                icon: <PriorityHighIcon />,
              },
            ].map((item) => (
              <Paper
                key={item.title}
                elevation={0}
                sx={{
                  border: "1px solid #dfe5ec",
                  borderRadius: 2,
                  p: 2.2,
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.8,
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: 1.5,
                    background: "#edf4f9",
                    color: "#286B9D",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#64748b",
                      fontSize: 11,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#0f2742",
                      fontWeight: 800,
                      fontSize: 22,
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>

          {/* FİLTRELER */}

          <Paper
            elevation={0}
            sx={{
              border: "1px solid #dfe5ec",
              borderRadius: 2,
              p: 2,
              mb: 3,
              background: "#fff",
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1.7fr 1fr 1fr auto",
                },
                gap: 1.5,
                alignItems: "center",
              }}
            >
              <TextField
                fullWidth
                size="small"
                placeholder="Bildirimlerde ara..."
                value={arama}
                onChange={(e) => setArama(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <SearchIcon
                        sx={{
                          mr: 1,
                          color: "#94a3b8",
                        }}
                      />
                    ),
                  },
                }}
              />

              <FormControl size="small" fullWidth>
                <InputLabel id="kategori-filtre-label">
                  Kategori
                </InputLabel>

                <Select
                  labelId="kategori-filtre-label"
                  label="Kategori"
                  value={kategoriFiltre}
                  onChange={(e) =>
                    setKategoriFiltre(e.target.value)
                  }
                >
                  <MenuItem value="Tümü">Tümü</MenuItem>
                  <MenuItem value="Stajyer">Stajyer</MenuItem>
                  <MenuItem value="Rapor">Rapor</MenuItem>
                  <MenuItem value="Devamsızlık">
                    Devamsızlık
                  </MenuItem>
                  <MenuItem value="Belge">Belge</MenuItem>
                  <MenuItem value="Duyuru">Duyuru</MenuItem>
                  <MenuItem value="Sistem">Sistem</MenuItem>
                </Select>
              </FormControl>

              <FormControl size="small" fullWidth>
                <InputLabel id="durum-filtre-label">
                  Durum
                </InputLabel>

                <Select
                  labelId="durum-filtre-label"
                  label="Durum"
                  value={durumFiltre}
                  onChange={(e) =>
                    setDurumFiltre(e.target.value)
                  }
                >
                  <MenuItem value="Tümü">Tümü</MenuItem>
                  <MenuItem value="Okunmamış">
                    Okunmamış
                  </MenuItem>
                  <MenuItem value="Okundu">Okundu</MenuItem>
                </Select>
              </FormControl>

              <FormControl size="small" fullWidth>
                <InputLabel id="oncelik-filtre-label">Öncelik</InputLabel>
                <Select
                  labelId="oncelik-filtre-label"
                  label="Öncelik"
                  value={oncelikFiltre}
                  onChange={(e) => setOncelikFiltre(e.target.value)}
                >
                  <MenuItem value="Tümü">Tümü</MenuItem>
                  <MenuItem value="Normal">Normal</MenuItem>
                  <MenuItem value="Önemli">Önemli</MenuItem>
                  <MenuItem value="Acil">Acil</MenuItem>
                </Select>
              </FormControl>

              <Button
                type="button"
                variant="outlined"
                onClick={tumunuOkunduYap}
                disabled={okunmamis === 0}
                sx={{
                  textTransform: "none",
                  borderRadius: 1.5,
                  whiteSpace: "nowrap",
                  borderColor: "#cbd5e1",
                  color: "#475569",
                  fontWeight: 600,
                  "&:hover": {
                    borderColor: "#1f6fae",
                    background: "#f0f7fc",
                  },
                  "&.Mui-disabled": {
                    borderColor: "#e2e8f0",
                    color: "#94a3b8",
                  },
                }}
              >
                {okunmamis > 0 ? "Tümünü Okundu Yap" : "Hepsi Okundu"}
              </Button>
            </Box>
          </Paper>

          <Box
            sx={{
              mt: -1.5,
              mb: 2.5,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Typography sx={{ fontSize: 11.5, color: "#64748b" }}>
              {filtrelenmisBildirimler.length} bildirim gösteriliyor
            </Typography>

            <Button
              size="small"
              onClick={() => {
                setArama("");
                setKategoriFiltre("Tümü");
                setDurumFiltre("Tümü");
                setOncelikFiltre("Tümü");
              }}
              sx={{
                textTransform: "none",
                color: "#64748b",
                fontWeight: 600,
              }}
            >
              Filtreleri Temizle
            </Button>
          </Box>

          {/* MEVCUT BİLDİRİMLER */}

          <Paper
            elevation={0}
            sx={{
              border: "1px solid #dfe5ec",
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
                mb: 0.5,
              }}
            >
              Bildirim Geçmişi
            </Typography>

            <Typography
              sx={{
                color: "#64748b",
                fontSize: 12,
                mb: 2,
              }}
            >
              Sistem tarafından oluşturulan ve yetkili kullanıcı tarafından gönderilen bildirimler.
            </Typography>

            <Divider sx={{ mb: 1 }} />

            {filtrelenmisBildirimler.length === 0 ? (
              <Box
                sx={{
                  py: 7,
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
                    color: "#64748b",
                    fontWeight: 600,
                  }}
                >
                  Filtrelere uygun bildirim bulunamadı.
                </Typography>
              </Box>
            ) : (
              filtrelenmisBildirimler.map(
                (bildirim, index) => (
                  <Box key={bildirim.id}>
                    <Box
                      sx={{
                        py: 2.5,
                        px: 1,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: 2,
                        background: bildirim.okundu ? "#fff" : "#f8fbfe",
                        borderLeft: bildirim.okundu
                          ? "3px solid transparent"
                          : "3px solid #1f6fae",
                        borderRadius: 1.5,
                        cursor: "pointer",
                        transition: "0.2s",
                        "&:hover": {
                          background: bildirim.okundu ? "#f8fafc" : "#f2f8fc",
                        },
                      }}
                      onClick={() => bildirimiAc(bildirim)}
                    >
                      <Box sx={{ flex: 1 }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.8,
                            mb: 0.8,
                            flexWrap: "wrap",
                          }}
                        >
                          {!bildirim.okundu && (
                            <Box
                              title="Okunmamış"
                              sx={{
                                width: 9,
                                height: 9,
                                borderRadius: "50%",
                                background: "#1f6fae",
                                flexShrink: 0,
                              }}
                            />
                          )}

                          <Typography
                            sx={{
                              fontSize: "1.05rem",
                              fontWeight: bildirim.okundu ? 700 : 800,
                              color: "#0f2742",
                            }}
                          >
                            {bildirim.baslik}
                          </Typography>

                          <Chip
                            label={bildirim.tur}
                            size="small"
                            sx={{
                              ...chipStyle(bildirim.tur),
                              fontWeight: 600,
                            }}
                          />

                          <Chip
                            icon={
                              bildirim.oncelik === "Acil" ? (
                                <PriorityHighIcon />
                              ) : undefined
                            }
                            label={bildirim.oncelik}
                            size="small"
                            sx={{
                              ...priorityStyle(
                                bildirim.oncelik
                              ),
                              fontWeight: 600,
                            }}
                          />

                          {!bildirim.sistem && (
                            <Chip
                              label="Yetkili tarafından oluşturuldu"
                              size="small"
                              variant="outlined"
                              sx={{
                                borderColor: "#cbd5e1",
                                color: "#64748b",
                                fontSize: 10,
                              }}
                            />
                          )}
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            gap: 0.8,
                            flexWrap: "wrap",
                            mb: 1,
                          }}
                        >
                          <Chip
                            label={bildirim.kategori}
                            size="small"
                            variant="outlined"
                            sx={{
                              borderColor: "#cbd5e1",
                              color: "#475569",
                              fontSize: 10,
                            }}
                          />

                          <Chip
                            icon={
                              <GroupsOutlinedIcon
                                sx={{ fontSize: 15 }}
                              />
                            }
                            label={`Alıcı: ${aliciAdiGetir(bildirim)}`}
                            size="small"
                            variant="outlined"
                            sx={{
                              borderColor: "#cbd5e1",
                              color: "#475569",
                              fontSize: 10,
                            }}
                          />
                        </Box>

                        <Typography
                          sx={{
                            color: "#475569",
                            fontSize: "0.95rem",
                            lineHeight: 1.6,
                            mb: 1,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {bildirim.icerik}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#94a3b8",
                            fontSize: "0.8rem",
                          }}
                        >
                          {bildirim.tarih} • {bildirim.saat}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.3,
                        }}
                      >
                        <Button
                          size="small"
                          startIcon={<NotificationsOutlined />}
                          onClick={(e) => {
                            e.stopPropagation();
                            bildirimiAc(bildirim);
                          }}
                          sx={{
                            textTransform: "none",
                            color: "#1f6fae",
                            whiteSpace: "nowrap",
                            fontWeight: bildirim.okundu ? 500 : 700,
                          }}
                        >
                          Bildirimi Aç
                        </Button>

                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            bildirimSil(bildirim.id);
                          }}
                          aria-label="Bildirimi sil"
                          sx={{
                            color: "#dc2626",
                            "&:hover": {
                              background: "#fee2e2",
                            },
                          }}
                        >
                          <DeleteOutlined />
                        </IconButton>
                      </Box>
                    </Box>

                    {index <
                      filtrelenmisBildirimler.length - 1 && (
                      <Divider />
                    )}
                  </Box>
                )
              )
            )}
          </Paper>
        </Box>
      </Box>

      {/* YENİ BİLDİRİM MODALI */}

      <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle
          sx={{
            color: "#0f2742",
            fontWeight: 800,
          }}
        >
          Yeni Bildirim Oluştur
        </DialogTitle>

        <DialogContent dividers>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              pt: 1,
            }}
          >
            <TextField
              fullWidth
              label="Bildirim Başlığı"
              value={baslik}
              onChange={(e) => setBaslik(e.target.value)}
              placeholder="Örneğin: Toplantı Hatırlatması"
            />

            <TextField
              fullWidth
              multiline
              minRows={4}
              label="Bildirim İçeriği"
              value={icerik}
              onChange={(e) => setIcerik(e.target.value)}
              placeholder="Bildirim içeriğini buraya yazın..."
            />

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr 1fr",
                },
                gap: 2,
              }}
            >
              <FormControl fullWidth>
                <InputLabel id="modal-tur-label">
                  Bildirim Türü
                </InputLabel>

                <Select
                  labelId="modal-tur-label"
                  label="Bildirim Türü"
                  value={tur}
                  onChange={(e) =>
                    setTur(e.target.value as BildirimTuru)
                  }
                >
                  <MenuItem value="Bilgi">Bilgi</MenuItem>
                  <MenuItem value="Uyarı">Uyarı</MenuItem>
                  <MenuItem value="Başarı">Başarı</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="modal-kategori-label">
                  Kategori
                </InputLabel>

                <Select
                  labelId="modal-kategori-label"
                  label="Kategori"
                  value={kategori}
                  onChange={(e) =>
                    setKategori(e.target.value as Kategori)
                  }
                >
                  <MenuItem value="Duyuru">Duyuru</MenuItem>
                  <MenuItem value="Stajyer">Stajyer</MenuItem>
                  <MenuItem value="Rapor">Rapor</MenuItem>
                  <MenuItem value="Devamsızlık">
                    Devamsızlık
                  </MenuItem>
                  <MenuItem value="Belge">Belge</MenuItem>
                  <MenuItem value="Sistem">Sistem</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="modal-oncelik-label">
                  Öncelik
                </InputLabel>

                <Select
                  labelId="modal-oncelik-label"
                  label="Öncelik"
                  value={oncelik}
                  onChange={(e) =>
                    setOncelik(e.target.value as Oncelik)
                  }
                >
                  <MenuItem value="Normal">Normal</MenuItem>
                  <MenuItem value="Önemli">Önemli</MenuItem>
                  <MenuItem value="Acil">Acil</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="modal-alici-label">
                  Alıcı
                </InputLabel>

                <Select
                  labelId="modal-alici-label"
                  label="Alıcı"
                  value={alici}
                  onChange={(e) => {
                    const value = e.target.value;
                    setAlici(value);

                    if (value !== "Belirli Stajyer") {
                      setStajyerId(null);
                    }
                  }}
                >
                  <MenuItem value="Tüm Stajyerler">
                    Tüm Stajyerler
                  </MenuItem>
                  <MenuItem value="Belirli Departman">
                    Belirli Departman
                  </MenuItem>
                  <MenuItem value="Belirli Stajyer">
                    Belirli Stajyer
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>

            {alici === "Belirli Departman" && (
              <FormControl fullWidth>
                <InputLabel id="modal-departman-label">
                  Departman
                </InputLabel>

                <Select
                  labelId="modal-departman-label"
                  label="Departman"
                  value={departman}
                  onChange={(e) =>
                    setDepartman(e.target.value)
                  }
                >
                  <MenuItem value="Tüm Departmanlar">
                    Tüm Departmanlar
                  </MenuItem>
                  <MenuItem value="Yazılım">Yazılım</MenuItem>
                  <MenuItem value="Ar-Ge">Ar-Ge</MenuItem>
                  <MenuItem value="Elektrik-Elektronik">
                    Elektrik-Elektronik
                  </MenuItem>
                  <MenuItem value="Mekanik">Mekanik</MenuItem>
                </Select>
              </FormControl>
            )}

            {alici === "Belirli Stajyer" && (
              <FormControl fullWidth>
                <InputLabel id="modal-stajyer-label">
                  Stajyer
                </InputLabel>

                <Select
                  labelId="modal-stajyer-label"
                  label="Stajyer"
                  value={stajyerId ?? ""}
                  onChange={(e) => {
                    const value = String(e.target.value);
                    setStajyerId(
                      value === "" ? null : Number(value)
                    );
                  }}
                >
                  <MenuItem value="">
                    Stajyer Seçin
                  </MenuItem>

                  {stajyerler.map((stajyer) => (
                    <MenuItem
                      key={stajyer.id}
                      value={stajyer.id}
                    >
                      {stajyer.ad} {stajyer.soyad}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}

            <Typography
              sx={{
                fontSize: 11,
                color: "#64748b",
              }}
            >
              Bildirim gönderildiğinde sistem içinde yeni bir
              okunmamış bildirim olarak oluşturulur.
            </Typography>
          </Box>
        </DialogContent>

        <DialogActions sx={{ p: 2 }}>
          <Button
            onClick={() => {
              setModalOpen(false);
              formuTemizle();
            }}
            sx={{
              textTransform: "none",
              color: "#64748b",
            }}
          >
            İptal
          </Button>

          <Button
            variant="contained"
            onClick={bildirimEkle}
            startIcon={<AddIcon />}
            sx={{
              background: "#1f6fae",
              textTransform: "none",
              fontWeight: 700,
              borderRadius: 1.5,
              "&:hover": {
                background: "#185d91",
              },
            }}
          >
            Bildirimi Gönder
          </Button>
        </DialogActions>
      </Dialog>

      {/* BİLDİRİM DETAYI */}
      <Dialog
        open={detayOpen}
        onClose={() => {
          setDetayOpen(false);
          setSeciliBildirim(null);
        }}
        fullWidth
        maxWidth="sm"
      >
        {seciliBildirim && (
          <>
            <DialogTitle
              sx={{
                color: "#0f2742",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              {!seciliBildirim.okundu && (
                <Box
                  sx={{
                    width: 9,
                    height: 9,
                    borderRadius: "50%",
                    background: "#1f6fae",
                    flexShrink: 0,
                  }}
                />
              )}
              {seciliBildirim.baslik}
            </DialogTitle>

            <DialogContent dividers>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  flexWrap: "wrap",
                  mb: 2,
                }}
              >
                <Chip
                  label={seciliBildirim.tur}
                  size="small"
                  sx={{
                    ...chipStyle(seciliBildirim.tur),
                    fontWeight: 600,
                  }}
                />

                <Chip
                  label={seciliBildirim.kategori}
                  size="small"
                  variant="outlined"
                  sx={{
                    borderColor: "#cbd5e1",
                    color: "#475569",
                  }}
                />

                <Chip
                  label={seciliBildirim.oncelik}
                  size="small"
                  sx={{
                    ...priorityStyle(seciliBildirim.oncelik),
                    fontWeight: 600,
                  }}
                />

                <Chip
                  label={
                    seciliBildirim.okundu
                      ? "Okundu"
                      : "Okunmamış"
                  }
                  size="small"
                  sx={{
                    background: seciliBildirim.okundu
                      ? "#dcfce7"
                      : "#dbeafe",
                    color: seciliBildirim.okundu
                      ? "#166534"
                      : "#1d4ed8",
                    fontWeight: 600,
                  }}
                />
              </Box>

              <Paper
                elevation={0}
                sx={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: 1.5,
                  p: 2.2,
                  mb: 2.5,
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
                  {seciliBildirim.icerik}
                </Typography>
              </Paper>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                  },
                  gap: 2,
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: "#94a3b8",
                      fontSize: 11,
                    }}
                  >
                    Alıcı
                  </Typography>
                  <Typography
                    sx={{
                      color: "#334155",
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {aliciAdiGetir(seciliBildirim)}
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#94a3b8",
                      fontSize: 11,
                    }}
                  >
                    Tarih
                  </Typography>
                  <Typography
                    sx={{
                      color: "#334155",
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {seciliBildirim.tarih} •{" "}
                    {seciliBildirim.saat}
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#94a3b8",
                      fontSize: 11,
                    }}
                  >
                    Kaynak
                  </Typography>
                  <Typography
                    sx={{
                      color: "#334155",
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {seciliBildirim.sistem
                      ? "Sistem bildirimi"
                      : "Yetkili kullanıcı"}
                  </Typography>
                </Box>
              </Box>
            </DialogContent>

            <DialogActions sx={{ p: 2 }}>
              <Button
                onClick={() => {
                  setDetayOpen(false);
                  setSeciliBildirim(null);
                }}
                variant="contained"
                sx={{
                  background: "#1f6fae",
                  textTransform: "none",
                  borderRadius: 1.5,
                  fontWeight: 700,
                  "&:hover": {
                    background: "#185d91",
                  },
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