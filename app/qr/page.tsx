"use client";

import { Box, Button, Paper, Typography } from "@mui/material";
import QRCode from "qrcode";
import { useEffect, useState } from "react";

export default function QRPage() {
  const [qrImage, setQrImage] = useState("");

  useEffect(() => {
    const generateQR = async () => {
      const registerUrl = `${window.location.origin}/kayit?token=ONVO-STAJ-2026`;

      const image = await QRCode.toDataURL(registerUrl, {
        width: 320,
        margin: 3,
        errorCorrectionLevel: "H",
      });

      setQrImage(image);
    };

    generateQR();
  }, []);

  const downloadQR = () => {
    if (!qrImage) return;

    const link = document.createElement("a");
    link.href = qrImage;
    link.download = "onvo-stajyer-kayit-qr.png";
    link.click();
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f5f7fa",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 500,
          p: { xs: 3, sm: 5 },
          textAlign: "center",
          borderRadius: 3,
          border: "1px solid #e5e7eb",
          boxShadow: "0 12px 35px rgba(15,39,66,0.08)",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.8rem",
            fontWeight: 800,
            color: "#0f2742",
            mb: 1,
          }}
        >
          Stajyer Kayıt QR Kodu
        </Typography>

        <Typography
          sx={{
            color: "#64748b",
            fontSize: "0.9rem",
            lineHeight: 1.6,
            mb: 3,
          }}
        >
          Stajyerlerin kayıt olabilmesi için aşağıdaki QR kodu okutması
          gerekmektedir.
        </Typography>

        {qrImage && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 3,
            }}
          >
            <Box
              component="img"
              src={qrImage}
              alt="ONVO Stajyer Kayıt QR Kodu"
              sx={{
                width: 320,
                maxWidth: "100%",
                height: "auto",
                border: "10px solid white",
                borderRadius: 2,
              }}
            />
          </Box>
        )}

        <Typography
          sx={{
            color: "#64748b",
            fontSize: "0.8rem",
            mb: 3,
          }}
        >
          QR kodu okutan kişi stajyer kayıt sayfasına yönlendirilecektir.
        </Typography>

        <Button
          fullWidth
          variant="contained"
          onClick={downloadQR}
          disabled={!qrImage}
          sx={{
            background: "#0f2742",
            py: 1.4,
            borderRadius: 1.5,
            fontWeight: 700,
            textTransform: "none",
            boxShadow: "none",
            "&:hover": {
              background: "#173b61",
              boxShadow: "none",
            },
          }}
        >
          QR Kodu İndir
        </Button>
      </Paper>
    </Box>
  );
}