"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

import { ServiceBrandMark } from "@/components/icons/ServiceBrandMark";
import { buttonVariants } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getBlogPreviewPosts } from "@/lib/i18n/content/blog-preview-i18n";
import { useLocale } from "@/lib/i18n/locale-context";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = Number.parseInt(h.slice(0, 2), 16);
  const g = Number.parseInt(h.slice(2, 4), 16);
  const b = Number.parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export default function Blog() {
  const { locale, t } = useLocale();
  const posts = getBlogPreviewPosts(locale);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <section
      ref={ref}
      className="border-t border-[rgba(255,255,255,0.06)] bg-[var(--bg-secondary)] py-20 px-[5%] lg:py-[120px] lg:px-[6%]"
      aria-labelledby="blog-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="text-left">
            <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{t("blog.label")}</SectionLabel>
            <h2
              id="blog-heading"
              className="font-heading text-[clamp(32px,4vw,48px)] font-bold leading-tight text-white"
            >
              <span className="block">{t("blog.h2a")}</span>
              <span className="block text-[#2563EB] italic">{t("blog.h2b")}</span>
            </h2>
          </div>
          <Link
            href={ROUTES.blogg}
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "shrink-0 !h-auto !min-h-0 border-0 bg-transparent !px-0 !py-0 text-sm font-medium text-[rgba(255,255,255,0.4)] shadow-none hover:bg-transparent hover:text-white md:mb-1"
            )}
          >
            {t("blog.viewAll")}
          </Link>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: "easeOut",
              }}
            >
              <Link
                href={`${ROUTES.blogg}/${post.slug}`}
                className={cn(
                  "group flex h-full flex-col overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.07)] bg-[#0F1629]",
                  "cursor-pointer transition-all duration-300 ease-out",
                  "hover:-translate-y-1 hover:border-[rgba(37,99,235,0.3)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                )}
              >
                <div
                  className="relative flex h-40 items-center justify-center overflow-hidden border-b border-[rgba(255,255,255,0.06)]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(15,22,41,1), rgba(37,99,235,0.08))",
                  }}
                >
                  <ServiceBrandMark
                    brand={post.brandMark}
                    className="size-14 drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
                  />
                  <span
                    className="absolute left-4 top-4 rounded-pill border px-3 py-1 text-[11px] font-medium tracking-[0.04em]"
                    style={{
                      backgroundColor: hexToRgba(post.tagColor, 0.15),
                      borderColor: hexToRgba(post.tagColor, 0.3),
                      color: post.tagColor,
                    }}
                  >
                    {post.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-3 font-heading text-lg font-bold leading-snug text-white transition-colors duration-200 group-hover:text-[#2563EB]">
                    {post.title}
                  </h3>
                  <p className="mb-5 line-clamp-3 text-sm font-normal leading-[1.65] text-[rgba(255,255,255,0.45)]">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex justify-between text-xs font-normal text-[rgba(255,255,255,0.25)]">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#2563EB] transition-[gap] duration-200 group-hover:gap-2.5">
                    {t("blog.readMore")}
                    <ArrowRight className="size-3.5 shrink-0" strokeWidth={2} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
