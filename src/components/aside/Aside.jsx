import { Link, Outlet } from 'react-router-dom';
import * as S from '../../styles/aside';

const Aside = () => {
  return (
    <>
      <S.Aside>
        <Link to="/">LOGO</Link>
        <div>검색기능</div>
        <div>아무거나생각한대로</div>
      </S.Aside>
      <Outlet />
    </>
  );
};

export default Aside;
