import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import OtherItemsReducer from '../features/slices/otherItemsSlice'
import IPhoneReducer from '../features/slices/IPhoneSlice'
import AndriodReducer from '../features/slices/AndroidSlice'

export const store = configureStore({
  reducer: {
    OtherItems: OtherItemsReducer,
    AppleItems: IPhoneReducer,
    SamsungItems: AndriodReducer,
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
