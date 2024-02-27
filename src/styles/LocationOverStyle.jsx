import styled from 'styled-components';

export const ArticleWrapper = styled.article`
  position: absolute;
  left: 0;
  bottom: -40px;
  width: 288px;
  height: 132px;
  margin-left: -10px;
  text-align: left;
  overflow: hidden;
  font-size: 12px;
  font-family: 'Malgun Gothic', dotum, '돋움', sans-serif;
  line-height: 1.5;
`;

export const CafeInfo = styled.header`
  width: 286px;
  height: 120px;
  border-radius: 5px;
  border-bottom: 2px solid #ccc;
  border-right: 1px solid #ccc;
  overflow: hidden;
  background: #fff;
`;

export const CafeTitle = styled.div`
  padding: 5px 0 0 10px;
  height: 30px;
  background: #eee;
  border-bottom: 1px solid #ddd;
  font-size: 18px;
  font-weight: bold;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #888;
  width: 17px;
  height: 17px;
  background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png');
  background-position: center;

  & :hover {
    cursor: pointer;
  }
`;

export const BodyWrapper = styled.body`
  position: relative;
  overflow: hidden;
`;

export const CafeAddressInfo = styled.div`
  position: relative;
  margin: 13px 0 0 90px;
  height: 75px;
`;

export const Ellipsis = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Jibun = styled.div`
  ${Ellipsis}
  font-size: 11px;
  color: #888;
  margin-top: -2px;
`;

export const ImgWrapper = styled.div`
  position: absolute;
  top: 6px;
  left: 5px;
  width: 73px;
  height: 71px;
  border: 1px solid #ddd;
  color: #888;
  overflow: hidden;
`;

export const LinkWrapper = styled.div`
  color: #5085bb;
  cursor: pointer;
`;
