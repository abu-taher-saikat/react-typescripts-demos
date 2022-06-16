type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLoggedIn
        ? `hello ${props.name}, message count is ${messageCount}`
        : "Welcome Guest"}
    </div>
  );
};

export default Greet;
