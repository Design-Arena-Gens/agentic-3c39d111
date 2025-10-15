"use client";
import { useEffect, useRef, useState } from "react";

export function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickAway = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickAway);
    return () => document.removeEventListener("mousedown", handleClickAway);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="profile-menu" ref={menuRef}>
      <button
        type="button"
        className="profile-trigger"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="avatar" aria-hidden="true">
          AM
        </span>
        <span className="profile-name">Ava Morgan</span>
      </button>
      {open ? (
        <div className="profile-dropdown" role="menu">
          <button type="button" role="menuitem" className="dropdown-item">
            View profile
          </button>
          <button type="button" role="menuitem" className="dropdown-item">
            Workspace settings
          </button>
          <button type="button" role="menuitem" className="dropdown-item">
            Help &amp; support
          </button>
          <button type="button" role="menuitem" className="dropdown-item is-danger">
            Sign out
          </button>
        </div>
      ) : null}
    </div>
  );
}
