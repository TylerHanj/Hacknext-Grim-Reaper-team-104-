import React, { useState } from 'react';
import { REGISTER_URL } from './config';
import './App.css';

export default function App() {
  const [step, setStep] = useState(0);

  return (
      <div className="page-container">
        {/* Главный экран (Hero) с фоновым изображением */}
        <div className="hero-section">
          <img
              src="https://ventorme.ai/figma/studentlanding/v4f/hero-bg.webp"
              alt="Background"
              className="hero-bg"
          />
          <div className="hero-overlay"></div>

          <div className="hero-content">
            {/* Шапка */}
            <header className="site-header">
              <img
                  src="https://ventorme.ai/figma/studentlanding/logo-ventorme-short-lime.svg"
                  alt="ventorme.ai"
                  className="site-logo"
              />
            </header>

            {/* Текст первого экрана */}
            <section className="hero-text-block">
              <h1 className="hero-title">
                Выбери профессию и поступи в вуз мечты
              </h1>
              <p className="hero-subtitle">
                Пройди короткий тест, подбери университеты и рассчитай шансы на грант за пару кликов.
              </p>
              <a href={REGISTER_URL} className="hero-btn">
                Начать бесплатно 🚀
              </a>
            </section>
          </div>
        </div>

        {/* Мини-квиз */}
        <section className="quiz-card">
          <h2 className="quiz-title">Узнай свой план поступления за 30 секунд</h2>
          {step === 0 && (
              <div>
                <p className="quiz-question">В каком ты классе / курсе?</p>
                <button onClick={() => setStep(1)} className="quiz-btn">8–9 класс</button>
                <button onClick={() => setStep(1)} className="quiz-btn">10–11 класс / Колледж</button>
              </div>
          )}
          {step === 1 && (
              <div>
                <p className="quiz-question">Что тебе ближе?</p>
                <button onClick={() => setStep(2)} className="quiz-btn">💻 IT и Технологии</button>
                <button onClick={() => setStep(2)} className="quiz-btn">📊 Бизнес и Аналитика</button>
              </div>
          )}
          {step === 2 && (
              <div style={{ textAlign: 'center' }}>
                <p className="quiz-question" style={{ fontWeight: 'bold' }}>Результаты готовы! Зарегистрируйся, чтобы посмотреть разбор:</p>
                <a href={REGISTER_URL} className="quiz-btn quiz-btn-final">
                  Открыть мой результат →
                </a>
              </div>
          )}
        </section>
      </div>
  );
}