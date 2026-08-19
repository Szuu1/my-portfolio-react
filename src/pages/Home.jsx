import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    const goToAbout = () => {
        navigate('/About');
    }

    const goToContact = () => {
        navigate('/Contact');
    }

    const goToInterests = () => {
        navigate('/Interests');
    }       
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>Hi! I'm Christopher B. Suan</p>

      <div>
        <button onClick={goToAbout}>About Me</button>
        <button onClick={goToContact}>Contact Me</button>
        <button onClick={goToInterests}>My Interests</button>
      </div>
    </div>

  );
}

export default Home;