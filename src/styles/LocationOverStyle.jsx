import styled from 'styled-components';

export const ArticleWrapper = styled.li`
  position: absolute;
  left: 0;
  bottom: -22px;
  width: 300px;
  height: 132px;
  margin-left: -70px;
  text-align: left;
  font-size: 12px;
  font-family: 'Malgun Gothic', dotum, '돋움', sans-serif;
  line-height: 1.5;
`;

export const CafeInfo = styled.div`
  width: 300px;
  height: 135px;
  border-radius: 5px;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  background: #fff;
`;

export const CafeTitle = styled.div`
  padding: 5px 0 30px 9px;
  height: 30px;
  background: #ffe4a0;
  border-bottom: 1px solid #ddd;
  font-size: 18px;
  font-weight: bold;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 10px;
  color: #888;
  width: 12px;
  height: 12px;
  background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png');
  background-position: center;
  border: transparent;

  & :hover {
    cursor: pointer;
  }
`;

export const BodyWrapper = styled.h2`
  position: relative;
  overflow: hidden;
`;

export const CafeAddressInfo = styled.div`
  position: relative;
  padding: 8px 10px;
`;

export const Ellipsis = styled.div`
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-bottom: 8px;
`;

export const Jibun = styled.p`
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
  & > * {
    line-height: 16px;
  }
  & > a {
    color: #333;
    display: inline-block;
    margin-top: 5px;
  }
`;
