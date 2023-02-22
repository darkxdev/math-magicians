import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="header">
    <h1>Math Magicians</h1>
    <ul className="nav-menu">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/calculator">Calculator</Link></li>
      <li><Link to="/quote">Quote</Link></li>
    </ul>
  </div>

);

export default Navbar;
