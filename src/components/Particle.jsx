import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
// import { loadSlim } from 'tsparticles-slim';

export const Particle = ({ darkMode }) => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id='tsparticles'
      // url='http://foo.bar/particles.json'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false, zIndex: 0 },
        background: {
          color: {
            value: 'transparent',
          },
          position: 'center',
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'repulse',
            },
            onHover: {
              enable: true,
              mode: 'slow',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 300,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: darkMode ? '#ffffff' : '#000000',
          },
          links: {
            color: darkMode ? '#ffffff' : '#000000',
            distance: 650,
            enable: true,
            opacity: 0.8,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: false,
              area: 100,
            },
            value: 10,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 0.5, max: 1 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
