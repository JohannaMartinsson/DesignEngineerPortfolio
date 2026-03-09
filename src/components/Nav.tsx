import { NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Project Hubexo", to: "/hubexo" },
  { label: "Project NIRA", to: "/nira" },
  { label: "Project BPE", to: "/bpe" },
  { label: "Contact", to: "/contact" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3 bg-white">
      <NavLink
        to="/"
        className="font-sans font-medium text-sm tracking-widest uppercase text-black no-underline"
      >
        Johanna Martinsson
      </NavLink>
      <ul className="flex gap-8 list-none m-0 p-0">
        {links.map(({ label, to }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                [
                  "font-sans text-sm no-underline transition-colors duration-200",
                  isActive ? "text-black font-semibold" : "text-black hover:text-[var(--color-muted)]",
                ].join(" ")
              }
              end={to === "/"}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
