import { Router  } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";
import Header from "./../Header/Header";
import Paragraph from "../Paragraph/Paragraph";

function NavLink({ href, exact, children, activeColor = "#b52811", ...props }) {
const pathname = Router.pathname;

  const isActive = exact ? pathname === href :  href === undefined;
  if (isActive) {
    props.className += " active";
  }
  return (
      // eslint-disable-next-line @next/next/link-passhref
      <Link href={href}>
        <Paragraph
          style={{
            marginBottom: 0,
          }}
          color={isActive ? activeColor : "#272a3d"}
          fontWeight="medium"
        >
          {children}
        </Paragraph>
      </Link>
  );
}

export default NavLink;
