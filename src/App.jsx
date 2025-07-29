import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ flex: 1, padding: "1rem" }}>
          <h2>Bem-vindo ao sistema de controle de estoque!</h2>
        </main>
      </div>
    </div>
  );
}
