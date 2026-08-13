"use client";

import { useMemo, useState } from "react";

import {
  Box,
  Button,
  Card,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import {
  Dashboard,
  People,
  Description,
  EventAvailable,
  Folder,
  Campaign,
  Notifications,
  Settings,
  Logout,
  Person,
  Search,
  Visibility,
  ArrowBack,
  Close,
  Email,
  Business,
  CalendarMonth,
  Work,
} from "@mui/icons-material";

import { useRouter } from "next/navigation";

type Intern = {
  name: string;
  email: string;
  department: string;
  position: string;
  start: string;
  end: string;
  status: "Aktif" | "İzinli";
  report: string;
  attendance: string;
};

export default function StajyerlerPage() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [selectedIntern, setSelectedIntern] =
    useState<Intern | null>(null);

  const menuItems = [
    {
      icon: <Dashboard />,
      text: "Kontrol Paneli",
      path: "/yetkili",
    },
    {
      icon: <People />,
      text: "Stajyerler",
      path: "/yetkili/stajyerler",
    },
    {
      icon: <Description />,
      text: "Raporlar",
      path: "/yetkili/raporlar",
    },
    {
      icon: <EventAvailable />,
      text: "Devam Durumu",
      path: "/yetkili/devam",
    },
    {
      icon: <Folder />,
      text: "Belgeler",
      path: "/yetkili/belgeler",
    },
    {
      icon: <Campaign />,
      text: "Duyurular",
      path: "/yetkili/duyurular",
    },
    {
      icon: <Notifications />,
      text: "Bildirimler",
      path: "/yetkili/bildirimler",
    },
    {
      icon: <Settings />,
      text: "Ayarlar",
      path: "/yetkili/ayarlar",
    },
  ];

  const interns: Intern[] = [
    {
      name: "Zeliha Koyuncu",
      email: "zeliha@example.com",
      department: "Yazılım",
      position: "Yazılım Mühendisliği Stajyeri",
      start: "10 Ağustos 2026",
      end: "04 Eylül 2026",
      status: "Aktif",
      report: "İnceleniyor",
      attendance: "12 / 20 gün",
    },
    {
      name: "Ahmet Yılmaz",
      email: "ahmet@example.com",
      department: "Elektrik",
      position: "Elektrik-Elektronik Stajyeri",
      start: "10 Ağustos 2026",
      end: "04 Eylül 2026",
      status: "Aktif",
      report: "Onaylandı",
      attendance: "12 / 20 gün",
    },
    {
      name: "Elif Demir",
      email: "elif@example.com",
      department: "Yazılım",
      position: "Frontend Stajyeri",
      start: "11 Ağustos 2026",
      end: "05 Eylül 2026",
      status: "Aktif",
      report: "Bekliyor",
      attendance: "11 / 20 gün",
    },
    {
      name: "Mehmet Kaya",
      email: "mehmet@example.com",
      department: "Ar-Ge",
      position: "Ar-Ge Stajyeri",
      start: "08 Ağustos 2026",
      end: "02 Eylül 2026",
      status: "İzinli",
      report: "Onaylandı",
      attendance: "10 / 20 gün",
    },
    {
      name: "Ayşe Çelik",
      email: "ayse@example.com",
      department: "Üretim",
      position: "Üretim Stajyeri",
      start: "12 Ağustos 2026",
      end: "08 Eylül 2026",
      status: "Aktif",
      report: "Bekliyor",
      attendance: "9 / 20 gün",
    },
  ];

  // ARAMA
  const filteredInterns = useMemo(() => {
    const searchText = search.trim().toLocaleLowerCase("tr-TR");

    if (!searchText) {
      return interns;
    }

    return interns.filter((intern) => {
      return (
        intern.name
          .toLocaleLowerCase("tr-TR")
          .includes(searchText) ||
        intern.email
          .toLocaleLowerCase("tr-TR")
          .includes(searchText) ||
        intern.department
          .toLocaleLowerCase("tr-TR")
          .includes(searchText) ||
        intern.position
          .toLocaleLowerCase("tr-TR")
          .includes(searchText)
      );
    });
  }, [search]);

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
            const active =
              item.path === "/yetkili/stajyerler";

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
            <Logout sx={{ fontSize: 19 }} />

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

      {/* ANA ALAN */}
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
          <IconButton
            onClick={() =>
              router.push("/yetkili/bildirimler")
            }
            sx={{
              mr: 1,
              color: "#286B9D",
            }}
          >
            <Notifications />
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
            <Person sx={{ fontSize: 20 }} />
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
          {/* GERİ DÖN */}
          <Box
            onClick={() => router.push("/yetkili")}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.7,
              color: "#286B9D",
              cursor: "pointer",
              mb: 2,
            }}
          >
            <ArrowBack sx={{ fontSize: 18 }} />

            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              Kontrol Paneline Dön
            </Typography>
          </Box>

          {/* BAŞLIK */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: {
                xs: "flex-start",
                md: "center",
              },
              flexDirection: {
                xs: "column",
                md: "row",
              },
              gap: 2,
              mb: 3,
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
                Stajyerler
              </Typography>

              <Typography
                sx={{
                  color: "#64748B",
                  fontSize: 13,
                }}
              >
                Sistemde kayıtlı stajyerleri buradan
                görüntüleyebilirsiniz.
              </Typography>
            </Box>

            <Chip
              icon={<People />}
              label={`${filteredInterns.length} Stajyer`}
              sx={{
                backgroundColor: "#EAF2F8",
                color: "#286B9D",
                fontWeight: 600,
              }}
            />
          </Box>

          {/* ARAMA */}
          <Card
            elevation={0}
            sx={{
              border: "1px solid #E4E7EC",
              borderRadius: 2,
              mb: 2,
            }}
          >
            <Box sx={{ p: 2 }}>
              <TextField
                fullWidth
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Stajyer adı, e-posta veya departman ara..."
                size="small"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search
                          sx={{
                            color: "#94A3B8",
                          }}
                        />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>
          </Card>

          {/* ARAMA SONUCU */}
          {search.trim() && (
            <Typography
              sx={{
                fontSize: 12,
                color: "#64748B",
                mb: 2,
              }}
            >
              "{search}" için{" "}
              <strong>{filteredInterns.length}</strong>{" "}
              sonuç bulundu.
            </Typography>
          )}

          {/* STAJYER LİSTESİ */}
          <Card
            elevation={0}
            sx={{
              border: "1px solid #E4E7EC",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            {/* BAŞLIK */}
            <Box
              sx={{
                px: 2.5,
                py: 2,
                borderBottom: "1px solid #E4E7EC",
                backgroundColor: "#FAFBFC",
              }}
            >
              <Typography
                sx={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#0F2742",
                }}
              >
                Stajyer Listesi
              </Typography>
            </Box>

            {/* LİSTE */}
            {filteredInterns.length > 0 ? (
              filteredInterns.map((intern, index) => (
                <Box
                  key={intern.email}
                  sx={{
                    px: 2.5,
                    py: 2,
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      md: "2fr 1.2fr 1.5fr 1.2fr 1fr auto",
                    },
                    alignItems: "center",
                    gap: 2,

                    borderBottom:
                      index !== filteredInterns.length - 1
                        ? "1px solid #EEF1F5"
                        : "none",

                    "&:hover": {
                      backgroundColor: "#FAFCFE",
                    },
                  }}
                >
                  {/* STAJYER */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        minWidth: 40,
                        borderRadius: "50%",
                        backgroundColor: "#EDF4F9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#286B9D",
                      }}
                    >
                      <Person sx={{ fontSize: 21 }} />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: 13,
                          fontWeight: "bold",
                          color: "#1E293B",
                        }}
                      >
                        {intern.name}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 10,
                          color: "#64748B",
                        }}
                      >
                        {intern.email}
                      </Typography>
                    </Box>
                  </Box>

                  {/* DEPARTMAN */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: 10,
                        color: "#94A3B8",
                        mb: 0.3,
                      }}
                    >
                      Departman
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      {intern.department}
                    </Typography>
                  </Box>

                  {/* POZİSYON */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: 10,
                        color: "#94A3B8",
                        mb: 0.3,
                      }}
                    >
                      Pozisyon
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 12,
                      }}
                    >
                      {intern.position}
                    </Typography>
                  </Box>

                  {/* TARİH */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: 10,
                        color: "#94A3B8",
                        mb: 0.3,
                      }}
                    >
                      Staj Tarihi
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 11,
                      }}
                    >
                      {intern.start}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 10,
                        color: "#64748B",
                      }}
                    >
                      → {intern.end}
                    </Typography>
                  </Box>

                  {/* DURUM */}
                  <Chip
                    label={intern.status}
                    size="small"
                    color={
                      intern.status === "Aktif"
                        ? "success"
                        : "warning"
                    }
                    sx={{
                      width: "fit-content",
                      fontSize: 10,
                      fontWeight: 600,
                    }}
                  />

                  {/* DETAY */}
                  <IconButton
                    onClick={() =>
                      setSelectedIntern(intern)
                    }
                    sx={{
                      color: "#286B9D",
                      backgroundColor: "#EDF4F9",

                      "&:hover": {
                        backgroundColor: "#DCEBF4",
                      },
                    }}
                  >
                    <Visibility
                      sx={{
                        fontSize: 19,
                      }}
                    />
                  </IconButton>
                </Box>
              ))
            ) : (
              <Box
                sx={{
                  py: 7,
                  textAlign: "center",
                }}
              >
                <Search
                  sx={{
                    fontSize: 42,
                    color: "#CBD5E1",
                    mb: 1,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "#475569",
                    mb: 0.5,
                  }}
                >
                  Stajyer bulunamadı
                </Typography>

                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#94A3B8",
                  }}
                >
                  Arama kriterlerinizi değiştirerek tekrar
                  deneyebilirsiniz.
                </Typography>
              </Box>
            )}
          </Card>

          {/* ALT BİLGİ */}
          <Typography
            sx={{
              textAlign: "center",
              color: "#94A3B8",
              fontSize: 11,
              mt: 3,
            }}
          >
            Stajyer bilgileri yetkili kullanıcılar tarafından
            görüntülenmektedir.
          </Typography>
        </Box>
      </Box>

      {/* STAJYER DETAY PENCERESİ */}
      <Dialog
        open={selectedIntern !== null}
        onClose={() => setSelectedIntern(null)}
        fullWidth
        maxWidth="sm"
      >
        {selectedIntern && (
          <>
            <DialogTitle
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "#0F2742",
                fontWeight: "bold",
              }}
            >
              Stajyer Detayları

              <IconButton
                onClick={() => setSelectedIntern(null)}
              >
                <Close />
              </IconButton>
            </DialogTitle>

            <DialogContent dividers>
              {/* PROFİL */}
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
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    backgroundColor: "#EDF4F9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#286B9D",
                  }}
                >
                  <Person sx={{ fontSize: 34 }} />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "#0F2742",
                    }}
                  >
                    {selectedIntern.name}
                  </Typography>

                  <Chip
                    label={selectedIntern.status}
                    size="small"
                    color={
                      selectedIntern.status === "Aktif"
                        ? "success"
                        : "warning"
                    }
                    sx={{
                      mt: 0.5,
                      fontWeight: 600,
                    }}
                  />
                </Box>
              </Box>

              {/* BİLGİLER */}
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
                <Box
                  sx={{
                    p: 2,
                    backgroundColor: "#F8FAFC",
                    borderRadius: 2,
                  }}
                >
                  <Email
                    sx={{
                      fontSize: 20,
                      color: "#286B9D",
                      mb: 0.5,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: 10,
                      color: "#94A3B8",
                    }}
                  >
                    E-posta
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {selectedIntern.email}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    p: 2,
                    backgroundColor: "#F8FAFC",
                    borderRadius: 2,
                  }}
                >
                  <Business
                    sx={{
                      fontSize: 20,
                      color: "#286B9D",
                      mb: 0.5,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: 10,
                      color: "#94A3B8",
                    }}
                  >
                    Departman
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {selectedIntern.department}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    p: 2,
                    backgroundColor: "#F8FAFC",
                    borderRadius: 2,
                  }}
                >
                  <Work
                    sx={{
                      fontSize: 20,
                      color: "#286B9D",
                      mb: 0.5,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: 10,
                      color: "#94A3B8",
                    }}
                  >
                    Pozisyon
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {selectedIntern.position}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    p: 2,
                    backgroundColor: "#F8FAFC",
                    borderRadius: 2,
                  }}
                >
                  <CalendarMonth
                    sx={{
                      fontSize: 20,
                      color: "#286B9D",
                      mb: 0.5,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: 10,
                      color: "#94A3B8",
                    }}
                  >
                    Staj Tarihi
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {selectedIntern.start}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 11,
                      color: "#64748B",
                    }}
                  >
                    → {selectedIntern.end}
                  </Typography>
                </Box>
              </Box>

              {/* RAPOR VE DEVAM */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                  },
                  gap: 2,
                  mt: 2,
                }}
              >
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    border: "1px solid #E4E7EC",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 10,
                      color: "#94A3B8",
                      mb: 0.5,
                    }}
                  >
                    Son Rapor Durumu
                  </Typography>

                  <Chip
                    label={selectedIntern.report}
                    size="small"
                    color={
                      selectedIntern.report ===
                      "Onaylandı"
                        ? "success"
                        : selectedIntern.report ===
                          "Bekliyor"
                        ? "warning"
                        : "info"
                    }
                    sx={{
                      fontWeight: 600,
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    border: "1px solid #E4E7EC",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 10,
                      color: "#94A3B8",
                      mb: 0.5,
                    }}
                  >
                    Devam Durumu
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: "bold",
                      color: "#0F2742",
                    }}
                  >
                    {selectedIntern.attendance}
                  </Typography>
                </Box>
              </Box>
            </DialogContent>

            <DialogActions
              sx={{
                p: 2,
              }}
            >
              <Button
                onClick={() => setSelectedIntern(null)}
                variant="outlined"
                sx={{
                  borderColor: "#286B9D",
                  color: "#286B9D",
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