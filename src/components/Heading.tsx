type HeadingPops = {
  children: string;
};

const Heading = (props: HeadingPops) => {
  return <div>{props.children}</div>;
};

export default Heading;
