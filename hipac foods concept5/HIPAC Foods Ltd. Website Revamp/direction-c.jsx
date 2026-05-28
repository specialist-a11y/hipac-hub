/* Direction C — FLAVOR EDITORIAL
   Inspired by Chipotle Our Values + LaCroix (background color shift on selection) + Savor articles
   Magazine-style. Recipe-first. Big editorial blocks. */

function DirectionC() {
  const [flavor, setFlavor] = React.useState(0);
  const flavors = [
    { name:"Smoke",  hex:"#8b2a18" },
    { name:"Spice",  hex:"#d8482b" },
    { name:"Herb",   hex:"#2f7a4f" },
    { name:"Sweet",  hex:"#e8b53a" },
    { name:"Salt",   hex:"#2a5b88" },
  ];
  const f = flavors[flavor];

  return (
    <div className="wf" style={{ position:"relative" }}>
      <WFNav items={["Story", "Brands", "Recipes", "Flavour Lab", "Community", "Stockists"]} />

      {/* ---- HERO: editorial masthead + flavour selector ---- */}
      <div style={{ padding:"28px 36px 16px", borderBottom:"1.8px solid var(--ink)" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline" }}>
          <div className="label">Vol. 41 · Issue 03 · May 2026</div>
          <div className="label">"Nothing less than the best."</div>
        </div>
        <div className="h1" style={{ fontSize:110, lineHeight:.95, marginTop:6 }}>
          Made with <span style={{ color:f.hex, transition:"color .3s" }}>{f.name.toLowerCase()}</span>.
        </div>
        <div className="body" style={{ maxWidth:600, marginTop:14, opacity:.85 }}>
          Forty-three years of Caribbean cooking, told one flavour at a time. Pick yours below — the page changes with you.
        </div>
        <div style={{ display:"flex", gap:0, marginTop:18, border:"1.8px solid var(--ink)", width:"fit-content" }}>
          {flavors.map((fl,i)=>(
            <div key={i}
              onClick={()=>setFlavor(i)}
              style={{
                padding:"12px 22px", borderRight: i<flavors.length-1?"1.8px solid var(--ink)":"0",
                fontFamily:"Kalam", fontWeight:700, fontSize:14, letterSpacing:".06em", textTransform:"uppercase",
                background: i===flavor ? fl.hex : "transparent",
                color: i===flavor ? "#f5f1e8" : "var(--ink)",
                cursor:"pointer", transition:"all .25s"
              }}>{fl.name}</div>
          ))}
        </div>
        <Callout style={{ marginTop:10 }} rotate={-2}>↑ click any flavour · background tints · ref LaCroix flavors tab</Callout>
      </div>

      {/* ---- BIG FEATURE — flavour-tinted background ---- */}
      <div style={{ background:f.hex, padding:"50px 36px 60px", color:"#f5f1e8", transition:"background .35s", position:"relative" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1.1fr 1fr", gap:30, alignItems:"center" }}>
          <div>
            <div className="label" style={{ color:"#f5f1e8", opacity:.8 }}>The {f.name.toLowerCase()} story</div>
            <div className="h1" style={{ color:"#f5f1e8", fontSize:68, marginTop:6 }}>
              How we got our <em style={{ fontStyle:"italic" }}>{f.name.toLowerCase()}.</em>
            </div>
            <div className="body" style={{ color:"#f5f1e8", opacity:.92, maxWidth:480, marginTop:14 }}>
              A long-read from our pitmaster on the wood we burn, the brine we cure, and why every Bar Pac ham tastes like a holiday.
            </div>
            <div style={{ marginTop:18, display:"flex", gap:10 }}>
              <div className="btn" style={{ background:"#f5f1e8", color:"#1d1c1a", borderColor:"#f5f1e8" }}>Read · 6 min</div>
              <div className="btn" style={{ color:"#f5f1e8", borderColor:"#f5f1e8" }}>Watch · 1:42</div>
            </div>
          </div>
          <div className="video-ph" data-label="autoplay flavour film · changes per tab" style={{ height:340 }} />
        </div>
      </div>

      {/* ---- INGREDIENT RIBBON ---- */}
      <div style={{ padding:"22px 0", background:"var(--paper)", borderBottom:"1.6px dashed var(--ink)", position:"relative" }}>
        <div className="rail" style={{ padding:"6px 28px" }}>
          {["thyme","scotch bonnet","sea salt","pimento","cane sugar","cracked pepper","garlic","bay leaf","cinnamon","lime","ginger","onion"].map((n,i)=>(
            <div key={i} className="chip" style={{ flexShrink:0, padding:"8px 14px", fontSize:14 }}>· {n} ·</div>
          ))}
        </div>
        <Callout style={{ position:"absolute", right:24, top:6 }} rotate={2}>scroll right→left · hover to halt</Callout>
      </div>

      {/* ---- RECIPES AS COVER STORY ---- */}
      <div style={{ padding:"40px 36px" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end" }}>
          <div>
            <div className="label">Cover story · cook this weekend</div>
            <div className="h2" style={{ marginTop:4 }}>Six recipes, five tins, one Saturday.</div>
          </div>
          <div className="body" style={{ opacity:.65, maxWidth:240, textAlign:"right" }}>or search by what's in your fridge →</div>
        </div>

        {/* lead recipe */}
        <div style={{ display:"grid", gridTemplateColumns:"1.4fr 1fr", gap:18, marginTop:18 }}>
          <div className="box" style={{ background:"#fff", position:"relative" }}>
            <div className="ghost" data-label="hero recipe shot · 4:3" style={{ height:340, border:0 }} />
            <div style={{ padding:"16px 18px 18px" }}>
              <div className="tiny">RECIPE OF THE WEEK · 35 min</div>
              <div className="h1" style={{ fontSize:42, marginTop:4 }}>Pelau with Bar Pac ham, scorched at the edges.</div>
              <div className="body" style={{ marginTop:8, opacity:.85 }}>A one-pot Sunday answer to a long week. Uses one tin of pigeon peas, half a Bar Pac ham, and whatever rice is in the cupboard.</div>
              <div style={{ display:"flex", gap:8, marginTop:10 }}>
                <div className="chip">Bar Pac Ham</div>
                <div className="chip">Family Choice peas</div>
                <div className="chip">35 min</div>
              </div>
            </div>
            <Callout rotate={-2} style={{ position:"absolute", top:10, right:14 }}>hover · ingredient pops out (sqew)</Callout>
          </div>
          <div style={{ display:"grid", gap:14 }}>
            {[
              ["Mac pie, the proper way","45 min"],
              ["Tin-fish-and-tomato pasta","20 min"],
              ["Hurricane-night chickpea stew","30 min"],
            ].map(([t,m],i)=>(
              <div key={i} className="box" style={{ background:"#fff", display:"grid", gridTemplateColumns:"110px 1fr", gap:0 }}>
                <div className="ghost" data-label="" style={{ border:0 }} />
                <div style={{ padding:"10px 12px" }}>
                  <div className="tiny">{m}</div>
                  <div className="h3" style={{ fontSize:18, marginTop:2 }}>{t}</div>
                  <div className="tiny" style={{ marginTop:6 }}>tap to play prep clip ▶</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* search by product strip */}
        <div className="box" style={{ marginTop:18, padding:"16px 18px", display:"flex", justifyContent:"space-between", alignItems:"center", background:"#fff" }}>
          <div>
            <div className="label">Search recipes by product</div>
            <div className="body">"I have a tin of Family Choice…"</div>
          </div>
          <div style={{ display:"flex", gap:10 }}>
            {["Luncheon","Hams","Franks","Burgers","Breaded","Soya"].map((p,i)=>(
              <div key={i} className="chip" style={{ background: i===0?"#1d1c1a":"transparent", color: i===0?"#f5f1e8":"var(--ink)" }}>{p}</div>
            ))}
          </div>
        </div>
      </div>

      {/* ---- CHARITY DOUBLE-PAGE SPREAD ---- */}
      <div style={{ background:"#1d1c1a", color:"#f5f1e8", padding:"50px 36px", position:"relative", borderTop:"1.8px solid var(--ink)" }}>
        <div className="label" style={{ color:"#e8b53a" }}>The HIPAC ledger · feature</div>
        <div className="h1" style={{ color:"#f5f1e8", fontSize:78, marginTop:6 }}>
          12,400 hot meals.<br/>
          <span style={{ color:"#e8b53a" }}>Just last year.</span>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24, marginTop:30 }}>
          <div>
            <div className="ghost" data-label="kitchen photo" style={{ height:180, border:0, background:"rgba(245,241,232,.08)" }} />
            <div className="h3" style={{ color:"#f5f1e8", marginTop:10 }}>Schools lunch programme</div>
            <div className="body" style={{ color:"#f5f1e8", opacity:.85, marginTop:6 }}>38 schools, 6 parishes, every weekday. We supply the protein; teachers cook the rest.</div>
          </div>
          <div>
            <div className="ghost" data-label="staff photo" style={{ height:180, border:0, background:"rgba(245,241,232,.08)" }} />
            <div className="h3" style={{ color:"#f5f1e8", marginTop:10 }}>Storm-ready pantries</div>
            <div className="body" style={{ color:"#f5f1e8", opacity:.85, marginTop:6 }}>Every hurricane season we pre-stock 2,000 family pantries with Family Choice canned goods.</div>
          </div>
          <div>
            <div className="ghost" data-label="farm photo" style={{ height:180, border:0, background:"rgba(245,241,232,.08)" }} />
            <div className="h3" style={{ color:"#f5f1e8", marginTop:10 }}>Bajan farmer fund</div>
            <div className="body" style={{ color:"#f5f1e8", opacity:.85, marginTop:6 }}>5% of every Farmer's Choice burger funds smallholder grants for local pig and poultry farmers.</div>
          </div>
        </div>
      </div>

      {/* ---- CAREERS / EMPLOYEE INTEGRATED (chipotle careers) ---- */}
      <div style={{ padding:"40px 36px", display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:14, alignItems:"end" }}>
        <div style={{ gridColumn:"1 / span 2" }}>
          <div className="label">Make food with us</div>
          <div className="h2" style={{ marginTop:4 }}>The hands behind every tin.</div>
          <div className="body" style={{ marginTop:8, maxWidth:380 }}>We're hiring across the plant, lab, and design floor. Meet some of the team — and join them.</div>
          <div className="btn fill" style={{ marginTop:14 }}>See open roles →</div>
        </div>
        {[0,1].map(i=>(
          <div key={i} style={{ display:"grid", gap:8 }}>
            <div className="ghost" data-label={i===0?"line cook portrait":"QA scientist portrait"} style={{ height:200, border:"1.8px solid var(--ink)" }} />
            <div className="tiny">"I season the franks. Forty thousand a day." — Rohan, line lead</div>
          </div>
        ))}
      </div>

      <WFFooter />

      <WFSurveyPopup />
    </div>
  );
}

window.DirectionC = DirectionC;
