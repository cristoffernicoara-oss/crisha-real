"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useMemo } from "react";

import { getBlogArticleBody } from "@/lib/i18n/content/blog-article-bodies";
import { getBlogPostBySlug } from "@/lib/i18n/content/blog-posts-i18n";
import { useLocale } from "@/lib/i18n/locale-context";
import { ROUTES } from "@/lib/routes";

const prose = "text-base leading-relaxed text-[rgba(255,255,255,0.55)]";

export default function BlogArticle({ slug }: { slug: string }) {
  const { locale, t } = useLocale();
  const post = useMemo(() => getBlogPostBySlug(slug, locale), [slug, locale]);
  const body = useMemo(() => getBlogArticleBody(slug, locale), [slug, locale]);

  if (!post) notFound();

  return (
    <main className="min-h-screen px-[5%] pb-20 pt-page-nav-loose md:px-[6%]">
      <article className="mx-auto max-w-3xl">
        <Link href={ROUTES.blogg} className="text-sm text-[#2563EB] no-underline hover:underline">
          {t("blogPost.back")}
        </Link>
        <p className="mt-6 text-xs text-[rgba(255,255,255,0.35)]">{post.date}</p>
        <h1 className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl">{post.title}</h1>
        <p className={`mt-6 text-lg ${prose}`}>{post.excerpt}</p>

        {body ? (
          <div className="mt-10 space-y-12">
            {body.sections.map((section, si) => (
              <section key={`${section.heading}-${si}`} className="space-y-4">
                <h2 className="font-heading text-xl font-bold text-white md:text-2xl">{section.heading}</h2>
                {section.paragraphs[0] ? <p className={prose}>{section.paragraphs[0]}</p> : null}
                {section.bullets && section.bullets.length > 0 ? (
                  <ul className="list-disc space-y-2 pl-5 text-[rgba(255,255,255,0.55)]">
                    {section.bullets.map((item) => (
                      <li key={item} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.paragraphs.slice(1).map((p, i) => (
                  <p key={`${section.heading}-p-${i + 1}`} className={prose}>
                    {p}
                  </p>
                ))}
              </section>
            ))}

            <section className="space-y-4 border-t border-[rgba(255,255,255,0.08)] pt-10">
              <h2 className="font-heading text-xl font-bold text-white md:text-2xl">{body.summaryHeading}</h2>
              <p className={prose}>{body.summary}</p>
              {body.summaryBullets && body.summaryBullets.length > 0 ? (
                <ul className="list-disc space-y-2 pl-5 text-[rgba(255,255,255,0.55)]">
                  {body.summaryBullets.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              {body.closingParagraphs?.map((p, i) => (
                <p key={`closing-${i}`} className={prose}>
                  {p}
                </p>
              ))}
            </section>
          </div>
        ) : null}

        <p className="mt-10 text-sm text-[rgba(255,255,255,0.4)]">
          {!body ? (
            <>
              {t("blogPost.comingSoon")}
              <Link href={ROUTES.kontakt} className="text-[#2563EB] hover:underline">
                {t("blogPost.ctaAudit")}
              </Link>
              .
            </>
          ) : body.closingParagraphs?.length ? (
            <>
              <Link href={ROUTES.kontakt} className="text-[#2563EB] hover:underline">
                {t("blogPost.ctaAudit")}
              </Link>
            </>
          ) : (
            <>
              {t("blogPost.wantHelp")}
              <Link href={ROUTES.kontakt} className="text-[#2563EB] hover:underline">
                {t("blogPost.ctaAudit")}
              </Link>
              .
            </>
          )}
        </p>
      </article>
    </main>
  );
}
