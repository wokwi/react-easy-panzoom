export const preventDefault = (e: Event) => {
  e.preventDefault();
};

export const captureTextSelection = () => {
  window.addEventListener('selectstart', preventDefault);
};

export const releaseTextSelection = () => {
  window.removeEventListener('selectstart', preventDefault);
};
