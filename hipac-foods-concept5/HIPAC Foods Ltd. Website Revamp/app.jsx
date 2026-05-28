/* Wires it all together on the design canvas. */

function NotesPanel() {
  return (
    <div className="notes">
      <h2>HIPAC.com homepage — wireframe pass</h2>
      <div style={{ fontFamily:"Kalam", fontSize:13, letterSpacing:".05em", textTransform:"uppercase", color:"var(--mute)" }}>
        rough · low-fi · 4 directions
      </div>
      <h3>What I pulled from your brief</h3>
      <ul>
        <li><b>Video-led storytelling</b> in the banner (Grace, Best Dressed)</li>
        <li><b>Charity gets promoted</b> — pulled up above-the-fold or to slot #2</li>
        <li><b>"Have you tried…"</b> single-click survey popup (Suja)</li>
        <li><b>Hover-pops & ingredient ribbons</b> (Chipotle, Sqew)</li>
        <li><b>Coloured backgrounds breaking up white</b>, white type on colour (Sqew, LaCroix)</li>
        <li><b>3D / rotation</b> hero product moment (Pepsi)</li>
        <li><b>Recipes searchable by product</b> (Best Dressed)</li>
        <li><b>"Find in store"</b> lookup tab (Chipotle)</li>
      </ul>
      <h3>How the 4 differ</h3>
      <ul>
        <li><b>A · Storytelling Scroll</b> — Grace-style film hero, narrative scroll, charity slot #2, recipe rail later. Editorial pacing.</li>
        <li><b>B · Brand House</b> — Pepsi launch energy. Big 3D product hero, then a full-bleed colour slab per sub-brand. Loudest.</li>
        <li><b>C · Flavor Editorial</b> — magazine masthead. Flavour tabs tint the whole page (LaCroix). Recipes as cover story. Most editorial.</li>
        <li><b>D · Vibrant Tabs</b> — Sqew-style. Compact. Category tabs swap colour + product. Tightest, most punchy.</li>
      </ul>
      <h3>Same in every direction</h3>
      <ul>
        <li>Nav, footer, find-in-store lookup, "have you tried" popup</li>
        <li>Brand wall (Farmer's, Family, Bar Pac, EVE/VANA)</li>
        <li>Charity highlight as a major moment (not buried)</li>
      </ul>
      <h3>Pick & mix</h3>
      <ul>
        <li>Each artboard is a long scroll — click <b>⛶</b> on any to view full-screen.</li>
        <li>Try the flavour tabs in C and category tabs in D — they're live.</li>
        <li>Tell me which to develop further, or "take hero from A, brand wall from B…"</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <>
      <HipacTweaks />
      <DesignCanvas>
      <DCSection id="overview" title="HIPAC homepage — 4 wireframe directions" subtitle="rough · sketchy · ranked breadth over polish">
        <DCArtboard id="notes" label="Read me first" width={520} height={760}>
          <NotesPanel />
        </DCArtboard>
        <DCArtboard id="dir-a" label="A · Storytelling Scroll" width={1100} height={3100}>
          <DirectionA />
        </DCArtboard>
        <DCArtboard id="dir-b" label="B · Brand House" width={1100} height={3500}>
          <DirectionB />
        </DCArtboard>
        <DCArtboard id="dir-c" label="C · Flavor Editorial" width={1100} height={3200}>
          <DirectionC />
        </DCArtboard>
        <DCArtboard id="dir-d" label="D · Vibrant Tabs" width={1100} height={2700}>
          <DirectionD />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
