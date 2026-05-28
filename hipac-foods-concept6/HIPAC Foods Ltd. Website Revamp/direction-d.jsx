/* Direction D — VIBRANT TABS
   Inspired by sqew.uk (bold colour blocks, white type, food-pops-on-hover) + LaCroix flavour tabs.
   Compact, punchy, less-scroll. Tabbed category switcher. */

function DirectionD() {
  const cats = [
    { id:"fresh",  label:"Fresh",  bg:"#d8482b", bg2:"#a83218", note:"From plant to plate in hours." },
    { id:"frozen", label:"Frozen", bg:"#2a5b88", bg2:"#194064", note:"Ready when you are." },
    { id:"canned", label:"Canned", bg:"#e8b53a", bg2:"#a87f15", note:"Hurricane-pantry approved." },
    { id:"veg",    label:"Veggie", bg:"#2f7a4f", bg2:"#1a4329", note:"Made for meat-lovers too." },
  ];
  const [tab, setTab] = React.useState(0);
  const c = cats[tab];

  return (
    <div className="wf" style={{ position:"relative" }}>
      <WFNav />

      {/* ---- HERO: colour slab, white type, hover-pop product ---- */}
      <div style={{ background:c.bg, color:"#f5f1e8", padding:"40px 36px 50px", transition:"background .35s", position:"relative", overflow:"hidden" }}>
        {/* category tabs */}
        <div style={{ display:"flex", gap:0 }}>
          {cats.map((cc,i)=>(
            <div key={cc.id}
              onClick={()=>setTab(i)}
              style={{
                padding:"10px 22px",
                fontFamily:"Kalam", fontWeight:700, fontSize:14, letterSpacing:".06em", textTransform:"uppercase",
                border:"1.8px solid #f5f1e8",
                borderRight: i<cats.length-1?"0":"1.8px solid #f5f1e8",
                background: i===tab ? "#f5f1e8" : "transparent",
                color: i===tab ? "var(--ink)" : "#f5f1e8",
                cursor:"pointer", transition:"all .25s"
              }}>{cc.label}</div>
          ))}
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1.2fr 1fr", gap:30, alignItems:"center", marginTop:30 }}>
          <div>
            <div className="label" style={{ color:"#f5f1e8", opacity:.85 }}>{c.label.toUpperCase()} · {c.note}</div>
            <div className="h1" style={{ color:"#f5f1e8", fontSize:96, lineHeight:.92, marginTop:8 }}>
              The taste<br/>of <em style={{ fontStyle:"italic" }}>Barbados,</em><br/>in your kitchen.
            </div>
            <div style={{ display:"flex", gap:10, marginTop:20 }}>
              <div className="btn" style={{ background:"#f5f1e8", color:"#1d1c1a", borderColor:"#f5f1e8" }}>Shop {c.label.toLowerCase()} →</div>
              <div className="btn" style={{ color:"#f5f1e8", borderColor:"#f5f1e8" }}>▶ Watch reel</div>
            </div>
          </div>
          {/* hero product pops out the colour block */}
          <div style={{ position:"relative", height:380, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <div style={{ position:"absolute", left:"50%", top:"55%", transform:"translate(-50%,-50%)", width:280, height:280, borderRadius:"50%", background:c.bg2, border:"2px dashed rgba(245,241,232,.4)" }} />
            <div className="product" style={{ width:280, height:340, background:"transparent", border:0 }}>
              <div className="blob" style={{ width:"86%", height:"86%", transform:"translateY(-30px) rotate(-6deg)", boxShadow:"0 18px 0 rgba(0,0,0,.18)" }} />
            </div>
            <Callout rotate={2} color="ocean" style={{ position:"absolute", bottom:0, left:-10, color:"#f5f1e8" }}>
              ↑ pops 30px on hover (sqew)
            </Callout>
          </div>
        </div>

        <Callout rotate={-2} style={{ position:"absolute", top:14, right:24, background:"#f5f1e8", padding:"4px 10px", border:"1.6px solid var(--ink)" }}>
          ★ tab click · whole bg + product swap
        </Callout>
      </div>

      {/* ---- PRODUCT WALL — hover lifts ---- */}
      <div style={{ padding:"36px 36px 24px" }}>
        <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between" }}>
          <div>
            <div className="label">In the {c.label.toLowerCase()} aisle</div>
            <div className="h2" style={{ marginTop:4 }}>Hover to meet them.</div>
          </div>
          <div style={{ display:"flex", gap:8 }}>
            <div className="chip">Sort · A→Z</div>
            <div className="chip">Halaal</div>
            <div className="chip">Family-size</div>
          </div>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14, marginTop:18 }}>
          {[
            ["Spicy Chicken Franks","Farmer's Choice","meat"],
            ["Smoked Bone-in Ham","Bar Pac","meat"],
            ["Luncheon Meat · Chicken","Family Choice","can"],
            ["Veggie Burger Patty","Farmer's Choice","veg"],
            ["Breaded Shrimp","Farmer's Choice","fish"],
            ["Curry Chicken Tin","Family Choice","can"],
            ["Bajan-Style Wieners","Farmer's Choice","meat"],
            ["Soya Mince","EVE","veg"],
          ].map(([n,b,k],i)=>(
            <div key={i} className="box" style={{ background:"#fff", padding:"12px 12px 14px", position:"relative" }}>
              <div className="tiny" style={{ color:c.bg }}>{b}</div>
              <ProductBlob kind={k} name="" />
              <div className="h3" style={{ marginTop:6, fontSize:15, lineHeight:1.2 }}>{n}</div>
              <div className="tiny" style={{ marginTop:4 }}>tap → product page</div>
            </div>
          ))}
        </div>
        <Callout style={{ marginTop:10 }} rotate={-1}>hover: product blob translates -12px, drop shadow grows</Callout>
      </div>

      {/* ---- SPLIT: charity + brands wall ---- */}
      <div style={{ display:"grid", gridTemplateColumns:"1.2fr 1fr", borderTop:"1.8px solid var(--ink)" }}>
        {/* charity */}
        <div className="blk-green" style={{ padding:"40px 36px", position:"relative" }}>
          <div className="label" style={{ color:"#f5f1e8", opacity:.85 }}>Community impact</div>
          <div className="h1" style={{ color:"#f5f1e8", fontSize:68, marginTop:4 }}>
            We feed where<br/>we live.
          </div>
          <div className="body" style={{ color:"#f5f1e8", opacity:.92, maxWidth:380, marginTop:12 }}>
            12,400 meals last year through HIPAC's school lunch programme — plus storm-pantry kits, farmer grants, and a Saturday community kitchen.
          </div>
          <div style={{ marginTop:18 }}>
            <div className="btn" style={{ background:"#f5f1e8", color:"#1d1c1a", borderColor:"#f5f1e8" }}>Our impact report →</div>
          </div>
          <div className="video-ph" data-label="20s community b-roll" style={{ height:140, marginTop:20 }} />
        </div>
        {/* brand wall */}
        <div style={{ padding:"40px 36px", borderLeft:"1.8px solid var(--ink)" }}>
          <div className="label">Brands under our roof</div>
          <div className="h2" style={{ marginTop:4 }}>Four labels, one promise.</div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginTop:14 }}>
            {[
              ["Farmer's Choice","#d8482b"],
              ["Family Choice","#2a5b88"],
              ["Bar Pac","#8b2a18"],
              ["EVE · VANA","#e8b53a"],
            ].map(([n,col],i)=>(
              <div key={i} className="box" style={{ height:90, padding:"10px 14px", background:"#fff", position:"relative", overflow:"hidden" }}>
                <div style={{ position:"absolute", right:-10, top:-10, width:60, height:60, borderRadius:"50%", background:col, opacity:.25 }} />
                <div className="tiny">brand 0{i+1}</div>
                <div style={{ fontFamily:"Caveat", fontSize:24, fontWeight:700, lineHeight:1, marginTop:4 }}>{n}</div>
                <div className="tiny" style={{ marginTop:6, opacity:.7 }}>tap to enter →</div>
              </div>
            ))}
          </div>
          <div className="body" style={{ marginTop:14, opacity:.7, fontSize:14 }}>Each brand opens its own micro-site, color-themed to match.</div>
        </div>
      </div>

      {/* ---- RECIPE QUICK-LOOK ---- */}
      <div style={{ padding:"30px 0 26px", borderTop:"1.8px solid var(--ink)" }}>
        <div style={{ padding:"0 36px", display:"flex", justifyContent:"space-between", alignItems:"flex-end" }}>
          <div>
            <div className="label">Quick dinners</div>
            <div className="h2" style={{ marginTop:4 }}>What's for tea?</div>
          </div>
          <div className="chip">All recipes →</div>
        </div>
        <div className="rail" style={{ marginTop:14 }}>
          {["Cou-cou + ham","Tin-fish pasta","Pelau","Mac pie","Veggie chilli","Bajan breakfast"].map((n,i)=>(
            <div key={i} className="box" style={{ width:210, flexShrink:0, background:"#fff" }}>
              <div className="ghost" data-label="" style={{ height:130, border:0 }} />
              <div style={{ padding:"10px 12px" }}>
                <div className="tiny">≤ 30 min</div>
                <div style={{ fontFamily:"Caveat", fontSize:22, fontWeight:700, lineHeight:1.05, marginTop:2 }}>{n}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---- FIND IN STORE STRIP ---- */}
      <div style={{ background:"#1d1c1a", color:"#f5f1e8", padding:"24px 36px", display:"flex", justifyContent:"space-between", alignItems:"center", gap:20 }}>
        <div>
          <div className="label" style={{ color:"#e8b53a" }}>Where to buy</div>
          <div className="h2" style={{ color:"#f5f1e8", marginTop:2 }}>Stock up nearby — pick a parish.</div>
        </div>
        <div style={{ display:"flex", gap:0, minWidth:380 }}>
          <div style={{ flex:1, background:"#f5f1e8", color:"var(--ink)", padding:"10px 12px", fontFamily:"Kalam", fontSize:13, opacity:.7 }}>📍 St. Michael</div>
          <div className="btn" style={{ background:"#e8b53a", color:"#1d1c1a", borderColor:"#e8b53a" }}>Find →</div>
        </div>
      </div>

      <WFFooter />

      <WFSurveyPopup />
    </div>
  );
}

window.DirectionD = DirectionD;
