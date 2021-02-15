import React from "react"

import Layout from "../components/Layout"
import CardView from "../components/CardView"

import infos from "config/infos"

const App = () => {
  return (
    <Layout>
      <div className="cards-container">
        {infos.cardInfoHiking.map((card) => (
          <span key={card.number}>
            <CardView card={card} />
          </span>
        ))}
      </div>
    </Layout>
  )
}

export default App
