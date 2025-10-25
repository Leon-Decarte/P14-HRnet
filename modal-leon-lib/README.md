# modal-leon-lib

[![npm version](https://badge.fury.io/js/modal-leon-lib.svg)](https://www.npmjs.com/package/modal-leon-lib)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Une modale React flexible et légère, inspirée de jquery-modal, avec des animations fluides et une configuration simple.

## Caractéristiques

- 🚀 Léger et performant
- 🎨 Hautement personnalisable
- ⌨️ Support complet du clavier (touche Échap)
- 📱 Compatible mobile
- ⚛️ Compatible React 18+ et 19+
- 🔄 Animations fluides

## Installation

```bash
npm install modal-leon-lib
Utilisation
jsx
import React, { useState } from 'react';
import Modal from 'modal-leon-lib';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Ouvrir la modale
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Ma modale"
      >
        <h2>Contenu personnalisé</h2>
        <p>Vous pouvez mettre n'importe quel contenu ici !</p>
      </Modal>
    </div>
  );
}
## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `isOpen` | boolean | requis | Contrôle l'ouverture/fermeture de la modale |
| `onClose` | function | requis | Fonction appelée lors de la fermeture |
| `children` | ReactNode | requis | Contenu de la modale |
| `fadeDuration` | number | 200 | Durée de l'animation en millisecondes |
| `clickClose` | boolean | true | Fermer en cliquant sur le fond |
| `escapeClose` | boolean | true | Fermer avec la touche Échap |
| `showClose` | boolean | true | Afficher le bouton de fermeture |
| `closeText` | string | "×" | Texte du bouton de fermeture |
| `className` | string | "" | Classes CSS supplémentaires pour le contenu |

## Style

La modale peut être personnalisée via CSS. Les classes suivantes sont disponibles :

```css
.modal-overlay    /* Fond semi-transparent */
.modal-container  /* Conteneur principal de la modale */
.modal-content    /* Contenu de la modale */
.modal-close      /* Bouton de fermeture */
```

## Compatibilité

- React 18.0.0 et versions ultérieures
- React DOM 18.0.0 et versions ultérieures

Personnalisation
## Exemple Complet

```jsx
<Modal
  isOpen={isModalOpen}
  onClose={() => setModalOpen(false)}
  fadeDuration={300}
  clickClose={true}
  escapeClose={true}
  showClose={true}
  closeText="×"
  className="custom-modal"
>
  <h2>Titre de la modale</h2>
  <p>Contenu personnalisé de la modale</p>
</Modal>
```

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## Licence

Distribué sous la licence MIT. Voir `LICENSE` pour plus d'informations.

## Auteur

[Leon-Decarte](https://github.com/Leon-Decarte)

---

Fait avec ❤️ par Leon-Decarte
  clickClose={true}
  escapeClose={true}
  showClose={true}
  closeText="✕"
  className="ma-classe-personnalisee"
>
  <h2>Titre personnalisé</h2>
  <p>Contenu avec une durée d'animation plus longue.</p>
  <button onClick={() => setModalOpen(false)}>
    Fermer
  </button>
</Modal>
Styles par défaut
La modale inclut ses propres styles CSS :

Fond semi-transparent

Animation d'apparition fluide

Bouton de fermeture vert

Responsive design

Les styles sont automatiquement inclus - aucun import CSS supplémentaire nécessaire !

⌨️ Accessibilité
Fermeture avec la touche Échap

Fermeture en cliquant sur le fond

Bouton de fermeture visible

Z-index élevé pour éviter les conflits

Animations
Deux animations sont incluses :

fadeIn pour le fond

popIn pour le contenu

La durée est contrôlable via la prop fadeDuration.

Responsive
La modale s'adapte automatiquement :

max-width: 90% sur mobile

width: 400px sur desktop

Centrage vertical et horizontal

Dépannage
La modale ne s'affiche pas
Vérifiez que isOpen={true}

Vérifiez que onClose est une fonction valide

Les styles ne s'appliquent pas
Les styles sont inclus automatiquement

Aucun import CSS nécessaire

License
MIT © Leon-Decarte


