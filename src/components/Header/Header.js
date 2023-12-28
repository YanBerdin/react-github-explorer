import "./Header.scss";
import { Image } from "semantic-ui-react";

import logoGithub from "src/assets/images/logo-github.png";
import { Segment } from "semantic-ui-react";

const segmentStyle = {
  margin: "0",
};

function Header() {
  return (
    <Segment style={segmentStyle}>
      <div className="header-container">
      <Image className="header-image" src={logoGithub} alt="Logo Github" />
      </div>
    </Segment>
  );
}

export default Header;
