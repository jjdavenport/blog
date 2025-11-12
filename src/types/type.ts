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
