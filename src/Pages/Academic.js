import React from 'react';
import './academics.css';
import img1 from '../Assets/chem5.jpg';
import img2 from '../Assets/chem4.jpg';

function Academic() {
  return (
    <div className='extraDiv'>
      <center><h1 align="center">Academic Focus</h1></center>

      <p align='justify'><h1 className='h11'>Early Years and Academic Foundation</h1>
A lifelong curiosity about the world around me has been a driving force for me since my childhood and, 
this passion led me to pursue Physical Science at Gothami Balika Vidyalaya, Colombo 10, where I excelled 
in the tripartite of Mathematics, Chemistry, and Physics, culminating in the G.C.E. Advanced Level 
Examination in 2020. Beyond textbooks, I was drawn to practical applications too. As a standout experience, 
when I was in school, a science project on meteorology sparked my interest in environmental science. Working
 closely with the meteorology department of Sri Lanka, I explored the intricacies of weather forecasting, from 
 how to collect data, to the physics and technologies behind the measurement and forecasting equipment and this
  laid the groundwork for my future aspirations.<br/><br/>
 After finishing school life, my academic journey took a significant turn when I was selected for the
  University of Kelaniya (in 2021) to pursue a Bachelor's in Physical Science, specializing in the dynamic 
  duo of Chemistry and Computer Science, with a complementary focus on Pure Mathematics.

<h1 className='h11'>University Life and Discovering a Passion</h1> 
<img src={img2} className='volumetrics'/>

In terms of my university life, it was a catalyst for my intellectual growth and personal development. Engaged 
in laboratories, I explored the fascinating world of chemistry, from the precision of analytical techniques to 
the foundational theories of physical chemistry. Moreover, organic and inorganic chemistry revealed the complex
 interactions of atoms and molecules, while computer science provided the computational tools to unravel their 
 mysteries and that captivated me deepening my enchantment with the subject.<br/><br/>
Concurrently, I balanced academic rigor with extracurricular pursuits in media and music, fostering creativity
and time management skills. However, it was my curiosity about the fascinating nature of chemistry that repeatedly 
fueled my passion. Thus, a desire to protect our planet and develop sustainable solutions became a driving force, 
solidifying my decision to pursue a Master's in Environmental Science.

<h1 className='h11'>A Strong Foundation for Environmental Exploration</h1>
My undergraduate studies provided me with a deep understanding of diverse areas of chemistry studies, from fundamental 
principles to advanced applications, and allowed me to master different laboratory techniques. Through my undergraduate
 coursework, I studied material chemistry, exploring the versatility of silicones, the porous wonders of zeolites, the 
 structural marvels of fullerenes, and the bio-inspired world of biomaterials while gaining proficiency in their synthesis, 
 understanding their properties, and envisioning their applications. <br/><br/>
 Also, Mineralogy captivated my attention and unveiled
  the secrets hidden within rocks and soil, from their formation to their potential applications, I developed a keen interest 
  in extraction techniques and the economic value derived from these natural treasures of Earth. In addition, Green 
  chemistry became my guiding star, with its principles of efficiency and sustainability. I had chance to explore industrial
   processes through a green lens, seeking cleaner alternatives and innovative solutions for a sustainable environment. 
   Building upon my foundational knowledge, I got a narrow education in petroleum chemistry. Uncovering the theories of 
   crude oil formation and refining processes while distinguishing between various petroleum types, assessing their quality,
    and offering a thorough understanding of this important energy resource. Moreover, the study in polymer chemistry provided
     a glimpse into the future of materials science. I studied the versatility of polymers and their role in modern society. 
     From everyday plastics to advanced engineering materials, I explored these remarkable substances' synthesis techniques 
     and their potential applications.<br/><br/>
In contrast, the study of natural products introduced a whole new perspective. Moreover, I examined the complex interaction
 between chemistry and biology through bioassay methods, revealing the therapeutic potential of compounds derived from nature. 
 From the ancient wisdom of herbal remedies to the cutting-edge science of drug discovery, I was captivated by the synergy of 
 chemistry and human well-being. The production of herbal health products, rich in compounds like steroids, alkaloids, and 
 terpenes, fascinated me. Understanding how these natural substances interact with the human body and the potential benefits 
 they offer ignited a passion for this field.

<br/><br/><img src={img1} className='flask'/>

Simultaneously, the most interesting part, the environment became my ultimate laboratory. 
The study of aquatic ecosystems, from their physical and chemical properties to the impacts of pollution, 
underscored the importance of water quality management. The complexities of atmospheric chemistry, including
 the formation of acid rain and the greenhouse effect, highlighted the urgent need for sustainable practices.
  Moreover, soil chemistry provided insights into the vital role of terrestrial ecosystems in maintaining environmental
   balance. Thus, I think these interconnected fields have cultivated a deep appreciation in me for the natural world and 
   inspired a desire to contribute to its preservation through scientific inquiry.<br/><br/>
With this strong multifaceted academic foundation, I am determined to apply my knowledge to the real world to 
contribute meaningfully to environmental solutions. Thus, a Master's degree in environmental science will be my 
next step in becoming a dedicated environmental scientist who develops innovative solutions, contributing to a 
sustainable future.
</p>
    </div>
  );
}

export default Academic;
