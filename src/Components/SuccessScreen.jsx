const styles = {
  hospitalVal: { fontSize: 14 },
};

export default function SuccessScreen({ setScreen }) {
  return (
    <>
      <div className="success-body">
        <div className="success-icon">✓</div>
        <div className="success-title">Token Booked!</div>
        <div className="success-sub">
          Your queue number is confirmed.<br />
          You'll get a notification 15 min before your turn.
        </div>

        <div className="token-display">
          <div className="td-label">Your Token Number</div>
          <div className="td-num">48</div>
          <div className="td-info">
            <div className="td-item">
              <div className="td-item-label">Hospital</div>
              <div className="td-item-val" style={styles.hospitalVal}>KEM Hospital</div>
            </div>
            <div className="td-item">
              <div className="td-item-label">ETA</div>
              <div className="td-item-val">~37 min</div>
            </div>
            <div className="td-item">
              <div className="td-item-label">Slot</div>
              <div className="td-item-val">10 AM</div>
            </div>
          </div>
        </div>

        <button className="view-queue-btn" onClick={() => setScreen("queue")}>
          📋 Track My Queue
        </button>
        <button className="home-btn" onClick={() => setScreen("home")}>
          ← Back to Home
        </button>
      </div>
    </>
  );
}