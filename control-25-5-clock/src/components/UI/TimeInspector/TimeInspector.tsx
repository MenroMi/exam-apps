import {FC} from 'react';
import './TimeInspector.css';
import Button from '../Button';
import {inspectorButtons} from '../../../constants';
import useClockStore from '../../../zustand';

interface ITimeInspectorProps {
  type: string;
  title: string;
  viewer: number;
  viewerId: string;
  containerId: string;
}

const TimeInspector: FC<ITimeInspectorProps> = ({
  containerId,
  viewerId,
  title,
  viewer,
  type,
}) => {
  const {
    isStart,
    breakTime,
    sessionTime,
    decreaseBreakTime,
    decreaseSessionTime,
    increaseBreakTime,
    increaseSessionTime,
  } = useClockStore();

  const calcSession = (e: React.MouseEvent<HTMLButtonElement>) => {
    const idElement = (e.target as HTMLButtonElement).closest('button')?.id;

    switch (idElement) {
      case 'break-increment':
        return breakTime >= 60 ? null : increaseBreakTime();
      case 'break-decrement':
        return breakTime === 1 ? null : decreaseBreakTime();
      case 'session-increment':
        return sessionTime >= 60 ? null : increaseSessionTime();
      case 'session-decrement':
        return sessionTime === 1 ? null : decreaseSessionTime();
      default:
        return null;
    }
  };

  const onRenderButtons = (type: 'break' | 'session') => {
    return inspectorButtons[type].map(({id, className, element}) => (
      <Button
        key={id}
        id={id}
        src={element}
        alt={id}
        className={className}
        eventListener={calcSession}
        isDisable={isStart}
      />
    ));
  };

  return (
    <div id={containerId}>
      <h2 className={`${containerId}__title`}>{title}</h2>
      <div className={`${containerId}__body`}>
        <p id={viewerId}>{viewer}</p>
        {type === 'break'
          ? onRenderButtons('break')
          : onRenderButtons('session')}
      </div>
    </div>
  );
};

export default TimeInspector;
