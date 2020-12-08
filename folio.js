let rnd = gsap.utils.random(0, 50, 5);




let timeline = gsap.timeline({
    // paused: true,
    scrollTrigger: {
      trigger: folio,
      pin: "#pinned",
      scrub: true,
      start: "top 150px",
      end: "+=120%",
      
      onUpdate: ({progress}) => timeline.progress() < progress ? timeline.progress(progress) : null
    },
 
})



// Анимация картинок
.from( folio, {
  y:rnd,
  scale: 0,
  opacity: 0,
  duration: 10,
  stagger: {
      each: 1,
      from: "random",
    },
  ease: "elastic.out(1, 1)"
})
