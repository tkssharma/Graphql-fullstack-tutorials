import {GraphQLDateTime} from 'graphql-iso-date'

const customScalarResolver = {
    Date: GraphQLDateTime,
  };

import userResolver from './user';
import messageResolver from './message';

export default [customScalarResolver, userResolver, messageResolver]