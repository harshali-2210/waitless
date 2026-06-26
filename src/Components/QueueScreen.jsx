const styles = {
  headerRow: { display: "flex", alignItems: "center", gap: 14, marginBottom: 8 },
  etaRight: { textAlign: "right" },
  actionRow: { display: "flex", gap: 12, marginBottom: 20 },
  alertBtn: {
    flex: 1, padding: 14, background: "#E8F6F8", border: "none",
    borderRadius: 12, fontSize: 14, fontWeight: 700, color: "#028090", cursor: "pointer",
    transition: "all 0.2s"
  },
  cancelBtn: {
    flex: 1, padding: 14, background: "#ffeaea", border: "none",
    borderRadius: 12, fontSize: 14, fontWeight: 700, color: "#c0392b", cursor: "pointer",
    transition: "all 0.2s"
  },
  spacer: { height: 20 },
};

function QueueViz() {
  const dots = [];
  for (let i = 1; i <= 53; i++) {
    let cls = "q-dot";
    let label = i;
    if (i < 41) cls += " done";
    else if (i === 41) cls += " current";
    else if (i === 47) { cls += " mine"; label = "ME"; }
    else cls += " pending";
    dots.push(<div key={i} className={cls}>{label}</div>);
  }
  return <div className="queue-viz">{dots}</div>;
}

export default function QueueScreen({ setScreen, showToast }) {
  return (
    <>
      <div className="queue-header">
        <div style={styles.headerRow}>
          <button className="back-btn" onClick={() => setScreen("home")}>←</button>
          <div>
            <div className="queue-hospital">KEM Hospital, Parel</div>
            <div className="queue-dept">General OPD</div>
            <div className="queue-doctor">Dr. Meera Joshi · MBBS, MD</div>
          </div>
        </div>
      </div>

      <div className="queue-body">
        <div className="eta-pill">
          <div>
            <div className="eta-main">~32 min</div>
            <div className="eta-sub">estimated wait time</div>
          </div>
          <div style={styles.etaRight}>
            <div className="eta-arrive">Arrive by</div>
            <div className="eta-time">10:13 AM</div>
          </div>
        </div>

        <div className="my-token-big">
          <div className="mtoken-label">Your Token</div>
          <div className="mtoken-num">47</div>
          <div className="mtoken-dept">General OPD · KEM Hospital</div>
        </div>

        <div className="queue-pos">
          <div className="qpos-header">
            <span className="qpos-title">Live Queue (6 ahead)</span>
            <span className="qpos-live">
              <span className="live-dot" /> Live
            </span>
          </div>
          <QueueViz />
        </div>

        <div className="doctor-status">
          <div className="ds-header">👨‍⚕️ Doctor Status</div>
          <div className="ds-row">
            <div className="ds-avatar">MJ</div>
            <div className="ds-info">
              <div className="ds-name">Dr. Meera Joshi</div>
              <div className="ds-dept">General Medicine · MBBS, MD</div>
            </div>
            <div className="ds-badge badge-present">✓ Present</div>
          </div>
        </div>

        <div style={styles.actionRow}>
          <button style={styles.alertBtn} onClick={() => showToast("🔔 Alert set! You'll be notified 15 min before your turn.")}>
            🔔 Set alert
          </button>
          <button style={styles.cancelBtn} onClick={() => showToast("❌ Token #47 cancelled.")}>
            ✕ Cancel token
          </button>
        </div>

        <div style={styles.spacer} />
      </div>
    </>
  );
}