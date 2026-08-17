"use client";

import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";

const supervisors = [
  {
    id: "supervisor-1",
    name: "Ahmet Yılmaz",
    department: "Yazılım",
  },
  {
    id: "supervisor-2",
    name: "Mehmet Kaya",
    department: "Elektrik-Elektronik",
  },
  {
    id: "supervisor-3",
    name: "Ayşe Demir",
    department: "Ar-Ge",
  },
  {
    id: "supervisor-4",
    name: "Zeynep Karaca",
    department: "İnsan Kaynakları",
  },
];

export default function SupervisorSelectionPage() {
  const router = useRouter();

  const [selectedSupervisor, setSelectedSupervisor] =
    useState("");

  const handleContinue = () => {
    if (!selectedSupervisor) {
      alert("Lütfen bir supervisor seçin.");
      return;
    }

    const supervisor = supervisors.find(
      (item) => item.id === selectedSupervisor
    );

    if (!supervisor) return;

    localStorage.setItem(
      "stajyer_supervisor",
      JSON.stringify(supervisor)
    );

    localStorage.setItem(
      "stajyer_supervisor_selected",
      "true"
    );

    router.push("/dashboard");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f5f7fa",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 5,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 3,
            border: "1px solid #e5e7eb",
            background: "#ffffff",
            boxShadow:
              "0 12px 35px rgba(15,39,66,0.08)",
          }}
        >
          {/* BAŞLIK */}

          <Box
            sx={{
              textAlign: "center",
              mb: 4,
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "1.8rem",
                  sm: "2.2rem",
                },
                fontWeight: 800,
                color: "#0f2742",
                mb: 1,
              }}
            >
              Supervisor Seçimi
            </Typography>

            <Typography
              sx={{
                color: "#64748b",
                fontSize: "0.95rem",
                lineHeight: 1.6,
              }}
            >
              Staj süreciniz boyunca bağlı olacağınız
              supervisor'ı seçin.
            </Typography>

            <Typography
              sx={{
                color: "#94a3b8",
                fontSize: "0.8rem",
                mt: 1,
              }}
            >
              Bu seçim yalnızca ilk girişinizde
              yapılacaktır.
            </Typography>
          </Box>

          {/* SUPERVISOR LİSTESİ */}

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
            }}
          >
            {supervisors.map((supervisor) => {
              const isSelected =
                selectedSupervisor === supervisor.id;

              return (
                <Box
                  key={supervisor.id}
                  onClick={() =>
                    setSelectedSupervisor(supervisor.id)
                  }
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    border: isSelected
                      ? "2px solid #286b9d"
                      : "1px solid #dbe3ea",
                    background: isSelected
                      ? "#eef6fc"
                      : "#ffffff",
                    cursor: "pointer",
                    transition: "all 0.2s ease",

                    "&:hover": {
                      borderColor: "#286b9d",
                      background: "#f7fbfe",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "#0f2742",
                      fontSize: "1rem",
                    }}
                  >
                    {supervisor.name}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#64748b",
                      fontSize: "0.85rem",
                      mt: 0.4,
                    }}
                  >
                    {supervisor.department}
                  </Typography>
                </Box>
              );
            })}
          </Box>

          {/* DEVAM */}

          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={handleContinue}
            disabled={!selectedSupervisor}
            sx={{
              mt: 4,
              py: 1.5,
              borderRadius: 1.5,
              background: "#0f2742",
              fontWeight: 700,
              boxShadow: "none",

              "&:hover": {
                background: "#173b61",
                boxShadow: "none",
              },

              "&:disabled": {
                background: "#cbd5e1",
                color: "#ffffff",
              },
            }}
          >
            SEÇİMİ KAYDET VE DEVAM ET
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}