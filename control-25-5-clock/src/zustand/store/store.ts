import {create} from 'zustand';
import {IBreakSlice, IClockSlice, ISessionSlice} from '../../types';
import {
  createBreakSlice,
  createClockSlice,
  createSessionSlice,
} from '../slices';

const useClockStore = create<ISessionSlice & IBreakSlice & IClockSlice>()(
  (...a) => ({
    ...createBreakSlice(...a),
    ...createSessionSlice(...a),
    ...createClockSlice(...a),
  }),
);

export default useClockStore;
