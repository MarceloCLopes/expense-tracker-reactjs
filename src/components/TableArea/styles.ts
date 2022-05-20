import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 1.3rem;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 0.6rem;
  margin-top: 1.3rem;
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  padding: 0.6rem 0;
  text-align: left;
`;
