import GridHOC from './hocs/Grid';
import CellHOC from './hocs/Cell';

export default function GridCell(options = {}) {
  return {
    options,
    Grid: GridHOC(options),
    Cell: CellHOC(options),
  }
}