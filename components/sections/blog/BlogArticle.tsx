"use client";

import Link from "next/link";
import { notFound } from "next/navigation";

import { BlogRichParagraph, blogRichNodes } from "@/components/sections/blog/BlogRichText";
import type { BlogArticleBody } from "@/lib/i18n/content/blog-article-bodies";
import type { BlogPostPreview } from "@/lib/i18n/content/blog-posts-i18n";
import { useLocale } from "@/lib/i18n/locale-context";
import { ROUTES } from "@/lib/routes";

const prose = "text-base leading-relaxed text-[rgba(255,255,255,0.55)]";

type Props = {
  post: BlogPostPreview;
  body: BlogArticleBody | null;
};

export default function BlogArticle({ post, body }: Props) {
  const { t } = useLocale();

  if (!post) notFound();

  return (
    <main className="min-h-screen px-[5%] pb-20 pt-page-nav-loose md:px-[6%]">
      <article className="mx-auto max-w-3xl">
        <Link href={ROUTES.blogg} className="text-sm text-[#2563EB] no-underline hover:underline">
          {t("blogPost.back")}
        </Link>
        <p className="mt-6 text-xs text-[rgba(255,255,255,0.35)]">{post.date}</p>
        <h1 className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl">{post.title}</h1>
        {post.readTime || post.category || post.author ? (
          <p className="mt-3 text-sm text-[rgba(255,255,255,0.4)]">
            {[post.readTime, post.category, post.author].filter(Boolean).join(" · ")}
          </p>
        ) : null}
        {body?.directAnswer ? (
          <p className="mt-6 text-lg font-semibold leading-relaxed text-white">
            {blogRichNodes(body.directAnswer)}
          </p>
        ) : (
          <p className={`mt-6 text-lg ${prose}`}>{post.excerpt}</p>
        )}

        {body ? (
          <div className="mt-10 space-y-12">
            {body.sections.map((section, si) => (
              <section key={`${section.heading}-${si}`} className="space-y-4">
                <h2 className="font-heading text-xl font-bold text-white md:text-2xl">{section.heading}</h2>
                {section.paragraphs[0] ? (
                  <BlogRichParagraph text={section.paragraphs[0]} className={prose} />
                ) : null}
                {section.bullets && section.bullets.length > 0 ? (
                  <ul className="list-disc space-y-2 pl-5 text-[rgba(255,255,255,0.55)]">
                    {section.bullets.map((item) => (
                      <li key={item} className="leading-relaxed">
                        {blogRichNodes(item)}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.paragraphs.slice(1).map((p, i) => (
                  <BlogRichParagraph key={`${section.heading}-p-${i + 1}`} text={p} className={prose} />
                ))}
              </section>
            ))}

            <section className="space-y-4 border-t border-[rgba(255,255,255,0.08)] pt-10">
              <h2 className="font-heading text-xl font-bold text-white md:text-2xl">{body.summaryHeading}</h2>
              <BlogRichParagraph text={body.summary} className={prose} />
              {body.summaryBullets && body.summaryBullets.length > 0 ? (
                <ul className="list-disc space-y-2 pl-5 text-[rgba(255,255,255,0.55)]">
                  {body.summaryBullets.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {blogRichNodes(item)}
                    </li>
                  ))}
                </ul>
              ) : null}
              {body.closingParagraphs?.map((p, i) => (
                <BlogRichParagraph key={`closing-${i}`} text={p} className={prose} />
              ))}
            </section>

            {body.faqs && body.faqs.length > 0 ? (
              <section className="space-y-8 border-t border-[rgba(255,255,255,0.08)] pt-10">
                <h2 className="font-heading text-xl font-bold text-white md:text-2xl">
                  {t("blogPost.faqHeading")}
                </h2>
                {body.faqs.map((faq) => (
                  <div key={faq.question} className="space-y-3">
                    <h3 className="font-heading text-lg font-semibold text-white">{faq.question}</h3>
                    <p className={prose}>{faq.answer}</p>
                  </div>
                ))}
              </section>
            ) : null}
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
