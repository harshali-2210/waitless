const alerts = [
  { icon: "🔔", bg: "#E8F6F8", title: "Your turn in ~15 minutes!", body: "Token #47 · KEM Hospital · General OPD. Please start heading to the hospital now.", time: "2 minutes ago" },
  { icon: "✅", bg: "#e1f8f0", title: "Doctor is present", body: "Dr. Meera Joshi has checked in at KEM Hospital. OPD is running on time.", time: "45 minutes ago" },
  { icon: "📋", bg: "#E8F6F8", title: "Token #47 confirmed", body: "Your queue spot is confirmed for KEM Hospital, General OPD. Estimated wait: ~32 min.", time: "1 hour ago" },
  { icon: "⚠️", bg: "#fff3e0", title: "Yesterday · Sion Hospital", body: "Dr. Kumar was 20 minutes delayed due to an emergency. OPD resumed at 10:20 AM.", time: "Yesterday, 10:05 AM" },
  { icon: "✅", bg: "#e1f8f0", title: "Visit completed", body: "Your visit to KEM Hospital is marked complete. Token #39 · General OPD.", time: "2 days ago" },
];

export default function AlertsScreen({ setScreen }) {
  return (
    <>
      <div className="header">
        <div className="header-row">
          <div>
            <h1>Alerts</h1>
            <p>Your queue notifications</p>
          </div>
        </div>
      </div>

      <div className="alerts-body">
        {alerts.map((a, i) => (
          <div key={i} className="alert-card">
            <div className="alert-icon" style={{ background: a.bg }}>{a.icon}</div>
            <div>
              <div className="alert-title">{a.title}</div>
              <div className="alert-body">{a.body}</div>
              <div className="alert-time">{a.time}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}