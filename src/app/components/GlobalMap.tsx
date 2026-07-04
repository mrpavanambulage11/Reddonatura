import { useState } from "react";
import { X } from "lucide-react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type ProjectLocation = {
  name: string;
  coordinates: [number, number];
  machines: string;
};

const HEADQUARTERS: ProjectLocation = {
  name: "Bengaluru, India",
  coordinates: [77.5946, 12.9716],
  machines:
    "Global Headquarters — R&D and manufacturing hub for organic waste decomposer machines.",
};

const PROJECT_LOCATIONS: ProjectLocation[] = [
  { name: "Conakry, Guinea", coordinates: [-13.7, 9.5], machines: "RN300 × 2 nos & RN500" },
  { name: "Dubai, UAE", coordinates: [55.3, 25.2], machines: "RN2000, RN125, RN500, RN1000" },
  { name: "Abu Dhabi, UAE", coordinates: [54.4, 24.4], machines: "RN1000, RN2000, RN500" },
  { name: "Oman", coordinates: [55.9, 21.5], machines: "RN250, RN500" },
  { name: "Phi Phi Island, Thailand", coordinates: [98.77, 7.74], machines: "RN75" },
  { name: "Philippines", coordinates: [121.7, 12.9], machines: "RN50" },
  { name: "Romania", coordinates: [24.9, 45.9], machines: "RN50" },
  { name: "Italy", coordinates: [12.5, 41.9], machines: "RN25 × 4 nos, RN50, RN75, RN125" },
  { name: "Russia", coordinates: [55.0, 55.0], machines: "RN125 × 5 nos, RN50 × 2, RN750 × 2" },
  { name: "Sharjah, UAE", coordinates: [55.4, 25.3], machines: "RN125" },
  { name: "Thailand", coordinates: [100.9, 15.8], machines: "RN250" },
  {
    name: "Maldives",
    coordinates: [73.2, 3.2],
    machines:
      "Biogas plant RN300 / RN500 / RN1000, RN250 ×2, RN125, RN500 ×5, RN750 ×3, RN1000 ×2, 370 kW Solar, RN300 ×2",
  },
  { name: "Switzerland", coordinates: [8.2, 46.8], machines: "RN125" },
  { name: "United Kingdom", coordinates: [-2.0, 54.0], machines: "RN25" },
  { name: "Mexico", coordinates: [-102.5, 23.6], machines: "RN250" },
  { name: "Baltimore, USA", coordinates: [-76.6, 39.3], machines: "RN500" },
  { name: "Chile", coordinates: [-71.5, -35.7], machines: "RN25 & RN75" },
  { name: "Guatemala", coordinates: [-90.2, 15.8], machines: "RN750 ×2 nos" },
  {
    name: "Saudi Arabia (KSA)",
    coordinates: [45.0, 24.0],
    machines: "Coffee capsules shredding system, RN250",
  },
  { name: "Bahrain", coordinates: [50.6, 26.0], machines: "RN250" },
];

export default function GlobalMap() {
  const [popup, setPopup] = useState<ProjectLocation | null>(null);

  return (
   <section
  className="py-24"
  style={{
    backgroundColor: "#F5F4EF",
  }}
>
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <div className="flex justify-center items-end gap-4 mb-3">
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#0D8239", lineHeight: 1 }}>
              Global
            </span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "14px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#A0780E", paddingBottom: "5px" }}>
              Presence
            </span>
          </div>

          <p className="mt-4 max-w-2xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", lineHeight: 1.7 }}>
            Our Organic Waste Decomposer Machines are operating across multiple
            countries worldwide.
          </p>
        </div>

        <div className="relative">
          <ComposableMap
            projectionConfig={{ scale: 155 }}
            width={900}
            height={480}
            style={{
              width: "100%",
              height: "auto",
            }}
          >
            <defs>
              <style>{`
                @keyframes pulse-dot {
                  0%,100%{
                    opacity:1;
                    transform:scale(1);
                  }
                  50%{
                    opacity:.55;
                    transform:scale(1.35);
                  }
                }

                .animate-pulse-dot{
                  animation:pulse-dot 1.8s ease-in-out infinite;
                  transform-origin:center;
                  transform-box:fill-box;
                }

                @keyframes pulse-hq{
                  0%,100%{
                    opacity:.9;
                    transform:scale(1);
                  }
                  50%{
                    opacity:.3;
                    transform:scale(1.6);
                  }
                }

                .animate-pulse-hq{
                  animation:pulse-hq 1.6s ease-in-out infinite;
                  transform-origin:center;
                  transform-box:fill-box;
                }
              `}</style>
            </defs>

            

            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: "#b8d4cb",
                        stroke: "#4a8577",
                        strokeWidth: 0.6,
                        outline: "none",
                      },
                      hover: {
                        fill: "#a6c8bd",
                        stroke: "#2f6b5c",
                        strokeWidth: 0.8,
                        outline: "none",
                      },
                      pressed: {
                        fill: "#a6c8bd",
                        stroke: "#2f6b5c",
                        strokeWidth: 0.8,
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>

            {PROJECT_LOCATIONS.map((loc) => (
              <Marker
                key={loc.name}
                coordinates={loc.coordinates}
                onClick={() => setPopup(loc)}
              >
                <circle
                  className="animate-pulse-dot"
                  r={6}
                  fill="#f97316"
                  fillOpacity={0.35}
                />
                <circle r={4} fill="#fff" />
                <circle
                  r={2.8}
                  fill="#ea580c"
                  stroke="#7c2d12"
                  strokeWidth={0.6}
                />
              </Marker>
            ))}

            <Marker
              coordinates={HEADQUARTERS.coordinates}
              onClick={() => setPopup(HEADQUARTERS)}
            >
              <circle
                className="animate-pulse-hq"
                r={9}
                fill="#ef4444"
                fillOpacity={0.28}
              />

              <circle
                r={4}
                fill="#dc2626"
                stroke="#fff"
                strokeWidth={0.8}
              />

              <g transform="translate(0,-14)">
                <rect
                  x={-28}
                  y={-8}
                  width={56}
                  height={11}
                  rx={2}
                  fill="#fff"
                  stroke="#dc2626"
                  strokeWidth={0.6}
                />

                <text
                  textAnchor="middle"
                  y={0}
                  style={{
                    fontFamily: "system-ui",
                    fontSize: 7,
                    fontWeight: 700,
                    fill: "#b91c1c",
                  }}
                >
                  HQ
                </text>
              </g>
            </Marker>
          </ComposableMap>
        </div>

        <p className="mt-5 text-center" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#8A9E8B" }}>
          Click on any marker to view installed machines.
        </p>

        {popup && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(11,31,16,0.55)", backdropFilter: "blur(4px)" }}
            onClick={() => setPopup(null)}
          >
            <div
              className="w-full max-w-md p-7"
              style={{ backgroundColor: "#ffffff", boxShadow: "0 40px 80px rgba(5,49,20,0.35)", border: "1px solid rgba(23,139,76,0.15)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "1.3rem", color: "#053114" }}>
                  {popup.name}
                </h3>

                <button
                  onClick={() => setPopup(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 transition-colors hover:bg-[rgba(23,139,76,0.08)]"
                  style={{ color: "#053114" }}
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {popup !== HEADQUARTERS && (
                <p className="mt-3" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "10.5px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#178B4C" }}>
                  Machines Installed
                </p>
              )}

              <p className="mt-3" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "#5A6B5C", lineHeight: 1.7 }}>
                {popup.machines}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}