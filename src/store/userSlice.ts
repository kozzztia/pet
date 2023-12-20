import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  name: string | null;
}

const initialState: UserState = {
  name: null,
};

const userSlice = createSlice({
  name: 'nameValue',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string | null>) => {
      state.name = action.payload;
    },
  },
});

export const {setName} = userSlice.actions;
export default userSlice.reducer;
