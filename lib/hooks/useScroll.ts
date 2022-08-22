/**
 * Author : Ryan
 * Date : 2022-03-17
 * Desc : useScrollTo
 */

type TScrollBehavior = 'smooth' | 'auto';

export const useScrollTo = (
  id: 'default' | string,
  left: number = 0,
  top: number = 0,
  behavior: TScrollBehavior = 'smooth',
) => {
  if (id === 'default') {
    const desktopScroll = document.getElementById('scroll');
    if (desktopScroll) {
      desktopScroll.scrollTo({ left: left, top: top, behavior: behavior });
    }
    window.scrollTo({ left: left, top: top, behavior: behavior });
  } else {
    const customScroll = document.getElementById(id);
    if (customScroll) {
      customScroll.scrollTo({ left: left, top: top, behavior: behavior });
    }
  }
};
