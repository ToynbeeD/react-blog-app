import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type { StateSchema, ReduxStoreWithManager, ThunkConfig } from './config/StateSchema';

export {
  StoreProvider,
  ReduxStoreWithManager,
  createReduxStore,
};

export type {
  StateSchema,
  AppDispatch,
  ThunkConfig,
};
