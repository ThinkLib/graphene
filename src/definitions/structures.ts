import { getGraphQLType } from './../reflection';
import { GraphQLList, GraphQLType, GraphQLNonNull } from 'graphql';

// Helper funciton that will convert something like:
// List(String)
// To:
// GraphQLList(GraphQLString)
export const List = (ofType: any): GraphQLList<GraphQLType> => {
  return new GraphQLList(getGraphQLType(ofType));
};

// Helper funciton that will convert something like:
// NonNull(String)
// To:
// GraphQLNonNull(GraphQLString)
export const NonNull = (ofType: any): GraphQLNonNull<GraphQLType> => {
  return new GraphQLNonNull(getGraphQLType(ofType));
};
