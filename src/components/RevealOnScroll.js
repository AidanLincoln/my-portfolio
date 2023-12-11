import React, { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({children}) {
    const [isVisible, setVisible] = useState(false);
    const ref = useRef(null);
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    }
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {     
            if (entries[0].isIntersecting) { // only one element to observe per RevealOnScroll component
                console.log("intersecting")
                setVisible(true);
                observer.unobserve(ref.current);
            }         
        }, options);

        observer.observe(ref.current);

        return () => observer.disconnect();
      }, []);

      return (
        <section ref={ ref } className={ isVisible ? ' revealElement' : '' }>
            { children }
        </section>
      );
}