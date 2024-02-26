import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

export default function ListSection({ text }) {
  const navigate = useNavigate();

  return (
    <ListSectionBox>
      <p>{text}</p>
      <p
        onClick={() => {
          navigate("/detail");
        }}
      >
        더보기
      </p>
      <section>면접후기 리스트 불러오기</section>
    </ListSectionBox>
  );
}

const ListSectionBox = styled.section`
  border: 1px solid grey;
  height: 50vh;
  width: 40%;
  border-radius: 2rem;
`;
