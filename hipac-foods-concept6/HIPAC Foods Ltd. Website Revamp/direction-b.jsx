/* Direction B — BRAND HOUSE (color-blocked)
   Inspired by Pepsi (3D rotating hero product) + cbfoods (logo wall) + sqew (white text on colour blocks) */

function DirectionB() {
  return (
    <div className="wf" style={{ position:"relative" }}>
      <WFNav />

      {/* ---- HERO: 3D rotating product ---- */}
      <div style={{ background:"#1d1c1a", color:"#f5f1e8", padding:"40px 36px 60px", position:"relative" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:30, alignItems:"center" }}>
          <div>
            <div className="label" style={{ color:"#e8b53a" }}>★ New this month</div>
            <div className="h1" style={{ color:"#f5f1e8", fontSize:78, marginTop:4 }}>
              Smoked,<br/>seasoned,<br/>scotch-bonnet hot.
            </div>
            <div className="body" style={{ color:"#f5f1e8", opacity:.85, marginTop:14, maxWidth:420 }}>
              The new Farmer's Choice Smokey Spicy Franks — bone-in flavour, no-bone hassle.
            </div>
            <div style={{ display:"flex", gap:10, marginTop:18 }}>
              <div className="btn" style={{ background:"#e8b53a", color:"#1d1c1a", borderColor:"#e8b53a" }}>Shop the launch</div>
              <div className="btn" style={{ color:"#f5f1e8", borderColor:"#f5f1e8" }}>Watch 30s film</div>
            </div>
          </div>
          {/* big rotating product mock */}
          <div style={{ position:"relative", height:420, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <div style={{ position:"absolute", inset:0, background:"radial-gradient(circle at 50% 60%, rgba(232,181,58,.45), transparent 60%)" }} />
            <div className="product can" style={{ width:240, height:320, background:"transparent" }}>
              <div className="blob" style={{ width:"100%", height:"100%", borderRadius:18 }} />
              <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"Caveat", fontSize:32, fontWeight:700, color:"#f5f1e8", textShadow:"0 2px 0 rgba(0,0,0,.3)", transform:"rotate(-4deg)" }}>FARMER'S<br/>CHOICE</div>
            </div>
            <Callout color="ocean" style={{ position:"absolute", bottom:6, right:-10, color:"#e8b53a" }}>
              ↻ drag to rotate 360° · auto-spins idle
            </Callout>
            {/* orbit dots */}
            <svg style={{ position:"absolute", inset:0, pointerEvents:"none" }} viewBox="0 0 100 100" preserveAspectRatio="none">
              <ellipse cx="50" cy="60" rx="32" ry="6" fill="none" stroke="#f5f1e8" strokeOpacity=".25" strokeDasharray="1 2" />
            </svg>
          </div>
        </div>
        {/* mini badges */}
        <div style={{ display:"flex", gap:14, marginTop:16, fontFamily:"Kalam", fontSize:13, opacity:.8 }}>
          <span>● Made in Barbados</span><span>● Halaal options</span><span>● Family-size packs</span><span>● Available island-wide</span>
        </div>
      </div>

      {/* ---- TICKER ---- */}
      <div className="ticker">★ nothing less than the best ★ proud member of the goddard group ★ since 1983 ★ over 100 quality products ★</div>

      {/* ---- BRANDS WALL (cb-foods influence) — each brand its own colour ---- */}
      <div style={{ padding:"36px 36px 24px" }}>
        <div className="label">Four brands. One kitchen.</div>
        <div className="h2 underline-wob" style={{ marginTop:4 }}>Pick your flavour.</div>
      </div>

      {[
        { name:"Farmer's Choice", tag:"Burgers · breaded · franks · wieners", body:"Innovation, quality, family. The everyday brand Barbadians grew up on.", cls:"blk-tomato", kind:"meat" },
        { name:"Family Choice", tag:"Canned luncheon meats with blue tin", body:"Pantry staples for hurricane prep, school-bag sandwiches, and rainy-day curries.", cls:"blk-ocean", kind:"can" },
        { name:"Bar Pac", tag:"Fully-cooked, frozen, bone-in hams", body:"A smoke flavour islanders recognise from across the room — Christmas, all year round.", cls:"blk-green", kind:"meat" },
        { name:"EVE · VANA", tag:"Trade-label specials", body:"Manufactured for regional distributors who trust our process.", cls:"blk-mustard", kind:"veg" },
      ].map((b,i)=>(
        <div key={i} className={b.cls} style={{ padding:"30px 36px", position:"relative", borderTop:"1.8px solid var(--ink)" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1.3fr 1fr", gap:20, alignItems:"center" }}>
            <div>
              <div className="label" style={{ color:"#f5f1e8", opacity:.85, mixBlendMode:"normal" }}>0{i+1} · BRAND</div>
              <div className="h1" style={{ color:"#f5f1e8", fontSize:72, marginTop:2 }}>{b.name}</div>
              <div style={{ fontFamily:"Kalam", fontSize:14, color:"#f5f1e8", opacity:.8, marginTop:4 }}>{b.tag}</div>
              <div className="body" style={{ color:"#f5f1e8", opacity:.92, maxWidth:480, marginTop:12 }}>{b.body}</div>
              <div style={{ display:"flex", gap:10, marginTop:14 }}>
                <div className="btn" style={{ background:"#f5f1e8", color:"#1d1c1a", borderColor:"#f5f1e8" }}>See the range →</div>
                <div className="btn" style={{ color:"#f5f1e8", borderColor:"#f5f1e8" }}>Recipes</div>
              </div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10 }}>
              {[0,1,2,3,4,5].map(j=>(
                <ProductBlob key={j} kind={b.kind} name={`SKU-${j+1}`} />
              ))}
            </div>
          </div>
          {i===0 && (
            <Callout rotate={-2} style={{ position:"absolute", top:8, right:24, background:"#f5f1e8", padding:"4px 10px", border:"1.6px solid var(--ink)" }}>
              ref · sqew.uk: white type on bold colour
            </Callout>
          )}
        </div>
      ))}

      {/* ---- HAVE YOU TRIED — full width "did-you-know" survey strip ---- */}
      <div className="blk-cream" style={{ padding:"32px 36px", display:"grid", gridTemplateColumns:"1.4fr 1fr", gap:24, alignItems:"center", borderTop:"1.8px solid var(--ink)" }}>
        <div>
          <div className="label">Have you tried…</div>
          <div className="h2" style={{ marginTop:4 }}>Spicy Chicken Wieners?</div>
          <div className="body" style={{ marginTop:8, maxWidth:520 }}>One-tap survey. Help us decide what to feature next month — and we'll point you to the nearest stockist.</div>
          <div style={{ display:"flex", gap:10, marginTop:14 }}>
            <div className="btn fill">Yes — and I love them</div>
            <div className="btn">Yes — meh</div>
            <div className="btn">Not yet</div>
          </div>
        </div>
        <ProductBlob kind="meat" name="Spicy wieners" />
      </div>

      {/* ---- CHARITY HIGHLIGHT — big quote slab ---- */}
      <div style={{ background:"#1d1c1a", color:"#f5f1e8", padding:"50px 36px", display:"grid", gridTemplateColumns:"1fr 1.2fr", gap:30, alignItems:"center" }}>
        <div className="video-ph" data-label="community kitchens · 20s reel" style={{ height:280 }} />
        <div>
          <div className="label" style={{ color:"#e8b53a" }}>Community</div>
          <div className="h1" style={{ color:"#f5f1e8", fontSize:54, marginTop:6 }}>"We make food because food is how we look out for each other."</div>
          <div className="tiny" style={{ color:"#f5f1e8", opacity:.7, marginTop:10 }}>— Damien Atherley, plant operations</div>
          <div style={{ display:"flex", gap:20, marginTop:22 }}>
            {[["12.4k","meals donated"],["6","parish partners"],["38","schools"]].map(([n,l],i)=>(
              <div key={i}>
                <div style={{ fontFamily:"Caveat", fontWeight:700, fontSize:48, color:"#e8b53a", lineHeight:1 }}>{n}</div>
                <div className="tiny" style={{ color:"#f5f1e8", opacity:.7 }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop:16 }}>
            <div className="btn" style={{ background:"#e8b53a", color:"#1d1c1a", borderColor:"#e8b53a" }}>Our community programmes →</div>
          </div>
        </div>
      </div>

      {/* ---- RECIPES STRIP ---- */}
      <div style={{ padding:"34px 0 30px", background:"var(--paper)" }}>
        <div style={{ padding:"0 36px", display:"flex", justifyContent:"space-between", alignItems:"flex-end" }}>
          <div>
            <div className="label">Recipes by product</div>
            <div className="h2" style={{ marginTop:4 }}>Pick a tin. We'll tell you dinner.</div>
          </div>
          <div className="chip">🔍 Search by product</div>
        </div>
        <div className="rail" style={{ marginTop:14 }}>
          {["Pelau night","Crusty ham sandwich","Frank-and-bean skillet","Sunday cou-cou","Tin-fish pasta","Breakfast salt-bread"].map((n,i)=>(
            <div key={i} className="box" style={{ width:220, flexShrink:0, background:"#fff" }}>
              <div className="ghost" data-label={`recipe ${i+1}`} style={{ height:140, border:0 }} />
              <div style={{ padding:"10px 12px" }}>
                <div style={{ fontFamily:"Caveat", fontSize:22, fontWeight:700, lineHeight:1.05 }}>{n}</div>
                <div className="tiny">uses · Family Choice</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WFFooter />

      <WFSurveyPopup />
    </div>
  );
}

window.DirectionB = DirectionB;
