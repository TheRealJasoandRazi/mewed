import './App.css';
import Projects from './Projects';
import AboutMe from './AboutMe';
import MazeGame from './MazeGame';
import MySkills from './MySkills'
import Marketplace from './MockTradingPlatform';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import Typewriter from "typewriter-effect";
import React, { useEffect, useRef, useState } from 'react';

import Transition from './InterPageTransition';
import { useInView } from 'react-intersection-observer';

const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

function App() {
  const refmain = useRef();

  const { ref: ref1, inView: appear } = useInView();
  const { ref: ref2, inView: appear2 } = useInView();

  return (
    <div>
      <Parallax pages={8} ref={refmain}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={()=> refmain.current.scrollTo(1)}
        >
          <div className="App" ref={ref1} id="first">
            {appear ? (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Hi, I'm Nemanja!").start();
                }}
              />
            ) : null }
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.2}
          speed={0.05}
          onClick={()=> refmain.current.scrollTo(2)}
        >
          <div className="App" ref={ref2}>
            {appear2 ? (
              <Typewriter
                onInit={(typewriter) => {
                typewriter.typeString("And this is my website!").pauseFor(2000).start();
              }}/>
            ) : null }
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={1}
          onClick={()=> refmain.current.scrollTo(3)}
        >
          <Projects/>
        </ParallaxLayer>
        
        <ParallaxLayer
          offset={2.5}
          speed={1}
          factor={1}
        >
          <Transition />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={1}
          factor={1}
        >
          <MazeGame />
        </ParallaxLayer> 

        <ParallaxLayer
        offset={4.5}
        speed={1}
        factor={1}
        >
          <Marketplace/>
        </ParallaxLayer>

        <ParallaxLayer
        offset={5.8}
        speed={1}
        factor={1}
        >
          <MySkills/>
        </ParallaxLayer>

        <ParallaxLayer
        offset={6}
        speed={1}
        factor={1.5}
        >
          <AboutMe/>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
