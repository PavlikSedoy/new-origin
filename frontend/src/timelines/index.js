import { TimelineMax } from "gsap";
// import GSAP from 'gsap-react-plugin'

const getDefaultTimeline = (node, delay) => {
  const timeline = new TimelineMax({ paused: true })
  // const content = node.querySelector('.transition-container')

  timeline
    .from(node, 1, { display: 'none', autoAlpha: 0, delay })
    // .from(node, 0.3, { display: 'none', autoAlpha: 0, delay, ease: Power4.easeIn })
    // .from(content, 0.15, { autoAlpha: 0, y: 25, ease: Power4.easeInOut })

  return timeline
}

const getHomeTimeline = (node, delay) => {
  const timeline = new TimelineMax({ paused: true })
  // const content = node.querySelector('.transition-container')

  timeline
    .from(node, 1, { display: 'none', autoAlpha: 0, delay })
    // .from(node, 0.3, { display: 'none', x: 300, autoAlpha: 0, delay, ease: Power4.easeIn })
    // .from(content, 0.5, { autoAlpha: 0, y: 125, ease: Power4.easeInOut })

  return timeline
}

export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5
  let timeline

  if (pathname === '/')
    timeline = getHomeTimeline(node, delay)
  else
    timeline = getDefaultTimeline(node, delay)

  // window
    // .loadPromise
    // .then(() => requestAnimationFrame(() => timeline.play()))
    // .then(timeline.play())
    timeline.play();
}

export const exit = (node) => {
  const timeline = new TimelineMax({ paused: true });

  timeline.to(node, 1, { display: 'none', position: 'absolute', y: 300 });
  // timeline.to(node, 0.15, { autoAlpha: 0, ease: Power4.easeOut });
  timeline.play();
}