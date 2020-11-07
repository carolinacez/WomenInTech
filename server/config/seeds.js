const db = require('./connection');
const { User, Product } = require('../models');

db.once('open', async () => {
//   await Category.deleteMany();

//   const categories = await Category.insertMany([
//     { name: 'Food' },
//     { name: 'Household Supplies' },
//     { name: 'Electronics' },
//     { name: 'Books' },
//     { name: 'Toys' }
//   ]);

//   console.log('categories seeded');

//   const products = await Product.insertMany([
//     { name: 'Food' },
//     { description: 'Household Supplies' },
//     { image: 'Electronics' },
//     { price: '10.00' },
//     { quantity: '1' }
//   ]);

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'girl_code blue t-shirt',
      description:
        'Blue cotton t-shirt (unisex).',
      image: 'girl_code_1.PNG',
    //   category: categories[0]._id,
      price: 20.00,
      quantity: 500
    },
    {
      name: 'girl_code dad hat',
      description:
        'White dad hat.',
      image: 'girl_code_2.PNG',
    //   category: categories[0]._id,
      price: 20.00,
      quantity: 500
    },
    {
      name: 'girl_code bookbag',
    //   category: categories[1]._id,
      description:
        'Red bookbag.',
      image: 'girl_code_3.PNG',
      price: 25.00,
      quantity: 200
    },
    {
      name: 'girl_code white t-shirt',
    //   category: categories[1]._id,
      description:
        'White cotton t-shirt (unisex).',
      image: 'girl_code_4.PNG',
      price: 20.00,
      quantity: 500
    },
    {
        name: 'girl_code grey hoodie',
      //   category: categories[1]._id,
        description:
          'Grey cotton hoodie (unisex).',
        image: 'girl_code_5.PNG',
        price: 25.00,
        quantity: 500
      },
      {
        name: 'girl_code black hoodie',
      //   category: categories[1]._id,
        description:
          'Black cotton hoodie (unisex).',
        image: 'girl_code_6.PNG',
        price: 25.00,
        quantity: 500
      },
  ]);

  console.log('products seeded');

//   await User.deleteMany();

//   await User.create({
//     firstName: 'Pamela',
//     lastName: 'Washington',
//     email: 'pamela@testmail.com',
//     password: 'password12345',
//     orders: [
//       {
//         products: [products[0]._id, products[0]._id, products[1]._id]
//       }
//     ]
//   });

//   await User.create({
//     firstName: 'Elijah',
//     lastName: 'Holt',
//     email: 'eholt@testmail.com',
//     password: 'password12345'
//   });

//   console.log('users seeded');

  process.exit();
});
