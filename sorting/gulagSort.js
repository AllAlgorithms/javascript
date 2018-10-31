const gulagSort = ls => {
  if (!ls.length) return []

  const [x, y, ...xs] = ls

  return y == null ?
    [x] : x < y    ?
    [x, ...gulagSort([y, ...xs])] : gulagSort([y, ...xs])
}
