function debounce(func: Function, delayMS: number) {
  let timeoutId: NodeJS.Timeout;

  return function (...args: any) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => func(...args), delayMS);
  };
}

export default debounce;
