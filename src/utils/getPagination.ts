export const getPagination = (searchParams: URLSearchParams) => {
  return {
    pageNumber: Math.max(1, Number(searchParams.get("page")) || 1),
    // PageSize: Math.max(1, Number(searchParams.get("size")) || 10),
  }
}