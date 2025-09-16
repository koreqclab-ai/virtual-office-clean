import { useLocation, useNavigate } from "react-router-dom";
import { useCallback } from "react";

export function useGoToPricing() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goToPricing = useCallback((e) => {
    e?.preventDefault?.();
    const doScroll = () => {
      const el = document.getElementById("pricing");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    if (pathname !== "/") {
      navigate("/#pricing");
      // let React render the new route before scroll
      setTimeout(doScroll, 0);
    } else {
      doScroll();
    }
  }, [navigate, pathname]);

  return { goToPricing };
}