import useDrumStore from '../../../../store/store';
import './Keyboards.css';
import {audiosBank, audios} from '../../../../constants';
import {useEffect, useRef, useState} from 'react';
import Keyboard from '../Keyboard/Keyboard';

const Keyboards = () => {
  // refs
  const audiosRef = useRef<HTMLAudioElement[]>([]); // object

  // states // any changes call rerender
  const isPower = useDrumStore(state => state.isPower);
  const isBank = useDrumStore(state => state.isBank);
  // setStates
  const actualKeyboards = useDrumStore(state => state.actualKeyboards);
  const setActualKeyboards = useDrumStore(state => state.setActualKeyboards);
  const setActualScreen = useDrumStore(state => state.setActualScreen);

  // local states
  const [clickedAudio, setClickedAudio] = useState<HTMLAudioElement | null>(
    null,
  );

  // body

  const onChangeContentScreen = (content: string) =>
    content !== '#' ? setActualScreen(content) : setActualScreen('...');

  // eslint-disable-next-line react-hooks/exhaustive-deps

  const setRef = (elemDOM: HTMLAudioElement) =>
    (audiosRef.current = [...audiosRef.current, elemDOM]);

  const onPlay = (e: KeyboardEvent) => {
    const actualSound = audiosRef.current.find(
      elem => elem.id.toLowerCase() === e.key,
    );

    if (!actualSound) return;

    setClickedAudio(actualSound);
    onChangeContentScreen(actualSound.parentElement!.id);

    if (actualSound.attributes.getNamedItem('src')!.value !== '#') {
      actualSound.load();
      actualSound.play();
    }

    setTimeout(() => setClickedAudio(null), 100);
  };

  useEffect(() => {
    window.addEventListener('keydown', onPlay);
    return () => {
      window.removeEventListener('keydown', onPlay);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('mounted keyboards');
    if (isBank) {
      audiosRef.current = [];
      setActualKeyboards([...audiosBank]);
      return;
    }

    if (
      actualKeyboards.filter((elem, i) => audios[i].src !== elem.src).length > 0
    ) {
      audiosRef.current = [];
      setActualKeyboards(audios);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBank]);

  console.log('render keyboards');
  return (
    <div className="keyboards">
      {actualKeyboards?.map(({audioId, content, keyId, src}) => {
        return (
          <Keyboard
            key={keyId}
            keyId={keyId}
            audioId={audioId}
            content={content}
            src={isPower ? src : '#'}
            setRef={setRef}
            clickedAudio={clickedAudio}
            onChangeContentScreen={onChangeContentScreen}
          />
        );
      })}
    </div>
  );
};

export default Keyboards;
