import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Nav(props) {
    return (
        <>
        <nav className="navbar navbar-expand-xl navbar-light main-color">
  <div className="nav-main" >Katie's Portfolio</div>
          <button
            className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <img className="hamburger"src="https://ps.w.org/animated-fullscreen-menu/assets/icon-256x256.png?rev=2449604" alt="hamburger menu"/>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div style={{ justifyContent: 'flex-end', alignItems: 'center'}}className="navbar-nav container">
      <Link to="/"className="nav-item nav-items nav-link-katie">About </Link>
      <Link to="/projects"className="nav-item nav-items nav-link-katie">Projects</Link>
              <Link to="/skills" className="nav-item nav-items nav-link-katie" >Skills</Link>
              {/* <HashLink smooth to="/about/#contact"class="nav-item nav-items" >Contact Info</HashLink> */}
    </div>
  </div>
            </nav>
            </>
    );
}

export default Nav;