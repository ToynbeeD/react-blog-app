import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UISchema } from '../types/UISchema';

const initialState: UISchema = {
  scroll: {},
};

export const UISlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    setScrollPosition: (state, action: PayloadAction<{path: string, position: number}>) => {
      state.scroll[action.payload.path] = action.payload.position;
    },
  },
});

export const { actions: UIActions } = UISlice;
export const { reducer: UIReducer } = UISlice;
