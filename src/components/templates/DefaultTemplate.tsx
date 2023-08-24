type Props = {
  children: React.ReactNode;
};

const DefaultTemplate = (props: Props) => {
  return <main>{props.children}</main>;
};

export default DefaultTemplate;
