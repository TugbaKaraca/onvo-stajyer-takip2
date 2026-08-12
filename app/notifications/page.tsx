"use client";

import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Typography,
} from "@mui/material";

export default function NotificationsPage() {
  const notifications = [
    {
      title: "Staj devam kaydınız oluşturuldu",
      message:
        "12 Ağustos 2026 tarihli staj devam kaydınız başarıyla oluşturuldu.",
      date: "12 Ağustos 2026",
      type: "Devam",
      color: "success" as const,
      icon: "✓",
    },
    {
      title: "Günlük rapor hatırlatması",
      message:
        "Bugünkü staj günlük raporunuzu doldurmayı unutmayın.",
      date: "12 Ağustos 2026",
      type: "Hatırlatma",
      color: "warning" as const,
      icon: "!",
    },
    {
      title: "Stajınız devam ediyor",
      message:
        "Staj süreciniz aktif olarak devam etmektedir. Kalan staj gününüzü devam durumundan takip edebilirsiniz.",
      date: "11 Ağustos 2026",
      type: "Bilgi",
      color: "info" as const,
      icon: "i",
    },
    {
      title: "Raporunuz onaylandı",
      message:
        "Göndermiş olduğunuz günlük staj raporu başarıyla onaylandı.",
      date: "11 Ağustos 2026",
      type: "Onay",
      color: "success" as const,
      icon: "✓",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fb",
        p: {
          xs: 2,
          md: 4,
        },
      }}
    >
      {/* BAŞLIK */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#173f73",
            mb: 1,
          }}
        >
          Bildirimler
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#718096",
          }}
        >
          Staj sürecinizle ilgili bildirimleri buradan takip edebilirsiniz.
        </Typography>
      </Box>

      {/* BİLDİRİMLER */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {notifications.map((notification, index) => (
          <Card
            key={index}
            elevation={0}
            sx={{
              border: "1px solid #e2e8f0",
              borderRadius: 3,
              backgroundColor: "#ffffff",
              transition: "0.2s",

              "&:hover": {
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                transform: "translateY(-2px)",
              },
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                  },
                  alignItems: {
                    xs: "flex-start",
                    sm: "center",
                  },
                  gap: 2,
                }}
              >
                {/* İKON */}
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    minWidth: 48,
                    borderRadius: "50%",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    fontSize: 22,
                    fontWeight: 700,

                    backgroundColor:
                      notification.color === "success"
                        ? "#dcfce7"
                        : notification.color === "warning"
                        ? "#fef3c7"
                        : "#dbeafe",

                    color:
                      notification.color === "success"
                        ? "#16a34a"
                        : notification.color === "warning"
                        ? "#d97706"
                        : "#2563eb",
                  }}
                >
                  {notification.icon}
                </Box>

                {/* BİLDİRİM İÇERİĞİ */}
                <Box
                  sx={{
                    flex: 1,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: {
                        xs: "column",
                        sm: "row",
                      },
                      alignItems: {
                        xs: "flex-start",
                        sm: "center",
                      },
                      gap: 1,
                      mb: 0.5,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: "#1e293b",
                      }}
                    >
                      {notification.title}
                    </Typography>

                    <Chip
                      label={notification.type}
                      size="small"
                      color={notification.color}
                      sx={{
                        fontWeight: 600,
                      }}
                    />
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#64748b",
                      lineHeight: 1.6,
                      mb: 1,
                    }}
                  >
                    {notification.message}
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      color: "#94a3b8",
                    }}
                  >
                    {notification.date}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* ALT BİLGİ */}
      <Divider sx={{ my: 4 }} />

      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          color: "#94a3b8",
        }}
      >
        Tüm bildirimleriniz burada görüntülenmektedir.
      </Typography>
    </Box>
  );
}