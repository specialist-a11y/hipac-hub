/* HIPAC wireframes — Tweaks panel.
   Three expressive controls that reshape the feel:
   - Fidelity (loose → sketchy → crisp)
   - Palette  (Caribbean Sunset / Bajan Sea / Spice Market / Cane Field)
   - Annotations (show / hide red callouts)
*/

const PALETTES = {
  sunset: ['#d8482b','#2f7a4f','#e8b53a','#2a5b88'],
  sea:    ['#2a8ba8','#1f5d6b','#6ec5d4','#2a3f5c'],
  spice:  ['#b03a1a','#5e2e1a','#d99d3a','#7a3a1a'],
  cane:   ['#3a7d44','#1f4d2a','#c9a227','#5a8c3d'],
};

function paletteKeyFromValue(v){
  if (typeof v === 'string' && PALETTES[v]) return v;
  if (Array.isArray(v)) {
    const s = JSON.stringify(v).toLowerCase();
    for (const k of Object.keys(PALETTES)) {
      if (JSON.stringify(PALETTES[k]).toLowerCase() === s) return k;
    }
  }
  return 'sunset';
}

function HipacTweaks() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);

  // Apply tweaks as classes on <body> so all wireframe artboards respond live.
  React.useEffect(() => {
    const b = document.body;
    b.classList.remove('fid-loose','fid-sketchy','fid-structured');
    b.classList.add(`fid-${t.fidelity || 'sketchy'}`);

    const palKey = paletteKeyFromValue(t.palette);
    b.classList.remove('pal-sunset','pal-sea','pal-spice','pal-cane');
    b.classList.add(`pal-${palKey}`);

    b.classList.toggle('anno-off', t.annotations === false);
  }, [t.fidelity, t.palette, t.annotations]);

  const currentPalette = PALETTES[paletteKeyFromValue(t.palette)];

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Fidelity">
        <TweakRadio
          label="Sketch level"
          value={t.fidelity || 'sketchy'}
          options={[
            { value: 'loose',      label: 'Loose' },
            { value: 'sketchy',    label: 'Sketchy' },
            { value: 'structured', label: 'Crisp' },
          ]}
          onChange={(v) => setTweak('fidelity', v)}
        />
      </TweakSection>

      <TweakSection label="Palette">
        <TweakColor
          label="Brand mood"
          value={currentPalette}
          options={Object.values(PALETTES)}
          onChange={(v) => setTweak('palette', paletteKeyFromValue(v))}
        />
        <div style={{
          fontFamily:"system-ui,sans-serif", fontSize:11, opacity:.6,
          padding:"4px 12px 8px", lineHeight:1.3
        }}>
          {paletteKeyFromValue(t.palette) === 'sunset' && '☀ Caribbean Sunset — warm, vibrant, the default.'}
          {paletteKeyFromValue(t.palette) === 'sea'    && '🌊 Bajan Sea — cool blues + teals.'}
          {paletteKeyFromValue(t.palette) === 'spice'  && '🌶 Spice Market — earthy reds + browns.'}
          {paletteKeyFromValue(t.palette) === 'cane'   && '🌿 Cane Field — greens + golds.'}
        </div>
      </TweakSection>

      <TweakSection label="Review mode">
        <TweakToggle
          label="Show annotations"
          value={t.annotations !== false}
          onChange={(v) => setTweak('annotations', v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

window.HipacTweaks = HipacTweaks;
