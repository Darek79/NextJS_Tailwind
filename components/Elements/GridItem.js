const Header = ({children, attributes, classes}) => (
  <div {...attributes} className={classes}>
    {children}
  </div>
);

export default Header;
