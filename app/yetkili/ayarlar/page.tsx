"use client";

import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function AyarlarPage() {
  const [bildirimler, setBildirimler] = useState(true);
  const [emailBildirimleri, setEmailBildirimleri] = useState(true);
  const [basarili, setBasarili] = useState(false);

  const handleSave = () => {
    setBasarili(true);

    setTimeout(() => {
      setBasarili(false);
    }, 3000);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f5f7fa",
        p: {
          xs: 2,
          md: 4,
        },
      }}
    >
      {/* BAŞLIK */}
      <Box sx={{ mb: 4 }}>
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: 800,
            color: "#0f2742",
            mb: 1,
          }}
        >
          Ayarlar
        </Typography>

        <Typography
          sx={{
            color: "#64748b",
            fontSize: "1rem",
          }}
        >
          Sistem ve hesap ayarlarınızı buradan yönetebilirsiniz.
        </Typography>
      </Box>

      {/* HESAP BİLGİLERİ */}
      <Paper
        elevation={0}
        sx={{
          border: "1px solid #e2e8f0",
          borderRadius: 2,
          p: {
            xs: 2,
            md: 3,
          },
          mb: 3,
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
          Hesap Bilgileri
        </Typography>

        <Typography
          sx={{
            color: "#64748b",
            fontSize: "0.9rem",
            mb: 3,
          }}
        >
          Yetkili hesabınızla ilgili bilgileri görüntüleyin.
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
            label="Yetki"
            value="Yetkili"
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

      {/* BİLDİRİM AYARLARI */}
      <Paper
        elevation={0}
        sx={{
          border: "1px solid #e2e8f0",
          borderRadius: 2,
          p: {
            xs: 2,
            md: 3,
          },
          mb: 3,
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
          Bildirim Ayarları
        </Typography>

        <Typography
          sx={{
            color: "#64748b",
            fontSize: "0.9rem",
            mb: 2,
          }}
        >
          Sistem bildirimlerinin nasıl gönderileceğini belirleyin.
        </Typography>

        <Divider sx={{ mb: 1 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <FormControlLabel
            control={
              <Switch
                checked={bildirimler}
                onChange={(e) => setBildirimler(e.target.checked)}
              />
            }
            label={
              <Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#17202a",
                  }}
                >
                  Sistem bildirimleri
                </Typography>

                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize: "0.85rem",
                  }}
                >
                  Sistemdeki önemli gelişmeler hakkında bildirim alın.
                </Typography>
              </Box>
            }
            sx={{
              py: 1.5,
              ml: 0,
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
                    color: "#17202a",
                  }}
                >
                  E-posta bildirimleri
                </Typography>

                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize: "0.85rem",
                  }}
                >
                  Önemli bildirimleri e-posta üzerinden alın.
                </Typography>
              </Box>
            }
            sx={{
              py: 1.5,
              ml: 0,
            }}
          />
        </Box>
      </Paper>

      {/* SİSTEM AYARLARI */}
      <Paper
        elevation={0}
        sx={{
          border: "1px solid #e2e8f0",
          borderRadius: 2,
          p: {
            xs: 2,
            md: 3,
          },
          mb: 3,
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
          Sistem Ayarları
        </Typography>

        <Typography
          sx={{
            color: "#64748b",
            fontSize: "0.9rem",
            mb: 3,
          }}
        >
          Stajyer takip sisteminin genel ayarları.
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
  );
}