import './App.css';
import React from 'react';

import {useRef, useLayoutEffect} from "react";

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Back } from 'gsap/all';

function App() {
    const ref = useRef();

    const ele = gsap.utils.selector(ref);
    const tl = gsap.timeline();

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(ele(".parallax-image img"), {
            yPercent: 20,
            rotateZ: 0,
            scrollTrigger: {
                trigger: ele(".parallax-image img"),
                scrub: 0.8,
            }
        });

        gsap.to(document.getElementsByTagName("BODY")[0], {
            backgroundColor: 'black',
            scrollTrigger: {
                trigger: ele("#about-page"),
                start: "top center",
                end: 'top center',
                toggleActions: "play none reverse none"
            },
        });

        var pins = document.querySelectorAll('#about-page #pin-container .pin');
        var color = ['red','orange','yellow','green','blue'];

        pins.forEach((pig,index) => {
            if(index!=pins.length-1){
                gsap.to(pig.getElementsByTagName('img'),{
                    scrollTrigger: {
                        scrub: 0.8,
                        trigger: pig,
                        start: "top top",
                        toggleActions: 'play none reverse none'
                    },
                    scale: 1.1
                });
                ScrollTrigger.create({
                    trigger: pig,
                    start: 'top top',
                    end: '100%',
                    pin: true,
                    pinSpacing: false,
                })
            }
            else{
                ScrollTrigger.create({
                    trigger: pig,
                    pin: false,
                    pinSpacing: false,
                })
            }
        })

        // ScrollTrigger.create({
        //     trigger: "#",
        //     start: "top top", 
        //     pin: true, 
        //     markers:true,
        //     pinSpacing: false 
        // })

        var cubes = ele(".iso-cube");

        ele('#about-page #iso-cube-section')[0].style.gridTemplateRows = `repeat(${cubes.length},5em)`;

        cubes.forEach((cube,index) => {
            cube.style.zIndex = cubes.length - index;
            cube.style.transform = `translate(${index *30}%,0%)`;
            // cube.addEventListener("mouseenter", (el) => {
            //     var section_heading = el.path[0].children[0].children[0];
            //     fade_in_each(ele('.iso-section-heading h1 #letter'),0.4,2,"top",0);
            // });
            // cube.addEventListener("mouseout", () => {cube.style.zIndex = index})
        })

        var headings = document.querySelectorAll("#pin-headings-section");

        headings.forEach((heading) => {
            console.log("heading is",heading.childNodes);
            heading.childNodes.forEach((heading_child,index) => {
                heading_child.style.transform = `translate(0%,${index * 60}%)`;
                heading_child.style.fontSize = `${(index+1) * 20}px`;
                heading_child.style.opacity = `${(index + 2) /3}`;
                fade_in_each(heading_child.childNodes[0].childNodes,0.4,10,'top',2,0);
            } )
        });


        animate_from(ele('#home-page-heading h1 #letter'), 0.02);
        parallax(ele("#home-page-heading"), 200);
        fade_in_each(ele('#inspire-heading h1 #letter'));
        fade_in_each(ele('.iso-cube'),1,10,'top',2);
        fade_in_each(ele('#about-page-headings h1'),2,10,'top',2);
        fade_in(ele(".fade-in"));

    }, []);

    return(
      <div id="app" ref={ref}>
            <div id="home-page">

                <div>
                    <HeadingWrapper id="home-page-heading">
                        <span>Create</span>
                        <span>Innovate</span>
                        <span>& Grow.</span>
                    </HeadingWrapper>
                </div>
            </div>

            <div id="info-page">
                <div id="info-page-content">
                    <HeadingWrapper id="inspire-heading">
                        <h1>INSPIRATION</h1>
                    </HeadingWrapper>
                    <div id="info-para">
                        <p className='fade-in'>
                            We help inspire students 
                            to produce better ideas and better designs.
                            Design is the most fundamental yet most complex part of any project 
                            and helping bring those designs to life is what we excel at.
                            <div className="parallax-image" id="about-para-image-wrapper">

                                <img src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw3NXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                            </div>

                            </p>
                        
                        <div className="parallax-image" id="about-image-wrapper">
                            <img src="https://images.unsplash.com/photo-1635768882868-7ba5f453222d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80" />
                        </div>

                    </div>
                </div>
            </div>

            <div id="about-page">
                    <div className="pin" id="about-page-headings">
                        <h1 style={{opacity: 1}}>WHO WE ARE</h1>
                        <h1 style={{opacity: 0.8}}>WHO WE ARE</h1>
                        <h1 style={{opacity: 0.6}}>WHO WE ARE</h1>
                        <h1 style={{opacity: 0.4}}>WHO WE ARE</h1>
                    </div>
                <div id="pin-container">
                    <div className="pin">
                        <div id="pin-headings-section">
                            <HeadingWrapper id="pin-heading">
                                <h1>We provide</h1>
                                <h2>BETTER</h2>
                                <span>IDEOLOGY</span>
                            </HeadingWrapper>
                        </div>
                        <img src="https://lh3.googleusercontent.com/jzNyPJyoqWVszHjN4ffr2tJIJByfUdL-lDFzKGY943Po8tY_uG6bEKMf6xWazAWahy8p-BOCuOULg2LIGC2TH1zMLfd2LRolyniGpg2cjYHyx832jJ5UkRfp3G2Yp8vmTIZrHkLv" />
                    </div>
                    <div className="pin">
                        <div id="pin-headings-section">
                            <HeadingWrapper id="pin-heading">
                                <h1>We provide</h1>
                                <h2>BETTER</h2>
                                <span>INNOVATION</span>
                            </HeadingWrapper>
                        </div>
                        <img src="https://lh3.googleusercontent.com/FZIm8ogOcVG_4q9LIZPdrLahoFoknCeE3a0Cjt0vpqhiY1JUl3UkVAVOgqI-gf5QyUIqK7XGUTykfcPfZd0j-nWB2hZ6cwf9TLOn4OplgQAxIAXtlu2F42sHN3MpVeAdtLTsHBMr" />
                    </div>
                    <div className="pin">
                        <div id="pin-headings-section">
                            <HeadingWrapper id="pin-heading">
                                <h1>We provide</h1>
                                <h2>BETTER</h2>
                                <span>DESIGN</span>
                            </HeadingWrapper>
                        </div>
                        <img src="https://lh5.googleusercontent.com/Tfu8icftECFVUueXvtNdwhdgzq2TOWgQyy_ScNEDgtopG9TKPl6QLh1vHjj6q_zzf7kPyaGudigaHu4wH7gxpfTuew11BeoVrhl1SY2YyZ0t3Ei_Z1JSimWim6ZcsojXHAYm8u9D" />
                    </div>
                    <div className="pin">
                        <div id="pin-headings-section">
                            <HeadingWrapper id="pin-heading">
                                <h1> WE ARE THE </h1>
                                <h2>INNOVATIVE</h2>
                                <span>MONKEYS</span>
                            </HeadingWrapper>
                        </div>
                        <img src="https://lh3.googleusercontent.com/OKnVyEKlZZS8keAAgnNjDyJ69RBqIrJo-S01JxSnY4w9Rwhb80N453ubqy6LBhu2Koj3COnX1VbX_bWKjWjOtOOgJlGUQYjG-6xEaOCmBp5dP9l2kYedpbHjq1a0X7dH6u8GR2E_" />
                    </div>
                    <div className="pin" id="about-page-pin-content" style={{
                        backdropFilter: "blur(10px) contrast(1.2)",
                    }}>
                       <h1>We help students bring their 
                           designs to life by providing them 
                           with the necessary fundamentals and knowledge to do so.
                           Our courses not only help students to learn but they also help
                           them discover newer technologies. The courses are designed in such a
                           way that they also provide hands on projects for the students to learn and grow.</h1>
                    </div>
                </div>

                <div id="iso-cube-section">
                    <svg className="iso-cube" viewBox="0 0 937 555" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M463.888 3.29414L13.705 240.792C9.4379 243.044 9.43787 249.155 13.705 251.406L463.888 488.904C465.634 489.825 467.722 489.829 469.47 488.913L923.199 251.415C927.489 249.169 927.489 243.029 923.199 240.783L469.47 3.28514C467.722 2.3697 465.634 2.37305 463.888 3.29414Z" fill="url(#paint0_linear_103:52)"/>
    <path d="M1.82297 303.332V259.08C1.82297 254.563 6.62607 251.666 10.6217 253.773L461.653 491.621C463.622 492.659 464.854 494.702 464.854 496.928V541.226C464.854 545.743 460.051 548.64 456.055 546.533L5.0238 308.639C3.05509 307.6 1.82297 305.558 1.82297 303.332Z" fill="url(#paint1_linear_103:52)"/>
    <path d="M468.5 541.43V496.955C468.5 494.723 469.74 492.674 471.718 491.639L926.395 253.733C930.39 251.643 935.177 254.54 935.177 259.049V303.369C935.177 305.601 933.938 307.649 931.96 308.684L477.283 546.745C473.288 548.837 468.5 545.939 468.5 541.43Z" fill="url(#paint2_linear_103:52)"/>
    <defs>
    <linearGradient id="paint0_linear_103:52" x1="468.5" y1="1.82295" x2="468.5" y2="490.375" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint1_linear_103:52" x1="233.339" y1="249.133" x2="233.339" y2="551.174" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint2_linear_103:52" x1="701.839" y1="249.138" x2="701.839" y2="551.344" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    </defs>
                    </svg>
                    <svg className="iso-cube" viewBox="0 0 937 555" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M463.888 3.29414L13.705 240.792C9.4379 243.044 9.43787 249.155 13.705 251.406L463.888 488.904C465.634 489.825 467.722 489.829 469.47 488.913L923.199 251.415C927.489 249.169 927.489 243.029 923.199 240.783L469.47 3.28514C467.722 2.3697 465.634 2.37305 463.888 3.29414Z" fill="url(#paint0_linear_103:52)"/>
    <path d="M1.82297 303.332V259.08C1.82297 254.563 6.62607 251.666 10.6217 253.773L461.653 491.621C463.622 492.659 464.854 494.702 464.854 496.928V541.226C464.854 545.743 460.051 548.64 456.055 546.533L5.0238 308.639C3.05509 307.6 1.82297 305.558 1.82297 303.332Z" fill="url(#paint1_linear_103:52)"/>
    <path d="M468.5 541.43V496.955C468.5 494.723 469.74 492.674 471.718 491.639L926.395 253.733C930.39 251.643 935.177 254.54 935.177 259.049V303.369C935.177 305.601 933.938 307.649 931.96 308.684L477.283 546.745C473.288 548.837 468.5 545.939 468.5 541.43Z" fill="url(#paint2_linear_103:52)"/>
    <defs>
    <linearGradient id="paint0_linear_103:52" x1="468.5" y1="1.82295" x2="468.5" y2="490.375" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint1_linear_103:52" x1="233.339" y1="249.133" x2="233.339" y2="551.174" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint2_linear_103:52" x1="701.839" y1="249.138" x2="701.839" y2="551.344" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    </defs>
                    </svg>
                    <svg className="iso-cube" viewBox="0 0 937 555" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M463.888 3.29414L13.705 240.792C9.4379 243.044 9.43787 249.155 13.705 251.406L463.888 488.904C465.634 489.825 467.722 489.829 469.47 488.913L923.199 251.415C927.489 249.169 927.489 243.029 923.199 240.783L469.47 3.28514C467.722 2.3697 465.634 2.37305 463.888 3.29414Z" fill="url(#paint0_linear_103:52)"/>
    <path d="M1.82297 303.332V259.08C1.82297 254.563 6.62607 251.666 10.6217 253.773L461.653 491.621C463.622 492.659 464.854 494.702 464.854 496.928V541.226C464.854 545.743 460.051 548.64 456.055 546.533L5.0238 308.639C3.05509 307.6 1.82297 305.558 1.82297 303.332Z" fill="url(#paint1_linear_103:52)"/>
    <path d="M468.5 541.43V496.955C468.5 494.723 469.74 492.674 471.718 491.639L926.395 253.733C930.39 251.643 935.177 254.54 935.177 259.049V303.369C935.177 305.601 933.938 307.649 931.96 308.684L477.283 546.745C473.288 548.837 468.5 545.939 468.5 541.43Z" fill="url(#paint2_linear_103:52)"/>
    <defs>
    <linearGradient id="paint0_linear_103:52" x1="468.5" y1="1.82295" x2="468.5" y2="490.375" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint1_linear_103:52" x1="233.339" y1="249.133" x2="233.339" y2="551.174" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint2_linear_103:52" x1="701.839" y1="249.138" x2="701.839" y2="551.344" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    </defs>
                    </svg>
                    <svg className="iso-cube" viewBox="0 0 937 555" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M463.888 3.29414L13.705 240.792C9.4379 243.044 9.43787 249.155 13.705 251.406L463.888 488.904C465.634 489.825 467.722 489.829 469.47 488.913L923.199 251.415C927.489 249.169 927.489 243.029 923.199 240.783L469.47 3.28514C467.722 2.3697 465.634 2.37305 463.888 3.29414Z" fill="url(#paint0_linear_103:52)"/>
    <path d="M1.82297 303.332V259.08C1.82297 254.563 6.62607 251.666 10.6217 253.773L461.653 491.621C463.622 492.659 464.854 494.702 464.854 496.928V541.226C464.854 545.743 460.051 548.64 456.055 546.533L5.0238 308.639C3.05509 307.6 1.82297 305.558 1.82297 303.332Z" fill="url(#paint1_linear_103:52)"/>
    <path d="M468.5 541.43V496.955C468.5 494.723 469.74 492.674 471.718 491.639L926.395 253.733C930.39 251.643 935.177 254.54 935.177 259.049V303.369C935.177 305.601 933.938 307.649 931.96 308.684L477.283 546.745C473.288 548.837 468.5 545.939 468.5 541.43Z" fill="url(#paint2_linear_103:52)"/>
    <defs>
    <linearGradient id="paint0_linear_103:52" x1="468.5" y1="1.82295" x2="468.5" y2="490.375" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint1_linear_103:52" x1="233.339" y1="249.133" x2="233.339" y2="551.174" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint2_linear_103:52" x1="701.839" y1="249.138" x2="701.839" y2="551.344" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    </defs>
                    </svg>
                    <svg className="iso-cube" viewBox="0 0 937 555" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M463.888 3.29414L13.705 240.792C9.4379 243.044 9.43787 249.155 13.705 251.406L463.888 488.904C465.634 489.825 467.722 489.829 469.47 488.913L923.199 251.415C927.489 249.169 927.489 243.029 923.199 240.783L469.47 3.28514C467.722 2.3697 465.634 2.37305 463.888 3.29414Z" fill="url(#paint0_linear_103:52)"/>
    <path d="M1.82297 303.332V259.08C1.82297 254.563 6.62607 251.666 10.6217 253.773L461.653 491.621C463.622 492.659 464.854 494.702 464.854 496.928V541.226C464.854 545.743 460.051 548.64 456.055 546.533L5.0238 308.639C3.05509 307.6 1.82297 305.558 1.82297 303.332Z" fill="url(#paint1_linear_103:52)"/>
    <path d="M468.5 541.43V496.955C468.5 494.723 469.74 492.674 471.718 491.639L926.395 253.733C930.39 251.643 935.177 254.54 935.177 259.049V303.369C935.177 305.601 933.938 307.649 931.96 308.684L477.283 546.745C473.288 548.837 468.5 545.939 468.5 541.43Z" fill="url(#paint2_linear_103:52)"/>
    <defs>
    <linearGradient id="paint0_linear_103:52" x1="468.5" y1="1.82295" x2="468.5" y2="490.375" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint1_linear_103:52" x1="233.339" y1="249.133" x2="233.339" y2="551.174" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint2_linear_103:52" x1="701.839" y1="249.138" x2="701.839" y2="551.344" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    </defs>
                    </svg>
                    <svg className="iso-cube" viewBox="0 0 937 555" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M463.888 3.29414L13.705 240.792C9.4379 243.044 9.43787 249.155 13.705 251.406L463.888 488.904C465.634 489.825 467.722 489.829 469.47 488.913L923.199 251.415C927.489 249.169 927.489 243.029 923.199 240.783L469.47 3.28514C467.722 2.3697 465.634 2.37305 463.888 3.29414Z" fill="url(#paint0_linear_103:52)"/>
    <path d="M1.82297 303.332V259.08C1.82297 254.563 6.62607 251.666 10.6217 253.773L461.653 491.621C463.622 492.659 464.854 494.702 464.854 496.928V541.226C464.854 545.743 460.051 548.64 456.055 546.533L5.0238 308.639C3.05509 307.6 1.82297 305.558 1.82297 303.332Z" fill="url(#paint1_linear_103:52)"/>
    <path d="M468.5 541.43V496.955C468.5 494.723 469.74 492.674 471.718 491.639L926.395 253.733C930.39 251.643 935.177 254.54 935.177 259.049V303.369C935.177 305.601 933.938 307.649 931.96 308.684L477.283 546.745C473.288 548.837 468.5 545.939 468.5 541.43Z" fill="url(#paint2_linear_103:52)"/>
    <defs>
    <linearGradient id="paint0_linear_103:52" x1="468.5" y1="1.82295" x2="468.5" y2="490.375" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint1_linear_103:52" x1="233.339" y1="249.133" x2="233.339" y2="551.174" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint2_linear_103:52" x1="701.839" y1="249.138" x2="701.839" y2="551.344" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    </defs>
                    </svg>
                    <svg className="iso-cube" viewBox="0 0 937 555" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M463.888 3.29414L13.705 240.792C9.4379 243.044 9.43787 249.155 13.705 251.406L463.888 488.904C465.634 489.825 467.722 489.829 469.47 488.913L923.199 251.415C927.489 249.169 927.489 243.029 923.199 240.783L469.47 3.28514C467.722 2.3697 465.634 2.37305 463.888 3.29414Z" fill="url(#paint0_linear_103:52)"/>
    <path d="M1.82297 303.332V259.08C1.82297 254.563 6.62607 251.666 10.6217 253.773L461.653 491.621C463.622 492.659 464.854 494.702 464.854 496.928V541.226C464.854 545.743 460.051 548.64 456.055 546.533L5.0238 308.639C3.05509 307.6 1.82297 305.558 1.82297 303.332Z" fill="url(#paint1_linear_103:52)"/>
    <path d="M468.5 541.43V496.955C468.5 494.723 469.74 492.674 471.718 491.639L926.395 253.733C930.39 251.643 935.177 254.54 935.177 259.049V303.369C935.177 305.601 933.938 307.649 931.96 308.684L477.283 546.745C473.288 548.837 468.5 545.939 468.5 541.43Z" fill="url(#paint2_linear_103:52)"/>
    <defs>
    <linearGradient id="paint0_linear_103:52" x1="468.5" y1="1.82295" x2="468.5" y2="490.375" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint1_linear_103:52" x1="233.339" y1="249.133" x2="233.339" y2="551.174" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint2_linear_103:52" x1="701.839" y1="249.138" x2="701.839" y2="551.344" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    </defs>
                    </svg>
                    <svg className="iso-cube" viewBox="0 0 937 555" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M463.888 3.29414L13.705 240.792C9.4379 243.044 9.43787 249.155 13.705 251.406L463.888 488.904C465.634 489.825 467.722 489.829 469.47 488.913L923.199 251.415C927.489 249.169 927.489 243.029 923.199 240.783L469.47 3.28514C467.722 2.3697 465.634 2.37305 463.888 3.29414Z" fill="url(#paint0_linear_103:52)"/>
    <path d="M1.82297 303.332V259.08C1.82297 254.563 6.62607 251.666 10.6217 253.773L461.653 491.621C463.622 492.659 464.854 494.702 464.854 496.928V541.226C464.854 545.743 460.051 548.64 456.055 546.533L5.0238 308.639C3.05509 307.6 1.82297 305.558 1.82297 303.332Z" fill="url(#paint1_linear_103:52)"/>
    <path d="M468.5 541.43V496.955C468.5 494.723 469.74 492.674 471.718 491.639L926.395 253.733C930.39 251.643 935.177 254.54 935.177 259.049V303.369C935.177 305.601 933.938 307.649 931.96 308.684L477.283 546.745C473.288 548.837 468.5 545.939 468.5 541.43Z" fill="url(#paint2_linear_103:52)"/>
    <defs>
    <linearGradient id="paint0_linear_103:52" x1="468.5" y1="1.82295" x2="468.5" y2="490.375" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint1_linear_103:52" x1="233.339" y1="249.133" x2="233.339" y2="551.174" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint2_linear_103:52" x1="701.839" y1="249.138" x2="701.839" y2="551.344" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    </defs>
                    </svg>
                    <svg className="iso-cube" viewBox="0 0 937 555" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M463.888 3.29414L13.705 240.792C9.4379 243.044 9.43787 249.155 13.705 251.406L463.888 488.904C465.634 489.825 467.722 489.829 469.47 488.913L923.199 251.415C927.489 249.169 927.489 243.029 923.199 240.783L469.47 3.28514C467.722 2.3697 465.634 2.37305 463.888 3.29414Z" fill="url(#paint0_linear_103:52)"/>
    <path d="M1.82297 303.332V259.08C1.82297 254.563 6.62607 251.666 10.6217 253.773L461.653 491.621C463.622 492.659 464.854 494.702 464.854 496.928V541.226C464.854 545.743 460.051 548.64 456.055 546.533L5.0238 308.639C3.05509 307.6 1.82297 305.558 1.82297 303.332Z" fill="url(#paint1_linear_103:52)"/>
    <path d="M468.5 541.43V496.955C468.5 494.723 469.74 492.674 471.718 491.639L926.395 253.733C930.39 251.643 935.177 254.54 935.177 259.049V303.369C935.177 305.601 933.938 307.649 931.96 308.684L477.283 546.745C473.288 548.837 468.5 545.939 468.5 541.43Z" fill="url(#paint2_linear_103:52)"/>
    <defs>
    <linearGradient id="paint0_linear_103:52" x1="468.5" y1="1.82295" x2="468.5" y2="490.375" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint1_linear_103:52" x1="233.339" y1="249.133" x2="233.339" y2="551.174" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint2_linear_103:52" x1="701.839" y1="249.138" x2="701.839" y2="551.344" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    </defs>
                    </svg>

                    <svg className="iso-cube" viewBox="0 0 937 555" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M463.888 3.29414L13.705 240.792C9.4379 243.044 9.43787 249.155 13.705 251.406L463.888 488.904C465.634 489.825 467.722 489.829 469.47 488.913L923.199 251.415C927.489 249.169 927.489 243.029 923.199 240.783L469.47 3.28514C467.722 2.3697 465.634 2.37305 463.888 3.29414Z" fill="url(#paint0_linear_103:52)"/>
    <path d="M1.82297 303.332V259.08C1.82297 254.563 6.62607 251.666 10.6217 253.773L461.653 491.621C463.622 492.659 464.854 494.702 464.854 496.928V541.226C464.854 545.743 460.051 548.64 456.055 546.533L5.0238 308.639C3.05509 307.6 1.82297 305.558 1.82297 303.332Z" fill="url(#paint1_linear_103:52)"/>
    <path d="M468.5 541.43V496.955C468.5 494.723 469.74 492.674 471.718 491.639L926.395 253.733C930.39 251.643 935.177 254.54 935.177 259.049V303.369C935.177 305.601 933.938 307.649 931.96 308.684L477.283 546.745C473.288 548.837 468.5 545.939 468.5 541.43Z" fill="url(#paint2_linear_103:52)"/>
    <defs>
    <linearGradient id="paint0_linear_103:52" x1="468.5" y1="1.82295" x2="468.5" y2="490.375" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint1_linear_103:52" x1="233.339" y1="249.133" x2="233.339" y2="551.174" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint2_linear_103:52" x1="701.839" y1="249.138" x2="701.839" y2="551.344" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    </defs>
                    </svg>
                    <svg className="iso-cube" viewBox="0 0 937 555" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M463.888 3.29414L13.705 240.792C9.4379 243.044 9.43787 249.155 13.705 251.406L463.888 488.904C465.634 489.825 467.722 489.829 469.47 488.913L923.199 251.415C927.489 249.169 927.489 243.029 923.199 240.783L469.47 3.28514C467.722 2.3697 465.634 2.37305 463.888 3.29414Z" fill="url(#paint0_linear_103:52)"/>
    <path d="M1.82297 303.332V259.08C1.82297 254.563 6.62607 251.666 10.6217 253.773L461.653 491.621C463.622 492.659 464.854 494.702 464.854 496.928V541.226C464.854 545.743 460.051 548.64 456.055 546.533L5.0238 308.639C3.05509 307.6 1.82297 305.558 1.82297 303.332Z" fill="url(#paint1_linear_103:52)"/>
    <path d="M468.5 541.43V496.955C468.5 494.723 469.74 492.674 471.718 491.639L926.395 253.733C930.39 251.643 935.177 254.54 935.177 259.049V303.369C935.177 305.601 933.938 307.649 931.96 308.684L477.283 546.745C473.288 548.837 468.5 545.939 468.5 541.43Z" fill="url(#paint2_linear_103:52)"/>
    <defs>
    <linearGradient id="paint0_linear_103:52" x1="468.5" y1="1.82295" x2="468.5" y2="490.375" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint1_linear_103:52" x1="233.339" y1="249.133" x2="233.339" y2="551.174" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint2_linear_103:52" x1="701.839" y1="249.138" x2="701.839" y2="551.344" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    </defs>
                    </svg>
                    <svg className="iso-cube" viewBox="0 0 937 555" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M463.888 3.29414L13.705 240.792C9.4379 243.044 9.43787 249.155 13.705 251.406L463.888 488.904C465.634 489.825 467.722 489.829 469.47 488.913L923.199 251.415C927.489 249.169 927.489 243.029 923.199 240.783L469.47 3.28514C467.722 2.3697 465.634 2.37305 463.888 3.29414Z" fill="url(#paint0_linear_103:52)"/>
    <path d="M1.82297 303.332V259.08C1.82297 254.563 6.62607 251.666 10.6217 253.773L461.653 491.621C463.622 492.659 464.854 494.702 464.854 496.928V541.226C464.854 545.743 460.051 548.64 456.055 546.533L5.0238 308.639C3.05509 307.6 1.82297 305.558 1.82297 303.332Z" fill="url(#paint1_linear_103:52)"/>
    <path d="M468.5 541.43V496.955C468.5 494.723 469.74 492.674 471.718 491.639L926.395 253.733C930.39 251.643 935.177 254.54 935.177 259.049V303.369C935.177 305.601 933.938 307.649 931.96 308.684L477.283 546.745C473.288 548.837 468.5 545.939 468.5 541.43Z" fill="url(#paint2_linear_103:52)"/>
    <defs>
    <linearGradient id="paint0_linear_103:52" x1="468.5" y1="1.82295" x2="468.5" y2="490.375" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint1_linear_103:52" x1="233.339" y1="249.133" x2="233.339" y2="551.174" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint2_linear_103:52" x1="701.839" y1="249.138" x2="701.839" y2="551.344" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    </defs>
                    </svg>
                    <svg className="iso-cube" viewBox="0 0 937 555" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M463.888 3.29414L13.705 240.792C9.4379 243.044 9.43787 249.155 13.705 251.406L463.888 488.904C465.634 489.825 467.722 489.829 469.47 488.913L923.199 251.415C927.489 249.169 927.489 243.029 923.199 240.783L469.47 3.28514C467.722 2.3697 465.634 2.37305 463.888 3.29414Z" fill="url(#paint0_linear_103:52)"/>
    <path d="M1.82297 303.332V259.08C1.82297 254.563 6.62607 251.666 10.6217 253.773L461.653 491.621C463.622 492.659 464.854 494.702 464.854 496.928V541.226C464.854 545.743 460.051 548.64 456.055 546.533L5.0238 308.639C3.05509 307.6 1.82297 305.558 1.82297 303.332Z" fill="url(#paint1_linear_103:52)"/>
    <path d="M468.5 541.43V496.955C468.5 494.723 469.74 492.674 471.718 491.639L926.395 253.733C930.39 251.643 935.177 254.54 935.177 259.049V303.369C935.177 305.601 933.938 307.649 931.96 308.684L477.283 546.745C473.288 548.837 468.5 545.939 468.5 541.43Z" fill="url(#paint2_linear_103:52)"/>
    <defs>
    <linearGradient id="paint0_linear_103:52" x1="468.5" y1="1.82295" x2="468.5" y2="490.375" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint1_linear_103:52" x1="233.339" y1="249.133" x2="233.339" y2="551.174" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint2_linear_103:52" x1="701.839" y1="249.138" x2="701.839" y2="551.344" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    </defs>
                    </svg>
                    <svg className="iso-cube" viewBox="0 0 937 555" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M463.888 3.29414L13.705 240.792C9.4379 243.044 9.43787 249.155 13.705 251.406L463.888 488.904C465.634 489.825 467.722 489.829 469.47 488.913L923.199 251.415C927.489 249.169 927.489 243.029 923.199 240.783L469.47 3.28514C467.722 2.3697 465.634 2.37305 463.888 3.29414Z" fill="url(#paint0_linear_103:52)"/>
    <path d="M1.82297 303.332V259.08C1.82297 254.563 6.62607 251.666 10.6217 253.773L461.653 491.621C463.622 492.659 464.854 494.702 464.854 496.928V541.226C464.854 545.743 460.051 548.64 456.055 546.533L5.0238 308.639C3.05509 307.6 1.82297 305.558 1.82297 303.332Z" fill="url(#paint1_linear_103:52)"/>
    <path d="M468.5 541.43V496.955C468.5 494.723 469.74 492.674 471.718 491.639L926.395 253.733C930.39 251.643 935.177 254.54 935.177 259.049V303.369C935.177 305.601 933.938 307.649 931.96 308.684L477.283 546.745C473.288 548.837 468.5 545.939 468.5 541.43Z" fill="url(#paint2_linear_103:52)"/>
    <defs>
    <linearGradient id="paint0_linear_103:52" x1="468.5" y1="1.82295" x2="468.5" y2="490.375" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint1_linear_103:52" x1="233.339" y1="249.133" x2="233.339" y2="551.174" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint2_linear_103:52" x1="701.839" y1="249.138" x2="701.839" y2="551.344" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    </defs>
                    </svg>
                    <svg className="iso-cube" viewBox="0 0 937 555" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M463.888 3.29414L13.705 240.792C9.4379 243.044 9.43787 249.155 13.705 251.406L463.888 488.904C465.634 489.825 467.722 489.829 469.47 488.913L923.199 251.415C927.489 249.169 927.489 243.029 923.199 240.783L469.47 3.28514C467.722 2.3697 465.634 2.37305 463.888 3.29414Z" fill="url(#paint0_linear_103:52)"/>
    <path d="M1.82297 303.332V259.08C1.82297 254.563 6.62607 251.666 10.6217 253.773L461.653 491.621C463.622 492.659 464.854 494.702 464.854 496.928V541.226C464.854 545.743 460.051 548.64 456.055 546.533L5.0238 308.639C3.05509 307.6 1.82297 305.558 1.82297 303.332Z" fill="url(#paint1_linear_103:52)"/>
    <path d="M468.5 541.43V496.955C468.5 494.723 469.74 492.674 471.718 491.639L926.395 253.733C930.39 251.643 935.177 254.54 935.177 259.049V303.369C935.177 305.601 933.938 307.649 931.96 308.684L477.283 546.745C473.288 548.837 468.5 545.939 468.5 541.43Z" fill="url(#paint2_linear_103:52)"/>
    <defs>
    <linearGradient id="paint0_linear_103:52" x1="468.5" y1="1.82295" x2="468.5" y2="490.375" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint1_linear_103:52" x1="233.339" y1="249.133" x2="233.339" y2="551.174" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint2_linear_103:52" x1="701.839" y1="249.138" x2="701.839" y2="551.344" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    </defs>
                    </svg>
                    <svg className="iso-cube" viewBox="0 0 937 555" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M463.888 3.29414L13.705 240.792C9.4379 243.044 9.43787 249.155 13.705 251.406L463.888 488.904C465.634 489.825 467.722 489.829 469.47 488.913L923.199 251.415C927.489 249.169 927.489 243.029 923.199 240.783L469.47 3.28514C467.722 2.3697 465.634 2.37305 463.888 3.29414Z" fill="url(#paint0_linear_103:52)"/>
    <path d="M1.82297 303.332V259.08C1.82297 254.563 6.62607 251.666 10.6217 253.773L461.653 491.621C463.622 492.659 464.854 494.702 464.854 496.928V541.226C464.854 545.743 460.051 548.64 456.055 546.533L5.0238 308.639C3.05509 307.6 1.82297 305.558 1.82297 303.332Z" fill="url(#paint1_linear_103:52)"/>
    <path d="M468.5 541.43V496.955C468.5 494.723 469.74 492.674 471.718 491.639L926.395 253.733C930.39 251.643 935.177 254.54 935.177 259.049V303.369C935.177 305.601 933.938 307.649 931.96 308.684L477.283 546.745C473.288 548.837 468.5 545.939 468.5 541.43Z" fill="url(#paint2_linear_103:52)"/>
    <defs>
    <linearGradient id="paint0_linear_103:52" x1="468.5" y1="1.82295" x2="468.5" y2="490.375" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint1_linear_103:52" x1="233.339" y1="249.133" x2="233.339" y2="551.174" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint2_linear_103:52" x1="701.839" y1="249.138" x2="701.839" y2="551.344" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    </defs>
                    </svg>
                    <svg className="iso-cube" viewBox="0 0 937 555" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M463.888 3.29414L13.705 240.792C9.4379 243.044 9.43787 249.155 13.705 251.406L463.888 488.904C465.634 489.825 467.722 489.829 469.47 488.913L923.199 251.415C927.489 249.169 927.489 243.029 923.199 240.783L469.47 3.28514C467.722 2.3697 465.634 2.37305 463.888 3.29414Z" fill="url(#paint0_linear_103:52)"/>
    <path d="M1.82297 303.332V259.08C1.82297 254.563 6.62607 251.666 10.6217 253.773L461.653 491.621C463.622 492.659 464.854 494.702 464.854 496.928V541.226C464.854 545.743 460.051 548.64 456.055 546.533L5.0238 308.639C3.05509 307.6 1.82297 305.558 1.82297 303.332Z" fill="url(#paint1_linear_103:52)"/>
    <path d="M468.5 541.43V496.955C468.5 494.723 469.74 492.674 471.718 491.639L926.395 253.733C930.39 251.643 935.177 254.54 935.177 259.049V303.369C935.177 305.601 933.938 307.649 931.96 308.684L477.283 546.745C473.288 548.837 468.5 545.939 468.5 541.43Z" fill="url(#paint2_linear_103:52)"/>
    <defs>
    <linearGradient id="paint0_linear_103:52" x1="468.5" y1="1.82295" x2="468.5" y2="490.375" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint1_linear_103:52" x1="233.339" y1="249.133" x2="233.339" y2="551.174" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    <linearGradient id="paint2_linear_103:52" x1="701.839" y1="249.138" x2="701.839" y2="551.344" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#2C2C2C"/>
    </linearGradient>
    </defs>
                    </svg>

                </div>

            </div>
      </div>
    )

}

function animate_from(ele,stagger){
    gsap.timeline({
        scrollTrigger: {
            scrub: 2,
            trigger: ele,
            start: 'top top',
            end: 'bottom top'
        }
    }).fromTo(ele,{
        opacity: 1, top: 0
    },{opacity: 0,top: 100, stagger: stagger, ease: Back.easeInOut})
}

function parallax(ele, y){
    gsap.to(ele, {
        yPercent: y,
        scrollTrigger: {
            scrub: 0.2,
        }
        
    })
}

function fade_in_each(ele,stagger = 0.02,duration = 0.8,direction = "top",scrub = 2,delay = 0){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ele,
            scrub: scrub,
            top: 'top center',
            end: 'center center',
            toggleActions: 'restart',
        }
    });

    if(direction === "top"){
        tl.fromTo(ele,{
            opacity: 0, top: 200
        },{
            opacity: 1,top: 0, stagger: stagger, ease: Back.easeInOut,duration: duration,delay: delay
        })
    }

    else if(direction === "left"){
        tl.fromTo(ele,{
            opacity: 0, left: 200
        },{
            opacity: 1,left: 0, stagger: stagger, ease: Back.easeInOut,duration: duration, delay: delay
        })
    }
    
    
    
}

function fade_in(ele){
    gsap.timeline({
        yPercent: 90,
        scrollTrigger: {
            trigger: ele,
            scrub: 2.5,
            start: 'top bottom',
            end: 'top center',
            toggleActions: 'restart',
        }}).fromTo(ele,{
        opacity: 0,
        top: 200,
        position: 'relative',
    },{
        opacity: 1,
        top: 0
    })
}

function HeadingWrapper({children,id,className}){
    var headings = React.Children.toArray(children);
    return(
        headings.map( heading => {
            return <div id={id} className = {className}>
                <h1>{heading.props.children.split("").map( letter => {
                    return <span id="letter">{letter}</span>
                })}</h1>
            </div>
        })
    )
}

export default App;
