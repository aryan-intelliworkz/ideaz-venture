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
  // Ref avoids effect deps on `children` — updates during client nav cleared the exit timeout and left the shell at opacity 0.
  const childrenRef = useRef(children);
  childrenRef.current = children;

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      setTransitionStage("exit");
      const timeout = setTimeout(() => {
        setDisplayChildren(childrenRef.current);
        window.scrollTo({ top: 0 });
        setTransitionStage("enter");
        prevPathname.current = pathname;
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname !== prevPathname.current) return;
    setDisplayChildren(children);
  }, [children, pathname]);

  return (
    <div
      className={`page-transition ${transitionStage === "enter" ? "page-enter" : "page-exit"}`}
    >
      {displayChildren}
    </div>
  );
}
