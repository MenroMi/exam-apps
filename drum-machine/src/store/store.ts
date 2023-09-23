import {create} from 'zustand';
import {IKeyboardProps} from '../types';
import {audios} from '../constants';

interface IDrumState {
  actualScreen: string;
  actualKeyboards: IKeyboardProps[];
  isPower: boolean;
  isBank: boolean;
  volume: number;
  setIsPower: () => void;
  setIsBank: () => void;
  setActualKeyboards: (keys: IKeyboardProps[]) => void;
  setActualScreen: (content: string) => void;
  setVolume: (volume: number) => void;
}

const useDrumStore = create<IDrumState>()(set => ({
  actualScreen: '',
  actualKeyboards: [...audios],
  isPower: false,
  isBank: false,
  volume: 50,
  setIsPower: () => set(state => ({isPower: !state.isPower})),
  setIsBank: () => set(state => ({isBank: !state.isBank})),
  setActualKeyboards: keys => set(() => ({actualKeyboards: [...keys]})),
  setActualScreen: content => set(() => ({actualScreen: content})),
  setVolume: volume => set(() => ({volume})),
}));

export default useDrumStore;
