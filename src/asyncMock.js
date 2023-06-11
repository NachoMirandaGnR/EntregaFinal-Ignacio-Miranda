const products = [
  {
    id: "1",
    name: "Gibson Les Paul 1955 Goldtop",
    price: 15000,
    category: "Guitarra Electrica",
    /* img:  */
    stock: 3,
    description: "Guitarra Electrica Gibson Les Paul",
  },
  {
    id: "2",
    name: "Gibson Songwriter Deluxe 2020",
    price: 6000,
    category: "Guitarra Acustica",
    /* img:  */
    stock: 4,
    description: "Guitarra Acustica Gibson",
  },

  {
    id: "3",
    name: "Fender Stratocaster SRV 1973 Heavy Relic",
    price: 12500,
    category: "Guitarra Electrica",
    /* img: */
    stock: 2,
    description: "Guitarra Electrica Fender Stratocaster SRV Signature HR",
  },

  {
    id: "4",
    name: "Gibson Les Paul Custom Black Beauty 1969 Reissue",
    price: 18650,
    category: "Guitarra Electrica",
    /* img:  */
    stock: 1,
    description: "Guitarra Electrica Gibson Les Paul Custom",
  },

  {
    id: "5",
    name: "Gibson Gibson Trini Lopez 1967",
    price: 11990,
    category: "Guitarra Electrica",
    /* img: */
    stock: 2,
    description: "Guitarra Electrica Gibson Trini Lopez",
  },

  {
    id: "6",
    name: "Fender Stratocaster EVH Frankenstrat 2007",
    price: 7600,
    category: "Guitarra Electrica",
    /* img: */
    stock: 5,
    description: "Guitarra Electrica Fender EVH Signature",
  },

  {
    id: "7",
    name: "Marshall JCM 50/25W Model 2553 1988",
    price: 2960,
    category: "Amplificador",
    /* img: */
    stock: 2,
    description: "Amplificador Guitarra Electrica Marshall",
  },

  {
    id: "8",
    name: "Fender Deluxe 1962 Brownface",
    price: 9500,
    category: "Amplificador",
    /* img: */
    stock: 1,
    description: "Amplificador Guitarra Electrica Fender",
  },

  {
    id: "9",
    name: "Taylor Custom Shop Grand Symphony 2009",
    price: 4490,
    category: "Guitarra Acustica",
    /* img: */
    stock: 4,
    description: "Guitarra Acustica Taylor",
  },

  {
    id: "10",
    name: "Pedal Mooer Afinador Baby Tuner True Bypass Guitarra Bajo",
    price: 52,
    category: "Accesorio",
    /* img: */
    stock: 5,
    description: "Pedal Afinador Para Instrumentos de Cuerda",
  },

  {
    id: "11",
    name: "Púas Ernie Ball Medium - Bolsa de 50 Unidades",
    price: 18,
    category: "Accesorio",
    /* img: */
    stock: 5,
    description: "Puas Para Instrumentos de Cuerda",
  },

  {
    id: "12",
    name: "Cable Ernie Ball de 7,62 Metros Mallado Para Instrumentos Rosa",
    price: 42,
    category: "Accesorio",
    /* img: */
    stock: 5,
    description: "Cable Para Instrumentos",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productsId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productsId));
    });
  });
};
