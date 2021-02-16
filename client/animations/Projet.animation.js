import gsap from 'gsap';

export const handleProject = (messengerBackground, target, link, description) => {
  gsap.to(target, {
    duration: 0,
    background: `url(${messengerBackground}) center center`,
    filter: "blur(3px)"
  });
  gsap.to(target, {
    duration: 0.4,
    opacity: 1,
    ease: "power3.inOut"
  });
  gsap.from(target, {
    duration: 0.4,
    transformOrigin: "right top"
  });
  gsap.to(link, {
    duration: 0,
    opacity: 0
  });
  gsap.to(description, {
    duration: 0,
    delay: 0.5,
    opacity: 1
  });
};

export const handleProjectReturn = (target, link, description) => {
  gsap.to(target, {
    duration: 0.4,
    opacity: 0
  });
  gsap.to(link, {
    duration: 0,
    opacity: 1
  });
  gsap.to(description, {
    duration: 0,
    opacity: 0
  });
};