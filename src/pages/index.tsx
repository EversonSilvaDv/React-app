import './style.css';

const Home: React.FC = () => {

  const handleButton = () => {
    alert('clicou');
  }

  return (
    <>
      <h1>Home</h1>

      <div className="teste">
        <div className='circle'
          onClick={handleButton}
        >

        </div>
        <div className='circle'
          onClick={handleButton}
        >

        </div>
        <div className='circle'
          onClick={handleButton}
        >

        </div>
      </div>
    </>
  );
}

export default Home;