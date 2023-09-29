interface IButton {
  id: string;
  type: string;
  element: string;
  className: string;
}

interface IInspectorButtonTypes {
  break: IButton[];
  session: IButton[];
}

interface IMediaButtonTypes {
  start: IButton;
  stop: IButton;
  reset: IButton;
}

interface ITimeInspector {
  type: string;
  containerId: string;
  viewerId: string;
  title: string;
}

const inspectorButtons: IInspectorButtonTypes = {
  session: [
    {
      id: 'session-decrement',
      type: 'svg',
      className: 'arrow',
      element: './arrow-down-solid.svg',
    },
    {
      id: 'session-increment',
      type: 'svg',
      className: 'arrow',
      element: './arrow-up-solid.svg',
    },
  ],
  break: [
    {
      id: 'break-decrement',
      type: 'svg',
      className: 'arrow',
      element: './arrow-down-solid.svg',
    },
    {
      id: 'break-increment',
      type: 'svg',
      className: 'arrow',
      element: './arrow-up-solid.svg',
    },
  ],
};

const timeInspectors: ITimeInspector[] = [
  {
    type: 'break',
    containerId: 'break-label',
    viewerId: 'break-length',
    title: 'Break Length',
  },
  {
    type: 'session',
    containerId: 'session-label',
    viewerId: 'session-length',
    title: 'Session Length',
  },
];

const mediaButtons: IMediaButtonTypes = {
  start: {
    id: 'start-btn',
    type: 'svg',
    className: 'media-btn',
    element: './play-solid.svg',
  },
  stop: {
    id: 'stop-btn',
    type: 'svg',
    className: 'media-btn',
    element: './stop-solid.svg',
  },
  reset: {
    id: 'reset-btn',
    type: 'svg',
    className: 'media-btn',
    element: './rotate-solid.svg',
  },
};

export {inspectorButtons, timeInspectors, mediaButtons};
