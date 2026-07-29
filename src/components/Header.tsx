import Link from "next/link";
import { CATEGORIES } from "@/config/categories";
import SearchBar from "@/components/SearchBar";
import MobileNavigation from "@/components/MobileNavigation";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  ...CATEGORIES.map((category) => ({
    href: `/category/${category.slug}`,
    label: category.label,
  })),
];

export default function Header() {
  return (
    <header className="relative bg-river">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-4 py-6 text-center sm:px-6 lg:px-8">
        <Link href="/">
          <span className="block font-headline text-3xl font-black tracking-tight text-white sm:text-4xl">
            Missouri Morning Post
          </span>
        </Link>
        <span className="block text-xs uppercase tracking-[0.25em] text-mist">
          Missouri News, Leadership, Business, Health, and Community
        </span>
      </div>

      <div className="border-y border-black/10 bg-barn">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold uppercase tracking-wide text-white hover:text-limestone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden max-w-xs flex-1 md:block">
            <SearchBar />
          </div>

          <MobileNavigation navItems={NAV_ITEMS} />
        </div>
      </div>
    </header>
  );
}
