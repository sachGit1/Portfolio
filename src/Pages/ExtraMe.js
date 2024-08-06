import React from 'react';
import './extraMe.css';
import img1 from '../Assets/dubbing11.jpg';
import img2 from '../Assets/dubbing2.jpg';
import img3 from '../Assets/radio-gang2.jpg';
import img5 from '../Assets/radio-group-photo.jpg';
import img6 from '../Assets/radio-gang.jpg';
import img7 from '../Assets/zero-p-group.png';
import img9 from '../Assets/zero-p-2.jpg';
import img10 from '../Assets/zero-p-3.jpg';

function ExtraMe() {
  return(
    <div className='extraDiv'>
      <center><h1 align="center">Behind The Mic - My Voiceover Adventure</h1></center>
    <p className='p' align='justify'>
      I’ve always had a deep-rooted fascination with the power of communication and its ability to 
      influence and inspire. This led me to a career in broadcasting, 
      where I honed my skills in delivering clear, concise, and engaging messages to a wide audience. 
      At the <a href='https://www.slbc.lk/'>Sri Lanka Broadcasting Corporation (SLBC)</a>, I experienced firsthand the importance of accurate 
      and timely information dissemination. Whether it was reporting news or hosting informative
       programs, I developed a strong ability to research, analyze, and communicate complex ideas effectively.
      <br/><br/>Additionally, my work in dubbing exposed me to diverse narratives and perspectives. 
      I learned to empathize with different characters and understand the nuances of storytelling. 
      These experiences have equipped me with strong communication and interpersonal skills, which 
      I believe are essential for success in any field that requires effective interaction and information sharing.
    </p>

    <table border={0} align='center' className='table1'>
      <tr>
        <td><img className='set1' src={img1} /></td>
        
        <td colSpan={2}><img className='set1'src={img5}/><p className='middlePara'>ffffffff</p></td>
      </tr>
      <tr>
        <td><img className='set1' src={img6}/></td>
        <td><img className='set1' src={img3}/></td>
        <td><img className='set1' src={img2}/></td>
      </tr>
    </table>

    <center><h1 align="center">My Harmonious Journey - Mastering the Violin with Visharad Certification</h1></center>
      <p className='p' align='justify'>
      I’m  proud to be a Visharad in violin from Bhatkhande Sangit Vidyapit, Lucknow, India.
       Those years of training (2016-2017) were a transformative journey. It wasn't just about mastering the violin,
       it was about diving deep into the soul of Indian classical music.
Learning to navigate the complexities of ragas, talas, and compositions was like unlocking a 
secret language. The thrill of improvisation, of creating something new within the rich framework
 of tradition, is still a rush. But it's more than just technique. Understanding the history and culture 
 behind the music has made me a true guardian of this art form. 
Performing at my university and school was an amazing experience. Sharing this beautiful music with 
others is incredibly rewarding. 
      </p>

      <center><h1 align="center">Volunteerism for a Sustainable Future</h1></center>
      <p className='p' align='justify'><img className='group' src={img9}/>
      With a strong commitment to community engagement, I have actively participated in numerous 
      volunteer activities. As a standout experience, in 2023, I actively participated in the awareness campaign organized by <a href='https://www.zeroplastic.lk/'>Zero Plastic Movement</a>, during the globally renowned Kandy Esala Perahera festival at the 
       Temple of the Tooth Relic, Sri Lanka, collaborating with fellow university peers. This experience
        involved engaging with people, distributing eco-friendly alternatives, and promoting plastic
         waste reduction amidst the vibrant celebrations. The opportunity to contribute to environmental 
         sustainability at such a high-profile event was invaluable. It deepened my commitment to 
         addressing environmental challenges and provided
       practical insights into promoting sustainable practices in high-traffic settings.
      </p>

      <table border={0} align='center' className='table1'>
        <tr>
          <td><img className='set1' src={img10}/></td>
          <td><img className='set1' src={img7}/></td>
          
        </tr>
        <tr>
          
          
          
        </tr>
      </table>

      <center><h1 align="center">Merging Creativity and Logic</h1></center>
      <p className='p' align='justify'>
      I have a genuine passion for coding, web development, and graphic design. During my university years,
       I took on the challenge of developing several websites for various projects. This experience not only
        sharpened my technical skills but also gave me a unique opportunity to combine creativity with logic,
         which I find incredibly rewarding. My interest in graphic design allows me to explore different artistic 
         styles and develop a keen eye for detail, adding another layer of creativity to my work. Below projects 
         are some of the nearest examples of my work, including this very webpage, which I designed and developed myself.
      </p>
    </div>
    
  ); 
}

export default ExtraMe;
