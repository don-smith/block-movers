import * as React from "react";
import { Environment } from "./Environment";

import { CellContent } from "../lib/CellContent";

const cells = [
  [new CellContent(1), new CellContent(2), new CellContent(3)],
  [new CellContent(4), new CellContent(5), new CellContent(6)],
  [new CellContent(7), new CellContent(8), new CellContent(9)]
];

export function App(): React.ReactElement {
  return <Environment cells={cells} />;
}
