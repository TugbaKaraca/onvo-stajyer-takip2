"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import DescriptionIcon from "@mui/icons-material/Description";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import FolderIcon from "@mui/icons-material/Folder";
import CampaignIcon from "@mui/icons-material/Campaign";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";

import { useState } from "react";
import { useRouter } from "next/navigation";

const reports = [
  {
    id: 1,
    name: "Zeliha Koyuncu",
    department: "Yazılım",
    date: "12 Ağustos 2026",
    title: "Günlük Çalışma Raporu",
    status: "İnceleniyor",
    description:
      "Frontend geliştirme çalışmaları ve günlük görevler tamamlandı.",
  },
  {
    id: 2,
    name: "Ahmet Yılmaz",
    department: "Elektrik",
    date: "12 Ağustos 2026",
    title: "Günlük Çalışma Raporu",
    status: "Onaylandı",
    description:
      "Elektrik sistemleri ve üretim süreçleri hakkında çalışmalar yapıldı.",
  },
  {
    id: 3,
    name: "Elif Demir",
    department: "Yazılım",
    date: "11 Ağustos 2026",
    title: "Günlük Çalışma Raporu",
    status: "Bekliyor",
    description:
      "Yazılım geliştirme ve proje analiz çalışmaları gerçekleştirildi.",
  },
  {
    id: 4,
    name: "Mehmet Kaya",
    department: "Ar-Ge",
    date: "11 Ağustos 2026",
    title: "Günlük Çalışma Raporu",
    status: "Revizyon İstendi",
    description:
      "Ar-Ge departmanında yürütülen çalışmalar hakkında günlük rapor.",
  },
];

export default function YetkiliReportsPage() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [selectedReport, setSelectedReport] =
    useState<(typeof reports)[number] | null>(null);

  const filteredReports = reports.filter((report) =>
    `${report.name} ${report.department} ${report.title}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const getStatusColor = (
    status: string
  ): "success" | "warning" | "error" | "info" => {
    if (status === "Onaylandı") return "success";
    if (status === "İnceleniyor") return "warning";
    if (status === "Revizyon İstendi") return "error";
    return "info";
  };

  const getStatusIcon = (status: string) => {
    if (status === "Onaylandı") {
      return <CheckCircleIcon sx={{ fontSize: 20 }} />;
    }

    if (status === "İnceleniyor") {
      return <AccessTimeIcon sx={{ fontSize: 20 }} />;
    }

    return <WarningIcon sx={{ fontSize: 20 }} />;
  };

  const menuItems = [
    {
      icon: <DashboardIcon />,
      text: "Kontrol Paneli",
      path: "/yetkili",
    },
    {
      icon: <PeopleIcon />,
      text: "Stajyerler",
      path: "/yetkili/stajyerler",
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
      text: "Belgeler",
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

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F5F7FA",
        display: "flex",
      }}
    >
      {/* SOL MENÜ */}
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
        {/* LOGO */}
        <Box
          sx={{
            px: 2.2,
            py: 2.2,
            borderBottom:
              "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <Typography
            sx={{
              fontSize: 23,
              fontWeight: "bold",
            }}
          >
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

        {/* MENÜ */}
        <Box sx={{ px: 1, py: 1.5 }}>
          {menuItems.map((item) => {
            const active = item.path === "/yetkili/raporlar";

            return (
              <Box
                key={item.text}
                onClick={() => router.push(item.path)}
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
            );
          })}
        </Box>

        {/* ÇIKIŞ */}
        <Box
          sx={{
            mt: "auto",
            px: 1,
            pb: 2,
          }}
        >
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
        </Box>
      </Box>

      {/* SAĞ ANA ALAN */}
      <Box
        sx={{
          marginLeft: "195px",
          width: "calc(100% - 195px)",
          minHeight: "100vh",
        }}
      >
        {/* ÜST BAR */}
        <Box
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
          <Box
            onClick={() =>
              router.push("/yetkili/bildirimler")
            }
            sx={{
              display: "flex",
              cursor: "pointer",
              color: "#286B9D",
              mr: 1,
            }}
          >
            <NotificationsIcon />
          </Box>

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

        {/* SAYFA İÇERİĞİ */}
        <Box
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
              Raporlar
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 13,
              }}
            >
              Stajyerlerin günlük çalışma raporlarını buradan
              inceleyebilir ve takip edebilirsiniz.
            </Typography>
          </Box>

          {/* ÖZET KARTLARI */}
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
            <Card
              elevation={0}
              sx={{
                border: "1px solid #E4E7EC",
                borderRadius: 2,
              }}
            >
              <CardContent sx={{ p: 2 }}>
                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#64748B",
                  }}
                >
                  Toplam Rapor
                </Typography>

                <Typography
                  sx={{
                    fontSize: 26,
                    fontWeight: "bold",
                    mt: 1,
                  }}
                >
                  4
                </Typography>
              </CardContent>
            </Card>

            <Card
              elevation={0}
              sx={{
                border: "1px solid #E4E7EC",
                borderRadius: 2,
              }}
            >
              <CardContent sx={{ p: 2 }}>
                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#64748B",
                  }}
                >
                  İncelenecek Rapor
                </Typography>

                <Typography
                  sx={{
                    fontSize: 26,
                    fontWeight: "bold",
                    color: "#D97706",
                    mt: 1,
                  }}
                >
                  1
                </Typography>
              </CardContent>
            </Card>

            <Card
              elevation={0}
              sx={{
                border: "1px solid #E4E7EC",
                borderRadius: 2,
              }}
            >
              <CardContent sx={{ p: 2 }}>
                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#64748B",
                  }}
                >
                  Onaylanan Rapor
                </Typography>

                <Typography
                  sx={{
                    fontSize: 26,
                    fontWeight: "bold",
                    color: "#16A34A",
                    mt: 1,
                  }}
                >
                  1
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* ARAMA */}
          <Card
            elevation={0}
            sx={{
              border: "1px solid #E4E7EC",
              borderRadius: 2,
              mb: 3,
            }}
          >
            <CardContent sx={{ p: 2 }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Stajyer adı veya departman ara..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <SearchIcon
                        sx={{
                          color: "#94A3B8",
                          mr: 1,
                        }}
                      />
                    ),
                  },
                }}
              />
            </CardContent>
          </Card>

          {/* RAPOR LİSTESİ */}
          <Card
            elevation={0}
            sx={{
              border: "1px solid #E4E7EC",
              borderRadius: 2,
            }}
          >
            <CardContent sx={{ p: 2.5 }}>
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#0F2742",
                  mb: 2,
                }}
              >
                Günlük Raporlar
              </Typography>

              {filteredReports.length === 0 ? (
                <Box
                  sx={{
                    py: 6,
                    textAlign: "center",
                  }}
                >
                  <DescriptionIcon
                    sx={{
                      fontSize: 45,
                      color: "#CBD5E1",
                      mb: 1,
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#64748B",
                    }}
                  >
                    Aramanızla eşleşen rapor bulunamadı.
                  </Typography>
                </Box>
              ) : (
                filteredReports.map((report, index) => (
                  <Box key={report.id}>
                    <Box
                      sx={{
                        py: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        flexWrap: "wrap",
                      }}
                    >
                      {/* İKON */}
                      <Box
                        sx={{
                          width: 46,
                          height: 46,
                          borderRadius: 2,
                          backgroundColor: "#EDF4F9",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#286B9D",
                        }}
                      >
                        <DescriptionIcon />
                      </Box>

                      {/* BİLGİ */}
                      <Box
                        sx={{
                          flex: 1,
                          minWidth: 220,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 14,
                            fontWeight: "bold",
                            color: "#17202A",
                          }}
                        >
                          {report.name}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: 11,
                            color: "#64748B",
                            mt: 0.3,
                          }}
                        >
                          {report.department} • {report.date}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: 12,
                            color: "#475569",
                            mt: 0.8,
                          }}
                        >
                          {report.title}
                        </Typography>
                      </Box>

                      {/* DURUM */}
                      <Chip
                        icon={getStatusIcon(report.status)}
                        label={report.status}
                        color={getStatusColor(report.status)}
                        size="small"
                        sx={{
                          fontSize: 10,
                          fontWeight: 600,
                        }}
                      />

                      {/* DETAY */}
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<VisibilityIcon />}
                        onClick={() =>
                          setSelectedReport(report)
                        }
                        sx={{
                          borderColor: "#286B9D",
                          color: "#286B9D",
                          textTransform: "none",
                          fontSize: 11,
                          "&:hover": {
                            borderColor: "#1f557d",
                            backgroundColor: "#EDF4F9",
                          },
                        }}
                      >
                        Detay
                      </Button>
                    </Box>

                    {index !== filteredReports.length - 1 && (
                      <Divider />
                    )}
                  </Box>
                ))
              )}
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* RAPOR DETAY PENCERESİ */}
      <Dialog
        open={selectedReport !== null}
        onClose={() => setSelectedReport(null)}
        fullWidth
        maxWidth="sm"
      >
        {selectedReport && (
          <>
            <DialogTitle
              sx={{
                fontWeight: "bold",
                color: "#0F2742",
                borderBottom: "1px solid #E4E7EC",
              }}
            >
              Rapor Detayı
            </DialogTitle>

            <DialogContent sx={{ pt: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: 2,
                    backgroundColor: "#EDF4F9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#286B9D",
                  }}
                >
                  <DescriptionIcon />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: 17,
                      color: "#17202A",
                    }}
                  >
                    {selectedReport.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 12,
                      color: "#64748B",
                    }}
                  >
                    {selectedReport.department}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#64748B",
                    mb: 0.5,
                  }}
                >
                  Rapor Başlığı
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#17202A",
                  }}
                >
                  {selectedReport.title}
                </Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#64748B",
                    mb: 0.5,
                  }}
                >
                  Tarih
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#17202A",
                  }}
                >
                  {selectedReport.date}
                </Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#64748B",
                    mb: 0.5,
                  }}
                >
                  Durum
                </Typography>

                <Chip
                  icon={getStatusIcon(
                    selectedReport.status
                  )}
                  label={selectedReport.status}
                  color={getStatusColor(
                    selectedReport.status
                  )}
                  size="small"
                  sx={{
                    fontWeight: 600,
                  }}
                />
              </Box>

              <Box
                sx={{
                  backgroundColor: "#F8FAFC",
                  border: "1px solid #E4E7EC",
                  borderRadius: 2,
                  p: 2,
                  mt: 3,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#64748B",
                    mb: 1,
                  }}
                >
                  Rapor İçeriği
                </Typography>

                <Typography
                  sx={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "#334155",
                  }}
                >
                  {selectedReport.description}
                </Typography>
              </Box>
            </DialogContent>

            <DialogActions
              sx={{
                px: 3,
                pb: 2,
              }}
            >
              <Button
                onClick={() => setSelectedReport(null)}
                variant="contained"
                sx={{
                  backgroundColor: "#286B9D",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#1F557D",
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