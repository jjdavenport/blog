export type ConfigType = {
  title: string;
  description: string;
  icon: string;
  links: (
    | {
        type: "link";
        href: string;
        value: string;
        alt: string;
        src: string;
      }
    | {
        type: "email";
        href: string;
      }
  )[];
};

export type PostLinkType = {
  href: string;
  title: string;
  month: string;
  date: number;
  year: number;
};

export type PostType = {
  title: string;
  content: (
    | {
        type: "text";
        value: string;
      }
    | {
        type: "link";
        value: string;
        href: string;
      }
    | {
        type: "image";
        src: string;
        alt: string;
      }
    | {
        type: "div";
      }
  )[];
  month: string;
  date: number;
  year: number;
};
