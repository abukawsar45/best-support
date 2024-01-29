import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={ to }
        className={ ({ isActive }) => (isActive ? 'text-slate-950 font-bold' : '') }
      >
        { children }
      </NavLink>
    </div>
  );
};

export default ActiveLink;