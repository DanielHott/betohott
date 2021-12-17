import fbpreto from "./fbpreto.png"
import instabranco from "./instabranco.png"
import youtube from "./youtube.png"

function Header() {
  return (
    <div>
      <header className="logo-header">
          <h1>Beto Hott</h1>
          <h4>Música para eventos</h4>
          <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UClvP7xcnZhfTU8P4JZt2w9w/featured" >
          <img className="social-media" src={youtube}alt="yt" width="38" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://web.facebook.com/alberto.hott.5" >
          <img className="social-media" src={fbpreto}alt="fb" width="25" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/holttalberto/" >
          <img className="social-media" src={instabranco}alt="insta" width="25" />
          </a>
      </header>
    </div>
  );
}

export default Header;