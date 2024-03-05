import { useState, useEffect } from 'react';

export default function ThemeController() {
  const [theme, setTheme] = useState(getColorPreference());

  // Defina a preferência de cor inicial com base no localStorage ou no esquema de cores preferido do sistema
  function getColorPreference() {
    return (
      localStorage.getItem('theme-preference') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    );
  }

  // Atualize o localStorage e o estado de acordo com o tema atual
  function setPreference() {
    localStorage.setItem('theme-preference', theme);
  }

  // Reflexo da preferência atual na interface do usuário
  function reflectPreference() {
    document.documentElement.setAttribute('data-theme', theme);
  }

  // Alternar entre temas claro e escuro
  function toggleTheme() {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  }

  // Adicionar ouvintes de evento
  useEffect(() => {
    reflectPreference();

    document.querySelectorAll('.js-dark-mode-trigger').forEach(element => {
      element.addEventListener('click', toggleTheme);
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      setTheme(event.matches ? 'dark' : 'light');
    });

    return () => {
      document.querySelectorAll('.js-dark-mode-trigger').forEach(element => {
        element.removeEventListener('click', toggleTheme);
      });

      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', toggleTheme);
    };
  }, [theme]);

  return null; // Este componente não renderiza nada visível
}
