import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
  padding: 0.6rem 0;
`;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 0.3rem 0.6rem;
  border-radius: 0.3rem;
  color: #fff;
  background: ${(props) => props.color};
`;

export const Value = styled.div<{ color: string }>`
  color: ${(props) => props.color};
`;
