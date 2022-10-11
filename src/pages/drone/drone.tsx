
import { useState } from "react";
import ButtonRounded from "../../components/buttons/buttonRounded";
import ButtonCircular from "../../components/buttons/buttonCircle";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './style.css';

const Drone: React.FC = () => {

  const [audio] = useState(new Audio('./vivaldi.mp3'));
  const [playing, setPlaying] = useState(false);

  const handleTogglePlayer = (url: string) => {
    audio.setAttribute('src', `./${url}.mp3`);
    playing ? audio.pause() : audio.play();
    setPlaying(!playing);
  }

  const handleCloseWindown = () => {
    //window.open('location', '_self', '')?.close();
    //console.log('teste')
    window.close();
  }

  return (
    <>
      <div className="headerDronePage">
        <ButtonCircular clickAction={handleCloseWindown} icon={<CloseOutlinedIcon />} />
      </div>

      <ButtonRounded title="Mozart" clickAction={() => handleTogglePlayer('mozart')} />

      <ButtonRounded title="vivaldi" clickAction={() => handleTogglePlayer('vivaldi')} />
    </>
  );
}

export default Drone;