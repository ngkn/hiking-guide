import hikerWalkingSmall540 from "images/optimizeImages/climb-walking-small.jpg"
import hikerWalkingSmall920 from "images/optimizeImages/climb-walking-small@3x.jpg"
import hikerWalkingMedium856 from "images/optimizeImages/climb-walking-medium.jpg"
import hikerWalkingMedium1284 from "images/optimizeImages/climb-walking-medium@3x.jpg"
import hikerWalkingLarge522 from "images/optimizeImages/climb-walking-large.jpg"
import hikerWalkingLarge1044 from "images/optimizeImages/climb-walking-large@3x.jpg"

import hikerContemplationSmall540 from "images/optimizeImages/climb-contemplation-small.jpg"
import hikerContemplationSmall920 from "images/optimizeImages/climb-contemplation-small@3x.jpg"
import hikerContemplationMedium856 from "images/optimizeImages/climb-contemplation-medium.jpg"
import hikerContemplationMedium1284 from "images/optimizeImages/climb-contemplation-medium@3x.jpg"
import hikerContemplationLarge522 from "images/optimizeImages/climb-contemplation-large.jpg"
import hikerContemplationLarge1044 from "images/optimizeImages/climb-contemplation-large@3x.jpg"

import hikerCompassSmall540 from "images/optimizeImages/climb-compass-small.jpg"
import hikerCompassSmall920 from "images/optimizeImages/climb-compass-small@3x.jpg"
import hikerCompassMedium856 from "images/optimizeImages/climb-compass-medium.jpg"
import hikerCompassMedium1284 from "images/optimizeImages/climb-compass-medium@3x.jpg"
import hikerCompassLarge522 from "images/optimizeImages/climb-compass-large.jpg"
import hikerCompassLarge1044 from "images/optimizeImages/climb-compass-large@3x.jpg"

export default {
  sidebarLinks: [
    {
      title: "Equipment",
      link: "#",
    },
    {
      title: "About us",
      link: "#",
    },
    {
      title: "Blog",
      link: "#",
    },
  ],
  footerBlogLinks: [
    {
      title: "About MNTN",
      link: "#",
    },
    {
      title: "Contributors & Writers",
      link: "#",
    },
    {
      title: "Write For Us",
      link: "#",
    },
    {
      title: "Contact Us",
      link: "#",
    },
    {
      title: "Privacy Policy",
      link: "#",
    },
  ],
  footerMoreInfoLinks: [
    {
      title: "The Team",
      link: "#",
    },
    {
      title: "Jobs",
      link: "#",
    },
    {
      title: "Press",
      link: "#",
    },
  ],
  cardInfoHiking: [
    {
      number: "01",
      tagline: "get started",
      title: "What level of hiker are you?",
      text:
        "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?",
      images: {
        small: {
          source: {
            media: "(max-width: 767px)",
            // Multiple images are used in srcset to match with Retina screen. For that we need to double width/pixels (x2, x3...)
            srcset: `${hikerWalkingSmall540} 540w, ${hikerWalkingSmall920} 920w`,
          },
        },
        medium: {
          source: {
            media: "(min-width: 768px) and (max-width: 1023px)",
            srcset: `${hikerWalkingMedium856} 900w,  ${hikerWalkingMedium1284} 1284w`,
            // Because image take 50% of the main block (text at left, image at right). In mobile it take all the width of the device
            sizes: "(min-width: 768px) 50vw , 100vw",
          },
        },
        large: {
          source: {
            media: "(min-width: 1024px)",
            srcset: `${hikerWalkingLarge522} 522w,  ${hikerWalkingLarge1044} 1044w`,
            sizes: "(min-width: 1024px) 50vw , 100vw",
          },
        },
        src: hikerWalkingMedium856,
      },
      alt: "Hiker walking on a mountain",
      link: "#",
    },
    {
      number: "02",
      tagline: "hiking essentials",
      title: "Picking the right Hiking Gear!",
      text:
        "The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.",
      images: {
        small: {
          source: {
            media: "(max-width: 767px)",
            srcset: `${hikerContemplationSmall540} 540w, ${hikerContemplationSmall920} 920w`,
          },
        },
        medium: {
          source: {
            media: "(min-width: 768px) and (max-width: 1023px)",
            srcset: `${hikerContemplationMedium856} 900w,  ${hikerContemplationMedium1284} 1284w`,
            sizes: "(min-width: 768px) 50vw , 100vw",
          },
        },
        large: {
          source: {
            media: "(min-width: 1024px)",
            srcset: `${hikerContemplationLarge522} 522w,  ${hikerContemplationLarge1044} 1044w`,
            sizes: "(min-width: 1024px) 50vw , 100vw",
          },
        },
        src: hikerContemplationMedium856,
      },
      alt: "Hiker standing at the top of a mountain",
      link: "#",
    },
    {
      number: "03",
      tagline: "where you go is the key",
      title: "Understand Your Map & Timing",
      text:
        "To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..",
      images: {
        small: {
          source: {
            media: "(max-width: 767px)",
            srcset: `${hikerCompassSmall540} 540w, ${hikerCompassSmall920} 920w`,
          },
        },
        medium: {
          source: {
            media: "(min-width: 768px) and (max-width: 1023px)",
            srcset: `${hikerCompassMedium856} 900w,  ${hikerCompassMedium1284} 1284w`,
            sizes: "(min-width: 768px) 50vw , 100vw",
          },
        },
        large: {
          source: {
            media: "(min-width: 1024px)",
            srcset: `${hikerCompassLarge522} 522w,  ${hikerCompassLarge1044} 1044w`,
            sizes: "(min-width: 1024px) 50vw , 100vw",
          },
        },
        src: hikerCompassMedium856,
      },
      alt: "Hiker showing a compass above a mountain",
      link: "#",
    },
  ],
}
