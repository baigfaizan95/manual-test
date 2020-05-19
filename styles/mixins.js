export const breakpoint = (size, type, properties) => {
  if (type === "down") {
    return { [`@media only screen and (max-width: ${size}px)`]: properties };
  }
  return { [`@media only screen and (min-width: ${size}px)`]: properties };
};
