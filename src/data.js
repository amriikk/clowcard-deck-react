//Seeded Data for Menu items

const cards = [
    {
      id: 1,
      title: 'the dark',
      category: 'dark',
      price: 15.99,
      img: 'https://i.imgur.com/yTJgibz.jpeg',
      desc: `The Dark (Kanji: 闇, Katakana: ダーク, Romanji: Dāku) is a Clow Card with the power to control darkness. Alongside The Light, it is one of the foremost of the Clow Cards, and falls under the power of the Moon, Yue and Eastern Magic. `,
    },
    {
      id: 2,
      title: 'the light',
      category: 'light',
      price: 13.99,
      img: 'https://i.imgur.com/Jut3y6l.jpeg',
      desc: `The Light (Kanji: 光, Katakana: ライト, Romanji: Raito) is a Clow Cards with the power to control light. Alongside The Dark, it is one of the foremost of the Clow Cards, and falls under the power of the Sun, Cerberus, and Western Magic.`,
    },
    {
      id: 3,
      title: 'the watery',
      category: 'water',
      price: 6.99,
      img: 'https://i.imgur.com/t6xNpAx.jpeg',
      desc: `The Watery (Kanji: 水, Katakana: ウォータリー, Romanji: Uōtarī) is a Clow Card with the power to manipulate and control water. It is one of the four elemental cards, and as such it is one of the most powerful. Watery falls under the power of the Moon, Yue and under Eastern Magic.`,
    },
    {
      id: 4,
      title: 'the firey',
      category: 'fire',
      price: 20.99,
      img: 'https://i.imgur.com/uwTRmqf.jpeg',
      desc: `The Firey (Kanji: 火, Katakana: ファイーリー, Romanji: Faīrī) is a Clow Card with the power to control and manipulate fire. It is one of the four elemental cards, and as such it is one of the most powerful. Firey falls under the power of the Sun, Cerberus and Western Magic`,
    },
    {
      id: 5,
      title: 'the windy',
      category: 'wind',
      price: 22.99,
      img: 'https://i.imgur.com/3xZabqi.jpeg',
      desc: `The Windy (Kanji: 風, Katakana: ウィンディー, Romanji: Uuindī) is a Clow Card with the power to create and control wind. It is one of the four elemental cards, and as such it is one of the most powerful. Windy falls under the power of the Moon, Yue and under Eastern Magic.`,
    },
    {
      id: 6,
      title: 'the earthy',
      category: 'earth',
      price: 18.99,
      img: 'https://i.imgur.com/T7DqR79.jpeg',
      desc: `The Earthy (Kanji: 地, Katakana: アーシー, Romanji: Āshī) is a Clow Card with the power to control and manipulate earth. It is one of the four elemental cards, and as such it is one of the most powerful. Earthy falls under the power of the Sun, Cerberus and under Western Magic.`,
    },
    {
        id: 7,
        title: 'the dark',
        category: 'dark',
        price: 15.99,
        // img: './images/item-1.jpeg',
        img: 'https://i.imgur.com/yTJgibz.jpeg',
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      },
      {
        id: 8,
        title: 'the light',
        category: 'light',
        price: 13.99,
        // img: './images/item-2.jpeg',
        img: 'https://i.imgur.com/Jut3y6l.jpeg',
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      },
      {
        id: 9,
        title: 'the watery',
        category: 'water',
        price: 6.99,
        // img: './images/item-3.jpeg',
        img: 'https://i.imgur.com/t6xNpAx.jpeg',
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      },
      {
        id: 10,
        title: 'the firey',
        category: 'fire',
        price: 20.99,
        // img: './images/item-4.jpeg',
        img: 'https://i.imgur.com/uwTRmqf.jpeg',
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      },
      {
        id: 11,
        title: 'the windy',
        category: 'wind',
        price: 22.99,
        // img: './images/item-5.jpeg',
        img: 'https://i.imgur.com/3xZabqi.jpeg',
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      },
      {
        id: 12,
        title: 'the earthy',
        category: 'earth',
        price: 18.99,
        // img: './images/item-6.jpeg',
        img: 'https://i.imgur.com/T7DqR79.jpeg',
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
      },
      {
        id: 13,
        title: 'the dark',
        category: 'dark',
        price: 15.99,
        // img: './images/item-1.jpeg',
        img: 'https://i.imgur.com/yTJgibz.jpeg',
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      },
      {
        id: 14,
        title: 'the light',
        category: 'light',
        price: 13.99,
        // img: './images/item-2.jpeg',
        img: 'https://i.imgur.com/Jut3y6l.jpeg',
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      },
      {
        id: 15,
        title: 'the watery',
        category: 'water',
        price: 6.99,
        // img: './images/item-3.jpeg',
        img: 'https://i.imgur.com/t6xNpAx.jpeg',
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      },
      {
        id: 16,
        title: 'the firey',
        category: 'fire',
        price: 20.99,
        // img: './images/item-4.jpeg',
        img: 'https://i.imgur.com/uwTRmqf.jpeg',
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      },
      {
        id: 17,
        title: 'the windy',
        category: 'wind',
        price: 22.99,
        // img: './images/item-5.jpeg',
        img: 'https://i.imgur.com/3xZabqi.jpeg',
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      },
      {
        id: 18,
        title: 'the earthy',
        category: 'earth',
        price: 18.99,
        // img: './images/item-6.jpeg',
        img: 'https://i.imgur.com/T7DqR79.jpeg',
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
      },
  ];

  export default cards;