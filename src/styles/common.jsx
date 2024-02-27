import styled from 'styled-components';
import { Link } from 'react-router-dom';

/*------------ kakao Map ----------*/
export const MapWrapper = styled.section`
  & * {
    border: none !important;
    border-radius: 10px;
  }
`;

export const MapMarkerStyle = styled.div`
  padding: 40px 40px 20px;
  background-color: #fff;
  color: #333;
  white-space: nowrap;
  border: 1px solid #ccc !important;
  & > h2 {
    font-weight: 700;
    margin-bottom: 10px;
    font-size: 20px;
  }
  & > p {
    font-size: 14px;
    color: #999;
  }
  & > div {
    margin-top: 20px;
    width: 100%;
  }

  & > div::after {
    content: '';
    display: block;
    clear: both;
  }

  & > div > button {
    padding: 5px 10px;
    float: right;
  }
  & > div > button:hover {
    color: #fff;
    background-color: #333;
  }
`;

/*------------ Header ----------*/
export const LogoLink = styled(Link)`
  text-decoration: none;
  color: black;
  width: 100%;
  display: block;
`;

export const LogoImage = styled.image`
  width: 16px;
  height: 16px;
`;
export const Logo = styled.h1`
  margin: 20px;

  text-align: left;
  text-decoration: none;
  font-size: 22px;
  margin-left: 25px;
  font-weight: 600;
`;

/*------------ SearchInput ----------*/
export const SearchDiv = styled.div`
  padding: 10px;
  margin: 10px;
`;

export const SearchInput = styled.input`
  border-radius: 10px;
  margin-right: 10px;
  padding: 10px;
  width: 75%;
  border: none;
  box-shadow: 2px 2px #bebebe;
`;

export const SearchButton = styled.button`
  border-radius: 10px;
  padding: 10px 0px;
  width: 20%;
  background-color: #deba9d;
  color: black;
  border: none;
  box-shadow: 2px 2px #bebebe;
`;

/*------------ List ----------*/

export const ListDiv = styled.div`
  padding: 10px;
  margin: 10px;
  height: 100%;
  overflow: scroll;
  padding-bottom: 150px;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: #efd7c3;
    border-radius: 10px;
  }
`;

export const ListUl = styled.ul``;

export const ListLi = styled.li`
  padding: 20px 10px;
  border-radius: 5px;
  box-shadow: 3px 4px #deba9d;
  margin-bottom: 16px;
  background-color: white;
`;

export const PlaceDiv = styled.div``;

export const PlaceName = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const Placecontents = styled.p`
  font-size: 15px;
  margin-bottom: 16px;
`;

export const PlaceNewAddress = styled.span`
  font-size: 15px;
  line-height: 1.7;
`;

export const PlaceOldAddress = styled.span`
  font-size: 13px;
  color: dimgray;
`;
