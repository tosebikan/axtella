 const data={
properties:[
  {
    id: '1',
    tag: 'For Rent',
    title: '2Bedroom Apartment',
    price: 'GHC2,200/month',
    address: 'Dome, K Boat Junction',
    bedrooms: 2,
    baths: 4,
    size: 150,
    image: require("./images/domek4.jpg"),
    images:[
      {
        url: 'https://www.dropbox.com/s/ug3op6ra3akwmtf/domek1.jpg?raw=1'
      },
      {
        url: 'https://www.dropbox.com/s/pyxwe8msj8k9j4n/domek2.jpg?raw=1'
      },
      {
        url: 'https://www.dropbox.com/s/2im5rbcd0z6ch98/domek3.jpg?raw=1'
      },
      {
        url: 'https://www.dropbox.com/s/8x15pzt05a8q0a1/domek4.jpg?raw=1'
      },
      {
        url: 'https://www.dropbox.com/s/pxtuhylg0b8wr8p/domek5.jpg?raw=1'
      },
      {
        url: 'https://www.dropbox.com/s/oix8vhy73isczji/domek6.jpg?raw=1'
      },
    ],
    featured: true,
    type: 'house',
    details: "Brand new two bedroom apartment for rental."
  },
  {
    id: '2',
    tag: 'For Rent',
    title: 'Newly Built Apartments',
    price: 'GHC2,200/month',
    address: 'East-Legon Hills school junction',
    bedrooms: 3,
    baths: 4,
    size: 150,
    image: require('./images/elh1.jpg'),
    images:[
      {
        url: 'https://www.dropbox.com/s/aw2xkkfox5exy9m/elh6.jpg?raw=1'
      },
      {
        url: 'https://www.dropbox.com/s/qiu15bfl9bf66rt/elh5.jpg?raw=1'
      },
      {
        url: 'https://www.dropbox.com/s/pipdklgtmf5jh2i/elh4.jpg?raw=1'
      },
      {
        url: 'https://www.dropbox.com/s/s1mn04p0ggaouo1/elh1.jpg?raw=1'
      },
      {
        url: 'https://www.dropbox.com/s/zlk2u20105nnwb0/elh3.jpg?raw=1'
      },
      {
        url: 'https://www.dropbox.com/s/rqv463sexb61kfk/elh2.jpg?raw=1'
      },
    ],
    featured: true,
    type: 'house',
    details: "Recently built apartments up for rent at East-legon Hills school junction."
  },
  {
    id: '3',
    tag: 'ForSale',
    title: '4Bedroom House',
    price: '$410,000',
    address: 'East-Legon',
    bedrooms: 4,
    baths: 4,
    size: 150,
    image: require('./images/4h1.jpg'),
    images:[
      {
        url: 'https://www.dropbox.com/s/82999utsaayyhoz/4h1.jpg?raw=1'
      },
      {
        url: 'https://www.dropbox.com/s/0n8xguqk4jzeidl/4h2.jpg?raw=1'
      },
      {
        url: 'https://www.dropbox.com/s/kklrt37hugl3x73/4h3.jpg?raw=1'
      },
      {
        url: 'https://www.dropbox.com/s/2qykmzo8874j1nq/4h4.jpg?raw=1'
      },
      {
        url: 'https://www.dropbox.com/s/u3cx31q1xz9hgcm/4h5.jpg?raw=1'
      },
      {
        url: 'https://www.dropbox.com/s/3bo5q8yg13q837j/4h6.jpg?raw=1'
      },
      {
        url: 'https://www.dropbox.com/s/h0mv0kvgpm52wg0/4h7.jpg?raw=1'
      },
      {
        url: 'https://www.dropbox.com/s/iqhf6k1xwo4a0bf/4h8.jpg?raw=1'
      },
      {
        url: 'https://www.dropbox.com/s/muatrr5w6vyp4q7/4h9.jpg?raw=1'
      },
      {
        url: 'https://www.dropbox.com/s/bo9rxy1dxqpk6ct/4h10.jpg?raw=1'
      },
      {
        url: 'https://www.dropbox.com/s/m8pkh7wru3qz0h9/4h11.jpg?raw=1'
      },
    ],
    featured: true,
    type: 'house',
    details: "Modern 4 Bedroom House for sale at East Legon"
  },
  {
    id: '4',
    tag: 'For Sale',
    title: 'Luxury Apartment',
    price: '120,000',
    address: 'East Airport',
    bedrooms: 3,
    baths: 4,
    size: 150,
    image: require('./images/home4.jpg'),
    featured: true,
    type: 'house',
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
  },
  {
    id: '5',
    tag: 'For Rent',
    title: 'Family Homes',
    price: '900/Mo',
    address: 'West Legon',
    bedrooms: 3,
    baths: 4,
    size: 150,
    image: require('./images/home2.jpg'),
    featured: false,
    type: 'house',
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
  },
  {
    id: '6',
    tag: 'For Sale',
    title: 'Luxury Apartment',
    price: '120,000',
    address: 'Sakumono',
    bedrooms: 3,
    baths: 4,
    size: 150,
    image: require('./images/home1.jpg'),
    featured: false,
    type: 'house',
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
  },
  {
    id: '7',
    tag: 'For Sale',
    title: '156 Acres of Farm Land',
    price: 'GHC26,000/acre',
    address: 'Aburi Fotobi',
    bedrooms: null,
    baths: null,
    size: 180,
    image: require('./images/land1.jpg'),
    featured: false,
    type: 'land',
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
  },
  {
    id: '8',
    tag: 'For Sale',
    title: '150 Acres of Farm Land',
    price: 'GHC6,000/acre',
    address: 'Nsawam Pokrom',
    bedrooms: null,
    baths: null,
    size: 150,
    image: require('./images/land2.jpg'),
    featured: false,
    type: 'land',
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
  },
  {
    id: '9',
    tag: 'For Sale',
    title: '100 Acres',
    price: 'GHC150/acre',
    address: 'Winneba',
    bedrooms: null,
    baths: null,
    size: null,
    image: require('./images/land3.jpg'),
    featured: false,
    type: 'land',
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
  },
  {
    id: '10',
    tag: 'For Sale',
    title: '10 Plots',
    price: '50,000',
    address: 'Sakumono',
    bedrooms: null,
    baths: null,
    size: 150,
    image: require('./images/land4.jpg'),
    featured: false,
    type: 'land',
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
  },
]
 }

 export default data;
