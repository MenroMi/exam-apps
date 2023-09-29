import {StateCreator} from 'zustand';
import {ISessionSlice, IBreakSlice} from '../../types';

export const createSessionSlice: StateCreator<
  ISessionSlice & IBreakSlice,
  [],
  [],
  ISessionSlice
> = set => ({
  sessionTime: 25,
  increaseSessionTime: () =>
    set(state => ({sessionTime: state.sessionTime + 1})),
  decreaseSessionTime: () =>
    set(state => ({sessionTime: state.sessionTime - 1})),
});
