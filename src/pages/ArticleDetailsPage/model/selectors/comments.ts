import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articlesDetailsComments?.isLoading;
export const getArticleCommentsError = (state: StateSchema) => state.articlesDetailsComments?.error;
