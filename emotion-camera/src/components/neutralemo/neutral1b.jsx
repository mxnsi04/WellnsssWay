// components/neutral/Q2B.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Neutral1b() {
  const navigate = useNavigate();

  return (
    <div className="question-container">
      <h2>
        That is wonderful! What usually helps you achieve this calm and relaxed state?
      </h2>
      <ul className="option-list">
        <li>
          <button onClick={() => navigate("/neutral1b1")}>
            a) Relaxation techniques (e.g., deep breathing, meditation)
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/neutral1b2")}>
            b) Engaging in peaceful activities (e.g., reading, nature walk)
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/neutral1b3")}>
            c) Social connection/Time with loved ones
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/neutral1b4")}>
            d) Physical activity/Exercise
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/neutral1b5")}>
            e) A combination of these
          </button>
        </li>
      </ul>

      <style jsx>{`
        .question-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #f0fbf4;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 1.5rem;
          margin-bottom: 30px;
          color: #2d6a4f;
        }

        .option-list {
          list-style-type: none;
          padding: 0;
        }

        .option-list li {
          margin-bottom: 16px;
        }

        .option-list button {
          width: 100%;
          padding: 14px 20px;
          font-size: 1rem;
          background-color: #38b000;
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .option-list button:hover {
          background-color: #2d943d;
          transform: scale(1.02);
        }

        .option-list button:active {
          transform: scale(0.97);
        }
      `}</style>
    </div>
  );
}
