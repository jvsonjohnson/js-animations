const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.55 }); // stagger is the 1 by 1 times
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 1 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1"); //"-=1 means start 1 second faster that animation before kae it same time as delay"
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 0.5 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.5");
