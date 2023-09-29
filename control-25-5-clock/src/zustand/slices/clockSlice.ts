import {StateCreator} from 'zustand';
import {IClockSlice} from '../../types';

export const createClockSlice: StateCreator<
  IClockSlice,
  [],
  [],
  IClockSlice
> = set => ({
  isStart: false,
  isPause: false,
  type: 'Session',
  changeType: (type: 'Break' | 'Session') => set(() => ({type})),
  reset: () =>
    set(() => ({
      breakTime: 5,
      sessionTime: 25,
      type: 'Session',
      isPause: false,
      isStart: false,
    })),
  start: () => set(() => ({isStart: true, isPause: false})),
  pause: () => set(() => ({isStart: false, isPause: true})),
});
