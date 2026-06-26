export default function SideNav({ active, setScreen }) {
  const tabs = [
    { key: "home", icon: "🏠", label: "Home" },
    { key: "book", icon: "➕", label: "Book" },
    { key: "queue", icon: "📋", label: "My Queue" },
    { key: "alerts", icon: "🔔", label: "Alerts" },
  ];

  return (
    <nav className="side-nav">
      <div className="side-nav-brand">
        <div className="logo-dot">W</div>
        <div className="side-nav-brand-text">
          <span className="side-nav-name">WaitLess</span>
          <span className="side-nav-sub">Queue Management</span>
        </div>
      </div>
      <div className="side-nav-items">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`side-nav-item ${active === tab.key ? "active" : ""}`}
            onClick={() => setScreen(tab.key)}
          >
            <span className="side-nav-icon">{tab.icon}</span>
            <span className="side-nav-label">{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="side-nav-footer">
        <div className="side-nav-user">
          <div className="side-nav-avatar">R</div>
          <div>
            <div className="side-nav-username">Riya More</div>
            <div className="side-nav-usersub">Patient</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
