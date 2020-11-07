const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Order } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async () => {
      return await User.find();
    },
    products: async () => {
      return await Product.find();
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id);
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
      //   context.user = {};
      // context.user._id = "5fa6e4fb4296f2234421c3e8";
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'products'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    }
},
Mutation: {
  addUser: async (parent, args) => {
    const user = await User.create(args);
    const token = signToken(user);

    console.log(user.username, token);
    return {token, user};
  },
  addOrder: async (parent, { products }, context) => {
    console.log("running query!");
  if (context.user) {
      const order = new Order({ products });
      // context.user = {};
      // context.user._id = "5fa6e4fb4296f2234421c3e8";
      await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

      console.log(products);
      return order;
    }

    throw new AuthenticationError('Not logged in');
  },
  addProduct: async(parent, args) => {
    const product = await Product.create(args);
    return product;
  },
  updateProduct: async (parent, { _id, quantity }) => {
    const decrement = Math.abs(quantity) * -1;

    return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
  },
  login: async (parent, { email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new AuthenticationError('Incorrect credentials');
    }

    const correctPw = await user.isCorrectPassword(password);

    if (!correctPw) {
      throw new AuthenticationError('Incorrect credentials');
    }

    const token = signToken(user);

    return { token, user };
  }
}
};

module.exports = resolvers;
