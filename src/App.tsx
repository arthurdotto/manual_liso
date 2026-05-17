import "./App.css";
import { FaWhatsapp } from "react-icons/fa";

export default function App() {
  return (
    <div className="container">
      <div className="content">
        {/* <h1 className="title">
          Você não precisa{" "}
          <span className="highlight">ganhar mais</span>{" "}
          para sair do{" "}
          <span className="danger">vermelho</span>
        </h1> */}

        <h1 className="title">Pare de adiar, Saia da m#rda hoje.</h1>

        <p className="subtitle">
          Junte-se ao grupo exclusivo e transforme sua vida financeira hoje
          mesmo.
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
