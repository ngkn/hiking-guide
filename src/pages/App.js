import React, { useEffect, useState } from "react"

import Layout from "../components/Layout"
import CardView from "../components/CardView"

import infos from "config/infos"

const App = () => {
  useEffect(() => {
    const titlesClassname = document.querySelector(".titles")
    let opacity
    titlesClassname.style.opacity = 1 - window.scrollY / 600

    window.addEventListener("scroll", () => {
      opacity = window
        .getComputedStyle(titlesClassname)
        .getPropertyValue("opacity")

      if (opacity === 0 || opacity < 0) {
        console.log("superieur à 0  :>> ", opacity)
        titlesClassname.style.opacity = 0
      } else {
        titlesClassname.style.opacity = 1 - window.scrollY / 600
      }
    })
  }, [])

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
