import Link from "next/link";
import type { ReactNode } from "react";

const BLOG_LINK_RE = /\[([^\]]+)\]\((\/blogg\/[a-z0-9-]+)\)/g;

export function blogRichNodes(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  const re = new RegExp(BLOG_LINK_RE);
  let match: RegExpExecArray | null;

  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    nodes.push(
      <Link
        key={`${match[2]}-${match.index}`}
        href={match[2]}
        className="font-medium text-[#2563EB] underline-offset-2 hover:underline"
      >
        {match[1]}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.length > 0 ? nodes : [text];
}

export function BlogRichParagraph({ text, className }: { text: string; className?: string }) {
  return <p className={className}>{blogRichNodes(text)}</p>;
}
