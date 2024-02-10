import React from "react";

import Header from "components/common/Header";
import Navbar from "./Navbar";
import styled from "styled-components";
import MainSection from "./MainSection";
import ListSection from "./ListSection";

export default function HomePage() {
  return (
    <MainPage>
      <Header />
      <HomeContents>
        <Navbar />
        <SectionBoxs>
          <MainSection />
          <ListSectionBoxs>
            <ListSection text="면접후기" />
            <ListSection text="취업정보" />
          </ListSectionBoxs>
        </SectionBoxs>
      </HomeContents>
    </MainPage>
  );
}

const MainPage = styled.div`
  white-space: nowrap;
`;

const HomeContents = styled.aside`
  display: flex;
  height: 87.1vh;
`;

const SectionBoxs = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 87.1vh;
  width: 100%;
`;

const ListSectionBoxs = styled.aside`
  display: flex;
  flex-direction: low;
  justify-content: space-around;
  height: 87.1vh;
  width: 100%;
`;
