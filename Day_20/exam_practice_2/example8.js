
// output- Electronics Laptop Mobile Clothes Men Shirts Pants Women (3D layer recursive)

const categories = [
  {
    name: "Electronics",
    sub: [
      { name: "Laptop", sub: [] },
      { name: "Mobile", sub: [] },
    ],
  },
  {
    name: "Clothes",
    sub: [
      {
        name: "Men",
        sub: [
          { name: "Shirts", sub: [] },
          { name: "Pants", sub: [] },
        ],
      },
      { name: "Women", sub: [] },
    ],
  },
];


const nestedLayer =(objarr)=>{

    objarr.map((item)=>{
        console.log(item.name)
        nestedLayer(item.sub)
    })

}

nestedLayer(categories);