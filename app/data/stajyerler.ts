export type Intern = {
  id: number;
  name: string;
  email: string;
  department: string;
  position: string;
  start: string;
  end: string;
  status: "Aktif" | "İzinli";
  report: "İnceleniyor" | "Onaylandı" | "Bekliyor";
  attendance: string;
};

export const interns: Intern[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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