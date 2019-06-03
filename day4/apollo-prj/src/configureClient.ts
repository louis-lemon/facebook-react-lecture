import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'

export default function configureClient() {
  const uri = 'http://localhost:8888/graphql'
  const cache = new InMemoryCache();
  const link = new HttpLink({ uri });
  return new ApolloClient({ cache, link });
}