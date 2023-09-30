
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth-context";

const Header = ()=>{

const{auth}=useAuth()

return(
    <header className="header">
    <nav className="navbar">
      <section className="navbar-dashboard">
        <div className='header__logo'>
          <Link to="/">Logo</Link>
        </div>
        <ul className="nav__elements">
          {!auth && (
            <>
              <li>
                <Link to="auth/signin">
                  Sign in
                </Link>
              </li>
              <li>
                <Link to="auth/signup">
                  Sign up
                </Link>
              </li>
            </>
          )}
          {/* Logged-in users */}
          {auth && (
            <>
              <li>
                Welcome, {auth.user.username}
              </li>
              <li>
                <Link to="/catalog">
                  Catalog
                </Link>
              </li>
              <li>
                <Link to="/myRecipes">
                  My Recipes
                </Link>
              </li>
              <li>
                <Link to="/create">
                  Add New Recipe
                </Link>
              </li>
              <li>
                <Link to="/logout">
                  Logout
                </Link>
              </li>
            </>
          )}
        </ul>
      </section>
    </nav>
  </header>
)
}

export default Header;