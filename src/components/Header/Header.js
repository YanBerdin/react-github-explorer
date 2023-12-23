import "./Header.scss";
import { Image } from "semantic-ui-react";

import logoGithub from "src/assets/images/logo-github.png";
import { Segment } from "semantic-ui-react";

function Header() {
  return (
    <Segment>
      <div className="header-container">
      <Image className="header-image" src={logoGithub} alt="Logo Github" />
      </div>
    </Segment>
  );
}

export default Header;
