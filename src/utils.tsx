type padTowardsTypes = {
  direction?: 'horizontal' | 'vertical' | 'all';
  size?: number;
};

const padTowards = ({
  direction = 'horizontal',
  size = 16
}: padTowardsTypes) => {
  const horizontal = {
    paddingLeft: size,
    paddingRight: size
  };

  const vertical = {
    paddingTop: size,
    paddingBottom: size
  };

  const styles = {
    horizontal,
    vertical,
    all: {
      ...horizontal,
      ...vertical
    }
  };
  return styles[direction];
};

export { padTowards };
