export interface ISessionSlice {
  sessionTime: number;
  increaseSessionTime: () => void;
  decreaseSessionTime: () => void;
}

export interface IBreakSlice {
  breakTime: number;
  increaseBreakTime: () => void;
  decreaseBreakTime: () => void;
}

export interface IClockSlice {
  isStart: boolean;
  isPause: boolean;
  type: string;
  changeType: (type: 'Break' | 'Session') => void;
  reset: () => void;
  start: () => void;
  pause: () => void;
}
