# Kasa - Location d'appartements entre particuliers

Kasa est une application web de location d'appartements entre particuliers, développée avec React.

## 🚀 Technologies Utilisées

- React
- React Router
- SCSS
- JavaScript (ES6+)

## 📋 Prérequis

- Node.js (version 14.0.0 ou supérieure)
- npm ou yarn

## 🔧 Installation

1. Clonez le repository :
```bash
git clone https://github.com/RaphFT/Kasa
```

2. Installez les dépendances :
```bash
npm install
# ou
yarn install
```

3. Lancez le serveur de développement :
```bash
npm start
# ou
yarn start
```

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000)

## 🏗️ Structure du Projet

```
kasa/
├── public/              # Fichiers statiques
│   ├── arrow-dropdown.svg
│   └── ...
├── src/                 # Code source
│   ├── components/      # Composants React
│   ├── pages/          # Pages de l'application
│   ├── styles/         # Fichiers SCSS
│   └── data/           # Données statiques
└── package.json        # Dépendances et scripts
```

## 🎨 Fonctionnalités

- Affichage de la liste des logements
- Page de détail pour chaque logement
- Système de navigation entre les pages
- Composants réutilisables (Banner, Card, Collapse)
- Design responsive
- Animations et transitions fluides

## 📱 Responsive Design

L'application est entièrement responsive avec des breakpoints pour :
- Mobile (< 768px)
- Tablette (768px - 900px)
- Desktop (> 900px)

## 🧪 Tests

Pour lancer les tests :
```bash
npm test
# ou
yarn test
```

## 📄 Licence

Ce projet est sous licence MIT.

## 👥 Auteur

Fremont Raphael

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
