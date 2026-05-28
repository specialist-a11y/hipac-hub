/* Direction A — STORYTELLING SCROLL
   Inspired by gracefoods.com (video banner) + savor.it (scroll-feel + articles) + chipotle (ingredient ribbon) */

function DirectionA() {
  return (
    <div className="wf" style={{ position:"relative" }}>
      <WFNav />

      {/* ---- HERO: full-bleed video, narrative caption ---- */}
      <div className="box" style={{ position:"relative", height:560, margin:0, borderLeft:0, borderRight:0 }}>
        <div className="video-ph" data-label="autoplay storytelling video · muted loop · 12s cut" style={{ position:"absolute", inset:0 }} />
        <div style={{ position:"absolute", left:36, bottom:30, maxWidth:560, color:"#f5f1e8" }}>
          <div className="label" style={{ opacity:.8, color:"#f5f1e8" }}>Since 1983 · Barbados</div>
          <div className="h1" style={{ fontSize:64, color:"#f5f1e8", marginTop:6, textShadow:"0 2px 0 rgba(0,0,0,.3)" }}>
            Caribbean flavour,<br/>made from scratch.
          </div>
          <div style={{ marginTop:14, display:"flex", gap:10 }}>
            <div className="btn" style={{ background:"#f5f1e8", color:"#1d1c1a", borderColor:"#f5f1e8" }}>Watch the story →</div>
            <div className="btn" style={{ color:"#f5f1e8", borderColor:"#f5f1e8" }}>Find in store</div>
          </div>
        </div>
        <Callout style={{ position:"absolute", top:18, right:24 }}>
          ↺ video loops · scroll = scrubs through story
        </Callout>
      </div>

      {/* ---- INGREDIENT TICKER (chipotle Our Values vibe) ---- */}
      <div style={{ background:"var(--paper)", padding:"24px 0 28px", borderBottom:"1.6px dashed var(--ink)", position:"relative" }}>
        <div style={{ textAlign:"center" }}>
          <div className="label">Real ingredients · seasoned by hand</div>
        </div>
        <div className="rail" style={{ marginTop:8 }}>
          {["Cracked pepper","Scotch bonnet","Thyme","Garlic","Pimento","Cane sugar","Sea salt","Cassava","Bay leaf"].map((n,i)=>(
            <div key={i} className="box" style={{ width:160, height:120, padding:10, flexShrink:0, display:"flex", flexDirection:"column", justifyContent:"flex-end", background:"#fff" }}>
              <div style={{ position:"absolute", inset:10, background:"radial-gradient(circle at 50% 45%, #d3b16a, #6a4416)", borderRadius:"50%" }} />
              <div style={{ position:"relative", fontFamily:"Kalam", fontSize:13, fontWeight:700 }}>{n}</div>
            </div>
          ))}
        </div>
        <Callout style={{ position:"absolute", right:24, top:14 }} rotate={2}>
          ← scrolls auto · pauses on hover · shows name
        </Callout>
      </div>

      {/* ---- CHARITY SPOTLIGHT — promoted to position 2 ---- */}
      <div className="blk-green" style={{ padding:"40px 36px", display:"grid", gridTemplateColumns:"1.1fr 1fr", gap:30, position:"relative" }}>
        <div>
          <div className="label" style={{ color:"#f5f1e8", opacity:.85 }}>Community · giving back</div>
          <div className="h1" style={{ color:"#f5f1e8", marginTop:6 }}>Feeding our neighbours,<br/>one meal at a time.</div>
          <div className="body" style={{ color:"#f5f1e8", opacity:.92, maxWidth:480, marginTop:12 }}>
            Every can of Family Choice and every Farmer's Choice frank funds the HIPAC Schools Lunch Initiative — 12,400 hot meals last year alone.
          </div>
          <div style={{ marginTop:16, display:"flex", gap:10 }}>
            <div className="btn" style={{ background:"#f5f1e8", color:"#1d1c1a", borderColor:"#f5f1e8" }}>See our impact</div>
            <div className="btn" style={{ color:"#f5f1e8", borderColor:"#f5f1e8" }}>Partner with us</div>
          </div>
          <div style={{ marginTop:22, display:"flex", gap:24 }}>
            {[["12,400","meals served"],["38","schools"],["6","parishes"]].map(([n,l],i)=>(
              <div key={i}>
                <div style={{ fontFamily:"Caveat", fontSize:46, fontWeight:700, color:"#f5f1e8", lineHeight:1 }}>{n}</div>
                <div className="tiny" style={{ color:"#f5f1e8", opacity:.8 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="video-ph" data-label="kids + chef short clip" style={{ height:300 }} />
        <Callout color="ocean" rotate={-2} style={{ position:"absolute", top:-12, right:30, background:"#f5f1e8", padding:"4px 10px", border:"1.6px solid var(--ink)" }}>
          ★ user note: highlight charity higher up
        </Callout>
      </div>

      {/* ---- BRANDS — quick-load wall (cb-foods influence) ---- */}
      <div style={{ padding:"40px 36px 28px" }}>
        <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between" }}>
          <div>
            <div className="label">Our family of brands</div>
            <div className="h2 underline-wob" style={{ marginTop:4 }}>From our kitchen to your table.</div>
          </div>
          <div className="body" style={{ maxWidth:280, opacity:.75 }}>Each brand has its own story — tap any to dive in.</div>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:16, marginTop:20 }}>
          {[
            ["Farmer's Choice","Burgers · franks · breaded","#d8482b"],
            ["Family Choice","Canned luncheon meats","#2a5b88"],
            ["Bar Pac","Smoked bone-in hams","#8b2a18"],
            ["EVE · VANA","Trade-label specials","#e8b53a"],
          ].map(([n,d,c],i)=>(
            <div key={i} className="box" style={{ height:220, position:"relative", overflow:"hidden", background:"#fff" }}>
              <div style={{ position:"absolute", inset:"12px", background:c, opacity:.18 }} />
              <ProductBlob kind={i===0?"meat":i===1?"can":i===2?"meat":"veg"} />
              <div style={{ position:"absolute", left:12, bottom:10 }}>
                <div style={{ fontFamily:"Caveat", fontSize:26, fontWeight:700, lineHeight:1 }}>{n}</div>
                <div className="tiny">{d}</div>
              </div>
            </div>
          ))}
        </div>
        <Callout style={{ marginTop:10 }}>⤴ hover: card lifts 6px, product pops out frame (chipotle hover)</Callout>
      </div>

      {/* ---- TIME TO EAT — recipe rail (best dressed chicken) ---- */}
      <div className="blk-cream" style={{ padding:"40px 0 30px", position:"relative" }}>
        <div style={{ padding:"0 36px", display:"flex", alignItems:"flex-end", justifyContent:"space-between" }}>
          <div>
            <div className="label">Time to eat</div>
            <div className="h2" style={{ marginTop:4 }}>Tonight, with what's in the freezer.</div>
          </div>
          <div style={{ display:"flex", gap:8 }}>
            <div className="chip">All</div>
            <div className="chip" style={{ background:"#1d1c1a", color:"#f5f1e8" }}>Quick (20 min)</div>
            <div className="chip">Breakfast</div>
            <div className="chip">Family-size</div>
            <div className="chip">Search by product →</div>
          </div>
        </div>
        <div className="rail" style={{ marginTop:14 }}>
          {[
            "Smoked ham mac pie",
            "Spicy frank cou-cou bowl",
            "Family Choice flatbreads",
            "Cassava + chorizo hash",
            "Sunday breaded chicken",
            "Bajan breakfast skillet",
          ].map((n,i)=>(
            <div key={i} className="box" style={{ width:240, flexShrink:0, background:"#fff" }}>
              <div className="ghost" data-label="recipe photo · auto-plays gif on hover" style={{ height:150, border:0 }} />
              <div style={{ padding:"10px 12px" }}>
                <div className="tiny">20 min · 4 servings</div>
                <div style={{ fontFamily:"Caveat", fontSize:24, fontWeight:700, lineHeight:1.05, marginTop:2 }}>{n}</div>
              </div>
            </div>
          ))}
        </div>
        <Callout rotate={2} style={{ position:"absolute", right:30, top:14 }}>video preview on hover (LaCroix)</Callout>
      </div>

      {/* ---- ARTICLES / SAVOR-STYLE ---- */}
      <div style={{ padding:"40px 36px" }}>
        <div className="label">From our kitchen, on the record</div>
        <div className="h2" style={{ marginTop:4 }}>What people are saying.</div>
        <div style={{ display:"grid", gridTemplateColumns:"1.4fr 1fr 1fr", gap:18, marginTop:18 }}>
          <div className="box" style={{ background:"#fff" }}>
            <div className="ghost" data-label="lead article cover" style={{ height:220, border:0 }} />
            <div style={{ padding:"14px 16px 16px" }}>
              <div className="tiny">Caribbean Business · Mar 2026</div>
              <div className="h3" style={{ marginTop:4 }}>"40 years of Farmer's Choice — and they're just getting started."</div>
            </div>
          </div>
          {["Loop News · Feb 2026","Barbados Today · Jan 2026"].map((m,i)=>(
            <div key={i} className="box" style={{ background:"#fff" }}>
              <div className="ghost" data-label="article cover" style={{ height:140, border:0 }} />
              <div style={{ padding:"12px 14px" }}>
                <div className="tiny">{m}</div>
                <div className="h3" style={{ marginTop:4, fontSize:18 }}>{i===0?"Inside the HIPAC quality lab":"A pantry built for hurricane season"}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---- WHERE TO BUY (find-a-chipotle) ---- */}
      <div className="blk-mustard" style={{ padding:"32px 36px", display:"grid", gridTemplateColumns:"1.1fr 1fr", gap:24, position:"relative" }}>
        <div>
          <div className="label">Where to buy</div>
          <div className="h2" style={{ marginTop:4 }}>Find HIPAC near you.</div>
          <div className="body" style={{ marginTop:10, maxWidth:440 }}>Type your parish or pick a brand — we'll show stockists across Barbados and the wider region.</div>
          <div style={{ display:"flex", gap:0, marginTop:14, maxWidth:440 }}>
            <div style={{ flex:1, background:"#fff", border:"1.8px solid var(--ink)", padding:"10px 12px", fontFamily:"Kalam", fontSize:13, opacity:.7 }}>📍 e.g. St. Michael</div>
            <div className="btn fill" style={{ marginLeft:-2 }}>Find →</div>
          </div>
        </div>
        <div className="ghost" data-label="map of Barbados · pins per stockist" style={{ height:220 }} />
        <Callout rotate={-2} style={{ position:"absolute", top:-12, left:30, background:"#f5f1e8", padding:"4px 10px", border:"1.6px solid var(--ink)" }}>
          ref · chipotle "find a chipotle"
        </Callout>
      </div>

      <WFFooter />

      {/* survey popup */}
      <WFSurveyPopup />
    </div>
  );
}

window.DirectionA = DirectionA;
