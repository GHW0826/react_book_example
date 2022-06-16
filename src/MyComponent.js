const MyComponent = (props) => {
  const { name, children } = props;
  return (
    <div>
      name : {name}
      children : {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: 'defaultName',
};

export default MyComponent;
