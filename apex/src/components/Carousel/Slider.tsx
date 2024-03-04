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
        filter:'brightness(15%)',
        height:'400px'
      }}/>
      <Carousel.Caption style={{
       
        position:'absolute',
        top:'50%',
        left:'50%',
        transform: "translate(-50%,-50%)"
        
      }}>
              <h3 className="animate__animated animate__fadeInDown" >First slide label</h3>
         <p className="animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
              </Carousel.Caption>
    </Carousel.Item>

    
    <Carousel.Item>
    <img className='d-block w-100' src={image2} alt='2nd slide'style={{
        filter:'brightness(15%)',
        height:'400px'
      }}/>
      <Carousel.Caption style={{
        
        position:'absolute',
        top:'50%',
        left:'50%',
        transform: "translate(-50%,-50%)"
        
      }}>
        <h3 className="animate__animated animate__fadeInDown" >Second slide label</h3>
        <p className="animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img className='d-block w-100' src={image3} alt='3rd slide'style={{
        filter:'brightness(15%)',
        height:'400px'
      }}/>
      <Carousel.Caption style={{
        
        position:'absolute',
        top:'50%',
        left:'50%',
        transform: "translate(-50%,-50%)"
        
      }}>
        <h3 className="animate__animated animate__fadeInDown">Third slide label</h3>
        <p className="animate__animated animate__fadeInUp">
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Slider