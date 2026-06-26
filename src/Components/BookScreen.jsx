import { useState } from "react";

const hospitals = ["KEM Hospital", "Sion Hospital", "Cooper Hospital", "Nair Hospital"];
const departments = [
  { emoji: "🩺", name: "General OPD", wait: "~30 min wait" },
  { emoji: "🫀", name: "Cardiology", wait: "~45 min wait" },
  { emoji: "🦴", name: "Orthopaedics", wait: "~1h wait" },
  { emoji: "👁️", name: "Eye / ENT", wait: "~25 min wait" },
  { emoji: "👶", name: "Paediatrics", wait: "~40 min wait" },
  { emoji: "🧪", name: "Pathology Lab", wait: "~20 min wait" },
];
const slots = [
  { time: "8:00 AM", spots: "Full", busy: true },
  { time: "9:00 AM", spots: "Full", busy: true },
  { time: "10:00 AM", spots: "6 left", busy: false },
  { time: "11:00 AM", spots: "12 left", busy: false },
  { time: "12:00 PM", spots: "18 left", busy: false },
  { time: "2:00 PM", spots: "20 left", busy: false },
];

const styles = {
  slotSpan: { fontSize: 11 },
  spacer: { height: 20 },
};

export default function BookScreen({ setScreen }) {
  const [selectedHosp, setSelectedHosp] = useState("KEM Hospital");
  const [selectedDept, setSelectedDept] = useState("General OPD");
  const [selectedSlot, setSelectedSlot] = useState("10:00 AM");
  const [patientName, setPatientName] = useState("Riya More");

  return (
    <>
      <div className="header">
        <div className="header-row">
          <button className="back-btn" onClick={() => setScreen("home")}>←</button>
          <div>
            <h1>Book a Token</h1>
            <p>Get your queue number from home</p>
          </div>
        </div>
      </div>

      <div className="book-body">
        <div className="book-section">
          <div className="book-label">
            <span className="step-num">1</span> Select Hospital
          </div>
          <div className="select-pills">
            {hospitals.map((h) => (
              <div key={h} className={`pill ${selectedHosp === h ? "selected" : ""}`} onClick={() => setSelectedHosp(h)}>
                {h}
              </div>
            ))}
          </div>
        </div>

        <div className="book-section">
          <div className="book-label">
            <span className="step-num">2</span> Select Department
          </div>
          <div className="dept-grid">
            {departments.map((d) => (
              <div key={d.name} className={`dept-card ${selectedDept === d.name ? "selected" : ""}`} onClick={() => setSelectedDept(d.name)}>
                <div className="dept-emoji">{d.emoji}</div>
                <div className="dept-name">{d.name}</div>
                <div className="dept-wait">{d.wait}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="book-section">
          <div className="book-label">
            <span className="step-num">3</span> Preferred Time Slot
          </div>
          <div className="slots-grid">
            {slots.map((s) => (
              <div
                key={s.time}
                className={`slot ${s.busy ? "busy" : selectedSlot === s.time ? "selected" : ""}`}
                onClick={() => !s.busy && setSelectedSlot(s.time)}
              >
                {s.time}<br />
                <span style={styles.slotSpan}>{s.spots}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="book-section">
          <div className="book-label">
            <span className="step-num">4</span> Patient Name
          </div>
          <input
            className="input-field"
            type="text"
            placeholder="Enter patient name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
        </div>

        <button className="confirm-btn" onClick={() => setScreen("success")}>
          ✓ Confirm Booking
        </button>
        <div style={styles.spacer} />
      </div>
    </>
  );
}