import * as React from "react";
import styled from "styled-components";

import { CellContent } from "../lib/CellContent";

const Cells = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
`;

const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid silver;
  color: silver;
`;

export interface EnvironmentProps {
  cells: CellContent[][];
}

export function Environment(props: EnvironmentProps): React.ReactElement {
  return (
    <Cells>
      {props.cells.flatMap(row => row.map(cell => <Cell>{cell.content}</Cell>))}
    </Cells>
  );
}
