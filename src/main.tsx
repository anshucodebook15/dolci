import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/fonts.css";
import './index.css'
import App from './App.tsx'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AppWrapper from './hooks/AppWrapper.tsx';

gsap.registerPlugin(ScrollTrigger);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </StrictMode>,
)
