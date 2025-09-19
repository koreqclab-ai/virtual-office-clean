import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  ariaLabel?: string;
  children: React.ReactNode;
};

function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    const { body } = document;
    if (!locked) return;
    const prevOverflow = body.style.overflow;
    const prevTouchAction = body.style.touchAction;
    body.style.overflow = "hidden";
    body.style.touchAction = "none"; // Chrome iOS friendly
    return () => {
      body.style.overflow = prevOverflow;
      body.style.touchAction = prevTouchAction;
    };
  }, [locked]);
}

export default function Modal({ isOpen, onClose, ariaLabel = "Dialog", children }: ModalProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Create a portal container on mount
  useEffect(() => {
    if (!isOpen) return;
    const el = document.createElement("div");
    el.setAttribute("data-modal-root", "true");
    document.body.appendChild(el);
    containerRef.current = el;
    return () => {
      if (containerRef.current) {
        document.body.removeChild(containerRef.current);
        containerRef.current = null;
      }
    };
  }, [isOpen]);

  useBodyScrollLock(isOpen);

  if (!isOpen || !containerRef.current) return null;

  // 100svh → 100dvh → 100vh to survive iOS/Chrome iOS quirks
  const styleVh = {
    height: "100svh",
  } as React.CSSProperties;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      className="fixed inset-0 z-[1000] pointer-events-auto"
      style={styleVh}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 z-0 bg-black/40"
        onClick={onClose}
      />
      {/* Panel */}
      <div
        className="relative z-10 h-full w-full flex items-center justify-center p-4"
        style={{
          WebkitOverflowScrolling: "touch",
          overscrollBehavior: "contain",
        }}
      >
        <div
          className="max-h-[min(92svh,92dvh,92vh)] w-full max-w-2xl overflow-auto rounded-2xl bg-white shadow-xl"
          // Prevent accidental scroll chaining
          style={{ WebkitOverflowScrolling: "touch", overscrollBehavior: "contain" }}
        >
          {children}
        </div>
      </div>
    </div>,
    containerRef.current
  );
}