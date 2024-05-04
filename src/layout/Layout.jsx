import PropTypes from "prop-types";

export function Layout({ children, ...props }) {
  return <main {...props} className="px-5 max-w-[1440px] mx-auto">{children}</main>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
