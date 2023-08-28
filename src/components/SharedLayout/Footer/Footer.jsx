const Footer = ({ children }) => {
  return <div style={styles}>{children}</div>;
};
export default Footer
const styles = {
  width: '100%',
  padding: "80px 125px 24px 125px ",
  borderTop: "1px solid rgba(243, 243, 243, 0.20)",
  boxSizing: "border-box",
  backgroundColor: "#0a0a11",
  color: "#f3f3f3",
  overflow: "hidden",

};
