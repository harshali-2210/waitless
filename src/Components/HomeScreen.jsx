const hospitals = [
  { name: "KEM Hospital", area: "Parel, Mumbai", tag: "Low wait", tagClass: "tag-green", wait: "~30m" },
  { name: "Sion Hospital", area: "Sion, Mumbai", tag: "Medium wait", tagClass: "tag-orange", wait: "~55m" },
  { name: "Cooper Hospital", area: "Vile Parle, Mumbai", tag: "High wait", tagClass: "tag-red", wait: "~1h 20m" },
];

const styles = {
  brandName: { color: "#fff", fontSize: 17, fontWeight: 800 },
  brandSub: { color: "rgba(255,255,255,0.75)", fontSize: 11 },
  bellWrap: {
    marginLeft: "auto", background: "rgba(255,255,255,0.2)",
    width: 38, height: 38, borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
    transition: "background 0.2s"
  },
  bellIcon: { fontSize: 18 },
  tokenRight: { textAlign: "right", paddingTop: 4 },
  tapLabel: { color: "rgba(255,255,255,0.6)", fontSize: 12 },
  arrow: { color: "#fff", fontSize: 22, marginTop: 4 },
  progressFill: { width: "78%" },
  deptTag: { background: "#e8eef0", color: "#5b7a80" },
  spacer: { height: 20 },
};

export default function HomeScreen({ setScreen, showToast }) {
  return (
    <>
      <div className="header">
        <div className="logo-row">
          <div className="logo-dot">W</div>
          <div>
            <div style={styles.brandName}>WaitLess</div>
            <div style={styles.brandSub}>📍 Mumbai, Maharashtra</div>
          </div>
          <div style={styles.bellWrap} onClick={() => showToast("🔔 1 new alert — your turn in ~15 min!")}>
            <span style={styles.bellIcon}>🔔</span>
          </div>
        </div>
      </div>

      <div className="home-content">
        <div className="greeting">
          <h2>Good Morning, Riya 👋</h2>
          <p>You have 1 active queue token</p>
        </div>

        <div className="active-token" onClick={() => setScreen("queue")}>
          <div className="token-top">
            <div>
              <div className="token-badge">🟢 Active Token</div>
              <div className="token-num">47</div>
              <div className="token-sub">KEM Hospital · General OPD</div>
            </div>
            <div style={styles.tokenRight}>
              <div style={styles.tapLabel}>Click to track</div>
              <div style={styles.arrow}>→</div>
            </div>
          </div>
          <div className="token-info">
            <div className="token-info-item">
              <span className="ti-label">Ahead of you</span>
              <span className="ti-val">6 patients</span>
            </div>
            <div className="token-info-item">
              <span className="ti-label">Your ETA</span>
              <span className="ti-val green">~32 min</span>
            </div>
            <div className="token-info-item">
              <span className="ti-label">Doctor</span>
              <span className="ti-val green">Present ✓</span>
            </div>
          </div>
        </div>

        <div className="progress-section">
          <div className="progress-header">
            <span className="progress-title">Queue Progress</span>
            <span className="progress-pct">78%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={styles.progressFill} />
          </div>
          <div className="progress-labels">
            <span>Token 1</span>
            <span>Now serving: 41</span>
            <span>Your token: 47</span>
          </div>
        </div>

        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-val">6</div>
            <div className="stat-label">Patients ahead</div>
          </div>
          <div className="stat-card light">
            <div className="stat-val">~32m</div>
            <div className="stat-label">Estimated wait</div>
          </div>
        </div>

        <div className="section-header">
          <span className="section-title">Nearby Hospitals</span>
          <button className="see-all" onClick={() => setScreen("book")}>Book token +</button>
        </div>

        {hospitals.map((h) => (
          <div className="hospital-card" key={h.name} onClick={() => setScreen("book")}>
            <div className="hosp-icon">🏥</div>
            <div className="hosp-info">
              <div className="hosp-name">{h.name}</div>
              <div className="hosp-dept">{h.area}</div>
              <div className="hosp-meta">
                <span className={`hosp-tag ${h.tagClass}`}>{h.tag}</span>
                <span className="hosp-tag" style={styles.deptTag}>6 depts</span>
              </div>
            </div>
            <div className="hosp-wait">
              <strong>{h.wait}</strong>
              <span>avg wait</span>
            </div>
          </div>
        ))}

        <div style={styles.spacer} />
      </div>
    </>
  );
}