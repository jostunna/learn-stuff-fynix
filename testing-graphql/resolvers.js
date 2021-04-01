const resolvers = {
    users: async (_, context) =&gt; {
        const { db } = await context();
        return db.collection(users).find().toArray();
    },
    user: async ({ id }, context) =&gt; {
        const { db } = await context();
        return db.collection(users).findOne({ id });
    }
};

module.exports = resolvers;