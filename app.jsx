// App root — routing, tweaks, palettes
const { useState: useStateApp, useEffect: useEffectApp } = React;

// Palette presets — applied by setting CSS custom properties
const PALETTES = {
  paper: {
    name: "Papel cálido",
    "--bg": "#f4ede0",
    "--bg-deep": "#ebe2d1",
    "--bg-card": "#fbf7ee",
    "--ink": "#1a1612",
    "--ink-soft": "#5a4f43",
    "--ink-mute": "#8a7e6e",
    "--rule": "rgba(26, 22, 18, 0.18)",
    "--rule-soft": "rgba(26, 22, 18, 0.09)",
    "--accent": "#7a2e1f",
  },
  bone: {
    name: "Hueso & oro",
    "--bg": "#ece4d3",
    "--bg-deep": "#ddd1bc",
    "--bg-card": "#f4ecd8",
    "--ink": "#231b12",
    "--ink-soft": "#5b4a39",
    "--ink-mute": "#8c7a64",
    "--rule": "rgba(35, 27, 18, 0.22)",
    "--rule-soft": "rgba(35, 27, 18, 0.10)",
    "--accent": "#9a7124",
  },
  mono: {
    name: "Lino crudo",
    "--bg": "#e8dfc8",
    "--bg-deep": "#ddd3b8",
    "--bg-card": "#efe7d3",
    "--ink": "#2a2520",
    "--ink-soft": "#544a3e",
    "--ink-mute": "#8a7e6a",
    "--rule": "rgba(42, 37, 32, 0.20)",
    "--rule-soft": "rgba(42, 37, 32, 0.08)",
    "--accent": "#2a2520",
  },
  ink: {
    name: "Tinta nocturna",
    "--bg": "#1a1814",
    "--bg-deep": "#0f0d0a",
    "--bg-card": "#211e19",
    "--ink": "#f1ead9",
    "--ink-soft": "#c4bba8",
    "--ink-mute": "#86806f",
    "--rule": "rgba(241, 234, 217, 0.20)",
    "--rule-soft": "rgba(241, 234, 217, 0.10)",
    "--accent": "#d8a85a",
  },
};

const FONT_SETS = {
  classical: {
    name: "Clásica",
    "--font-serif": '"Cormorant Garamond", "Times New Roman", Georgia, serif',
    "--font-sans": '"DM Sans", -apple-system, BlinkMacSystemFont, sans-serif',
  },
  modern: {
    name: "Moderna",
    "--font-serif": '"Instrument Serif", "Times New Roman", Georgia, serif',
    "--font-sans": '"Manrope", -apple-system, BlinkMacSystemFont, sans-serif',
  },
  editorial: {
    name: "Editorial",
    "--font-serif": '"EB Garamond", "Times New Roman", Georgia, serif',
    "--font-sans": '"Work Sans", -apple-system, BlinkMacSystemFont, sans-serif',
  },
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "paper",
  "fontSet": "classical",
  "heroVariant": "split",
  "gridDensity": 3,
  "showRealImages": true
}/*EDITMODE-END*/;

// Apply palette + fonts to :root
function applyTheme(tweaks) {
  const root = document.documentElement;
  const p = PALETTES[tweaks.palette] || PALETTES.paper;
  Object.entries(p).forEach(([k, v]) => { if (k.startsWith("--")) root.style.setProperty(k, v); });
  const f = FONT_SETS[tweaks.fontSet] || FONT_SETS.classical;
  Object.entries(f).forEach(([k, v]) => { if (k.startsWith("--")) root.style.setProperty(k, v); });
  // Grid density (1..4)
  root.style.setProperty("--cols", tweaks.gridDensity);
}

function HeviTweaks({ tweaks, setTweak }) {
  return (
    <window.TweaksPanel title="Tweaks">
      <window.TweakSection label="Hero (inicio)">
        <window.TweakRadio
          label="Diseño"
          value={tweaks.heroVariant}
          onChange={v => setTweak("heroVariant", v)}
          options={[
            { value: "split",     label: "Split" },
            { value: "fullbleed", label: "A sangre" },
            { value: "editorial", label: "Editorial" },
          ]}
        />
      </window.TweakSection>

      <window.TweakSection label="Estética">
        <window.TweakSelect
          label="Paleta"
          value={tweaks.palette}
          onChange={v => setTweak("palette", v)}
          options={[
            { value: "paper", label: "Papel cálido" },
            { value: "bone",  label: "Hueso & oro" },
            { value: "mono",  label: "Lino crudo" },
            { value: "ink",   label: "Tinta nocturna" },
          ]}
        />
        <window.TweakSelect
          label="Tipografía"
          value={tweaks.fontSet}
          onChange={v => setTweak("fontSet", v)}
          options={[
            { value: "classical", label: "Clásica" },
            { value: "modern",    label: "Moderna" },
            { value: "editorial", label: "Editorial" },
          ]}
        />
      </window.TweakSection>

      <window.TweakSection label="Galería">
        <window.TweakSlider
          label="Columnas"
          value={tweaks.gridDensity}
          onChange={v => setTweak("gridDensity", v)}
          min={2} max={4} step={1}
          unit=" col"
        />
        <window.TweakToggle
          label="Imágenes reales"
          value={tweaks.showRealImages}
          onChange={v => setTweak("showRealImages", v)}
        />
      </window.TweakSection>
    </window.TweaksPanel>
  );
}

function App() {
  const [tweaks, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = useStateApp("home");
  const [openArtwork, setOpenArtwork] = useStateApp(null);
  const [galleryCategory, setGalleryCategory] = useStateApp("all");
  const [inquiryArtwork, setInquiryArtwork] = useStateApp("");

  // URL params override defaults on first mount (used by Paletas comparison)
  useEffectApp(() => {
    const p = new URLSearchParams(window.location.search);
    const edits = {};
    if (p.get("palette") && PALETTES[p.get("palette")]) edits.palette = p.get("palette");
    if (p.get("font") && FONT_SETS[p.get("font")]) edits.fontSet = p.get("font");
    if (p.get("hero") && ["split", "fullbleed", "editorial"].includes(p.get("hero"))) edits.heroVariant = p.get("hero");
    if (Object.keys(edits).length) setTweak(edits);
  }, []);

  // Apply theme on tweaks change
  useEffectApp(() => { applyTheme(tweaks); }, [tweaks]);

  function navigate(r) {
    setRoute(r);
    setOpenArtwork(null);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function goToCategory(catId) {
    setGalleryCategory(catId);
    setRoute("gallery");
    setOpenArtwork(null);
    window.scrollTo({ top: 0 });
  }

  function openInquiry(artworkId) {
    setInquiryArtwork(artworkId);
    setOpenArtwork(null);
    setRoute("contact");
    window.scrollTo({ top: 0 });
  }

  return (
    <>
      <window.Nav route={route} onRoute={navigate} />

      {route === "home"    && <window.Home onRoute={navigate} onOpen={setOpenArtwork} onCategory={goToCategory} tweaks={tweaks} />}
      {route === "gallery" && <window.Gallery initialCategory={galleryCategory} onOpen={setOpenArtwork} onRoute={navigate} tweaks={tweaks} />}
      {route === "maestros" && <window.Maestros onRoute={navigate} />}
      {route === "about"   && <window.About onRoute={navigate} />}
      {route === "contact" && <window.Contact initialArtwork={inquiryArtwork} />}

      <window.Footer onRoute={navigate} />

      {openArtwork && (
        <window.DetailModal
          artwork={openArtwork}
          onClose={() => setOpenArtwork(null)}
          onInquire={openInquiry}
          onOpen={setOpenArtwork}
          showReal={!!tweaks.showRealImages}
        />
      )}

      <HeviTweaks tweaks={tweaks} setTweak={setTweak} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
