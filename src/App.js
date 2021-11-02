import './App.css';
import React from 'react';

import {useRef, useLayoutEffect} from "react";

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { Expo,Sine,Back } from 'gsap/all';

function App() {
    const ref = useRef();

    const ele = gsap.utils.selector(ref);
    const tl = gsap.timeline();

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        tl.to(ele("#background-bars"), {
            yPercent:-40,
            scrollTrigger: {
                trigger: ele("#home-page"),
                scrub: 1,
            },
        }).fromTo(ele('#home-page-heading h1 #letter'), 
        {opacity: 0, x: 100, top: 200, rotation: 90,color: 'red'}, 
        {opacity: 1,delay: 0.2, x: 0, top: 0,rotation: 0,color: 'black',duration: 1, stagger: 0.015, ease: Back.easeInOut})
        

        gsap.to(ele("#home-page-heading"), {
            yPercent: 90,
            scrollTrigger: {
                scrub: 0.4,
            }
        });

        gsap.to(ele("#home-page-background img"), {
            yPercent: -40,
            scrollTrigger: {
                scrub: 0.4,
            }
        });

        gsap.to(ele("#about-para #about-image-wrapper img"), {
            yPercent: -40,
            scrollTrigger: {
                scrub: 0.4,
            }
        });

        var head_gone = gsap.timeline({
            scrollTrigger: {
                trigger: ele('#home-page-heading'),
                scrub: 2,
                start: 'top top',
                end: "bottom top"
            }}).to(ele('#home-page-heading h1 #letter'), 
            { opacity: 0, top: 200,stagger: 0.01, ease: Back.easeInOut})
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

            <div id="about-page">
                <div id="about-page-content">
                    <HeadingWrapper id="inspire-heading">
                        <h1>INSPIRATION</h1>
                    </HeadingWrapper>
                    <div id="about-para">
                        <p>We help inspire students 
                            to produce better designs, 
                            bringing designs to life is 
                            the major part of any project 
                            and we help achieve just that.
                        <img src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1025&q=80" />
                            </p>
                        
                        <div id="about-image-wrapper">
                            <img src="https://images.unsplash.com/photo-1635768882868-7ba5f453222d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80" />
                        </div>

                    </div>
                </div>
            </div>
      </div>
    )

}

function HeadingWrapper({children,id}){
    console.log(id);
    var headings = React.Children.toArray(children);
    return(
        headings.map( heading => {
            return <div id={id}>
                <h1>{heading.props.children.split("").map( letter => {
                    return <span id="letter">{letter}</span>
                })}</h1>
            </div>
        })
    )
}

export default App;
