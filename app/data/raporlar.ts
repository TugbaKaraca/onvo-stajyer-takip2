export type RaporDurumu =
  | "Bekliyor"
  | "İnceleniyor"
  | "Onaylandı"
  | "Reddedildi";

export type Rapor = {
  id: number;
  stajyerId: number;
  stajyer: string;
  tarih: string;
  baslik: string;
  icerik: string;
  durum: RaporDurumu;
  yetkiliNotu: string;
};

export const raporlar: Rapor[] = [
  {
    id: 1,
    stajyerId: 1,
    stajyer: "Zeliha Koyuncu",
    tarih: "13 Ağustos 2026",
    baslik: "Günlük Staj Raporu",
    icerik:
      "Bugün staj sürecinde kullanılacak olan sistem incelendi. Projenin genel yapısı hakkında bilgi edinildi ve kullanılacak teknolojiler araştırıldı.",
    durum: "İnceleniyor",
    yetkiliNotu: "",
  },

  {
    id: 2,
    stajyerId: 2,
    stajyer: "Ahmet Yılmaz",
    tarih: "13 Ağustos 2026",
    baslik: "Günlük Staj Raporu",
    icerik:
      "Bugün departman içerisinde kullanılan sistemler incelendi. Elektrik-elektronik altyapısı hakkında bilgi edinildi.",
    durum: "Onaylandı",
    yetkiliNotu: "Rapor uygun bulunmuştur.",
  },

  {
    id: 3,
    stajyerId: 3,
    stajyer: "Elif Demir",
    tarih: "12 Ağustos 2026",
    baslik: "Günlük Staj Raporu",
    icerik:
      "Frontend geliştirme sürecinde kullanılan teknolojiler incelendi. React ve kullanıcı arayüzü yapısı hakkında çalışmalar yapıldı.",
    durum: "Bekliyor",
    yetkiliNotu: "",
  },

  {
    id: 4,
    stajyerId: 4,
    stajyer: "Mehmet Kaya",
    tarih: "11 Ağustos 2026",
    baslik: "Günlük Staj Raporu",
    icerik:
      "Ar-Ge departmanındaki çalışmalar incelendi. Proje geliştirme süreci ve kullanılan yöntemler hakkında bilgi edinildi.",
    durum: "Reddedildi",
    yetkiliNotu:
      "Rapor içeriğinin daha ayrıntılı şekilde açıklanması gerekmektedir.",
  },

  {
    id: 5,
    stajyerId: 5,
    stajyer: "Ayşe Çelik",
    tarih: "12 Ağustos 2026",
    baslik: "Günlük Staj Raporu",
    icerik:
      "Üretim departmanındaki günlük çalışmalar gözlemlendi. Üretim süreçleri hakkında bilgi edinildi.",
    durum: "Bekliyor",
    yetkiliNotu: "",
  },
];