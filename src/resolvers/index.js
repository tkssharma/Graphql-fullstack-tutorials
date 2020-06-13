const {GraphQLDateTime} = require('graphql-iso-date');
const userResolver = require('./user');
const customScalarResolver = {
    Date: GraphQLDateTime,
  };


module.exports = [customScalarResolver, userResolver]