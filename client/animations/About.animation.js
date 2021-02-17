import gsap, { TimelineMax } from 'gsap';

export const fadeInAbout = (target) => {
  gsap.from(target, {
    duration: 0.3,
    delay: 0.70,
    opacity: 0,
    y: -10
  });
};

export const timeLineStack = (bio, description, stack, langList, frameList, langTitle, frameTitle) => {
  const tl = new TimelineMax({ paused: false });
  tl
  .from(bio, {
    opacity: 0,
    y: -10,
  }, 1)
  .from(description, {
    opacity: 0,
    x: -50
  }, 1.2)
  .from(stack, {
    opacity: 0,
    y: -10
  }, 1)
  .from(langTitle, {
    opacity: 0,
  }, 1.2)
  .from(langTitle, {
    backgroundSize: "0% 0%",
    boxShadow: "0px 0px 0px 0px black"
  }, 1.3)
  .from(frameTitle, {
    opacity: 0,
  }, 1.2)
  .from(frameTitle, {
    backgroundSize: "0% 0%",
    boxShadow: "0px 0px 0px 0px black"
  }, 1.3)
  .from(langList, {
    opacity: 0,
    x: -50
  }, 1.4)
  .from(frameList, {
    opacity: 0,
    x: 50
  }, 1.4)

}