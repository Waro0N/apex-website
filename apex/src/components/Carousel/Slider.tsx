import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../assets/images/slide/slide1.jpg';
import image2 from '../../assets/images/slide/slide-2.jpg';
import image3 from '../../assets/images/slide/slide-3.jpg';
import '../../index.css';

function Slider() {
  return (
    <Carousel>
    <Carousel.Item style={{ height:''}}>
      <img className='d-block w-100' src={image1} alt='First slide' style={{
        filter:'brightness(25%)',
        height:'400px'
      }}/>
      <Carousel.Caption style={{
       
        position:'absolute',
        top:'50%',
        left:'50%',
        transform: "translate(-50%,-50%)"
        
      }}>
              <h3 className="animate__animated animate__fadeInDown" >"Your Vision, Our Expertise, Perfectly Engineered."</h3>
         <p className="animate__animated animate__fadeInUp"></p>
      
              </Carousel.Caption>
    </Carousel.Item>

    
    <Carousel.Item>
    <img className='d-block w-100' src={image2} alt='2nd slide'style={{
        filter:'brightness(25%)',
        height:'400px'
      }}/>
      <Carousel.Caption style={{
        
        position:'absolute',
        top:'50%',
        left:'50%',
        transform: "translate(-50%,-50%)"
        
      }}>
        <h3 className="animate__animated animate__fadeInDown" >"Strong Foundations for a Better Tomorrow."</h3>
        <p className="animate__animated animate__fadeInUp"></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img className='d-block w-100' src={image3} alt='3rd slide'style={{
        filter:'brightness(25%)',
        height:'400px'
      }}/>
      <Carousel.Caption style={{
        
        position:'absolute',
        top:'50%',
        left:'50%',
        transform: "translate(-50%,-50%)"
        
      }}>
        <h3 className="animate__animated animate__fadeInDown">"Where Innovation Meets Construction."</h3>
        <p className="animate__animated animate__fadeInUp">
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Slider