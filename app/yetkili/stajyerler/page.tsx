"use client";

import { useMemo, useState } from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import {
  Dashboard,
  People,
  Business,
  Description,
  EventAvailable,
  Folder,
  Campaign,
  Notifications,
  Settings,
  Logout,
  Person,
  Search,
  Add,
  Visibility,
  CalendarMonth,
} from "@mui/icons-material";

import { useRouter } from "next/navigation";

import {
  interns,
  type Intern,
} from "@/app/data/stajyerler";

export default function StajyerlerPage() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "Tümü" | "Aktif" | "İzinli"
  >("Tümü");

  const [internList, setInternList] = useState<Intern[]>(interns);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [newIntern, setNewIntern] = useState({
    name: "",
    email: "",
    department: "",
    position: "",
    status: "Aktif" as "Aktif" | "İzinli",
    start: "",
    end: "",
  });

  // =========================
  // STAJYERLERİ FİLTRELE
  // =========================

  const filteredInterns = useMemo(() => {
    return internList.filter((intern: Intern) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        intern.name.toLowerCase().includes(searchText) ||
        intern.email.toLowerCase().includes(searchText) ||
        intern.department.toLowerCase().includes(searchText) ||
        intern.position.toLowerCase().includes(searchText);

      const matchesStatus =
        statusFilter === "Tümü" ||
        intern.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [internList, search, statusFilter]);

  // =========================
  // RAPOR DURUMU
  // =========================

  const getReportColor = (
    status: Intern["report"]
  ) => {
    if (status === "Onaylandı") {
      return "success";
    }

    if (status === "İnceleniyor") {
      return "warning";
    }

    return "default";
  };

  const menuItems = [
    { icon: <Dashboard />, text: "Kontrol Paneli", path: "/yetkili" },
    { icon: <People />, text: "Stajyerler", path: "/yetkili/stajyerler" },
    { icon: <Business />, text: "Departman Yönetimi", path: "/yetkili/departmanlar" },
    { icon: <Description />, text: "Raporlar", path: "/yetkili/raporlar" },
    { icon: <EventAvailable />, text: "Devam Durumu", path: "/yetkili/devam" },
    { icon: <Folder />, text: "Kütüphane", path: "/yetkili/belgeler" },
    { icon: <Campaign />, text: "Duyurular", path: "/yetkili/duyurular" },
    { icon: <Notifications />, text: "Bildirimler", path: "/yetkili/bildirimler" },
    { icon: <Settings />, text: "Ayarlar", path: "/yetkili/ayarlar" },
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
        {/* LOGO */}
        <Box
          sx={{
            px: 2.2,
            py: 2.2,
            borderBottom: "1px solid rgba(255,255,255,0.15)",
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
          <Typography sx={{ fontSize: 11, opacity: 0.9, mt: 0.3 }}>
            Stajyer Takip Sistemi
          </Typography>
        </Box>

        {/* MENÜ */}
        <Box sx={{ px: 1, py: 1.5 }}>
          {menuItems.map((item) => {
            const active = item.path === "/yetkili/stajyerler";

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
                    backgroundColor: "rgba(255,255,255,0.14)",
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
            );
          })}
        </Box>

        {/* ÇIKIŞ */}
        <Box sx={{ mt: "auto", px: 1, pb: 2 }}>
          <Box
            onClick={() => router.push("/")}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              px: 1.3,
              py: 1.05,
              borderRadius: 1.5,
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.14)",
              },
            }}
          >
            <Logout sx={{ fontSize: 19 }} />
            <Typography sx={{ fontSize: 12, fontWeight: 500 }}>
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
            <Typography sx={{ fontSize: 9, color: "#64748B" }}>
              Yetkili
            </Typography>
          </Box>
        </Box>

        {/* İÇERİK */}
        <Box
          component="main"
          sx={{
            minHeight: "calc(100vh - 58px)",
            backgroundColor: "#F5F7FA",
            px: { xs: 2, md: 4 },
            py: 3,
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
                  fontSize: 13,
                  color: "#64748B",
                }}
              >
                Sistemde kayıtlı stajyerleri buradan yönetebilirsiniz.
              </Typography>
            </Box>

            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={() => setAddDialogOpen(true)}
              sx={{
                backgroundColor: "#286B9D",
                textTransform: "none",
                borderRadius: 1.5,
                px: 2,
                "&:hover": {
                  backgroundColor: "#1F587F",
                },
              }}
            >
              Stajyer Ekle
            </Button>
          </Box>

          {/* ARAMA + FİLTRE */}
          <Card
            elevation={0}
            sx={{
              border: "1px solid #E4E7EC",
              borderRadius: 2,
              mb: 3,
            }}
          >
            <CardContent sx={{ p: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    md: "row",
                  },
                  gap: 2,
                  alignItems: {
                    xs: "stretch",
                    md: "center",
                  },
                }}
              >
                {/* ARAMA */}
                <TextField
                  fullWidth
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Stajyer ara..."
                  size="small"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1.5,
                      backgroundColor: "#FFFFFF",
                    },
                  }}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search
                            sx={{
                              color: "#94A3B8",
                              fontSize: 20,
                            }}
                          />
                        </InputAdornment>
                      ),
                    },
                  }}
                />

                {/* DURUM FİLTRELERİ */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    flexWrap: "wrap",
                  }}
                >
                  {(["Tümü", "Aktif", "İzinli"] as const).map((status) => (
                    <Button
                      key={status}
                      variant={
                        statusFilter === status ? "contained" : "outlined"
                      }
                      onClick={() => setStatusFilter(status)}
                      sx={{
                        minWidth: 75,
                        textTransform: "none",
                        borderRadius: 1.5,
                        ...(statusFilter === status
                          ? {
                              backgroundColor: "#286B9D",
                              "&:hover": {
                                backgroundColor: "#1F587F",
                              },
                            }
                          : {
                              color: "#64748B",
                              borderColor: "#CBD5E1",
                            }),
                      }}
                    >
                      {status}
                    </Button>
                  ))}
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* SONUÇ BİLGİSİ */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                color: "#64748B",
              }}
            >
              {filteredInterns.length} stajyer gösteriliyor
            </Typography>
          </Box>

          {/* STAJYER KARTLARI */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
                xl: "1fr 1fr 1fr",
              },
              gap: 2,
            }}
          >
            {filteredInterns.map((intern: Intern) => (
              <Card
                key={intern.id}
                elevation={0}
                sx={{
                  border: "1px solid #E4E7EC",
                  borderRadius: 2,
                  backgroundColor: "#FFFFFF",
                  transition: "0.2s",
                  "&:hover": {
                    boxShadow: "0 6px 20px rgba(15,39,66,0.08)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <CardContent sx={{ p: 2.5 }}>
                  {/* ÜST KISIM */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: "50%",
                          backgroundColor: "#EDF4F9",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#286B9D",
                          flexShrink: 0,
                        }}
                      >
                        <Person sx={{ fontSize: 25 }} />
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            fontSize: 15,
                            fontWeight: "bold",
                            color: "#0F2742",
                          }}
                        >
                          {intern.name}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: 11,
                            color: "#64748B",
                            mt: 0.3,
                          }}
                        >
                          {intern.position}
                        </Typography>
                      </Box>
                    </Box>

                    <Chip
                      label={intern.status}
                      size="small"
                      color={
                        intern.status === "Aktif" ? "success" : "warning"
                      }
                      sx={{
                        fontSize: 10,
                        fontWeight: 600,
                      }}
                    />
                  </Box>

                  {/* BİLGİLER */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1.2,
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 11,
                          color: "#64748B",
                          width: 75,
                        }}
                      >
                        Pozisyon
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 11,
                          color: "#17202A",
                          fontWeight: 500,
                        }}
                      >
                        {intern.position}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 11,
                          color: "#64748B",
                          width: 75,
                        }}
                      >
                        Departman
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 11,
                          color: "#17202A",
                          fontWeight: 500,
                        }}
                      >
                        {intern.department}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <CalendarMonth
                        sx={{
                          fontSize: 17,
                          color: "#286B9D",
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize: 11,
                          color: "#64748B",
                        }}
                      >
                        {intern.start}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 11,
                          color: "#94A3B8",
                        }}
                      >
                        →
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 11,
                          color: "#64748B",
                        }}
                      >
                        {intern.end}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      borderTop: "1px solid #EEF1F5",
                      mb: 2,
                    }}
                  />

                  {/* ALT İSTATİSTİKLER */}
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 1.5,
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#F8FAFC",
                        borderRadius: 1.5,
                        p: 1.3,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.7,
                          mb: 0.5,
                        }}
                      >
                        <Description
                          sx={{
                            fontSize: 16,
                            color: "#286B9D",
                          }}
                        />

                        <Typography
                          sx={{
                            fontSize: 10,
                            color: "#64748B",
                          }}
                        >
                          Rapor
                        </Typography>
                      </Box>

                      <Typography
                        sx={{
                          fontSize: 13,
                          fontWeight: "bold",
                          color: "#17202A",
                        }}
                      >
                        {intern.report}
                      </Typography>

                      <Chip
                        label={intern.report}
                        size="small"
                        color={getReportColor(intern.report)}
                        sx={{
                          mt: 0.7,
                          fontSize: 9,
                          height: 22,
                        }}
                      />
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: "#F8FAFC",
                        borderRadius: 1.5,
                        p: 1.3,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 10,
                          color: "#64748B",
                          mb: 0.5,
                        }}
                      >
                        Devamsızlık
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 13,
                          fontWeight: "bold",
                          color: "#17202A",
                        }}
                      >
                        {intern.attendance}
                      </Typography>
                    </Box>
                  </Box>

                  {/* DETAY BUTONU */}
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<Visibility />}
                    onClick={() =>
                      router.push(`/yetkili/stajyerler/${intern.id}`)
                    }
                    sx={{
                      textTransform: "none",
                      borderRadius: 1.5,
                      color: "#286B9D",
                      borderColor: "#CBD5E1",
                      "&:hover": {
                        borderColor: "#286B9D",
                        backgroundColor: "#F4F8FB",
                      },
                    }}
                  >
                    Stajyer Detaylarını Gör
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* STAJYER EKLE DİYALOĞU */}
          <Dialog
            open={addDialogOpen}
            onClose={() => setAddDialogOpen(false)}
            fullWidth
            maxWidth="sm"
          >
            <DialogTitle
              sx={{
                fontWeight: "bold",
                color: "#0F2742",
                borderBottom: "1px solid #E4E7EC",
              }}
            >
              Yeni Stajyer Ekle
            </DialogTitle>

            <DialogContent sx={{ pt: 3 }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  gap: 2,
                  mt: 0.5,
                }}
              >
                <TextField
                  label="Ad Soyad"
                  fullWidth
                  required
                  value={newIntern.name}
                  onChange={(e) =>
                    setNewIntern((prev) => ({ ...prev, name: e.target.value }))
                  }
                />

                <TextField
                  label="E-posta"
                  type="email"
                  fullWidth
                  required
                  value={newIntern.email}
                  onChange={(e) =>
                    setNewIntern((prev) => ({ ...prev, email: e.target.value }))
                  }
                />

                <TextField
                  label="Pozisyon"
                  fullWidth
                  required
                  value={newIntern.position}
                  onChange={(e) =>
                    setNewIntern((prev) => ({
                      ...prev,
                      position: e.target.value,
                    }))
                  }
                />

                <TextField
                  label="Departman"
                  fullWidth
                  required
                  value={newIntern.department}
                  onChange={(e) =>
                    setNewIntern((prev) => ({
                      ...prev,
                      department: e.target.value,
                    }))
                  }
                />

                <TextField
                  select
                  label="Durum"
                  fullWidth
                  value={newIntern.status}
                  onChange={(e) =>
                    setNewIntern((prev) => ({
                      ...prev,
                      status: e.target.value as "Aktif" | "İzinli",
                    }))
                  }
                >
                  <MenuItem value="Aktif">Aktif</MenuItem>
                  <MenuItem value="İzinli">İzinli</MenuItem>
                </TextField>

                <TextField
                  label="Başlangıç Tarihi"
                  type="date"
                  fullWidth
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                  value={newIntern.start}
                  onChange={(e) =>
                    setNewIntern((prev) => ({ ...prev, start: e.target.value }))
                  }
                />

                <TextField
                  label="Bitiş Tarihi"
                  type="date"
                  fullWidth
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                  value={newIntern.end}
                  onChange={(e) =>
                    setNewIntern((prev) => ({ ...prev, end: e.target.value }))
                  }
                />
              </Box>
            </DialogContent>

            <DialogActions
              sx={{
                px: 3,
                py: 2,
                borderTop: "1px solid #E4E7EC",
              }}
            >
              <Button
                onClick={() => setAddDialogOpen(false)}
                sx={{
                  textTransform: "none",
                  color: "#64748B",
                }}
              >
                Vazgeç
              </Button>

              <Button
                variant="contained"
                disabled={
                  !newIntern.name.trim() ||
                  !newIntern.email.trim() ||
                  !newIntern.position.trim() ||
                  !newIntern.department.trim()
                }
                onClick={() => {
                  const createdIntern = {
                    id: Date.now(),
                    name: newIntern.name.trim(),
                    email: newIntern.email.trim(),
                    department: newIntern.department.trim(),
                    position: newIntern.position.trim(),
                    status: newIntern.status,
                    start: newIntern.start || "Belirtilmedi",
                    end: newIntern.end || "Belirtilmedi",
                    report: "İnceleniyor",
                    attendance: "0 Gün",
                  } as Intern;

                  setInternList((prev) => [createdIntern, ...prev]);
                  setSearch("");
                  setStatusFilter("Tümü");
                  setNewIntern({
                    name: "",
                    email: "",
                    department: "",
                    position: "",
                    status: "Aktif",
                    start: "",
                    end: "",
                  });
                  setAddDialogOpen(false);
                }}
                sx={{
                  textTransform: "none",
                  borderRadius: 1.5,
                  backgroundColor: "#286B9D",
                  "&:hover": {
                    backgroundColor: "#1F587F",
                  },
                }}
              >
                Stajyeri Ekle
              </Button>
            </DialogActions>
          </Dialog>

          {/* SONUÇ YOK */}
          {filteredInterns.length === 0 && (
            <Card
              elevation={0}
              sx={{
                border: "1px solid #E4E7EC",
                borderRadius: 2,
                mt: 2,
              }}
            >
              <CardContent
                sx={{
                  py: 6,
                  textAlign: "center",
                }}
              >
                <Search
                  sx={{
                    fontSize: 45,
                    color: "#CBD5E1",
                    mb: 1,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#0F2742",
                    mb: 0.5,
                  }}
                >
                  Stajyer bulunamadı
                </Typography>

                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#64748B",
                  }}
                >
                  Arama veya filtre kriterlerinizi değiştirmeyi deneyin.
                </Typography>
              </CardContent>
            </Card>
          )}
        </Box>
      </Box>
    </Box>
  );
}