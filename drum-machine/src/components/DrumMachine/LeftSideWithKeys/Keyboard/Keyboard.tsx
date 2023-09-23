import {FC, memo, useEffect, useRef, useState} from 'react';
import './Keyboard.css';
import {IKeyboardProps} from '../../../../types';
import useDrumStore from '../../../../store/store';

interface IKeyboardExtendProps extends IKeyboardProps {
  setRef: (elemDOM: HTMLAudioElement) => void;
  clickedAudio: HTMLAudioElement | null;
  onChangeContentScreen: (content: string) => void;
}

const Keyboard: FC<IKeyboardExtendProps> = memo(
  ({
    audioId,
    content,
    keyId,
    src,
    setRef,
    clickedAudio,
    onChangeContentScreen,
  }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isClicked, setIsClicked] = useState(false);
    const volume = useDrumStore(state => state.volume);

    const onPlayByClick = () => {
      setIsClicked(true);
      onChangeContentScreen(audioRef.current?.parentElement?.id ?? '#');
      audioRef.current?.load();
      audioRef.current?.play();
      setTimeout(() => setIsClicked(false), 100);
    };

    useEffect(() => {
      setRef(audioRef.current as HTMLAudioElement);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      console.log('mounted keyboard');
      const onConvertVolume = () => {
        if (volume === 100) {
          return (audioRef.current!.volume = 1.0);
        } else if (volume < 100 && volume > 10) {
          return (audioRef.current!.volume = +`0.${volume}`);
        } else if (volume <= 10 && volume > 0) {
          return (audioRef.current!.volume = 0.1);
        }

        return (audioRef.current!.volume = 0.0);
      };

      onConvertVolume();
    }, [volume]);

    console.log('render keyboard');
    return (
      <div
        className="keyboard"
        id={keyId}
        style={
          (audioRef.current &&
            clickedAudio &&
            audioRef.current === clickedAudio) ||
          isClicked
            ? {backgroundColor: 'black'}
            : {}
        }
        onClick={onPlayByClick}
      >
        <audio src={src} id={audioId} ref={audioRef}></audio>
        {content}
      </div>
    );
  },
);
export default Keyboard;
