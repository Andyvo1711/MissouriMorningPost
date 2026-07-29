export default function SearchBar({
  className = "",
  defaultValue = "",
}: {
  className?: string;
  defaultValue?: string;
}) {
  return (
    <form action="/search" method="GET" role="search" className={`flex w-full ${className}`}>
      <label htmlFor="site-search" className="sr-only">
        Search Missouri stories
      </label>
      <input
        id="site-search"
        type="search"
        name="q"
        defaultValue={defaultValue}
        placeholder="Search Missouri stories..."
        className="w-full border border-mist bg-white px-4 py-2 text-sm text-charcoal placeholder:text-muted focus:border-steel"
      />
      <button
        type="submit"
        className="shrink-0 border border-l-0 border-mist bg-river px-4 py-2 text-sm font-semibold text-white hover:bg-steel"
      >
        Search
      </button>
    </form>
  );
}
