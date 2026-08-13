"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Typography,
} from "@mui/material";

import {
  ArrowBackOutlined,
  GroupsOutlined,
  VisibilityOutlined,
  EventBusyOutlined,
  DescriptionOutlined,
} from "@mui/icons-material";

import { useRouter } from "next/navigation";

const stajyerler = [
  {
    id: 1,
    adSoyad: "Zeynep Kaya",
    universite: "İstanbul Gelişim Üniversitesi",
    bolum: "Yazılım Mühendisliği",
    baslangic: "10 Ağustos 2026",
    bitis: "5 Eylül 2026",
    devamsizlik: 1,
    rapor: "3 / 5",
    durum: "Aktif",
  },
  {
    id: 2,
    adSoyad: "Mehmet Demir",
    universite: "Yıldız Teknik Üniversitesi",
    bolum: "Bilgisayar Mühendisliği",
    baslangic: "10 Ağustos 2026",
    bitis: "5 Eylül 2026",
    devamsizlik: 0,
    rapor: "4 / 5",
    durum: "Aktif",
  },
  {
    id: 3,
    adSoyad: "Elif Çelik",
    universite: "İstanbul Üniversitesi",
    bolum: "Yazılım Mühendisliği",
    baslangic: "10 Ağustos 2026",
    bitis: "5 Eylül 2026",
    devamsizlik: 2,
    rapor: "2 / 5",
    durum: "Aktif",
  },
  {
    id: 4,
    adSoyad: "Burak Yılmaz",
    universite: "Marmara Üniversitesi",
    bolum: "Bilgisayar Mühendisliği",
    baslangic: "10 Ağustos 2026",
    bitis: "5 Eylül 2026",
    devamsizlik: 0,
    rapor: "5 / 5",
    durum: "Aktif",
  },
  {
    id: 5,
    adSoyad: "Sena Aydın",
    universite: "İstanbul Teknik Üniversitesi",
    bolum: "Yazılım Mühendisliği",
    baslangic: "10 Ağustos 2026",
    bitis: "5 Eylül 2026",
    devamsizlik: 1,
    rapor: "3 / 5",
    durum: "Aktif",
  },
];

export default function StajyerlerPage() {
  const router = useRouter();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f5f7fa",
      }}
    >
      {/* =========================
          ÜST BAR
      ========================= */}

      <Box
        sx={{
          height: 80,
          background: "#ffffff",
          borderBottom: "1px solid #dfe5ec",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: {
            xs: 2,
            md: 4,
          },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "1.25rem",
              fontWeight: 800,
              color: "#0f2742",
            }}
          >
            Mühendis Paneli
          </Typography>

          <Typography
            sx={{
              color: "#64748b",
              fontSize: "0.8rem",
            }}
          >
            Stajyerlerim
          </Typography>
        </Box>

        <Button
          variant="outlined"
          startIcon={<ArrowBackOutlined />}
          onClick={() => router.push("/engineer")}
          sx={{
            borderColor: "#cbd5e1",
            color: "#0f2742",
            textTransform: "none",
            borderRadius: 1.5,

            "&:hover": {
              borderColor: "#0f2742",
              background: "#f5f8fb",
            },
          }}
        >
          Ana Sayfa
        </Button>
      </Box>

      {/* =========================
          ANA İÇERİK
      ========================= */}

      <Box
        sx={{
          p: {
            xs: 2,
            md: 4,
          },
        }}
      >
        {/* BAŞLIK */}

        <Box
          sx={{
            mb: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              mb: 1,
            }}
          >
            <GroupsOutlined
              sx={{
                color: "#1f6fae",
                fontSize: 32,
              }}
            />

            <Typography
              sx={{
                fontSize: {
                  xs: "1.7rem",
                  md: "2rem",
                },
                fontWeight: 800,
                color: "#0f2742",
              }}
            >
              Stajyerlerim
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "#64748b",
            }}
          >
            Size bağlı stajyerleri ve staj süreçlerini
            buradan takip edebilirsiniz.
          </Typography>
        </Box>

        {/* ÖZET */}

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
          {/* TOPLAM STAJYER */}

          <Card
            elevation={0}
            sx={{
              border: "1px solid #dfe5ec",
              borderRadius: 2,
              background: "#ffffff",
            }}
          >
            <CardContent>
              <GroupsOutlined
                sx={{
                  color: "#1f6fae",
                  fontSize: 30,
                  mb: 1,
                }}
              />

              <Typography
                sx={{
                  color: "#64748b",
                  fontSize: "0.85rem",
                }}
              >
                Toplam Stajyer
              </Typography>

              <Typography
                sx={{
                  color: "#0f2742",
                  fontSize: "2rem",
                  fontWeight: 800,
                }}
              >
                {stajyerler.length}
              </Typography>
            </CardContent>
          </Card>

          {/* DEVAMSIZLIK */}

          <Card
            elevation={0}
            sx={{
              border: "1px solid #dfe5ec",
              borderRadius: 2,
              background: "#ffffff",
            }}
          >
            <CardContent>
              <EventBusyOutlined
                sx={{
                  color: "#e65100",
                  fontSize: 30,
                  mb: 1,
                }}
              />

              <Typography
                sx={{
                  color: "#64748b",
                  fontSize: "0.85rem",
                }}
              >
                Devamsızlığı Olan
              </Typography>

              <Typography
                sx={{
                  color: "#0f2742",
                  fontSize: "2rem",
                  fontWeight: 800,
                }}
              >
                {
                  stajyerler.filter(
                    (stajyer) => stajyer.devamsizlik > 0
                  ).length
                }
              </Typography>
            </CardContent>
          </Card>

          {/* RAPORLAR */}

          <Card
            elevation={0}
            sx={{
              border: "1px solid #dfe5ec",
              borderRadius: 2,
              background: "#ffffff",
            }}
          >
            <CardContent>
              <DescriptionOutlined
                sx={{
                  color: "#2e7d32",
                  fontSize: 30,
                  mb: 1,
                }}
              />

              <Typography
                sx={{
                  color: "#64748b",
                  fontSize: "0.85rem",
                }}
              >
                Stajyer Sayısı
              </Typography>

              <Typography
                sx={{
                  color: "#0f2742",
                  fontSize: "2rem",
                  fontWeight: 800,
                }}
              >
                {stajyerler.length}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* STAJYER LİSTESİ */}

        <Card
          elevation={0}
          sx={{
            border: "1px solid #dfe5ec",
            borderRadius: 2,
            background: "#ffffff",
          }}
        >
          <CardContent
            sx={{
              p: {
                xs: 2,
                md: 3,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "#0f2742",
                mb: 0.5,
              }}
            >
              Stajyer Listesi
            </Typography>

            <Typography
              sx={{
                color: "#64748b",
                fontSize: "0.85rem",
                mb: 2,
              }}
            >
              Size bağlı stajyerlerin güncel durumlarını
              görüntüleyebilirsiniz.
            </Typography>

            <Divider sx={{ mb: 2 }} />

            {/* LİSTE */}

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
              }}
            >
              {stajyerler.map((stajyer) => (
                <Box
                  key={stajyer.id}
                  sx={{
                    border: "1px solid #e2e8f0",
                    borderRadius: 2,
                    p: {
                      xs: 2,
                      md: 2.5,
                    },
                    transition: "all 0.2s ease",

                    "&:hover": {
                      borderColor: "#b8c7d9",
                      boxShadow:
                        "0 4px 15px rgba(15,39,66,0.06)",
                    },
                  }}
                >
                  {/* ÜST KISIM */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: {
                        xs: "flex-start",
                        sm: "center",
                      },
                      flexDirection: {
                        xs: "column",
                        sm: "row",
                      },
                      gap: 1.5,
                    }}
                  >
                    {/* AD */}

                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 800,
                          color: "#0f2742",
                          fontSize: "1.05rem",
                        }}
                      >
                        {stajyer.adSoyad}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#64748b",
                          fontSize: "0.85rem",
                          mt: 0.3,
                        }}
                      >
                        {stajyer.bolum}
                      </Typography>
                    </Box>

                    {/* DURUM */}

                    <Chip
                      label={stajyer.durum}
                      size="small"
                      sx={{
                        background: "#dcfce7",
                        color: "#166534",
                        fontWeight: 700,
                      }}
                    />
                  </Box>

                  {/* DETAYLAR */}

                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, 1fr)",
                        md: "repeat(4, 1fr)",
                      },
                      gap: 2,
                      mt: 2,
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          color: "#94a3b8",
                          fontSize: "0.75rem",
                          mb: 0.4,
                        }}
                      >
                        Üniversite
                      </Typography>

                      <Typography
                        sx={{
                          color: "#334155",
                          fontSize: "0.85rem",
                        }}
                      >
                        {stajyer.universite}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          color: "#94a3b8",
                          fontSize: "0.75rem",
                          mb: 0.4,
                        }}
                      >
                        Staj Tarihi
                      </Typography>

                      <Typography
                        sx={{
                          color: "#334155",
                          fontSize: "0.85rem",
                        }}
                      >
                        {stajyer.baslangic}
                        <br />
                        {stajyer.bitis}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          color: "#94a3b8",
                          fontSize: "0.75rem",
                          mb: 0.4,
                        }}
                      >
                        Devamsızlık
                      </Typography>

                      <Typography
                        sx={{
                          color:
                            stajyer.devamsizlik > 0
                              ? "#c2410c"
                              : "#166534",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                        }}
                      >
                        {stajyer.devamsizlik} gün
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          color: "#94a3b8",
                          fontSize: "0.75rem",
                          mb: 0.4,
                        }}
                      >
                        Rapor
                      </Typography>

                      <Typography
                        sx={{
                          color: "#334155",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                        }}
                      >
                        {stajyer.rapor}
                      </Typography>
                    </Box>
                  </Box>

                  {/* BUTON */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      mt: 2,
                    }}
                  >
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<VisibilityOutlined />}
                      onClick={() =>
                        alert(
                          `${stajyer.adSoyad} detay sayfası daha sonra oluşturulacak.`
                        )
                      }
                      sx={{
                        borderColor: "#cbd5e1",
                        color: "#0f2742",
                        textTransform: "none",
                        borderRadius: 1.5,

                        "&:hover": {
                          borderColor: "#0f2742",
                          background: "#f5f8fb",
                        },
                      }}
                    >
                      Detayları Gör
                    </Button>
                  </Box>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}