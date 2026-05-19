import "./App.css";
import { FaWhatsapp } from "react-icons/fa";

export default function App() {
  return (
    <div className="container">
      <div className="content">

        <h1 className="title">Cansado de baixar planilhas e continuar sem dinheiro no fim do mês?</h1>

        <p className="subtitle">
          O “Manual do Liso” foi criado para quem cansou de métodos complicados e quer sair do vermelho na prática
        </p>

        {/* VIDEO */}
        <div className="video-wrapper">
          <video
            className="video-player"
            autoPlay
            loop
            muted
            playsInline
            controls
          >
            <source src="/video-1.mp4" type="video/mp4" />
          </video>
        </div>

        <a href="https://chat.whatsapp.com/KkQvVfr2cXrKjqIPQjHBvC" className="cta-button">
          <FaWhatsapp size={30} style={{ marginRight: "12px" }} />
          QUERO SAIR DO VERMELHO
        </a>

        <div className="social-proof">
          +3.200 pessoas já começaram a organizar suas finanças
        </div>

        <div className="badge">
          Deixe de ser um pobre lascado com o manual do liso
        </div>
      </div>
    </div>
  );
}
