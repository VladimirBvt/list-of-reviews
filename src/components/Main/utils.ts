
export const ROWS_PER_PAGE = 10

export const getTotalPageCount = (rowCount: number) => {
  return Math.ceil(rowCount / ROWS_PER_PAGE)
}
