import Link from "next/link";

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}: {
  currentPage: number;
  totalPages: number;
  basePath: string;
}) {
  if (totalPages <= 1) return null;

  const pageHref = (page: number) => (page <= 1 ? basePath : `${basePath}?page=${page}`);

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav aria-label="Pagination" className="mt-10 flex items-center justify-center gap-2">
      {currentPage > 1 && (
        <Link
          href={pageHref(currentPage - 1)}
          className="border border-mist px-3 py-2 text-sm font-semibold text-river hover:border-steel hover:text-steel"
        >
          Previous
        </Link>
      )}

      <ul className="flex items-center gap-2">
        {pages.map((page) => (
          <li key={page}>
            <Link
              href={pageHref(page)}
              aria-current={page === currentPage ? "page" : undefined}
              className={`flex h-9 w-9 items-center justify-center border text-sm font-semibold ${
                page === currentPage
                  ? "border-river bg-river text-white"
                  : "border-mist text-river hover:border-steel hover:text-steel"
              }`}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>

      {currentPage < totalPages && (
        <Link
          href={pageHref(currentPage + 1)}
          className="border border-mist px-3 py-2 text-sm font-semibold text-river hover:border-steel hover:text-steel"
        >
          Next
        </Link>
      )}
    </nav>
  );
}
