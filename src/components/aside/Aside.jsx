import { Link, Outlet } from 'react-router-dom';
import * as S from '../../styles/aside';
import Search from "../Search"

const Aside = () => {
  return (
    <>
      <S.Aside>
        <Link to="/">LOGO</Link>
        <Search/>
        <div>아무거나생각한대로</div>

      </S.Aside>
      <Outlet />
    </>
  );
};

export default Aside;
