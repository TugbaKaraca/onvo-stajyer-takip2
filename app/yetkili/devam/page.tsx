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
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import DescriptionIcon from "@mui/icons-material/Description";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import FolderIcon from "@mui/icons-material/Folder";
import CampaignIcon from "@mui/icons-material/Campaign";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { useState } from "react";
import { useRouter } from "next/navigation";

const attendanceRecords = [
  {
    id: 1,
    name: "Zeliha Koyuncu",
    department: "Yazılım",
    date: "13 Ağustos 2026",
    entry: "08:54",
    exit: "-",
    status: "Geldi",
  },
  {
    id: 2,
    name: "Ahmet Yılmaz",
    department: "Elektrik",
    date: "13 Ağustos 2026",
    entry: "08:47",
    exit: "-",
    status: "Geldi",
  },
  {
    id: 3,
    name: "Elif Demir",
    department: "Yazılım",
    date: "13 Ağustos 2026",
    entry: "09:03",
    exit: "-",
    status: "Geldi",
  },
  {
    id: 4,
    name: "Mehmet Kaya",
    department: "Ar-Ge",
    date: "13 Ağustos 2026",
    entry: "-",
    exit: "-",
    status: "İzinli",
  },
  {
    id: 5,
    name: "Ayşe Yılmaz",
    department: "Yazılım",
    date: "13 Ağustos 2026",
    entry: "-",
    exit: "-",
    status: "Gelmedi",
  },
];

export default function YetkiliAttendancePage() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("Tümü");

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

  const filteredRecords = attendanceRecords.filter((record) => {
    const matchesSearch = `${record.name} ${record.department}`
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "Tümü" ||
      record.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

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
            const active = item.path === "/yetkili/devam";

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

        {/* İÇERİK */}
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
              Devam Durumu
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 13,
              }}
            >
              Stajyerlerin günlük devam durumlarını
              buradan takip edebilirsiniz.
            </Typography>
          </Box>

          {/* ÖZET KARTLARI */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(4, 1fr)",
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
                  Toplam Stajyer
                </Typography>

                <Typography
                  sx={{
                    fontSize: 26,
                    fontWeight: "bold",
                    mt: 1,
                  }}
                >
                  24
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
                  Bugün Gelen
                </Typography>

                <Typography
                  sx={{
                    fontSize: 26,
                    fontWeight: "bold",
                    color: "#16A34A",
                    mt: 1,
                  }}
                >
                  18
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
                  Gelmeyen
                </Typography>

                <Typography
                  sx={{
                    fontSize: 26,
                    fontWeight: "bold",
                    color: "#DC2626",
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
                  İzinli
                </Typography>

                <Typography
                  sx={{
                    fontSize: 26,
                    fontWeight: "bold",
                    color: "#D97706",
                    mt: 1,
                  }}
                >
                  2
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* ARAMA VE FİLTRE */}
          <Card
            elevation={0}
            sx={{
              border: "1px solid #E4E7EC",
              borderRadius: 2,
              mb: 3,
            }}
          >
            <CardContent
              sx={{
                p: 2,
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <TextField
                size="small"
                placeholder="Stajyer adı veya departman ara..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                sx={{
                  flex: 1,
                  minWidth: 260,
                }}
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

              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  flexWrap: "wrap",
                }}
              >
                {[
                  "Tümü",
                  "Geldi",
                  "Gelmedi",
                  "İzinli",
                ].map((status) => (
                  <Button
                    key={status}
                    variant={
                      statusFilter === status
                        ? "contained"
                        : "outlined"
                    }
                    size="small"
                    onClick={() =>
                      setStatusFilter(status)
                    }
                    sx={{
                      textTransform: "none",
                      minWidth: 75,
                      borderColor: "#286B9D",
                      color:
                        statusFilter === status
                          ? "white"
                          : "#286B9D",
                      backgroundColor:
                        statusFilter === status
                          ? "#286B9D"
                          : "transparent",
                      "&:hover": {
                        borderColor: "#1F557D",
                        backgroundColor:
                          statusFilter === status
                            ? "#1F557D"
                            : "#EDF4F9",
                      },
                    }}
                  >
                    {status}
                  </Button>
                ))}
              </Box>
            </CardContent>
          </Card>

          {/* DEVAM LİSTESİ */}
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
                Günlük Devam Kayıtları
              </Typography>

              {filteredRecords.length === 0 ? (
                <Box
                  sx={{
                    py: 6,
                    textAlign: "center",
                  }}
                >
                  <EventAvailableIcon
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
                    Aramanızla eşleşen kayıt bulunamadı.
                  </Typography>
                </Box>
              ) : (
                filteredRecords.map((record, index) => (
                  <Box key={record.id}>
                    <Box
                      sx={{
                        py: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        flexWrap: "wrap",
                      }}
                    >
                      {/* PROFİL */}
                      <Box
                        sx={{
                          width: 46,
                          height: 46,
                          borderRadius: "50%",
                          backgroundColor: "#EDF4F9",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#286B9D",
                        }}
                      >
                        <PersonIcon />
                      </Box>

                      {/* BİLGİ */}
                      <Box
                        sx={{
                          flex: 1,
                          minWidth: 200,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 14,
                            fontWeight: "bold",
                            color: "#17202A",
                          }}
                        >
                          {record.name}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: 11,
                            color: "#64748B",
                            mt: 0.3,
                          }}
                        >
                          {record.department} •{" "}
                          {record.date}
                        </Typography>
                      </Box>

                      {/* GİRİŞ */}
                      <Box
                        sx={{
                          minWidth: 75,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 10,
                            color: "#94A3B8",
                          }}
                        >
                          Giriş
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: 13,
                            fontWeight: 600,
                            color: "#17202A",
                          }}
                        >
                          {record.entry}
                        </Typography>
                      </Box>

                      {/* ÇIKIŞ */}
                      <Box
                        sx={{
                          minWidth: 75,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 10,
                            color: "#94A3B8",
                          }}
                        >
                          Çıkış
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: 13,
                            fontWeight: 600,
                            color: "#17202A",
                          }}
                        >
                          {record.exit}
                        </Typography>
                      </Box>

                      {/* DURUM */}
                      <Chip
                        icon={
                          record.status === "Geldi" ? (
                            <CheckCircleIcon />
                          ) : record.status ===
                            "İzinli" ? (
                            <AccessTimeIcon />
                          ) : (
                            <CancelIcon />
                          )
                        }
                        label={record.status}
                        color={
                          record.status === "Geldi"
                            ? "success"
                            : record.status ===
                              "İzinli"
                            ? "warning"
                            : "error"
                        }
                        size="small"
                        sx={{
                          fontSize: 10,
                          fontWeight: 600,
                        }}
                      />
                    </Box>

                    {index !==
                      filteredRecords.length - 1 && (
                      <Divider />
                    )}
                  </Box>
                ))
              )}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}