import { useDispatch, useSelector } from 'react-redux';
import * as S from '../styles/LocationOverStyle';
import { connection } from '../shared/store/modules/listConnection';
import { info } from '../shared/store/modules/info';

function LocationOver() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.connection);
  const { place_name, place_url, address_name, road_address_name, phone } = selector;

  // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
  const closeOverlay = () => {
    dispatch(connection(''));
    dispatch(info(''));
  };
  return (
    <>
      <S.ArticleWrapper>
        <S.CafeInfo>
          <S.CafeTitle>
            {place_name}
            <S.CloseButton onClick={closeOverlay} />
          </S.CafeTitle>
          <S.BodyWrapper>
            <S.CafeAddressInfo>
              <S.Ellipsis>{address_name}</S.Ellipsis>
              <S.LinkWrapper>
                <S.Jibun>{road_address_name}</S.Jibun>
                <p>{phone}</p>
                <a href={place_url} target="_blank">
                  홈페이지
                </a>
              </S.LinkWrapper>
            </S.CafeAddressInfo>
          </S.BodyWrapper>
        </S.CafeInfo>
      </S.ArticleWrapper>
    </>
  );
}

export default LocationOver;
