import * as S from '../../styles/common';
import Logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <S.LogoLink to="/">
      <S.Logo>
        <S.LogoImage src={Logo} />
        <span>COFFEE HOLIC</span>
      </S.Logo>
    </S.LogoLink>
  );
};

export default Header;
