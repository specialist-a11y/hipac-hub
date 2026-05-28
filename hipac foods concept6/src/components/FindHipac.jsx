import React, { useState } from 'react';
import { MapPin, Phone, Clock, Globe } from 'lucide-react';

const ISLANDS = [
  {
    name: 'Barbados',
    distributor: 'HIPAC Limited (Direct)',
    stores: [
      { name: "Massy Stores — Sheraton Mall", addr: "Sheraton Centre, Christ Church", phone: "(246) 418-4000", hours: "Mon–Sat 8am–9pm, Sun 9am–6pm", type: 'Supermarket' },
      { name: "Massy Stores — Wildey", addr: "Wildey, St. Michael", phone: "(246) 431-5000", hours: "Mon–Sat 7:30am–9pm, Sun 9am–6pm", type: 'Supermarket' },
      { name: "Super Centre — Warrens", addr: "Warrens, St. Michael", phone: "(246) 424-0400", hours: "Mon–Sat 8am–8pm, Sun 9am–5pm", type: 'Supermarket' },
      { name: "Chefette Restaurants", addr: "Nationwide — All Locations", phone: "(246) 429-5000", hours: "Daily 7am–11pm", type: 'Restaurant' },
    ],
  },
  {
    name: 'Saint Lucia',
    distributor: 'Caribbean Trading Ltd',
    stores: [
      { name: "Massy Stores — Vieux Fort", addr: "Vieux Fort, Saint Lucia", phone: "(758) 454-6789", hours: "Mon–Sat 8am–8pm, Sun 9am–5pm", type: 'Supermarket' },
      { name: "Massy Stores — Rodney Bay", addr: "Rodney Bay Mall, Gros Islet", phone: "(758) 452-4523", hours: "Mon–Sat 8am–9pm, Sun 9am–6pm", type: 'Supermarket' },
      { name: "Super J — Castries", addr: "Bridge Street, Castries", phone: "(758) 452-1234", hours: "Mon–Fri 7:30am–8pm", type: 'Supermarket' },
    ],
  },
  {
    name: 'Grenada',
    distributor: 'Grenada Distributors Inc.',
    stores: [
      { name: "IGA Supermarket — St. George's", addr: "Lagoon Road, St. George's", phone: "(473) 440-2116", hours: "Mon–Sat 8am–8pm, Sun 9am–5pm", type: 'Supermarket' },
      { name: "Foodland — Grand Anse", addr: "Grand Anse, St. George", phone: "(473) 444-4513", hours: "Mon–Sat 8am–9pm", type: 'Supermarket' },
    ],
  },
  {
    name: 'St. Vincent',
    distributor: 'SVG Food Distributors',
    stores: [
      { name: "C.K. Greaves Supermarket", addr: "Kingstown, St. Vincent", phone: "(784) 456-1832", hours: "Mon–Sat 8am–7pm", type: 'Supermarket' },
      { name: "Hi-Lo Food Stores", addr: "Arnos Vale, St. Vincent", phone: "(784) 456-4123", hours: "Mon–Sat 8am–8pm, Sun 9am–4pm", type: 'Supermarket' },
    ],
  },
];

export default function FindHipac() {
  const [activeIsland, setActiveIsland] = useState(0);
  const island = ISLANDS[activeIsland];

  return (
    <section id="find-hipac" className="locator-v2">
      <div className="container">
        <div className="locator-v2-grid">
          {/* Left */}
          <div className="locator-left reveal-left">
            <span className="section-tag">Where To Buy</span>
            <h2 className="section-h2-v2">
              Find <span className="gold-text">HIPAC</span>
            </h2>
            <p className="locator-p-v2">
              HIPAC products are available across the Eastern Caribbean. Select your island to find
              the nearest stockist — from major supermarkets to local grocers.
            </p>

            {/* Island tabs */}
            <div className="island-tabs">
              {ISLANDS.map((isl, i) => (
                <button
                  key={i}
                  className={`island-tab ${activeIsland === i ? 'active' : ''}`}
                  onClick={() => setActiveIsland(i)}
                >
                  {isl.name}
                </button>
              ))}
            </div>

            {/* Distributor card */}
            <div className="distributor-card-v2">
              <div className="dist-icon-v2">
                <Globe size={15} />
              </div>
              <div>
                <span className="dist-head-v2">Official Distributor</span>
                <span className="dist-name-v2">{island.distributor}</span>
              </div>
            </div>
          </div>

          {/* Right: store cards */}
          <div className="locator-right reveal-right">
            {island.stores.map((store, i) => (
              <button
                key={i}
                className="store-card-v2"
                style={{ width: '100%', cursor: 'default' }}
              >
                <div style={{ flex: 1 }}>
                  <div className="store-name-row">
                    <MapPin size={13} />
                    <span className="store-name-v2">{store.name}</span>
                  </div>
                  <div className="store-addr-v2">{store.addr}</div>
                  <div className="store-meta-row">
                    <span className="store-meta-item">
                      <Phone size={11} /> {store.phone}
                    </span>
                    <span className="store-meta-item">
                      <Clock size={11} /> {store.hours}
                    </span>
                  </div>
                </div>
                <span className="store-type-badge">{store.type}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
