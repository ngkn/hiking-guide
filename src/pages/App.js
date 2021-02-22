import React, { useEffect, useState } from "react"

import Layout from "../components/Layout"
import CardView from "../components/CardView"

import infos from "config/infos"

const App = () => {
  useEffect(() => {
    const titlesClassname = document.querySelector(".titles")
    let opacity
    titlesClassname.style.opacity = 1 - window.pageYOffset / 600

    //HG translate
    const hgClassname = document.querySelector(".hg")

    //MG translate
    const mgClassname = document.querySelector(".mg")

    window.addEventListener("scroll", () => {
      opacity = window
        .getComputedStyle(titlesClassname)
        .getPropertyValue("opacity")

      if (opacity === 0 || opacity < 0) {
        titlesClassname.style.opacity = 0
      } else {
        titlesClassname.style.opacity = 1 - window.pageYOffset / 600
      }

      // HG
      hgClassname.style.transform = `translate3d(0, -${
        // window.pageYOffset / 15
        window.pageYOffset / 35
      }%, 0)`

      // MG
      mgClassname.style.transform = `translate3d(0, -${
        // window.pageYOffset / 35
        window.pageYOffset / 75
      }%, 0)`
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
