const products = [
  {
    id: "1",
    name: "Gibson Les Paul 1955 Goldtop",
    price: 15000,
    category: "Guitarra Electrica",
    img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-guitarras-6d16c.appspot.com/o/goldtop.jpg?alt=media&token=2e1bf74d-dace-4c99-97cb-ebaf15e288d5",
    stock: 3,
    description: "Guitarra Electrica Gibson Les Paul",
  },
  {
    id: "2",
    name: "Gibson Songwriter Deluxe 2020",
    price: 6000,
    category: "Guitarra Acustica",
    img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-guitarras-6d16c.appspot.com/o/gibsonsongwriter.jpg?alt=media&token=0eef406f-a96e-4e7a-960a-21dc5bf919ab",
    stock: 4,
    description: "Guitarra Acustica Gibson",
  },

  {
    id: "3",
    name: "Fender Stratocaster SRV 1973 Heavy Relic",
    price: 12500,
    category: "Guitarra Electrica",
    img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-guitarras-6d16c.appspot.com/o/srvstrat.jpg?alt=media&token=015529e1-ff21-40ae-881d-ee39b9bd04c8",
    stock: 2,
    description: "Guitarra Electrica Fender Stratocaster SRV Signature HR",
  },

  {
    id: "4",
    name: "Gibson Les Paul Custom Black Beauty 1969 Reissue",
    price: 18650,
    category: "Guitarra Electrica",
    img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-guitarras-6d16c.appspot.com/o/blackbeauty.jpg?alt=media&token=c4032c22-6518-48bb-9fee-e4f82c019fcb",
    stock: 1,
    description: "Guitarra Electrica Gibson Les Paul Custom",
  },

  {
    id: "5",
    name: "Gibson Gibson Trini Lopez 1967",
    price: 11990,
    category: "Guitarra Electrica",
    img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-guitarras-6d16c.appspot.com/o/trinilopez.jpg?alt=media&token=f43953cd-aa9e-4070-b683-bc3e352a00b8",
    stock: 2,
    description: "Guitarra Electrica Gibson Trini Lopez",
  },

  {
    id: "6",
    name: "Fender Stratocaster EVH Frankenstrat 2007",
    price: 7600,
    category: "Guitarra Electrica",
    img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-guitarras-6d16c.appspot.com/o/evhstrat.jpg?alt=media&token=f81d732f-53e4-4e20-ba21-05e73d66be8b",
    stock: 5,
    description: "Guitarra Electrica Fender EVH Signature",
  },

  {
    id: "7",
    name: "Marshall JCM 50/25W Model 2553 1988",
    price: 2960,
    category: "Amplificador",
    img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-guitarras-6d16c.appspot.com/o/marshall.jpg?alt=media&token=fedb1d8e-6886-4668-8dcf-5a9c2d77f205",
    stock: 2,
    description: "Amplificador Guitarra Electrica Marshall",
  },

  {
    id: "8",
    name: "Fender Deluxe 1962 Brownface",
    price: 9500,
    category: "Amplificador",
    img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-guitarras-6d16c.appspot.com/o/fenderdeluxamp.jpg?alt=media&token=60012c72-9fd1-467f-97c1-99a9f691ac9a",
    stock: 1,
    description: "Amplificador Guitarra Electrica Fender",
  },

  {
    id: "9",
    name: "Taylor Custom Shop Grand Symphony 2009",
    price: 4490,
    category: "Guitarra Acustica",
    img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-guitarras-6d16c.appspot.com/o/taylor.jpg?alt=media&token=469d0f72-fb0b-4f7b-b6a2-3e36e8ebf066",
    stock: 4,
    description: "Guitarra Acustica Taylor",
  },

  {
    id: "10",
    name: "Pedal Mooer Afinador Baby Tuner True Bypass Guitarra Bajo",
    price: 52,
    category: "Accesorio",
    img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-guitarras-6d16c.appspot.com/o/pedal.jpg?alt=media&token=6a20c38f-0f23-459f-bd77-7d1ad13f4da1",
    stock: 5,
    description: "Pedal Afinador Para Instrumentos de Cuerda",
  },

  {
    id: "11",
    name: "Púas Ernie Ball Medium - Bolsa de 50 Unidades",
    price: 18,
    category: "Accesorio",
    img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-guitarras-6d16c.appspot.com/o/puas.jpg?alt=media&token=78be687b-0d46-4a1e-b9d1-b5992011e254",
    stock: 5,
    description: "Puas Para Instrumentos de Cuerda",
  },

  {
    id: "12",
    name: "Cable Ernie Ball de 7,62 Metros Mallado Para Instrumentos Rosa",
    price: 42,
    category: "Accesorio",
    img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-guitarras-6d16c.appspot.com/o/cable.jpg?alt=media&token=b6788f31-9a67-4d09-a264-6aed325268b9",
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
