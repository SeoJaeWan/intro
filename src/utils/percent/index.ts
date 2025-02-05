const Percent = (max: number, min: number, current: number) => {
  const range = max - min;
  const inter = current - min;

  return ((range - inter) / range) * 100;
};

export default Percent;
