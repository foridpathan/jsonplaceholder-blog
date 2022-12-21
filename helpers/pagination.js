const getRange = (start, end) => {
  return Array(end - start + 1)
    .fill()
    .map((v, i) => i + start);
};

const generatePagination = (currentPage, pageCount) => {
  let delta;
  if (pageCount <= 5) {
    delta = 5;
  } else {
    delta = currentPage > 4 && currentPage < pageCount - 3 ? 2 : 4;
  }

  const range = {
    start: Math.round(currentPage - delta / 2),
    end: Math.round(currentPage + delta / 2),
  };

  if (range.start - 1 === 1 || range.end + 1 === pageCount) {
    range.start += 1;
    range.end += 1;
  }

  let pages =
    currentPage > delta
      ? getRange(
          Math.min(range.start, pageCount - delta),
          Math.min(range.end, pageCount)
        )
      : getRange(1, Math.min(pageCount, delta + 1));

  const withDots = (value, pair) =>
    pages.length + 1 !== pageCount ? pair : [value];

  if (pages[0] !== 1) {
    pages = withDots(1, [1, "..."]).concat(pages);
  }

  if (pages[pages.length - 1] < pageCount) {
    pages = pages.concat(withDots(pageCount, ["...", pageCount]));
  }

  return pages;
};

export const pagination = (current, total, itemPerPage) => {
  let arrTotal = Math.ceil(total / itemPerPage);
  let result = {
    pagination: {
      page: current,
      from:
        current * itemPerPage - itemPerPage > total
          ? total
          : current * itemPerPage - itemPerPage + 1,
      to: current * itemPerPage > total ? total : current * itemPerPage,
      items_per_page: itemPerPage,
      total: total,
      links: [],
      arrows: [],
    },
  };
  let links = [];
  let arrows = [];
  if (current > 1) {
    arrows.push({
      label: "Previous",
      page: current - 1,
      active: false,
      url: `/?page=${current - 1}`,
    });
  }
  let genPage = generatePagination(current, arrTotal);
  if (genPage.length > 0) {
    genPage.map((item) => {
      links.push({
        label: item.toString(),
        page: item === "..." ? null : item,
        active: item === current,
        url: item === "..." ? null : `/?page=${item}`,
      });
    });
  }

  if (current < arrTotal) {
    arrows.push({
      label: "Next",
      page: current + 1,
      active: false,
      url: `/?page=${current + 1}`,
    });
  }
  result = {
    ...result,
    pagination: { ...result.pagination, links: links, arrows: arrows },
  };
  return result;
};
