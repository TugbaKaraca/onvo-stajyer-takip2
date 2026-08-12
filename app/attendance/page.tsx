"use client";

import {
  Box,
  Card,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";

import {
  Dashboard,
  Person,
  Assignment,
  Description,
  MenuBook,
  EventBusy,
  Folder,
  Campaign,
  Notifications,
  Settings,
  Logout,
  AccessTime,
  CheckCircle,
  Cancel,
  Warning,
} from "@mui/icons-material";

import { useRouter } from "next/navigation";

export default function AttendancePage() {
  const router = useRouter();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fb",
        display: "flex",
      }}
    >
      {/* SOL MENÜ */}
      <Box
        sx={{
          width: 240,
          background: "linear-gradient(180deg, #164aa3 0%, #2864c7 100%)",
          color: "white",
          minHeight: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          zIndex: 10,
        }}
      >
        {/* LOGO */}
        <Box
          sx={{
            px: 3,
            py: 3,
            borderBottom: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              letterSpacing: 1,
            }}
          >
            ONVO
          </Typography>

          <Typography
            variant="caption"
            sx={{
              opacity: 0.8,
            }}
          >
            Stajyer Takip Sistemi
          </Typography>
        </Box>

        {/* MENÜ */}
        <Box sx={{ px: 1.5, py: 2, flex: 1 }}>
          <SidebarItem
            icon={<Dashboard />}
            text="Kontrol Paneli"
            onClick={() => router.push("/dashboard")}
          />

          <SidebarItem
            icon={<Person />}
            text="Profil"
            onClick={() => router.push("/profile")}
          />

          <SidebarItem
            icon={<Assignment />}
            text="Staj Bilgilerim"
            onClick={() => router.push("/internship")}
          />

          <SidebarItem
            icon={<Description />}
            text="Günlük Rapor"
            onClick={() => router.push("/daily-report")}
          />

          <SidebarItem
            icon={<MenuBook />}
            text="Rapor Geçmişi"
            onClick={() => router.push("/reports")}
          />

          {/* AKTİF SAYFA */}
          <SidebarItem
            icon={<EventBusy />}
            text="Devam Durumu"
            active
            onClick={() => router.push("/attendance")}
          />

          <SidebarItem
            icon={<Folder />}
            text="Belgelerim"
            onClick={() => router.push("/documents")}
          />

          <SidebarItem
            icon={<Campaign />}
            text="Duyurular"
            onClick={() => router.push("/announcements")}
          />

          <SidebarItem
            icon={<Notifications />}
            text="Bildirimler"
            onClick={() => router.push("/notifications")}
          />

          <SidebarItem
            icon={<Settings />}
            text="Ayarlar"
            onClick={() => router.push("/settings")}
          />
        </Box>

        {/* ÇIKIŞ */}
        <Box sx={{ px: 1.5, pb: 2 }}>
          <SidebarItem
            icon={<Logout />}
            text="Çıkış Yap"
            onClick={() => router.push("/")}
          />
        </Box>
      </Box>

      {/* ANA İÇERİK */}
      <Box
        sx={{
          marginLeft: "240px",
          width: "calc(100% - 240px)",
          minHeight: "100vh",
        }}
      >
        {/* ÜST BAR */}
        <Paper
          elevation={0}
          sx={{
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: 4,
            borderBottom: "1px solid #e5e7eb",
            borderRadius: 0,
            backgroundColor: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <IconButton>
              <Notifications />
            </IconButton>

            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                backgroundColor: "#dbe7fb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Person sx={{ color: "#164aa3" }} />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: 14,
                }}
              >
                Zeliha Koyuncu
              </Typography>

              <Typography
                sx={{
                  fontSize: 11,
                  color: "#777",
                }}
              >
                Stajyer
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* SAYFA İÇERİĞİ */}
        <Box
          sx={{
            p: 4,
          }}
        >
          <Typography
            sx={{
              fontSize: 28,
              fontWeight: "bold",
              color: "#17365f",
              mb: 0.5,
            }}
          >
            Devam Durumu
          </Typography>

          <Typography
            sx={{
              color: "#667085",
              fontSize: 14,
              mb: 3,
            }}
          >
            Staj süreniz boyunca devam durumunuzu buradan takip edebilirsiniz.
          </Typography>

          {/* ÖZET KARTLARI */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(4, 1fr)",
              },
              gap: 2,
              mb: 3,
            }}
          >
            {/* TOPLAM */}
            <Card
              elevation={0}
              sx={{
                p: 2.5,
                border: "1px solid #e4e7ec",
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontSize: 12, color: "#667085" }}>
                  Toplam Staj Günü
                </Typography>

                <AccessTime sx={{ color: "#1769e0", fontSize: 22 }} />
              </Box>

              <Typography
                sx={{
                  fontSize: 25,
                  fontWeight: "bold",
                  mt: 1,
                }}
              >
                20 Gün
              </Typography>
            </Card>

            {/* GELİNEN */}
            <Card
              elevation={0}
              sx={{
                p: 2.5,
                border: "1px solid #e4e7ec",
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontSize: 12, color: "#667085" }}>
                  Gelinen Gün
                </Typography>

                <CheckCircle sx={{ color: "#16a34a", fontSize: 22 }} />
              </Box>

              <Typography
                sx={{
                  fontSize: 25,
                  fontWeight: "bold",
                  mt: 1,
                  color: "#16a34a",
                }}
              >
                12 Gün
              </Typography>
            </Card>

            {/* DEVAMSIZLIK */}
            <Card
              elevation={0}
              sx={{
                p: 2.5,
                border: "1px solid #e4e7ec",
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontSize: 12, color: "#667085" }}>
                  Devamsızlık
                </Typography>

                <Cancel sx={{ color: "#dc2626", fontSize: 22 }} />
              </Box>

              <Typography
                sx={{
                  fontSize: 25,
                  fontWeight: "bold",
                  mt: 1,
                  color: "#dc2626",
                }}
              >
                0 Gün
              </Typography>
            </Card>

            {/* KALAN */}
            <Card
              elevation={0}
              sx={{
                p: 2.5,
                border: "1px solid #e4e7ec",
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontSize: 12, color: "#667085" }}>
                  Kalan Staj
                </Typography>

                <Warning sx={{ color: "#f59e0b", fontSize: 22 }} />
              </Box>

              <Typography
                sx={{
                  fontSize: 25,
                  fontWeight: "bold",
                  mt: 1,
                  color: "#f59e0b",
                }}
              >
                8 Gün
              </Typography>
            </Card>
          </Box>

          {/* ALT BÖLÜM */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                lg: "1.2fr 0.8fr",
              },
              gap: 2.5,
            }}
          >
            {/* DEVAM DURUMU */}
            <Card
              elevation={0}
              sx={{
                p: 3,
                border: "1px solid #e4e7ec",
                borderRadius: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: 19,
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                Devam Durumu
              </Typography>

              <Divider sx={{ mb: 2 }} />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 3,
                }}
              >
                <CheckCircle
                  sx={{
                    fontSize: 45,
                    color: "#16a34a",
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      fontSize: 17,
                      fontWeight: "bold",
                      color: "#16a34a",
                    }}
                  >
                    Devam Ediyor
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 12,
                      color: "#667085",
                    }}
                  >
                    Stajınıza düzenli olarak devam ediyorsunuz.
                  </Typography>
                </Box>
              </Box>

              <Typography
                sx={{
                  fontSize: 13,
                  color: "#667085",
                  mb: 1,
                }}
              >
                Staj İlerlemesi
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  height: 10,
                  backgroundColor: "#e5e7eb",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    width: "60%",
                    height: "100%",
                    backgroundColor: "#1769e0",
                    borderRadius: 10,
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 11,
                    color: "#667085",
                  }}
                >
                  12 / 20 gün
                </Typography>

                <Typography
                  sx={{
                    fontSize: 11,
                    color: "#1769e0",
                    fontWeight: "bold",
                  }}
                >
                  %60
                </Typography>
              </Box>
            </Card>

            {/* SON DURUM */}
            <Card
              elevation={0}
              sx={{
                p: 3,
                border: "1px solid #e4e7ec",
                borderRadius: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: 19,
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                Son Devam Kaydı
              </Typography>

              <Divider sx={{ mb: 2 }} />

              <Typography
                sx={{
                  fontSize: 12,
                  color: "#667085",
                  mb: 0.5,
                }}
              >
                Tarih
              </Typography>

              <Typography
                sx={{
                  fontSize: 15,
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                12 Ağustos 2026
              </Typography>

              <Typography
                sx={{
                  fontSize: 12,
                  color: "#667085",
                  mb: 0.5,
                }}
              >
                Durum
              </Typography>

              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.7,
                  px: 1.5,
                  py: 0.7,
                  borderRadius: 5,
                  backgroundColor: "#dcfce7",
                }}
              >
                <CheckCircle
                  sx={{
                    fontSize: 16,
                    color: "#16a34a",
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#16a34a",
                    fontWeight: "bold",
                  }}
                >
                  Devam
                </Typography>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

/* SIDEBAR BUTONU */
function SidebarItem({
  icon,
  text,
  active = false,
  onClick,
}: {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        px: 1.5,
        py: 1.2,
        mb: 0.5,
        borderRadius: 1.5,
        cursor: "pointer",
        backgroundColor: active
          ? "rgba(255,255,255,0.18)"
          : "transparent",
        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.12)",
        },
      }}
    >
      {icon}

      <Typography
        sx={{
          fontSize: 13,
          fontWeight: active ? "bold" : "normal",
          color: "white",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}