import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <>
        <nav class="navbar navbar-expand-xl navbar-light main-color">
  <div class="nav-main" >Katie's Portfolio</div>
                <button style={{backgroundColor: 'white'} }class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div style={{ justifyContent: 'flex-end', alignItems: 'center'}}class="navbar-nav container">
      <Link to="/"class="nav-item nav-items">Home </Link>
      <Link to="/projects"class="nav-item nav-items">Projects</Link>
      <Link to="/about"class="nav-item nav-items" >About</Link>
    </div>
  </div>
            </nav>
            </>
    );
}

export default Nav;