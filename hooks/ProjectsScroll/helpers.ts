//Absolute vertical calculation of an element relative to the top of the page and not the viewport
export const getAbsTop = (el: HTMLElement): number => {
  let y = 0;
  let node: HTMLElement | null = el;
  while (node) {
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return y;
};

export const setInnerAsNormalBlock = (inner: HTMLElement): void => {
  inner.style.position = 'relative';
  inner.style.top = '0px';
  inner.style.left = '0px';
  inner.style.width = '100%';
  inner.style.transform = 'translate3d(0px, 0, 0)';
};

export const setInnerStaticFullWidth = (inner: HTMLElement): void => {
  inner.style.position = 'static';
  inner.style.top = '0px';
  inner.style.left = '0px';
  inner.style.width = '100%';
  inner.style.transform = 'none';
};

export const setInnerFixedForScroll = (
  inner: HTMLElement,
  headerOffset: number,
  sectionLeft: number,
  sectionWidth: number,
): void => {
  inner.style.position = 'fixed';
  inner.style.top = `${headerOffset}px`;
  inner.style.left = `${sectionLeft}px`;
  inner.style.width = `${sectionWidth}px`;
};

export const setInnerAtEndOfSection = (
  inner: HTMLElement,
  releaseTop: number,
  maxTranslateX: number,
): void => {
  inner.style.position = 'absolute';
  inner.style.top = `${releaseTop}px`;
  inner.style.left = '0px';
  inner.style.width = '100%';
  inner.style.transform = `translate3d(${maxTranslateX}px, 0, 0)`;
};