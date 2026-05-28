import React, { useState } from 'react';
import { MapPin, Phone, Clock, Store, Globe } from 'lucide-react';

export default function FindHipac() {
  const islands = [
    {
      id: "barbados",
      name: "Barbados (Home Office)",
      distributor: "HIPAC Limited / Goddard Enterprises",
      stores: [
        {
          name: "Massy Supermarkets - Warrens",
          address: "Warrens, St. Michael, Barbados",
          phone: "+1 (246) 417-5800",
          hours: "8:00 AM - 9:00 PM",
          type: "Supermarket Chain"
        },
        {
          name: "Massy Supermarkets - Sunset Crest",
          address: "Holetown, St. James, Barbados",
          phone: "+1 (246) 432-1200",
          hours: "8:00 AM - 8:00 PM",
          type: "Supermarket Chain"
        },
        {
          name: "Carlton Supermarket",
          address: "Black Rock, St. Michael, Barbados",
          phone: "+1 (246) 425-1100",
          hours: "7:30 AM - 8:30 PM",
          type: "Local Grocer"
        },
        {
          name: "Emerald City Supermarket",
          address: "Six Roads, St. Philip, Barbados",
          phone: "+1 (246) 416-8300",
          hours: "8:00 AM - 9:00 PM",
          type: "Local Grocer"
        }
      ]
    },
    {
      id: "st-lucia",
      name: "Saint Lucia",
      distributor: "Goddard Catering Group (St. Lucia) Ltd.",
      stores: [
        {
          name: "Massy Stores - Rodney Heights",
          address: "Gros Islet, Saint Lucia",
          phone: "+1 (758) 457-2000",
          hours: "8:00 AM - 9:00 PM",
          type: "Primary Wholesaler"
        },
        {
          name: "Massy Stores - La Clery",
          address: "Castries, Saint Lucia",
          phone: "+1 (758) 457-2200",
          hours: "8:00 AM - 8:00 PM",
          type: "Supermarket Chain"
        }
      ]
    },
    {
      id: "grenada",
      name: "Grenada",
      distributor: "Independence Agencies Ltd.",
      stores: [
        {
          name: "Real Value IGA Supermarket",
          address: "Grand Anse Shopping Centre, Grenada",
          phone: "+1 (473) 444-4861",
          hours: "8:00 AM - 9:00 PM",
          type: "Retail Outlet"
        },
        {
          name: "MNIB Wholesalers",
          address: "Young Street, St. George's, Grenada",
          phone: "+1 (473) 440-1122",
          hours: "7:30 AM - 5:00 PM",
          type: "Distributor Partner"
        }
      ]
    },
    {
      id: "st-vincent",
      name: "St. Vincent & Grenadines",
      distributor: "Coreas Distribution Ltd.",
      stores: [
        {
          name: "Greaves IGA Supermarket",
          address: "Kingstown, St. Vincent",
          phone: "+1 (784) 457-1111",
          hours: "8:00 AM - 8:00 PM",
          type: "Retail Partner"
        },
        {
          name: "C.K. Greaves & Co. Ltd.",
          address: "Arnos Vale, St. Vincent",
          phone: "+1 (784) 458-2222",
          hours: "8:00 AM - 9:00 PM",
          type: "Retail Partner"
        }
      ]
    }
  ];

  const [selectedIsland, setSelectedIsland] = useState(0);

  return (
    <section id="find-hipac" className="locator-section">
      {/* Background visual decor */}
      <div className="bg-glow w-[500px] h-[500px]" style={{ top: '10%', left: '5%', backgroundColor: 'rgba(245, 158, 11, 0.04)' }} />
      <div className="bg-glow w-[500px] h-[500px]" style={{ bottom: '10%', right: '5%', backgroundColor: 'rgba(16, 185, 129, 0.04)' }} />

      <div className="container">
        <div className="grid grid-12 align-center">
          
          {/* Left Column: Selector */}
          <div className="locator-col-left">
            <span className="badge">
              <Store size={12} style={{ color: '#f59e0b' }} />
              DISTRIBUTOR LOCATOR
            </span>
            <h2 className="section-h2" style={{ textAlign: 'left' }}>
              Find Our <span style={{ color: '#f59e0b' }}>Products</span>
            </h2>
            <p className="card-p" style={{ fontSize: '0.95rem', lineHeight: '1.7', fontWeight: 300 }}>
              Hipac Foods products are distributed throughout various Caribbean islands. Select your island below to discover leading supermarkets, wholesale grocers, and distributors stocking our fresh brands.
            </p>

            {/* Island Selector Dropdown */}
            <div className="locator-selector-wrap">
              <label className="selector-label">Select Island Region</label>
              <select
                value={selectedIsland}
                onChange={(e) => setSelectedIsland(Number(e.target.value))}
                className="locator-dropdown"
              >
                {islands.map((island, idx) => (
                  <option 
                    key={island.id} 
                    value={idx}
                    className="bg-[#0e0f14] text-white"
                  >
                    {island.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Distributor details */}
            <div className="glass-panel distributor-info-card">
              <div className="dist-icon-box">
                <Globe size={20} />
              </div>
              <div style={{ textItems: 'left' }}>
                <span className="dist-card-header">Primary Distributor</span>
                <span className="dist-card-name">
                  {islands[selectedIsland].distributor}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Supermarkets scrolling list */}
          <div className="locator-col-right">
            {islands[selectedIsland].stores.map((store, sIdx) => (
              <div
                key={sIdx}
                className="glass-panel store-card group"
              >
                <div className="flex flex-col gap-xs">
                  <div className="store-header-row">
                    <MapPin size={16} />
                    <h4 className="store-h4">
                      {store.name}
                    </h4>
                  </div>
                  <p className="store-address">
                    {store.address}
                  </p>
                  
                  <div className="store-meta-row">
                    <span className="store-meta-item">
                      <Phone size={12} style={{ color: 'var(--text-secondary)' }} />
                      {store.phone}
                    </span>
                    <span className="store-meta-item">
                      <Clock size={12} style={{ color: 'var(--text-secondary)' }} />
                      {store.hours}
                    </span>
                  </div>
                </div>

                <span className="badge">
                  {store.type}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
