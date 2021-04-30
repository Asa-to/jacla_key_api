import { IQueryResolvers, ILog, IResolvers } from './generated/graphql';

const Query: IQueryResolvers = {
  logs: () => {
    const logs: ILog[] = [];
    return logs;
  }
}

export const resolvers: IResolvers = {
  Query
}