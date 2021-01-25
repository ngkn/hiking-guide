import React from "react"
import PropTypes from "prop-types"

const CardView = ({ card }) => {
  return (
    <div className="card">
      {/* <div className="card__number-container">
        <span className="card__number">{card.number}</span>
      </div> */}
      <div className="card__description">
        <span className="card__number">{card.number}</span>
        <div className="card__tagline-container">
          <hr className="card__line" />
          <h3 className="card__tagline">{card.tagline}</h3>
        </div>
        <h2 className="card__title">{card.title}</h2>
        <div className="card__text">{card.text}</div>
      </div>

      <div className="card__image-container">
        <img className="card__image" src={card.image} />
      </div>
    </div>
  )
}

CardView.propTypes = {
  //   card: PropTypes.shape({
  //     number: PropTypes.string.isRequired,
  //     tagline: PropTypes.string.isRequired,
  //     title: PropTypes.string.isRequired,
  //     text: PropTypes.string.isRequired,
  //     image: PropTypes.string.isRequired,
  //     link: PropTypes.string.isRequired,
  //   }),
  card: PropTypes.objectOf(PropTypes.string),
}

export default CardView
