import Link from "next/link";
import React from "react";
import { pagination } from "../../helpers/pagination";

const Pagination = ({ page, setPage }: any) => {
  const pagin = pagination(page.current, page.total, page.item);

  return (
    <div className="row tm-row tm-mt-100 tm-mb-75">
      <div className="tm-prev-next-wrapper">
        {pagin &&
          pagin.pagination &&
          pagin.pagination.arrows &&
          pagin.pagination.arrows.length > 0 &&
          pagin.pagination.arrows.map((link: any, i) => (
            <Link
              href={link.url}
              key={i}
              onClick={() =>
                setPage({
                  ...page,
                  current: link.page,
                })
              }
              className="mb-2 tm-btn tm-btn-primary tm-prev-next tm-mr-20">
              {link.label}
            </Link>
          ))}
      </div>
      <div className="tm-paging-wrapper">
        <span className="d-inline-block mr-3">Page</span>
        <nav className="tm-paging-nav d-inline-block">
          <ul>
            {pagin &&
              pagin.pagination &&
              pagin.pagination.links &&
              pagin.pagination.links.length > 0 &&
              pagin.pagination.links.map((link: any, i) => (
                <li
                  className={`tm-paging-item ${link.active ? "active" : ""}`}
                  key={i}>
                  <Link
                    href={link.url}
                    className="mb-2 tm-btn tm-paging-link border-0"
                    onClick={() =>
                      setPage({
                        ...page,
                        current: link.page,
                      })
                    }>
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
