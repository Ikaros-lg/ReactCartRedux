var initialState = [
  {
    id: 1,
    img: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
    name: "IPHONE 6 PLUS",
    description: "Made by Apple",
    price: 500,
    rating : 4,
    inventory: 10,
  },
  {
    id: 2,
    img: "https://m.economictimes.com/thumb/msid-71022744,width-1200,height-900,resizemode-4,imgsize-315344/009_galaxynote10_product_im.jpg",
    name: "SAMSUNG GALAXY 1",
    description: "Made by South Korean",
    price: 300,
    rating : 3,
    inventory: 5,
  },
  {
    id: 3,
    img: "https://www.notebookcheck.net/fileadmin/Notebooks/Samsung/Galaxy_A52_5G/Pictures_Samsung_Galaxy_A52_5G_0040.jpg",
    name: "SAMSUNG GALAXY 2",
    description: "Made by South Korean",
    price: 300,
    rating : 4,
    inventory: 8,
  },
];

localStorage.setItem('productLocal', JSON.stringify(initialState));

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
