export const checkIsTouchscreenDevice = () => {
  // Naigator interface does not support 'msMaxTouchPoints'
  const castedNavigator = navigator as any;
  return "ontouchstart" in window || castedNavigator.maxTouchPoints > 0 || castedNavigator.msMaxTouchPoints > 0;
};
