"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState<"enter" | "exit">(
    "enter",
  );
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      // Route changed — trigger exit, then swap content
      setTransitionStage("exit");
      const timeout = setTimeout(() => {
        setDisplayChildren(children);
        window.scrollTo({ top: 0 });
        setTransitionStage("enter");
        prevPathname.current = pathname;
      }, 300);
      return () => clearTimeout(timeout);
    } else {
      // Same route (initial render or content update)
      setDisplayChildren(children);
    }
  }, [pathname, children]);

  return (
    <div
      className={`page-transition ${transitionStage === "enter" ? "page-enter" : "page-exit"}`}
    >
      {displayChildren}
    </div>
  );
}
