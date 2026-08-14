"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";

import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import DescriptionOutlined from "@mui/icons-material/DescriptionOutlined";
import CheckCircle from "@mui/icons-material/CheckCircle";
import CancelOutlined from "@mui/icons-material/CancelOutlined";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import FolderIcon from "@mui/icons-material/Folder";
import CampaignIcon from "@mui/icons-material/Campaign";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";

import {
  raporlar as initialRaporlar,
  type Rapor,
  type RaporDurumu,
} from "@/app/data/raporlar";

import {
  interns,
} from "@/app/data/stajyerler";

export default function RaporlarPage() {
  const router = useRouter();
  /* =========================
     RAPORLAR
  ========================= */

  const [raporlar, setRaporlar] =
    useState<Rapor[]>(initialRaporlar);

  /* =========================
     STATE
  ========================= */

  const [stajyerId, setStajyerId] =
    useState<string>("");

  const [durum, setDurum] =
    useState<string>("");

  const [selectedRapor, setSelectedRapor] =
    useState<Rapor | null>(null);

  const [yetkiliNotu, setYetkiliNotu] =
    useState("");

  /* =========================
     FİLTRELEME
  ========================= */

  const filtrelenmisRaporlar =
    raporlar.filter((rapor) => {
      const stajyerUygun =
        stajyerId === "" ||
        rapor.stajyerId === Number(stajyerId);

      const durumUygun =
        durum === "" ||
        rapor.durum === durum;

      return (
        stajyerUygun &&
        durumUygun
      );
    });

  /* =========================
     RAPOR DETAY
  ========================= */

  const raporDetayAc = (
    rapor: Rapor
  ) => {
    setSelectedRapor(rapor);
    setYetkiliNotu(
      rapor.yetkiliNotu
    );
  };

  /* =========================
     DURUM GÜNCELLE
  ========================= */

  const raporDurumGuncelle = (
    yeniDurum: RaporDurumu
  ) => {
    if (!selectedRapor) {
      return;
    }

    const yeniNot =
      yetkiliNotu.trim();

    setRaporlar((prev) =>
      prev.map((rapor) =>
        rapor.id ===
        selectedRapor.id
          ? {
              ...rapor,
              durum: yeniDurum,
              yetkiliNotu:
                yeniNot,
            }
          : rapor
      )
    );

    setSelectedRapor((prev) =>
      prev
        ? {
            ...prev,
            durum: yeniDurum,
            yetkiliNotu:
              yeniNot,
          }
        : null
    );
  };

  /* =========================
     RAPOR SİL
  ========================= */

  const raporSil = (
    id: number
  ) => {
    setRaporlar((prev) =>
      prev.filter(
        (rapor) =>
          rapor.id !== id
      )
    );

    if (
      selectedRapor?.id === id
    ) {
      setSelectedRapor(null);
    }
  };

  /* =========================
     CHIP RENGİ
  ========================= */

  const durumStyle = (
    raporDurumu: RaporDurumu
  ) => {
    switch (raporDurumu) {
      case "Onaylandı":
        return {
          background: "#e8f5e9",
          color: "#2e7d32",
        };

      case "Reddedildi":
        return {
          background: "#ffebee",
          color: "#c62828",
        };

      case "İnceleniyor":
        return {
          background: "#e3f2fd",
          color: "#1565c0",
        };

      default:
        return {
          background: "#fff3e0",
          color: "#e65100",
        };
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f5f7fa",
        display: "flex",
      }}
    >
      {/* SOL MENÜ */}
      <Box
        sx={{
          width: 195,
          background: "linear-gradient(180deg, #0F2742 0%, #286B9D 100%)",
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
        <Box sx={{ px: 2.2, py: 2.2, borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
          <Typography sx={{ fontSize: 23, fontWeight: "bold" }}>ONVO</Typography>
          <Typography sx={{ fontSize: 11, opacity: 0.9, mt: 0.3 }}>Stajyer Takip Sistemi</Typography>
        </Box>

        <Box sx={{ px: 1, py: 1.5 }}>
          {[
            [<DashboardIcon />, "Kontrol Paneli", "/yetkili"],
            [<PeopleIcon />, "Stajyerler", "/yetkili/stajyerler"],
            [<BusinessIcon />, "Departman Yönetimi", "/yetkili/departmanlar"],
            [<DescriptionOutlined />, "Raporlar", "/yetkili/raporlar"],
            [<EventAvailableIcon />, "Devam Durumu", "/yetkili/devam"],
            [<FolderIcon />, "Belgeler", "/yetkili/belgeler"],
            [<CampaignIcon />, "Duyurular", "/yetkili/duyurular"],
            [<NotificationsIcon />, "Bildirimler", "/yetkili/bildirimler"],
            [<SettingsIcon />, "Ayarlar", "/yetkili/ayarlar"],
          ].map(([icon, text, path]) => {
            const active = path === "/yetkili/raporlar";
            return (
              <Box
                key={String(text)}
                onClick={() => router.push(String(path))}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                  px: 1.3,
                  py: 1.05,
                  mb: 0.35,
                  borderRadius: 1.5,
                  cursor: "pointer",
                  backgroundColor: active ? "rgba(255,255,255,0.20)" : "transparent",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.14)" },
                  transition: "0.2s",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", "& svg": { fontSize: 19 } }}>
                  {icon}
                </Box>
                <Typography sx={{ fontSize: 12, fontWeight: active ? 600 : 500 }}>
                  {String(text)}
                </Typography>
              </Box>
            );
          })}
        </Box>

        <Box sx={{ mt: "auto", px: 1, pb: 2 }}>
          <Box
            onClick={() => router.push("/login/yetkili")}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              px: 1.3,
              py: 1,
              borderRadius: 1.5,
              cursor: "pointer",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.14)" },
            }}
          >
            <LogoutIcon sx={{ fontSize: 19 }} />
            <Typography sx={{ fontSize: 12, fontWeight: 500 }}>Çıkış Yap</Typography>
          </Box>
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

        {/* ANA İÇERİK */}
        <Box
          component="main"
          sx={{
            p: { xs: 2, md: 4 },
            boxSizing: "border-box",
          }}
        >
      {/* =========================
          BAŞLIK
      ========================= */}

      <Box sx={{ mb: 3 }}>
        <Typography
          sx={{
            fontSize: 28,
            fontWeight: "bold",
            color: "#0F2742",
            mb: 1,
          }}
        >
          Raporlar
        </Typography>

        <Typography
          sx={{
            color: "#64748b",
          }}
        >
          Stajyerlerin göndermiş
          olduğu raporları buradan
          inceleyebilir ve
          yönetebilirsiniz.
        </Typography>
      </Box>

      {/* =========================
          FİLTRELER
      ========================= */}

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
            alignItems:
              "center",
            gap: 1,
            mb: 2,
          }}
        >
          <DescriptionOutlined
            sx={{
              color: "#1f6fae",
            }}
          />

          <Typography
            sx={{
              fontSize:
                "1.15rem",
              fontWeight: 700,
              color: "#0f2742",
            }}
          >
            Rapor Filtreleme
          </Typography>
        </Box>

        <Divider sx={{ mb: 2.5 }} />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: 2,
          }}
        >
          {/* STAJYER */}

          <FormControl fullWidth>
            <InputLabel id="stajyer-label">
              Stajyer
            </InputLabel>

            <Select
              labelId="stajyer-label"
              value={stajyerId}
              label="Stajyer"
              onChange={(
                event: SelectChangeEvent
              ) => {
                setStajyerId(
                  event.target.value
                );
              }}
              sx={{
                borderRadius: 1.5,
              }}
            >
              <MenuItem value="">
                Tüm Stajyerler
              </MenuItem>

              {interns.map(
                (stajyer) => (
                  <MenuItem
                    key={stajyer.id}
                    value={String(
                      stajyer.id
                    )}
                  >
                    {stajyer.name}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>

          {/* DURUM */}

          <FormControl fullWidth>
            <InputLabel id="durum-label">
              Rapor Durumu
            </InputLabel>

            <Select
              labelId="durum-label"
              value={durum}
              label="Rapor Durumu"
              onChange={(
                event: SelectChangeEvent
              ) => {
                setDurum(
                  event.target.value
                );
              }}
              sx={{
                borderRadius: 1.5,
              }}
            >
              <MenuItem value="">
                Tüm Durumlar
              </MenuItem>

              <MenuItem value="Bekliyor">
                Bekliyor
              </MenuItem>

              <MenuItem value="İnceleniyor">
                İnceleniyor
              </MenuItem>

              <MenuItem value="Onaylandı">
                Onaylandı
              </MenuItem>

              <MenuItem value="Reddedildi">
                Reddedildi
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Paper>

      {/* =========================
          RAPOR LİSTESİ
      ========================= */}

      <Paper
        elevation={0}
        sx={{
          border:
            "1px solid #dfe5ec",
          borderRadius: 2,
          background: "#ffffff",
          overflow: "hidden",
        }}
      >
        {/* BAŞLIK */}

        <Box
          sx={{
            p: {
              xs: 2,
              md: 3,
            },
            borderBottom:
              "1px solid #dfe5ec",
          }}
        >
          <Typography
            sx={{
              fontSize:
                "1.2rem",
              fontWeight: 700,
              color: "#0f2742",
              mb: 0.5,
            }}
          >
            Gönderilen Raporlar
          </Typography>

          <Typography
            sx={{
              color: "#64748b",
              fontSize:
                "0.9rem",
            }}
          >
            Toplam{" "}
            <strong>
              {
                filtrelenmisRaporlar.length
              }
            </strong>{" "}
            rapor görüntüleniyor.
          </Typography>
        </Box>

        {/* RAPORLAR */}

        {filtrelenmisRaporlar.length ===
        0 ? (
          <Box
            sx={{
              py: 7,
              textAlign: "center",
            }}
          >
            <DescriptionOutlined
              sx={{
                fontSize: 50,
                color: "#94a3b8",
                mb: 1,
              }}
            />

            <Typography
              sx={{
                color:
                  "#475569",
                fontWeight: 600,
                mb: 0.5,
              }}
            >
              Rapor bulunamadı
            </Typography>

            <Typography
              sx={{
                color:
                  "#94a3b8",
                fontSize:
                  "0.85rem",
              }}
            >
              Seçtiğiniz filtrelere
              uygun rapor
              bulunmuyor.
            </Typography>
          </Box>
        ) : (
          filtrelenmisRaporlar.map(
            (
              rapor,
              index
            ) => (
              <Box
                key={rapor.id}
              >
                <Box
                  sx={{
                    p: {
                      xs: 2,
                      md: 2.5,
                    },
                    display:
                      "flex",
                    justifyContent:
                      "space-between",
                    alignItems:
                      "flex-start",
                    gap: 2,

                    "&:hover": {
                      background:
                        "#fafcfe",
                    },
                  }}
                >
                  {/* RAPOR BİLGİSİ */}

                  <Box
                    sx={{
                      flex: 1,
                    }}
                  >
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
                          fontWeight: 700,
                          color:
                            "#0f2742",
                        }}
                      >
                        {
                          rapor.baslik
                        }
                      </Typography>

                      <Chip
                        label={
                          rapor.durum
                        }
                        size="small"
                        sx={{
                          ...durumStyle(
                            rapor.durum
                          ),
                          fontWeight: 600,
                        }}
                      />
                    </Box>

                    <Typography
                      sx={{
                        fontSize:
                          "0.9rem",
                        fontWeight: 600,
                        color:
                          "#1f6fae",
                        mb: 0.5,
                      }}
                    >
                      {
                        rapor.stajyer
                      }
                    </Typography>

                    <Typography
                      sx={{
                        color:
                          "#475569",
                        fontSize:
                          "0.9rem",
                        lineHeight:
                          1.5,
                        mb: 1,
                      }}
                    >
                      {
                        rapor.icerik
                      }
                    </Typography>

                    <Typography
                      sx={{
                        color:
                          "#94a3b8",
                        fontSize:
                          "0.8rem",
                      }}
                    >
                      {
                        rapor.tarih
                      }
                    </Typography>
                  </Box>

                  {/* BUTONLAR */}

                  <Box
                    sx={{
                      display:
                        "flex",
                      gap: 0.8,
                      alignItems:
                        "center",
                    }}
                  >
                    <IconButton
                      onClick={() =>
                        raporDetayAc(
                          rapor
                        )
                      }
                      aria-label="Raporu görüntüle"
                      sx={{
                        color:
                          "#1f6fae",
                        background:
                          "#edf4f9",

                        "&:hover": {
                          background:
                            "#dcebf4",
                        },
                      }}
                    >
                      <VisibilityOutlined />
                    </IconButton>

                    <IconButton
                      onClick={() =>
                        raporSil(
                          rapor.id
                        )
                      }
                      aria-label="Raporu sil"
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
                </Box>

                {index <
                  filtrelenmisRaporlar.length -
                    1 && (
                  <Divider />
                )}
              </Box>
            )
          )
        )}
      </Paper>

      {/* =========================
          RAPOR DETAY MODALI
      ========================= */}

      <Dialog
        open={
          selectedRapor !== null
        }
        onClose={() =>
          setSelectedRapor(null)
        }
        fullWidth
        maxWidth="md"
      >
        {selectedRapor && (
          <>
            <DialogTitle
              sx={{
                color: "#0f2742",
                fontWeight: 700,
              }}
            >
              Rapor Detayı
            </DialogTitle>

            <DialogContent
              dividers
            >
              {/* ÜST BİLGİ */}

              <Box
                sx={{
                  display:
                    "flex",
                  justifyContent:
                    "space-between",
                  alignItems:
                    "flex-start",
                  gap: 2,
                  mb: 3,
                  flexWrap:
                    "wrap",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize:
                        "1.25rem",
                      fontWeight: 700,
                      color:
                        "#0f2742",
                      mb: 0.5,
                    }}
                  >
                    {
                      selectedRapor.baslik
                    }
                  </Typography>

                  <Typography
                    sx={{
                      color:
                        "#1f6fae",
                      fontWeight: 600,
                      mb: 0.5,
                    }}
                  >
                    {
                      selectedRapor.stajyer
                    }
                  </Typography>

                  <Typography
                    sx={{
                      color:
                        "#94a3b8",
                      fontSize:
                        "0.85rem",
                    }}
                  >
                    {
                      selectedRapor.tarih
                    }
                  </Typography>
                </Box>

                <Chip
                  label={
                    selectedRapor.durum
                  }
                  sx={{
                    ...durumStyle(
                      selectedRapor.durum
                    ),
                    fontWeight: 600,
                  }}
                />
              </Box>

              {/* RAPOR İÇERİĞİ */}

              <Box
                sx={{
                  p: 2.5,
                  background:
                    "#f8fafc",
                  borderRadius: 2,
                  mb: 3,
                }}
              >
                <Typography
                  sx={{
                    fontSize:
                      "0.85rem",
                    fontWeight: 700,
                    color:
                      "#475569",
                    mb: 1,
                  }}
                >
                  Rapor İçeriği
                </Typography>

                <Typography
                  sx={{
                    color:
                      "#334155",
                    fontSize:
                      "0.95rem",
                    lineHeight:
                      1.8,
                    whiteSpace:
                      "pre-line",
                  }}
                >
                  {
                    selectedRapor.icerik
                  }
                </Typography>
              </Box>

              {/* YETKİLİ NOTU */}

              <TextField
                fullWidth
                multiline
                minRows={4}
                label="Yetkili Notu"
                value={
                  yetkiliNotu
                }
                onChange={(e) =>
                  setYetkiliNotu(
                    e.target.value
                  )
                }
                placeholder="Rapor hakkında stajyere iletmek istediğiniz notu yazın..."
                sx={{
                  "& .MuiOutlinedInput-root":
                    {
                      borderRadius:
                        1.5,
                    },
                }}
              />
            </DialogContent>

            {/* AKSİYONLAR */}

            <DialogActions
              sx={{
                p: 2,
                gap: 1,
                flexWrap:
                  "wrap",
              }}
            >
              <Button
                onClick={() =>
                  raporDurumGuncelle(
                    "Reddedildi"
                  )
                }
                startIcon={
                  <CancelOutlined />
                }
                variant="outlined"
                sx={{
                  borderColor:
                    "#dc2626",
                  color:
                    "#dc2626",

                  "&:hover": {
                    borderColor:
                      "#b91c1c",
                    background:
                      "#fef2f2",
                  },
                }}
              >
                Reddet
              </Button>

              <Button
                onClick={() =>
                  raporDurumGuncelle(
                    "İnceleniyor"
                  )
                }
                variant="outlined"
                sx={{
                  borderColor:
                    "#1f6fae",
                  color:
                    "#1f6fae",

                  "&:hover": {
                    borderColor:
                      "#185d91",
                    background:
                      "#f0f7fc",
                  },
                }}
              >
                İnceleniyor
              </Button>

              <Button
                onClick={() =>
                  raporDurumGuncelle(
                    "Onaylandı"
                  )
                }
                startIcon={
                  <CheckCircle />
                }
                variant="contained"
                sx={{
                  background:
                    "#2e7d32",
                  textTransform:
                    "none",
                  fontWeight: 600,

                  "&:hover": {
                    background:
                      "#256b29",
                  },
                }}
              >
                Onayla
              </Button>

              <Button
                onClick={() =>
                  setSelectedRapor(
                    null
                  )
                }
                variant="outlined"
                sx={{
                  ml: {
                    xs: 0,
                    sm: "auto",
                  },
                  borderColor:
                    "#cbd5e1",
                  color:
                    "#475569",
                }}
              >
                Kapat
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
        </Box>
      </Box>
    </Box>
  );
}