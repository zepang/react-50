import React from 'react'
import styles from './style.module.css'
import { useState } from 'react';
import { useEffect } from 'react';
const CARDS = [
  {
    title: 'Explore The World',
    img: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Wild Forest',
    img: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
  },
  {
    title: 'Sunny Beach',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'
  },
  {
    title: 'City on Winter',
    img: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Mountains - Clouds',
    img: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
]

const DOCUMENT_TITLE = "Expanding Cards"

function ExpandingCard() {
  const list = React.useRef<HTMLDivElement>(null)
  const [currentActive, setCurrentActive] = useState(0)
  useEffect(() => {
    if (document.title !== DOCUMENT_TITLE) {
      document.title = DOCUMENT_TITLE
    }
  })
  return (
    <div ref={list} className={styles.container}>
      {
        CARDS.map((card, index) => (
          <div
            key={card.title}
            className={`${styles.panel} ${index === currentActive ? styles.active : ''}`}
            style={{ 'backgroundImage': `url(${card.img})` }}
            onClick={() => setCurrentActive(index)}>
            <h3>{card.title}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default ExpandingCard