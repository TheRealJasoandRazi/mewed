import './App.css';
import React from 'react';
import ReactVisibilitySensor from 'react-visibility-sensor';
import { useSpring, animated, useScroll, useInView} from '@react-spring/web';
import { useEffect, useState, useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function InterPageTransition() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        container: ref,
        onChange: ({ value: { scrollYProgress } }) => {
          console.log(scrollYProgress);
        },
        default: {
          immediate: true,
        },
      })

    return (
        <div ref={ref} style={{ height: '200vh' }}>
        
        </div>
    )
};

export default InterPageTransition;