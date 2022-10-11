import './style.css';

interface IPropsButtonCircular {
  title?: string;
  icon: JSX.Element;
  clickAction: () => void;
}

const ButtonCircular: React.FC<IPropsButtonCircular> = (props) => {

  return (
    <>
      <div className='buttonCircular'
        onClick={props.clickAction}
      >
        {props.title ? props.title : ''}
        {props.icon}
      </div>
    </>
  );
}

export default ButtonCircular;