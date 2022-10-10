import { Avatar, Badge, IconButton } from "@mui/material";
import { useState } from "react";


const Drone: React.FC = () => {

  const [url, setUrl] = useState('');
  const [audio] = useState(new Audio('./vivaldi.mp3'));
  const [playing, setPlaying] = useState(false);

  const handleTogglePlayer = (url: string) => {
    audio.setAttribute('src', `./${url}.mp3`);
    playing ? audio.pause() : audio.play();
    setPlaying(!playing);
  }

  return (
    <>
      <h1>Drone</h1>
      <IconButton
        onClick={() => handleTogglePlayer('vivaldi')}
      >
        <Badge
          overlap="circular"
        >
          <Avatar>V</Avatar>
        </Badge>
      </IconButton>

      <IconButton
        onClick={() => handleTogglePlayer('mozart')}
      >
        <Badge
          overlap="circular"
        >
          <Avatar>M</Avatar>
        </Badge>
      </IconButton>

    </>
  );
}

export default Drone;