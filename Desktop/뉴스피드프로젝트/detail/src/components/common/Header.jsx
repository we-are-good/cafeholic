import Button from "components/homePage/Button";
import { FaMagnifyingGlass } from "react-icons/fa6";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderStyle>
      <LogoImg src="/logo/logo.png" alt="Logo" />
      <SearchBox>
        <SearchInput name="searchInfo" placeholder="검색어를 입력해 주세요." />
        <SearchButton>
          <FaMagnifyingGlass />
        </SearchButton>
      </SearchBox>
      <div>
        <Button text="로그인" />
        <Button text="회원가입" color="red" />
      </div>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
  height: 10rem;
  padding: 2rem;
`;

const LogoImg = styled.img`
  width: 10rem;
`;

const SearchBox = styled.form`
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchInput = styled.input`
  width: 25rem;
  height: 2.5rem;
  flex-grow: 1;
  border-radius: 2rem;
  padding: 1rem;
`;

const SearchButton = styled.button`
  border: none;
  background-color: transparent;

  position: absolute;
  right: 0.5rem;
  cursor: pointer;
`;

// const ButtonBox = styled.div`
//   padding: 2rem;
// `;
