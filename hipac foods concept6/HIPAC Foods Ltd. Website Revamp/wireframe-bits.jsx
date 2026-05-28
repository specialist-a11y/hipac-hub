/* Shared wireframe bits: nav, footer, primitives. Exposed on window. */

function WFNav({ items, tone = "ink" }) {
  const links = items || ["Our Story", "Brands", "Products", "Recipes", "Trade", "Community", "Contact"];
  return (
    <div className="nav">
      <div className="logo">HIPAC.</div>
      <ul>{links.map((l, i) => <li key={i}>{l}</li>)}</ul>
      <div className="util">
        <span>🔍 search</span>
        <span className="chip">📍 Find in store</span>
      </div>
    </div>
  );
}

function WFFooter() {
  return (
    <div className="footer">
      <div>
        <div className="h3">HIPAC.</div>
        <div style={{ fontFamily: "Kalam", fontSize: 12, opacity: .8, lineHeight: 1.6 }}>
          Nothing less than the best.<br />
          Fontabelle, Bridgetown, Barbados.<br />
          A Goddard Group company.
        </div>
        <div style={{ marginTop: 12 }}>
          <div className="tiny" style={{ color:"#f5f1e8", opacity:.8 }}>Get our newsletter</div>
          <div style={{ display:"flex", gap:0, marginTop:6 }}>
            <div style={{ flex:1, border:"1.5px solid #f5f1e8", padding:"6px 10px", fontFamily:"Kalam", fontSize:12, opacity:.7 }}>your@email</div>
            <div style={{ background:"#f5f1e8", color:"#1d1c1a", padding:"6px 14px", fontFamily:"Kalam", fontSize:12, fontWeight:700 }}>JOIN</div>
          </div>
        </div>
      </div>
      <div>
        <div className="h3">Brands</div>
        <ul>
          <li>Farmer's Choice</li>
          <li>Family Choice</li>
          <li>Bar Pac</li>
          <li>EVE · VANA</li>
        </ul>
      </div>
      <div>
        <div className="h3">Explore</div>
        <ul>
          <li>Products</li>
          <li>Recipes</li>
          <li>Our Story</li>
          <li>Quality & Safety</li>
          <li>Community</li>
        </ul>
      </div>
      <div>
        <div className="h3">Trade & Press</div>
        <ul>
          <li>Distributors</li>
          <li>Food service</li>
          <li>Careers</li>
          <li>Contact us</li>
          <li>Press kit</li>
        </ul>
      </div>
    </div>
  );
}

function WFSurveyPopup({ tone="paper" }) {
  return (
    <div className="survey-popup">
      <div className="tiny" style={{ opacity:.6 }}>FEATURED THIS WEEK</div>
      <div style={{ display:"flex", gap:10, alignItems:"center", marginTop:6 }}>
        <div className="product" style={{ width:60, height:60, padding:6 }}>
          <div className="blob" />
        </div>
        <div>
          <div style={{ fontFamily:"Caveat", fontWeight:700, fontSize:22, lineHeight:1 }}>Have you tried our<br/>Spicy Chicken Franks?</div>
        </div>
      </div>
      <div style={{ display:"flex", gap:6, marginTop:10 }}>
        <div className="btn fill" style={{ padding:"4px 10px", fontSize:12 }}>Yes — loved it</div>
        <div className="btn" style={{ padding:"4px 10px", fontSize:12 }}>Not yet</div>
      </div>
      <div className="tiny" style={{ marginTop:6, opacity:.55 }}>1-click survey · ref. sujaorganic.com</div>
    </div>
  );
}

/* annotated callout */
function Callout({ children, rotate=-3, color="accent", style={} }) {
  const c = color === "accent" ? "var(--accent)" : "var(--accent-4)";
  return (
    <div className="wf-anno" data-rotate={rotate} style={{
      fontFamily:"Caveat", fontWeight:700, fontSize:20,
      color:c, transform:`rotate(${rotate}deg)`, display:"inline-block", ...style
    }}>{children}</div>
  );
}

/* curved arrow from (x1,y1) to (x2,y2) inside a parent box, in % */
function CurvyArrow({ x1, y1, x2, y2, curve=20, color="var(--accent)" }) {
  const mx = (x1+x2)/2;
  const my = (y1+y2)/2 - curve;
  return (
    <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none" }} viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`} fill="none" stroke={color} strokeWidth="0.4" strokeLinecap="round" />
      <path d={`M ${x2} ${y2} l -1.4 -0.6 M ${x2} ${y2} l -0.4 -1.6`} fill="none" stroke={color} strokeWidth="0.5" strokeLinecap="round" />
    </svg>
  );
}

function ProductBlob({ kind="meat", name="Product" }) {
  return (
    <div className={`product ${kind==="veg"?"veg":kind==="fish"?"fish":kind==="can"?"can":""}`} style={{ aspectRatio:"1/1" }}>
      <div className="name">{name}</div>
      <div className="blob" />
    </div>
  );
}

Object.assign(window, { WFNav, WFFooter, WFSurveyPopup, Callout, CurvyArrow, ProductBlob });
