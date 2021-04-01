const resolvers = {
  users: async function (_, context) {
    const { db } = await context();
    return db.collection(users).find().toArray();
  },
  user: async function ({ id }, context) {
    const { db } = await context();
    return db.collection(users).findOne({ id });
  },
};

module.exports = resolvers;
