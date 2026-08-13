function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="brand">
          <span className="brand-icon">■</span>
          <h2>TaskFlow Dashboard</h2>
        </div>

        <div className="completed-count">
          Completed: <strong>0</strong>
        </div>
      </div>
    </header>
  );
}

export default Header;