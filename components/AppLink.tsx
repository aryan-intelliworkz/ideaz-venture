import type { AnchorHTMLAttributes } from "react";

export type AppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
};

/** Plain `<a>` so static export works on hosts that block RSC prefetch paths. */
export default function AppLink({
  href,
  prefetch: _prefetch,
  replace: _replace,
  scroll: _scroll,
  ...rest
}: AppLinkProps) {
  return <a href={href} {...rest} />;
}
