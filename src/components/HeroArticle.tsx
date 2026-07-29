import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/types/article";
import CategoryBadge from "@/components/CategoryBadge";

export default function HeroArticle({ article }: { article: Article }) {
  return (
    <section className="border-b border-mist bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-14">
        <div className="flex flex-col justify-center gap-4 lg:order-2">
          <CategoryBadge category={article.category} />
          <h1 className="border-l-4 border-prairie pl-4 text-3xl font-bold leading-tight text-river sm:text-4xl">
            <Link href={`/article/${article.slug}`} className="hover:text-steel">
              {article.title}
            </Link>
          </h1>
          <p className="pl-4 text-base leading-relaxed text-muted">{article.excerpt}</p>
          <Link
            href={`/article/${article.slug}`}
            className="ml-4 inline-block w-fit bg-barn px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-river"
          >
            Read Full Story
          </Link>
        </div>
        <Link
          href={`/article/${article.slug}`}
          className="relative block aspect-video w-full overflow-hidden border-2 border-steel bg-mist lg:order-1"
        >
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Link>
      </div>
    </section>
  );
}
