import React from 'react';
import './Home.css';
import img1 from '../Assets/dubbing11.jpg';
import img2 from '../Assets/hanthana-2.jpg';
import img3 from '../Assets/chem2.jpg';
import img4 from '../Assets/chem3.jpg';
import img5 from '../Assets/chem5.jpg';

function Home() {
  return (
  <div>
  <section className="section1">
  <center><table border={0} style={{ width: '80%' }} className='headTable'>
    <tr>
      <td>
      <img src={img1} className='first'/>        
      </td>
      <td className='tdmain'>
        <p className='main'>
          A graduate in Physical Science, at the University of Kelaniya, Sri Lanka.
        </p>  
      </td>
    </tr>
  </table></center>
  </section>

  <section className="section2">
  <center><table border={0} style={{ width: '80%' }} className='tbps'>
    <tr>
      <td>
      <img src={img1} className='sec' style={{width:'400px', marginTop:'10%'}}/>        
      </td>
      <td style={{paddingTop:'18px', width:'1000px'}} className='tdps' >
        <p className='p2'>

          <h1>Personal Statement</h1> 
        Hello! I am Sachini Nawodya Hettiarachchi. I am a dedicated graduate with a
         Bachelor of Science in Physical Science from the University of Kelaniya, Sri Lanka, where I
          majored in Chemistry and Computer Science and minored in Pure Mathematics. <br/><br/>
        My lifelong passion for exploring and protecting our environment has shaped my academic and career
         goals. I aspire to become an environmental scientist, committed to addressing the critical challenges 
         of pollution and climate change. My curiosity about environmental changes and my solid chemistry foundation 
         fuel my ambition to contribute to innovative and sustainable solutions.<br/><br/>

        In addition to my academic pursuits, I have honed my communication and social skills through 
        various roles in comunity. These experiences have 
        equipped me to convey complex ideas to diverse audiences effectively.
        <br/><br/>
        Also, I am confident that this unique blend of scientific knowledge and communication skills 
        will allow me to develop effective strategies for environmental conservation. And now I am seeking to advance 
        my expertise by pursuing a master's degree in environmental 
        chemistry. I am particularly interested in research opportunities that will enable me to develop practical 
        solutions for environmental protection and sustainability. 

        </p>  
      </td>
    </tr>
  </table></center>
  </section>


    
  <center><table border={0} style={{ width: '80%' , marginTop:'50px' }} className='tbcv'>
    <tr>
      <td colSpan={2}>
      <center><h1>HERE IS MY CV</h1> </center>  
      </td>
    </tr>
    <tr>
      <td colSpan={2}>
        <center><button className='cv'>VIEW CV</button></center>
      </td>
    </tr>
  </table></center>

  <center><table border={0} style={{ width: '80%', marginTop:'5%', marginBottom:'5%' }}>
    <tr>
      <td className='td1'><img src={img3} className='img3'/> 
      <p className='p3'>Captured moments with my awesome lab buddies.</p> 
      </td>
      <td className='td1' style={{paddingTop:'1px'}}><img src={img4} className='img3'/>
      <p className='p3'>Capturing the beauty of science - a vibrant array of solutions from our lab experiment.

</p>  </td>
      <td className='td1'><img src={img2} className='img3'/>
      <p className='p3'>Exploring nature’s canvas - a breathtaking hike to Hanthana Mountains with my university friends in 2023.</p> </td>     
    </tr>
   
  </table></center>

  
</div>);
}

export default Home;
