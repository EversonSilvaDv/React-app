import './style.css';

interface IPropsButtonRounded {
  title: string;
  clickAction: () => void;
}

const ButtonRounded: React.FC<IPropsButtonRounded> = (props) => {

  return (
    <>
      <div className='buttonRounded'
        onClick={props.clickAction}
      >
        {props.title}
      </div>
    </>
  );
}

export default ButtonRounded;