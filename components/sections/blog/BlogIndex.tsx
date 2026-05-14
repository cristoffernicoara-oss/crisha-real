"use client";

import Link from "next/link";

import { getBlogPosts } from "@/lib/i18n/content/blog-posts-i18n";
import { useLocale } from "@/lib/i18n/locale-context";
import { ROUTES } from "@/lib/routes";

export default function BlogIndex() {
  const { locale, t } = useLocale();
  const posts = getBlogPosts(locale);

  return (
    <main className="min-h-screen px-[5%] pb-20 pt-page-nav-loose md:px-[6%]">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-[rgba(255,255,255,0.4)]">{t("blogPage.label")}</p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-white">{t("blogPage.h1")}</h1>
        <p className="mt-4 text-[rgba(255,255,255,0.55)]">{t("blogPage.lead")}</p>
        <ul className="mt-10 space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`${ROUTES.blogg}/${post.slug}`}
                className="block rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0F1629] p-5 no-underline transition-colors hover:border-[rgba(37,99,235,0.35)]"
              >
                <span className="text-xs text-[rgba(255,255,255,0.35)]">{post.date}</span>
                <h2 className="mt-1 font-heading text-lg font-semibold text-white">{post.title}</h2>
                <p className="mt-2 text-sm text-[rgba(255,255,255,0.45)]">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
