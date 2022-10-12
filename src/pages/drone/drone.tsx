
import { useEffect, useState } from "react";
import ButtonRounded from "../../components/buttons/buttonRounded";
import ButtonCircular from "../../components/buttons/buttonCircle";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './style.css';

const audiosList = [
  { link: './audios/a.mp3', title: 'A' },
  { link: './audios/ab.mp3', title: 'Ab' },
  { link: './audios/b.mp3', title: 'B' },
  { link: './audios/bb.mp3', title: 'Bb' },
  { link: './audios/c.mp3', title: 'C' },
  { link: './audios/d.mp3', title: 'D' },
  { link: './audios/db.mp3', title: 'Db' },
  { link: './audios/e.mp3', title: 'E' },
  { link: './audios/eb.mp3', title: 'Eb' },
  { link: './audios/f.mp3', title: 'F' },
  { link: './audios/g.mp3', title: 'G' },
  { link: './audios/gb.mp3', title: 'Gb' },
];

const Drone: React.FC = () => {

  const [audio] = useState(new Audio('./audio/c.mp3'));
  const [playing, setPlaying] = useState(false);

  // var intervalo: any;
  // var timeShow: any;

  useEffect(() => {
    console.log(playing);
  });

  const handleTogglePlayer = (url: string) => {
    audio.setAttribute('src', url);
    if (playing) {
      audio.pause();
      // clearInterval(intervalo);
      // clearInterval(timeShow);
      console.log('limpo');
    }
    if (!playing) {
      audio.play();
      // intervalo = setInterval(playAudio, 45000);
      // timeShow = setInterval(showTime, 1000);
    }
    setPlaying(!playing);
  }

  const handleCloseWindown = () => {
    window.close();
  }

  const showTime = () => {
    console.log(audio.duration);
  }

  const playAudio = () => {
    console.log('play');
    audio.play()
  }

  // let intervalo = setInterval(playAudio, 2000);

  // if (!playing) {
  //   clearInterval(intervalo);
  // }

  return (
    <>
      <div className="headerDronePage">
        <ButtonCircular clickAction={handleCloseWindown} icon={<CloseOutlinedIcon />} />
      </div>

      {
        audiosList.map((audio) => (
          <ButtonRounded key={audio.title} title={audio.title} clickAction={() => handleTogglePlayer(audio.link)} />
        ))
      }

    </>
  );
}

export default Drone;