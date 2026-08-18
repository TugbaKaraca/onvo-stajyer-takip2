"use client";

import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

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
import SecurityIcon from "@mui/icons-material/Security";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

import Link from "next/link";

export default function AyarlarPage() {
  const [bildirimler, setBildirimler] = useState(true);
  const [emailBildirimleri, setEmailBildirimleri] = useState(true);
  const [yeniStajyer, setYeniStajyer] = useState(true);
  const [eksikBelge, setEksikBelge] = useState(true);
  const [raporBildirimi, setRaporBildirimi] = useState(true);
  const [devamsizlikBildirimi, setDevamsizlikBildirimi] =
    useState(true);
  const [duyuruBildirimi, setDuyuruBildirimi] = useState(true);

  const [haftaSonuSayma, setHaftaSonuSayma] = useState(false);
  const [resmiTatilleriSayma, setResmiTatilleriSayma] =
    useState(true);

  const [basarili, setBasarili] = useState(false);

  const [sifre, setSifre] = useState("");
  const [yeniSifre, setYeniSifre] = useState("");
  const [yeniSifreTekrar, setYeniSifreTekrar] = useState("");

  const [stajSuresi, setStajSuresi] = useState("20");
  const [calismaSaati, setCalismaSaati] = useState("8");
  const [mesaiBaslangic, setMesaiBaslangic] =
    useState("08:30");
  const [mesaiBitis, setMesaiBitis] = useState("17:30");

  const [raporSikligi, setRaporSikligi] = useState("Günlük");
  const [stajTuru, setStajTuru] = useState("Yaz Stajı");
  const [devamsizlikLimiti, setDevamsizlikLimiti] =
    useState("3");

  const handleSave = () => {
    setBasarili(true);

    setTimeout(() => {
      setBasarili(false);
    }, 3000);
  };

  const handlePasswordUpdate = () => {
    if (
      !sifre ||
      !yeniSifre ||
      !yeniSifreTekrar ||
      yeniSifre !== yeniSifreTekrar
    ) {
      return;
    }

    setSifre("");
    setYeniSifre("");
    setYeniSifreTekrar("");
    setBasarili(true);

    setTimeout(() => {
      setBasarili(false);
    }, 3000);
  };

  const handleDangerousAction = (message: string) => {
    const confirmed = window.confirm(
      `${message}\n\nBu işlem geri alınamaz. Devam etmek istediğinize emin misiniz?`
    );

    if (confirmed) {
      alert("Bu demo sürümünde işlem uygulanmadı.");
    }
  };

  const menuItems = [
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
  ];

  const sectionTitleSx = {
    fontSize: "1.2rem",
    fontWeight: 700,
    color: "#0f2742",
    mb: 0.5,
  };

  const sectionDescriptionSx = {
    color: "#64748b",
    fontSize: "0.9rem",
    mb: 2.5,
  };

  const paperSx = {
    border: "1px solid #e2e8f0",
    borderRadius: 2,
    p: {
      xs: 2,
      md: 3,
    },
    mb: 3,
    background: "#ffffff",
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
      {/* SOL MENÜ */}
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

        <Box
          sx={{
            px: 1,
            py: 1.5,
            flex: 1,
          }}
        >
          {menuItems.map((item) => {
            const active =
              item.path === "/yetkili/ayarlar";

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

        <Box
          sx={{
            mt: "auto",
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
              <Typography sx={{ fontSize: 19 }}>
                ⇥
              </Typography>

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

      {/* ANA ALAN */}
      <Box
        sx={{
          marginLeft: "195px",
          width: "calc(100% - 195px)",
          minHeight: "100vh",
        }}
      >
        {/* NAVBAR */}
        <Box
          component="header"
          sx={{
            height: 58,
            backgroundColor: "#ffffff",
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

        {/* İÇERİK */}
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
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontSize: 28,
                fontWeight: "bold",
                color: "#0F2742",
                mb: 0.5,
              }}
            >
              Ayarlar
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 13,
              }}
            >
              Sistem, hesap ve staj süreçlerine ait
              yönetim ayarlarını buradan düzenleyebilirsiniz.
            </Typography>
          </Box>

          {/* HESAP BİLGİLERİ */}
          <Paper elevation={0} sx={paperSx}>
            <Typography sx={sectionTitleSx}>
              👤 Hesap Bilgileri
            </Typography>

            <Typography sx={sectionDescriptionSx}>
              Yetkili hesabınızla ilgili bilgileri
              görüntüleyin.
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 1fr",
                },
                gap: 2.5,
              }}
            >
              <TextField
                fullWidth
                label="Ad Soyad"
                value="Yetkili Kullanıcı"
                disabled
              />

              <TextField
                fullWidth
                label="E-posta"
                value="yetkili@onvo.com"
                disabled
              />

              <TextField
                fullWidth
                label="Telefon"
                value="05XX XXX XX XX"
              />

              <TextField
                fullWidth
                label="Yetki Seviyesi"
                value="Yetkili"
                disabled
              />

              <TextField
                fullWidth
                label="Departman"
                value="Yönetim"
                disabled
              />

              <TextField
                fullWidth
                label="Hesap Durumu"
                value="Aktif"
                disabled
              />
            </Box>
          </Paper>

          {/* GÜVENLİK */}
          <Paper elevation={0} sx={paperSx}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 0.5,
              }}
            >
              <SecurityIcon sx={{ color: "#286B9D" }} />
              <Typography sx={sectionTitleSx}>
                Güvenlik ve Şifre
              </Typography>
            </Box>

            <Typography sx={sectionDescriptionSx}>
              Yetkili hesabınızın şifresini buradan
              güncelleyebilirsiniz.
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 1fr",
                },
                gap: 2.5,
              }}
            >
              <TextField
                fullWidth
                type="password"
                label="Mevcut Şifre"
                value={sifre}
                onChange={(e) =>
                  setSifre(e.target.value)
                }
              />

              <Box />

              <TextField
                fullWidth
                type="password"
                label="Yeni Şifre"
                value={yeniSifre}
                onChange={(e) =>
                  setYeniSifre(e.target.value)
                }
              />

              <TextField
                fullWidth
                type="password"
                label="Yeni Şifre Tekrar"
                value={yeniSifreTekrar}
                onChange={(e) =>
                  setYeniSifreTekrar(e.target.value)
                }
                error={
                  yeniSifreTekrar.length > 0 &&
                  yeniSifre !== yeniSifreTekrar
                }
                helperText={
                  yeniSifreTekrar.length > 0 &&
                  yeniSifre !== yeniSifreTekrar
                    ? "Şifreler eşleşmiyor."
                    : ""
                }
              />
            </Box>

            <Button
              variant="outlined"
              startIcon={<SecurityIcon />}
              onClick={handlePasswordUpdate}
              sx={{
                mt: 2.5,
                textTransform: "none",
                borderColor: "#286B9D",
                color: "#286B9D",
                borderRadius: 1.5,
                fontWeight: 600,
              }}
            >
              Şifreyi Güncelle
            </Button>
          </Paper>

          {/* BİLDİRİM AYARLARI */}
          <Paper elevation={0} sx={paperSx}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 0.5,
              }}
            >
              <NotificationsIcon
                sx={{ color: "#286B9D" }}
              />

              <Typography sx={sectionTitleSx}>
                Bildirim Ayarları
              </Typography>
            </Box>

            <Typography sx={sectionDescriptionSx}>
              Sistem ve staj süreciyle ilgili hangi durumlarda
              bildirim almak istediğinizi belirleyin.
            </Typography>

            <Divider sx={{ mb: 2 }} />

            {/* GENEL BİLDİRİMLER */}
            <Box
              sx={{
                mb: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#0F2742",
                  mb: 0.5,
                }}
              >
                Genel Bildirimler
              </Typography>

              <Typography
                sx={{
                  fontSize: 11,
                  color: "#94A3B8",
                  mb: 1,
                }}
              >
                Bildirimlerin genel olarak nasıl iletileceğini belirleyin.
              </Typography>

              <FormControlLabel
                control={
                  <Switch
                    checked={bildirimler}
                    onChange={(e) =>
                      setBildirimler(e.target.checked)
                    }
                  />
                }
                label={
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: "#17202A",
                        fontSize: 13,
                      }}
                    >
                      Sistem bildirimleri
                    </Typography>

                    <Typography
                      sx={{
                        color: "#64748B",
                        fontSize: 11,
                      }}
                    >
                      Sistem içindeki önemli gelişmeler için bildirim al.
                    </Typography>
                  </Box>
                }
                sx={{
                  py: 0.8,
                  ml: 0,
                  width: "100%",
                }}
              />

              <FormControlLabel
                control={
                  <Switch
                    checked={emailBildirimleri}
                    onChange={(e) =>
                      setEmailBildirimleri(e.target.checked)
                    }
                  />
                }
                label={
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: "#17202A",
                        fontSize: 13,
                      }}
                    >
                      E-posta bildirimleri
                    </Typography>

                    <Typography
                      sx={{
                        color: "#64748B",
                        fontSize: 11,
                      }}
                    >
                      Önemli bildirimleri e-posta ile al.
                    </Typography>
                  </Box>
                }
                sx={{
                  py: 0.8,
                  ml: 0,
                  width: "100%",
                }}
              />
            </Box>

            <Divider sx={{ mb: 2.5 }} />

            {/* STAJYER VE SÜREÇ BİLDİRİMLERİ */}
            <Box
              sx={{
                mb: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#0F2742",
                  mb: 0.5,
                }}
              >
                Stajyer ve Süreç Bildirimleri
              </Typography>

              <Typography
                sx={{
                  fontSize: 11,
                  color: "#94A3B8",
                  mb: 1,
                }}
              >
                Stajyer süreçlerinde gerçekleşen olaylar için bildirimleri yönetin.
              </Typography>

              <FormControlLabel
                control={
                  <Switch
                    checked={yeniStajyer}
                    onChange={(e) =>
                      setYeniStajyer(e.target.checked)
                    }
                  />
                }
                label={
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: "#17202A",
                        fontSize: 13,
                      }}
                    >
                      Yeni stajyer
                    </Typography>

                    <Typography
                      sx={{
                        color: "#64748B",
                        fontSize: 11,
                      }}
                    >
                      Yeni stajyer kaydı oluşturulduğunda bildirim al.
                    </Typography>
                  </Box>
                }
                sx={{
                  py: 0.8,
                  ml: 0,
                  width: "100%",
                }}
              />

              <FormControlLabel
                control={
                  <Switch
                    checked={eksikBelge}
                    onChange={(e) =>
                      setEksikBelge(e.target.checked)
                    }
                  />
                }
                label={
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: "#17202A",
                        fontSize: 13,
                      }}
                    >
                      Eksik belge
                    </Typography>

                    <Typography
                      sx={{
                        color: "#64748B",
                        fontSize: 11,
                      }}
                    >
                      Stajyerin eksik belgesi olduğunda bildirim al.
                    </Typography>
                  </Box>
                }
                sx={{
                  py: 0.8,
                  ml: 0,
                  width: "100%",
                }}
              />

              <FormControlLabel
                control={
                  <Switch
                    checked={raporBildirimi}
                    onChange={(e) =>
                      setRaporBildirimi(e.target.checked)
                    }
                  />
                }
                label={
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: "#17202A",
                        fontSize: 13,
                      }}
                    >
                      Yeni rapor
                    </Typography>

                    <Typography
                      sx={{
                        color: "#64748B",
                        fontSize: 11,
                      }}
                    >
                      Stajyer yeni rapor gönderdiğinde bildirim al.
                    </Typography>
                  </Box>
                }
                sx={{
                  py: 0.8,
                  ml: 0,
                  width: "100%",
                }}
              />

              <FormControlLabel
                control={
                  <Switch
                    checked={devamsizlikBildirimi}
                    onChange={(e) =>
                      setDevamsizlikBildirimi(e.target.checked)
                    }
                  />
                }
                label={
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: "#17202A",
                        fontSize: 13,
                      }}
                    >
                      Devamsızlık
                    </Typography>

                    <Typography
                      sx={{
                        color: "#64748B",
                        fontSize: 11,
                      }}
                    >
                      Devamsızlık kaydı oluştuğunda bildirim al.
                    </Typography>
                  </Box>
                }
                sx={{
                  py: 0.8,
                  ml: 0,
                  width: "100%",
                }}
              />
            </Box>

            <Divider sx={{ mb: 2.5 }} />

            {/* DUYURULAR */}
            <Box>
              <Typography
                sx={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#0F2742",
                  mb: 0.5,
                }}
              >
                Duyurular
              </Typography>

              <Typography
                sx={{
                  fontSize: 11,
                  color: "#94A3B8",
                  mb: 1,
                }}
              >
                Yeni duyurular yayınlandığında bildirim alın.
              </Typography>

              <FormControlLabel
                control={
                  <Switch
                    checked={duyuruBildirimi}
                    onChange={(e) =>
                      setDuyuruBildirimi(e.target.checked)
                    }
                  />
                }
                label={
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: "#17202A",
                        fontSize: 13,
                      }}
                    >
                      Yeni duyuru
                    </Typography>

                    <Typography
                      sx={{
                        color: "#64748B",
                        fontSize: 11,
                      }}
                    >
                      Yeni bir duyuru yayınlandığında bildirim al.
                    </Typography>
                  </Box>
                }
                sx={{
                  py: 0.8,
                  ml: 0,
                  width: "100%",
                }}
              />
            </Box>
          </Paper>

          {/* SİSTEM AYARLARI */}
          <Paper elevation={0} sx={paperSx}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 0.5,
              }}
            >
              <SettingsIcon
                sx={{ color: "#286B9D" }}
              />
              <Typography sx={sectionTitleSx}>
                Sistem Ayarları
              </Typography>
            </Box>

            <Typography sx={sectionDescriptionSx}>
              Stajyer takip sisteminin genel bilgilerini
              ve varsayılanlarını yönetin.
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 1fr",
                },
                gap: 2.5,
              }}
            >
              <TextField
                fullWidth
                label="Sistem Adı"
                defaultValue="ONVO Stajyer Takip Sistemi"
              />

              <TextField
                fullWidth
                label="Şirket"
                defaultValue="ONVO"
              />

              <TextField
                fullWidth
                label="Çalışma Yılı"
                defaultValue="2026"
              />

              <TextField
                fullWidth
                label="Varsayılan Departman"
                defaultValue="Yazılım"
              />

              <FormControl fullWidth>
                <InputLabel id="staj-turu-label">
                  Varsayılan Staj Türü
                </InputLabel>

                <Select
                  labelId="staj-turu-label"
                  label="Varsayılan Staj Türü"
                  value={stajTuru}
                  onChange={(e) =>
                    setStajTuru(e.target.value)
                  }
                >
                  <MenuItem value="Yaz Stajı">
                    Yaz Stajı
                  </MenuItem>
                  <MenuItem value="Kış Stajı">
                    Kış Stajı
                  </MenuItem>
                  <MenuItem value="Zorunlu Staj">
                    Zorunlu Staj
                  </MenuItem>
                </Select>
              </FormControl>

              <TextField
                fullWidth
                label="Varsayılan Çalışma Saati"
                value={calismaSaati}
                onChange={(e) =>
                  setCalismaSaati(e.target.value)
                }
                type="number"
              />
            </Box>
          </Paper>

          {/* STAJ SÜRECİ */}
          <Paper elevation={0} sx={paperSx}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 0.5,
              }}
            >
              <CalendarMonthIcon
                sx={{ color: "#286B9D" }}
              />

              <Typography sx={sectionTitleSx}>
                Staj Süreci Ayarları
              </Typography>
            </Box>

            <Typography sx={sectionDescriptionSx}>
              Staj süresinin, çalışma saatlerinin ve
              devam kurallarının varsayılanlarını belirleyin.
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 1fr",
                },
                gap: 2.5,
              }}
            >
              <TextField
                fullWidth
                label="Staj Süresi"
                value={stajSuresi}
                onChange={(e) =>
                  setStajSuresi(e.target.value)
                }
                type="number"
                helperText="İş günü olarak"
              />

              <TextField
                fullWidth
                label="Devamsızlık Limiti"
                value={devamsizlikLimiti}
                onChange={(e) =>
                  setDevamsizlikLimiti(e.target.value)
                }
                type="number"
                helperText="İzin verilen maksimum gün"
              />

              <TextField
                fullWidth
                label="Mesai Başlangıcı"
                value={mesaiBaslangic}
                onChange={(e) =>
                  setMesaiBaslangic(e.target.value)
                }
                type="time"
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
              />

              <TextField
                fullWidth
                label="Mesai Bitişi"
                value={mesaiBitis}
                onChange={(e) =>
                  setMesaiBitis(e.target.value)
                }
                type="time"
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
              />

              <FormControl fullWidth>
                <InputLabel id="rapor-sikligi-label">
                  Rapor Teslim Sıklığı
                </InputLabel>

                <Select
                  labelId="rapor-sikligi-label"
                  label="Rapor Teslim Sıklığı"
                  value={raporSikligi}
                  onChange={(e) =>
                    setRaporSikligi(e.target.value)
                  }
                >
                  <MenuItem value="Günlük">
                    Günlük
                  </MenuItem>
                  <MenuItem value="Haftalık">
                    Haftalık
                  </MenuItem>
                  <MenuItem value="Aylık">
                    Aylık
                  </MenuItem>
                </Select>
              </FormControl>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <FormControlLabel
                  control={
                    <Switch
                      checked={haftaSonuSayma}
                      onChange={(e) =>
                        setHaftaSonuSayma(
                          e.target.checked
                        )
                      }
                    />
                  }
                  label="Hafta sonlarını staj gününden sayma"
                />

                <FormControlLabel
                  control={
                    <Switch
                      checked={resmiTatilleriSayma}
                      onChange={(e) =>
                        setResmiTatilleriSayma(
                          e.target.checked
                        )
                      }
                    />
                  }
                  label="Resmi tatilleri staj gününden sayma"
                />
              </Box>
            </Box>
          </Paper>

          {/* TEHLİKELİ İŞLEMLER */}
          <Paper
            elevation={0}
            sx={{
              ...paperSx,
              border: "1px solid #fecaca",
              background: "#fffafa",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 0.5,
              }}
            >
              <WarningAmberIcon
                sx={{ color: "#dc2626" }}
              />

              <Typography
                sx={{
                  ...sectionTitleSx,
                  color: "#991b1b",
                }}
              >
                Tehlikeli İşlemler
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#7f1d1d",
                fontSize: "0.9rem",
                mb: 2.5,
              }}
            >
              Bu bölümdeki işlemler sistem verilerini
              etkileyebilir. İşlem yapmadan önce dikkatlice kontrol edin.
            </Typography>

            <Divider sx={{ mb: 2.5 }} />

            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
                justifyContent: "space-between",
                alignItems: {
                  xs: "flex-start",
                  md: "center",
                },
                gap: 2,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#17202a",
                    fontSize: 14,
                  }}
                >
                  Sistem verilerini sıfırla
                </Typography>

                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize: 12,
                    mt: 0.4,
                  }}
                >
                  Demo sistemindeki ayar ve kayıtları sıfırlama işlemi.
                </Typography>
              </Box>

              <Button
                variant="outlined"
                onClick={() =>
                  handleDangerousAction(
                    "Sistem verilerini sıfırlama işlemi başlatılacak."
                  )
                }
                sx={{
                  color: "#dc2626",
                  borderColor: "#fca5a5",
                  textTransform: "none",
                  borderRadius: 1.5,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  "&:hover": {
                    borderColor: "#dc2626",
                    background: "#fef2f2",
                  },
                }}
              >
                Verileri Sıfırla
              </Button>
            </Box>

            <Divider sx={{ my: 2.5 }} />

            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
                justifyContent: "space-between",
                alignItems: {
                  xs: "flex-start",
                  md: "center",
                },
                gap: 2,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#17202a",
                    fontSize: 14,
                  }}
                >
                  Stajyer kayıtlarını temizle
                </Typography>

                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize: 12,
                    mt: 0.4,
                  }}
                >
                  Stajyer kayıtlarını sistemden kaldırma işlemi.
                </Typography>
              </Box>

              <Button
                variant="outlined"
                onClick={() =>
                  handleDangerousAction(
                    "Stajyer kayıtlarını temizleme işlemi başlatılacak."
                  )
                }
                sx={{
                  color: "#dc2626",
                  borderColor: "#fca5a5",
                  textTransform: "none",
                  borderRadius: 1.5,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  "&:hover": {
                    borderColor: "#dc2626",
                    background: "#fef2f2",
                  },
                }}
              >
                Kayıtları Temizle
              </Button>
            </Box>
          </Paper>

          {/* KAYDET */}
          <Paper
            elevation={0}
            sx={{
              border: "1px solid #e2e8f0",
              borderRadius: 2,
              p: 2.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
              flexWrap: "wrap",
              background: "#ffffff",
            }}
          >
            <Box>
              {basarili && (
                <Typography
                  sx={{
                    color: "#15803d",
                    fontWeight: 600,
                  }}
                >
                  Ayarlar başarıyla kaydedildi.
                </Typography>
              )}
            </Box>

            <Button
              variant="contained"
              onClick={handleSave}
              sx={{
                background: "#0f2742",
                px: 4,
                py: 1.2,
                borderRadius: 1.5,
                fontWeight: 700,
                boxShadow: "none",
                "&:hover": {
                  background: "#173b61",
                  boxShadow: "none",
                },
              }}
            >
              AYARLARI KAYDET
            </Button>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}