import React, {useContext} from "react";
import "./Button.scss";
import StyleContext from "../../contexts/StyleContext";

export default function Button({text, className, href, newTab}) {
    const {isDark} = useContext(StyleContext);

  return (
    <div className={className}>
      <a className={isDark ? "dark main-button": "light main-button"} href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}
