import BrandMark from "../components/BrandMark";

export default function SiteFooter() {
  return (
    <footer className="px-6 pb-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border border-white/[0.08] bg-white/[0.03] px-6 py-8 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="space-y-4">
          <BrandMark avatarSize="sm" />
          <p className="max-w-md text-sm leading-7 text-white/[0.58]">
            Based in Kerry, Ireland, with weddings at the center and a softer
            eye for the moments around them.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-white/[0.68] sm:items-end">
          <a
            href="https://www.instagram.com/nokatart/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@nokatart"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            YouTube
          </a>
          <a href="mailto:nokatart@gmail.com" className="hover:text-foreground">
            nokatart@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
