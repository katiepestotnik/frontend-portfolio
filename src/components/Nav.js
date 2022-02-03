import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/"class="navbar-brand" >Katie's Portfolio</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link to="/"class="nav-item nav-link active">Home <span class="sr-only">(current)</span></Link>
      <Link to="/projects"class="nav-item nav-link">Projects</Link>
      <Link to="/about"class="nav-item nav-link" >About Katie</Link>
    </div>
  </div>
</nav>
    );
}

export default Nav;