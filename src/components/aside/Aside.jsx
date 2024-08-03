import { Outlet } from 'react-router-dom';
import * as S from '../../styles/aside';
import Search from '../Search';
import Header from '../../components/common/Header';

const Aside = () => {
  return (
    <>
      <S.Aside>
        <Header />
        <Search />
      </S.Aside>
      <Outlet />
    </>
  );
};

export default Aside;
