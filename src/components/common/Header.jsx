import * as S from '../../styles/common';
import LogoImage from '../assets/images/logo.png';

const Header = () => {
  return (
    <S.Logo>
      <S.LogoLink to="/">
        <img src={LogoImage} alt="COFFEE HOLIC" />
        COFFEE HOLIC
      </S.LogoLink>
    </S.Logo>
  );
};

export default Header;
