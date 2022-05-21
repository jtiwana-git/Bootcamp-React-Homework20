import React from 'react'
import './project.css'
import MCU from '../../../asset/projects/mcu-deep-diver-demo.gif'
import firstPortfolio from '../../../asset/projects/firstPortfolio.gif'
import planner from '../../../asset/projects/Day-Planner.gif'
import Hackaton from '../../../asset/projects/Hackathon.png'
import NoteTaker from '../../../asset/projects/NoteTaker.gif'
import GoodReadMe from '../../../asset/projects/GoodReadMe.gif'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
      id: 1,
      image: MCU,
      title: 'MCU-Deep-Diver',
      github: 'https://ryocon.github.io/MCU-deep-diver/',
      demo: 'https://ryocon.github.io/MCU-deep-diver/'

  },
  {
    id: 2,
    image: firstPortfolio,
    title: 'First Portfolio',
    github: 'https://github.com/jtiwana-git/JagTiwanaPortfolio',
    demo: 'https://jtiwana-git.github.io/JagTiwanaPortfolio/'

},

  {
      id: 3,
      image: planner,
      title: 'Day Planner',
      github: 'https://github.com/jtiwana-git/Week5-dayPlanner' ,
      demo: 'https://jtiwana-git.github.io/Week5-dayPlanner/'

  },
  {
      id: 4,
      image: Hackaton,
      title: 'Hackaton Suite',
      github: 'https://github.com/Farhiya1/Hackathon-Suite',
      demo: 'https://salty-woodland-88670.herokuapp.com/'

  },

  {
      id: 5,
      image: NoteTaker,
      title: 'Note Taker',
      github: 'https://github.com/jtiwana-git/NoteTaker',
      demo: 'https://shielded-waters-00939.herokuapp.com/'
  },
  {
      id: 6,
      image: GoodReadMe,
      title: 'Good Read Me Generator',
      github: 'https://github.com/jtiwana-git/ReadMeGenerator',
      demo: 'https://drive.google.com/file/d/1ZVsz7-0_tlXT1NZDwWTJpg0kjPRyIs-9/view?usp=sharing'
  }


]

export default function Project() {
  return (
    <section id='project'>
        <h1>Projects</h1>

        <h3>Swipe to view Projects</h3>

    <Swiper className="container project__container" modules={[Pagination]}
      spaceBetween={40} slidesPerView={1} pagination={{ clickable: true }}>
     {
        data.map(({id, image, title, github, demo}) => {
            return (
        <SwiperSlide key={id} className='project__item'>
        <div className="project__item-image">
            <img src={image} alt={title} />
       </div>
            <h3>{title}</h3>
            <div className="project__item-cta">
            <a href={github} className='btn' target='_blank'rel='noreferrer'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
            </div>
     </SwiperSlide>
            )
        })
    }    
     </Swiper>
    </section>

  );
}