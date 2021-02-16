import React from "react"
import PropTypes from "prop-types"

const CardView = ({ card }) => {
  const isOdd = !!(Number(card.number) % 2) // Determine odd of a card to apply it specifics css properties
  const cardEvenClassName = isOdd ? "" : "card--even"
  const cardContainerEvenClassName = isOdd ? "" : "card__container--even"
  const cardDescriptionEvenClassName = isOdd
    ? "card__description--odd"
    : "card__description--even"

  const cardTaglineEvenClassName = isOdd
    ? "card__tagline--odd"
    : "card__tagline--even"
  const cardLineEvenClassName = isOdd ? "card__line--odd" : "card__line--even"
  const cardNumberEvenClassName = isOdd
    ? "card__number--odd"
    : "card__number--even"

  return (
    <div className={`card ${cardEvenClassName}`}>
      <div className={`card__container ${cardContainerEvenClassName}`}>
        <div className={`card__description ${cardDescriptionEvenClassName}`}>
          <span className={`card__number ${cardNumberEvenClassName}`}>
            {card.number}
          </span>
          <hr className={`card__line ${cardLineEvenClassName}`} />
          <h3 className={`card__tagline ${cardTaglineEvenClassName}`}>
            {card.tagline}
          </h3>
          <h2 className="card__title">{card.title}</h2>
          <div className="card__text">{card.text}</div>
        </div>
      </div>
      <div className="card__image-container">
        <picture>
          <source
            media={card.images.small.source.media}
            srcSet={card.images.small.source.srcset}
          />
          <source
            media={card.images.medium.source.media}
            srcSet={card.images.medium.source.srcset}
            size={card.images.medium.source.sizes}
          />
          <source
            media={card.images.large.source.media}
            srcSet={card.images.large.source.srcset}
            size={card.images.large.source.sizes}
          />
          <img className="card__image" src={card.images.src} alt={card.alt} />
        </picture>
      </div>
    </div>
  )
}

CardView.propTypes = {
  card: PropTypes.shape({
    number: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    images: PropTypes.shape({
      small: PropTypes.shape({
        source: PropTypes.shape({
          media: PropTypes.string,
          srcset: PropTypes.string,
        }),
      }),
      medium: PropTypes.shape({
        source: PropTypes.shape({
          media: PropTypes.string,
          srcset: PropTypes.string,
          sizes: PropTypes.string,
        }),
      }),
      large: PropTypes.shape({
        source: PropTypes.shape({
          media: PropTypes.string,
          srcset: PropTypes.string,
          sizes: PropTypes.string,
        }),
      }),
      src: PropTypes.string.isRequired,
    }),
    link: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
}

export default CardView
