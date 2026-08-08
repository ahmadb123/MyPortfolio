import '../App.css';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
function HomePage() {
  const navigate = useNavigate();

  const handleViewWorkClick = () => {
    navigate('/projects');
  }

  const handleGetInTouchClick = () => {
    navigate('/contact');
  }
  return (
    <div className='my-portfolio'>
      <div className='title-container'>
        <h1>I build products that get used.</h1>
      </div>
      <h2 className='subtitle'>Full-Stack Software Engineer</h2>
      <h2 className='subtitle highlight'>Backend · Systems · Embedded</h2>

      <p className='bio-text'>
        Master's student at Northeastern (Khoury). Shipped a rare-disease analytics tool
        deployed at SynGAP Research Fund (featured in Endicott College News), an embedded
        pediatric breathing monitor, and a cross-platform gaming identity backend serving
        1,000+ concurrent users.
      </p>

      <div className='cta-buttons'>
        <button className='view-work-btn' onClick={handleViewWorkClick}>
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
