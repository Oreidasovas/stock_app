import React from "react";

export default function Sidebar() {
  return (
    <aside style={{
      width: "200px",
      backgroundColor: "#f4f4f4",
      height: "100vh",
      padding: "1rem",
      boxSizing: "border-box"
    }}>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Estoque</a></li>
          <li><a href="#">Configurações</a></li>
        </ul>
      </nav>
    </aside>
  );
}
