import  './about.css'
import star2 from '../../assets/img/star-2.png'
import icon2 from '../../assets/img/icon2.png'
import me2 from '../../assets/img/me2.png'

const AboutPage = () => {
  return (
    <div className='about'>
        <div className='container'>
            <div className='top_container'>
                <div className='left_box'>
                    <div className='contant'>
                        <div className='img_box'>
                            <img src={me2} alt='me'></img>
                        </div>
                    </div>
                </div>
                <div className='right_box'>
                    <div className='contant'>
                        <div className='heading'>
                            <img src={star2} alt='star'></img>
                            <h2>self-summary</h2>
                            <img src={star2} alt='star'></img>
                        </div>
                        <div className='deatil'>
                            <img src={icon2} alt='icon'></img>
                            <div className='info'>
                                <h3>David Henderson</h3>
                                <p>I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mid_conatiner'>
                <div className='container'>
                    <div className='exp'>
                        <h2>experience</h2>
                        <div className='box'>
                            <p>2007-2017</p>
                            <h3>Framer Designer & Developer</h3>
                            <p>Bluebase Designs</p>
                        </div>
                        <div className='box'>
                            <p>2017-2023</p>
                            <h3>Front-End Developer</h3>
                            <p>Larsen & Toubro</p>
                        </div>
                    </div>
                    <div className='edu'>
                        <h2>education</h2>
                        <div className='box'>
                            <p>2004-2007</p>
                            <h3>Bachelor Degree in Psychology</h3>
                            <p>University of California</p>
                        </div>
                        <div className='box'>
                            <p>2007 - 2009</p>
                            <h3>Master Degree in Designing</h3>
                            <p>University of Texas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPage