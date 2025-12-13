import '../App.css';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
function HomePage() {
  const navigate = useNavigate();
  
  const hanldeViewWorkClick =() => {
    navigate('/projects');
  }

  const handleGetInTouchClick = () => {
    navigate('/contact');
  }
  return (
    <div className='my-portfolio'> 
      <div className='title-container'>
        <h1>Full-Stack Software Engineer</h1>
      </div>
      <h2 className='subtitle'>Building Scalable</h2> 
      <h2 className='subtitle highlight'>Digital Experiences</h2>  

      <p className='bio-text'>
        Graduate CS student specializing in full-stack development with Java, Spring Boot, and React. 
        Proven track record of architecting high-performance systems that deliver measurable impact.
      </p>

      <div className='cta-buttons'>
        <button className='view-work-btn' onClick={hanldeViewWorkClick}>
          View my work <FaArrowRight />
        </button>
        <button className='get-touch-btn' onClick={handleGetInTouchClick}> 
          <FaEnvelope /> Get in touch
        </button>
      </div>
    </div>
  )
}

export default HomePage