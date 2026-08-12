"use client";

import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import WarningIcon from "@mui/icons-material/Warning";

export default function AbsencePage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fb",
        py: 4,
      }}
    >
      <Container maxWidth="xl">
        {/* BAŞLIK */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#17365d",
              mb: 0.5,
            }}
          >
            Devamsızlık Durumu
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#6b7a90",
            }}
          >
            Staj süreniz boyunca devamsızlık durumunuzu buradan takip
            edebilirsiniz.
          </Typography>
        </Box>

        {/* ÖZET KARTLARI */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          {/* TOPLAM STAJ */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card
              elevation={0}
              sx={{
                border: "1px solid #e1e6ed",
                borderRadius: 2,
                height: "100%",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography sx={{ color: "#65748b" }}>
                    Toplam Staj Günü
                  </Typography>

                  <AccessTimeIcon sx={{ color: "#1976d2" }} />
                </Box>

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "#1d1d1d",
                  }}
                >
                  20 Gün
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* GELİNEN GÜN */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card
              elevation={0}
              sx={{
                border: "1px solid #e1e6ed",
                borderRadius: 2,
                height: "100%",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography sx={{ color: "#65748b" }}>
                    Gelinen Gün
                  </Typography>

                  <CheckCircleIcon sx={{ color: "#16a34a" }} />
                </Box>

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "#16a34a",
                  }}
                >
                  12 Gün
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* DEVAMSIZLIK */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card
              elevation={0}
              sx={{
                border: "1px solid #e1e6ed",
                borderRadius: 2,
                height: "100%",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography sx={{ color: "#65748b" }}>
                    Devamsızlık
                  </Typography>

                  <CancelIcon sx={{ color: "#dc2626" }} />
                </Box>

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "#dc2626",
                  }}
                >
                  0 Gün
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* KALAN STAJ */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card
              elevation={0}
              sx={{
                border: "1px solid #e1e6ed",
                borderRadius: 2,
                height: "100%",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography sx={{ color: "#65748b" }}>
                    Kalan Staj
                  </Typography>

                  <WarningIcon sx={{ color: "#f59e0b" }} />
                </Box>

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "#f59e0b",
                  }}
                >
                  8 Gün
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* ALT KISIM */}
        <Grid container spacing={2}>
          {/* DEVAMSIZLIK DURUMU */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Card
              elevation={0}
              sx={{
                border: "1px solid #e1e6ed",
                borderRadius: 2,
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                  }}
                >
                  Devamsızlık Durumu
                </Typography>

                <Box
                  sx={{
                    borderTop: "1px solid #e1e6ed",
                    pt: 3,
                  }}
                >
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
                        borderRadius: "50%",
                        backgroundColor: "#16a34a",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CheckCircleIcon
                        sx={{
                          color: "white",
                          fontSize: 32,
                        }}
                      />
                    </Box>

                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          color: "#16a34a",
                        }}
                      >
                        Devamsızlık Bulunmuyor
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "#65748b",
                        }}
                      >
                        Stajınıza düzenli olarak devam ediyorsunuz.
                      </Typography>
                    </Box>
                  </Box>

                  {/* İLERLEME */}
                  <Typography
                    sx={{
                      color: "#65748b",
                      mb: 1,
                    }}
                  >
                    Staj İlerlemesi
                  </Typography>

                  <Box
                    sx={{
                      width: "100%",
                      height: 10,
                      backgroundColor: "#e1e6ed",
                      borderRadius: 5,
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        width: "60%",
                        height: "100%",
                        backgroundColor: "#1976d2",
                        borderRadius: 5,
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
                      variant="caption"
                      sx={{ color: "#65748b" }}
                    >
                      12 / 20 gün
                    </Typography>

                    <Typography
                      variant="caption"
                      sx={{
                        color: "#1976d2",
                        fontWeight: "bold",
                      }}
                    >
                      %60
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* DEVAMSIZLIK BİLGİSİ */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              elevation={0}
              sx={{
                border: "1px solid #e1e6ed",
                borderRadius: 2,
                height: "100%",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                  }}
                >
                  Devamsızlık Bilgisi
                </Typography>

                <Box
                  sx={{
                    borderTop: "1px solid #e1e6ed",
                    pt: 3,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#65748b",
                      mb: 1,
                    }}
                  >
                    Toplam Devamsızlık
                  </Typography>

                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      color: "#16a34a",
                      mb: 3,
                    }}
                  >
                    0 Gün
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#65748b",
                      lineHeight: 1.7,
                    }}
                  >
                    Şu ana kadar herhangi bir devamsızlık kaydınız
                    bulunmamaktadır.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}