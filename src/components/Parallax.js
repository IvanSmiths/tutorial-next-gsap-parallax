import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Parallax() {

    const [background, setBackground] = useState(20)

    const parallaxRef = useRef(null);
    const mountain3 = useRef(null);
    const mountain2 = useRef(null);
    const mountain1 = useRef(null);
    const cloudsBottom = useRef(null);
    const cloudsLeft = useRef(null);
    const cloudsRight = useRef(null);
    const stars = useRef(null);
    const sun = useRef(null);
    const copy = useRef(null);
    const btn = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            var tl = gsap.timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: "top top",
                    end: "5000 bottom",
                    scrub: true,
                    pin: true,
                    onUpdate: (self) => {
                        setBackground(Math.ceil(self.progress * 100 + 20))
                    },
                },
            });
            tl.to(
                mountain3.current,
                {
                    y: "-=80",
                },
                0
            );
            tl.to(
                mountain2.current,
                {
                    y: "-=30",
                },
                0
            );
            tl.to(
                mountain1.current,
                {
                    y: "+=50",
                },
                0
            );
            tl.to(
                stars.current,
                {
                    top: 0,
                },
                0.5
            );
            tl.to(
                cloudsBottom.current,
                {
                    opacity: 0,
                    duration: 0.5
                },
                0
            );
            tl.to(
                cloudsLeft.current,
                {
                    x: "-20%",
                    opacity: 0,
                },
                0
            );
            tl.to(
                cloudsRight.current,
                {
                    x: "20%",
                    opacity: 0,
                },
                0
            );
            tl.to(
                sun.current,
                {
                    y: "+=210",
                },
                0
            );
            tl.to(
                copy.current,
                {
                    y: "-250%",
                    opacity: 1
                },
                0
            );
            tl.to(
                btn.current,
                {
                    opacity: 1,
                },
                1.5
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="parallax-outer">
            <div ref={parallaxRef} style={{ background: `linear-gradient(#0F2B9C, #673D7D ${background}%, #A74A67, #EDFC54 )` }} className='parallax'>
                <img ref={mountain3} className='mountain-3' src="/parallax/mountain-3.svg" />
                <img ref={mountain2} className='mountain-2' src="/parallax/mountain-2.svg" />
                <img ref={mountain1} className='mountain-1' src="/parallax/mountain-1.svg" />
                <img ref={sun} className='sun' src="/parallax/sun.svg" />
                <img ref={cloudsBottom} className='clouds-bottom' src="/parallax/cloud-bottom.svg" />
                <img ref={cloudsLeft} className='clouds-left' src="/parallax/clouds-left.svg" />
                <img ref={cloudsRight} className='clouds-right' src="/parallax/clouds-right.svg" />
                <img ref={stars} className='stars' src="/parallax/stars.svg" />
                <div ref={copy} className="copy">
                    <h1>Journey</h1>
                    <span ref={btn}>Discover more</span>
                </div>
            </div>
        </div>
    )
}

export default Parallax