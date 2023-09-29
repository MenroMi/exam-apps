import {useEffect, useRef, useState} from 'react';
import {calcTime} from '../../../helpers';
import useClockStore from '../../../zustand';
import {mediaButtons} from '../../../constants';
import {Button} from '..';

import './Timer.css';

const Timer = () => {
  const timerType = useClockStore(state => state.type);
  const {breakTime, sessionTime, pause, start, changeType, reset} =
    useClockStore();
  const [minutes, setMinutes] = useState<number>(sessionTime);
  const [seconds, setSeconds] = useState<number>(0);

  //refs
  const timerRef = useRef<ReturnType<typeof setInterval> | 0>(0);
  const minutesRef = useRef<number>(sessionTime);
  const secondsRef = useRef<number>(0);

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (timerType === 'Break') {
      setMinutes(breakTime);
      minutesRef.current = breakTime;
      setSeconds(0);
      secondsRef.current = 0;
    }
  }, [breakTime, timerType]);

  useEffect(() => {
    if (timerType === 'Session') {
      setMinutes(sessionTime);
      minutesRef.current = sessionTime;
      setSeconds(0);
      secondsRef.current = 0;
    }
  }, [sessionTime, timerType]);

  const handleInterval = () => {
    const isSession: boolean = timerType.toLowerCase() === 'session';
    const {mins, secs} = calcTime(minutesRef.current, secondsRef.current);
    const audioEnd: HTMLAudioElement = new Audio('./end.wav');

    if (mins === 0 && secs === 0) {
      minutesRef.current = isSession ? sessionTime : breakTime;
      changeType(isSession ? 'Break' : 'Session');
      audioEnd.play();
    } else {
      minutesRef.current = mins;
    }

    secondsRef.current = secs;

    setMinutes(minutesRef.current);
    setSeconds(secondsRef.current);
  };

  const onStartTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(handleInterval, 100);
    start();
  };

  const onStopTimer = () => {
    clearInterval(timerRef.current);
    pause();
  };

  const onResetTimer = () => {
    reset();

    setMinutes(sessionTime);
    setSeconds(0);

    minutesRef.current = sessionTime;
    secondsRef.current = 0;

    clearInterval(timerRef.current);
  };

  const onRenderButtons = (type: 'start' | 'stop' | 'reset') => {
    const {className, element, id} = mediaButtons[type];
    let typeEventListener: () => void;

    switch (type) {
      case 'start':
        typeEventListener = onStartTimer;
        break;
      case 'stop':
        typeEventListener = onStopTimer;
        break;
      case 'reset':
        typeEventListener = onResetTimer;
        break;
      default:
        return null;
    }

    return (
      <Button
        key={id}
        id={id}
        src={element}
        alt={id}
        className={className}
        eventListener={typeEventListener}
      />
    );
  };

  return (
    <div
      id="timer-label"
      style={{color: `${minutes === 0 ? 'red' : 'inherit'}`}}
    >
      <h2 className="timer-label__title">{timerType}</h2>
      <p className="timer-label__body">
        {minutes < 10 ? `0${minutes}` : minutes} :{' '}
        {seconds < 10 ? `0${seconds}` : seconds}
      </p>
      <div className="media-btns">
        {['start', 'stop', 'reset'].map(key =>
          key === 'start'
            ? onRenderButtons('start')
            : key === 'stop'
            ? onRenderButtons('stop')
            : onRenderButtons('reset'),
        )}
      </div>
    </div>
  );
};

export default Timer;
