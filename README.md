### Coffee Holic

## 💻 프로젝트 소개

카페에 진심인 사람들이 공유하는 카페 검색 웹사이트입니다.
카카오맵 API를 이용하여 지도 위에 마커 표시로 카페 검색결과만 공유합니다.

### 개발 환경 및 도구

- Vite (React)
- (배포)

## ⚙️ 개발 기간

2024.02.23(금) ~ 2024.02.28(수) | 실제 개발 기간 : 4일
2024.08.03(토) | 리펙토링 : 1일

## ⚒️ 주요 기능

<img width="800" alt="image" src="https://github.com/nbc-outsourcing-project/Outsourcing-Project/assets/154496294/41fd15fd-005b-40cf-9ab7-be6b91ab38f8">

- 카카오맵 API를 이용하여 사용자의 현재 위치를 불러와서 지도로 보여줍니다.
- 검색창에 키워드 입력 시, 카카오맵 API의 카테고리 코드 중 "카페(CE7)" 코드를 이용하여 다른 장소가 아닌 오직 "카페"만 검색결과로 보여줍니다.
- 검색결과로 나타나는 카페들은 사용자의 현재 위치를 기반으로 입력된 키워드를 포함한 카페 리스트를 보여줍니다.
- 지도 드래그해서 위치 이동 시, 이동한 위치 기반으로 검색 결과를 보여줍니다.
- 마커 클릭 시, 상세정보 (이름, 주소, 전화번호, 홈페이지)를 보여줍니다. 홈페이지를 클릭하면 카카오맵의 상세페이지로 이동합니다.

## 🚨 문제 및 해결

문제 1. 검색 버튼 클릭 시 입력된 키워드에 따른 검색 결과가 지도에 반영되지 않는 문제가 있었습니다.
지도에 반영되는 데이터는 검색결과가 아닌, 사용자의 위치에 기반한 카페만 보여주었습니다.
![image](https://github.com/nbc-outsourcing-project/Outsourcing-Project/assets/154496294/2e6f939b-4e99-47ab-b23c-7368e8f51363)

해결: 검색 키워드에 따른 결과를 전역상태로 관리할 수 있게 searchResults 추가하여 지도에서도 사용할 수 있게 했습니다.
그 점을 고려하여 location을 추가하고 사용자의 위치도 전역상태로 관리하여 이 위치를 기반으로 검색 키워드에 따른 검색 결과를 반영할 수 있게 해결했습니다.

문제 2. 마커를 클릭하면 이름, 주소, 전화번호를 담은 상세정보가 나와야하는데, 에러가 뜨면서 상세정보가 안 뜨는 오류가 있었습니다.
![image](https://github.com/nbc-outsourcing-project/Outsourcing-Project/assets/154496294/79661a0e-61e3-4da0-8eb1-86d7a9121449)

해결 : if(!Array.isArray(data)) 조건문을 추가하여 데이터가 배열이 아닌 경우, 함수가 종료되게 하여 그 다음 코드인 distpatch부터 실행될 수 있게 하였습니다.
또한 dispatch에 담긴 데이터가 다른 리듀서의 데이터여서 위에서 만들어놨던 리듀서의 결과값을 담을 수 있게 수정하였습니다.

문제 3. 카페를 검색하면 실시간으로 검색되어 리소스의 낭비가 발생하였습니다.

해결: setState로 상태를 저장한 후 클릭되었을 때 submit 될 수 있도록 수정하였습니다.
