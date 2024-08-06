import React from 'react';
import './articles.css';
import img1 from '../Assets/green.jpg';
import img2 from '../Assets/water_01.jpg';
import img3 from '../Assets/wind_solar.jpg';
import img4 from '../Assets/air_1.jpg';
import img5 from '../Assets/drug_des.jpg';
import img6 from '../Assets/remed.jpg';

function Articles() {
  return (
    <div className='extraDiv'>
      <center><h1 align="center">My Articles</h1></center>
      <p align='justify'>
        Driven by a passion for understanding and addressing environmental challenges, 
        I have explored diverse areas of environmental science through my writing. This 
        section showcases a collection of articles focused on pressing environmental issues, 
        emerging technologies, and sustainable solutions. While some of these pieces have been
         published, they collectively show my commitment to learning and contributing to the field.
      </p>

      <center><table border={0} style={{width:'70%'}}>
        <tr>
          <td><button style={{width:'100%'}}>
            <div className='divbutton'>
              <h1 className='in'>Water Quality and Contaminant Analysis: 
                  Innovative Chemical Methods for Tackling Emerging Pollutants
              </h1>
             </div>
            
            <div className='divImage'><img src={img1}/></div>
            <div className='divPara'>
            <p align='justify' className='pcard'> In recent years, the importance of environmental sustainability 
              has become increasingly recognized, leading to a 
              global movement towards adopting greener practices across various industries <a className='link'>read more...</a>
            </p> 
            </div></button></td>

          <td><button style={{width:'100%'}}>
            
            
          <div className='divbutton'>
            <h1 className='in'>Water Quality and Contaminant Analysis: 
            Innovative Chemical Methods for Tackling Emerging Pollutants</h1>

            </div>
            <div className='divImage'><img src={img2}/></div>
            <div className='divPara'>
              <p align='justify' className='pcard'>When water becomes contaminated,
               the consequences ripple through every aspect of life. Pollution from industrial processes, 
              agricultural runoff, and improper disposal  <a className='link'>read more...</a>
            </p></div> </button></td>

          <td><button style={{width:'100%'}}>
          <div className='divbutton'>
            <h1 className='in'>Air Quality Monitoring and Management using computational techniques</h1> </div>

          <div className='divImage'><img src={img4}/></div>
          <div className='divPara'>
            <p align='justify' className='pcard'>Monitoring air quality has become more important than ever as 
            urbanization and industrial activities increase. 
            Over the past few years, there have been notable trends in air  <a className='link'>read more...</a>
           </p></div> </button></td>

        </tr>
        </table>
        <table border={0} style={{width:'70%'}} className='marginTable'>

        <tr>
          <td><button style={{width:'100%'}}>
            <div className='divbutton'>
              <h1 className='in'>Theoretical and Computational Chemistry: Exploring Molecular Modeling,
                 Quantum Chemistry, and Drug Design
              </h1>
             </div>
            
            <div className='divImage'><img src={img5}/></div>
            <div className='divPara'>
            <p align='justify' className='pcard'> Theoretical and computational chemistry represents a 
              dynamic intersection of chemistry and computer science, providing essential tools for modeling, 
              understanding, and predicting molecular behavior <a className='link'>read more...</a>
            </p> 
            </div></button></td>

          <td><button style={{width:'100%'}}>
            
            
          <div className='divbutton'>
            <h1 className='in'>Innovative Technologies in Environmental Remediation</h1>

            </div>
            <div className='divImage'><img src={img6}/></div>
            <div className='divPara'>
              <p align='justify' className='pcard'>Have you ever wondered how we can 
                clean up the most polluted places on Earth without causing more harm? 
                The answer lies in the environmental remediation technologies <a className='link'>read more...</a>
            </p></div> </button></td>

          <td><button style={{width:'100%'}}>
          <div className='divbutton'>
            <h1 className='in'>Renewable Energy Solutions and Their Environmental Impact</h1> </div>

          <div className='divImage'><img src={img3}/></div>
          <div className='divPara'>
            <p align='justify' className='pcard'>As the world faces climate change and the depletion
               of natural resources, renewable energy emerges as a key solution to our energy needs. 
               Unlike fossil fuels, which release
               greenhouse gases and    <a className='link'>read more...</a>
           </p></div> </button></td>

        </tr>
       
      </table>
      
      <p className='pBottom'><br/><a className='ToMore'>See More {'>'} </a></p></center>

    </div>
  );
}

export default Articles;
