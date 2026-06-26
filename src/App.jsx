import { useState, useEffect } from "react";
import "./App.css";
import SideNav from "./Components/SideNav";
import HomeScreen from "./Components/HomeScreen";
import QueueScreen from "./Components/QueueScreen";
import BookScreen from "./Components/BookScreen";
import SuccessScreen from "./Components/SuccessScreen";
import AlertsScreen from "./Components/AlertsScreen";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [toast, setToast] = useState({ show: false, msg: "" });

  const showToast = (msg) => {
    setToast({ show: true, msg });
    setTimeout(() => setToast({ show: false, msg: "" }), 3000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      showToast("🔔 Your turn is coming up in ~15 minutes!");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const screens = { home: HomeScreen, queue: QueueScreen, book: BookScreen, success: SuccessScreen, alerts: AlertsScreen };
  const ActiveScreen = screens[screen] || HomeScreen;

  const showSidebar = screen !== "success";

  return (
    <div className="app-shell">
      <div className={`toast ${toast.show ? "show" : ""}`}>
        <span className="toast-icon">🔔</span>
        <span>{toast.msg}</span>
      </div>
      {showSidebar && <SideNav active={screen} setScreen={setScreen} />}
      <main className={`main-content ${!showSidebar ? "full-width" : ""}`}>
        <ActiveScreen setScreen={setScreen} showToast={showToast} />
      </main>
    </div>
  );
}
