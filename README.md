# Hevi Art — Estudio en Barcelona

Tek sanatçılı butik portfolyo + galeri sitesi. İspanyolca arayüz, 5 ekran (Inicio · Galería · Maestros · Estudio · Contacto), 4 renk paleti, 3 hero varyantı.

## Yapı

```
index.html              ← Ana giriş (GitHub Pages entry point)
Hevi Art.html           ← index.html'in kopyası (geliştirme tarafı)
Paletas.html            ← Renk paleti seçim sayfası
styles.css              ← Stil kuralları
data.js                 ← Galeri eserleri (18 obra)
data-maestros.js        ← Kişisel müze tabloları (12 maestro)
app.jsx                 ← Routing + Tweaks + palet uygulama
tweaks-panel.jsx        ← Tweaks panel altyapısı
components/
  shared.jsx            ← Nav + Footer + ArtCard
  home.jsx              ← Ana sayfa + 3 hero varyantı
  gallery.jsx           ← Filtreli galeri sayfası
  pages.jsx             ← Estudio + Contacto + DetailModal
  maestros.jsx          ← Kişisel müze sayfası
```

## GitHub Pages

1. Yeni bir repo oluştur (örn. `hevi-art`).
2. Tüm dosyaları repo'nun root'una yükle.
3. Settings → Pages → Source: `main` branch, `/ (root)`.
4. `https://<kullanıcı>.github.io/<repo>/` üzerinden açılır.

> Not: Yerel test için `python3 -m http.server` veya benzeri statik sunucu kullan — `file://` üzerinden JSX modülleri yüklenmez.

## Tweaks

Sağ alt köşedeki Tweaks panelinden:
- **Paleta**: Papel cálido · Hueso & oro · Lino crudo · Tinta nocturna
- **Tipografía**: Clásica · Moderna · Editorial
- **Hero**: Split · A sangre · Editorial
- **Columnas**: 2 / 3 / 4
- **Imágenes reales**: aç/kapa (kapalıyken müze-etiketi placeholder'lar)

## Görseller

Galeri ve maestro görselleri Saatchi Art CDN'den. Yüklenmezse `referrerPolicy="no-referrer"` + zarif SVG fallback devreye giriyor.
