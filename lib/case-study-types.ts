export type CaseStudyMetric = {
  label: string;
  value: string;
  desc: string;
};

export type CaseStudyTestimonial = {
  text: string;
  author: string;
  role: string;
};

export type CaseStudyKeyTakeaways = {
  challenge: string;
  strategy: string;
  result: string;
};

export type CaseStudy = {
  id: number;
  slug: string;
  client: string;
  /** Q&A-style headline for GEO (user as H1). */
  qaHeadline: string;
  category: string;
  service: string;
  serviceColor: string;
  duration: string;
  location: string;
  challenge: string;
  solution: string;
  results: {
    before: Record<string, string>;
    after: Record<string, string>;
  };
  metrics: CaseStudyMetric[];
  keyTakeaways: CaseStudyKeyTakeaways;
  testimonial: CaseStudyTestimonial;
  tags: string[];
};
