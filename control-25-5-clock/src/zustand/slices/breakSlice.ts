import {StateCreator} from 'zustand';
import {ISessionSlice, IBreakSlice} from '../../types';

export const createBreakSlice: StateCreator<
  ISessionSlice & IBreakSlice,
  [],
  [],
  IBreakSlice
> = set => ({
  breakTime: 5,
  increaseBreakTime: () => set(state => ({breakTime: state.breakTime + 1})),
  decreaseBreakTime: () => set(state => ({breakTime: state.breakTime - 1})),
});
