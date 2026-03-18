import Image from "next/image";
import { brandLogoSrc } from "../content/portfolio-data";

type BrandMarkProps = {
  className?: string;
  align?: "left" | "center";
  avatarSize?: "sm" | "lg";
  showAvatar?: boolean;
  showText?: boolean;
  priority?: boolean;
};

export default function BrandMark({
  className = "",
  align = "left",
  avatarSize = "sm",
  showAvatar = true,
  showText = true,
  priority = false,
}: BrandMarkProps) {
  const centered = align === "center";
  const avatarClassName =
    avatarSize === "lg" ? "h-32 w-32 sm:h-36 sm:w-36" : "h-20 w-20";
  const imageClassName =
    avatarSize === "lg"
      ? "object-contain object-center p-2 scale-[1.16]"
      : "object-contain object-center p-1.5 scale-[1.26]";

  return (
    <div
      className={`flex ${centered ? "flex-col items-center text-center" : "items-center"} gap-5 ${className}`.trim()}
    >
      {showAvatar ? (
        <div
          className={`relative overflow-hidden rounded-full border border-white/[0.14] bg-[#e1e1e1] shadow-[0_16px_40px_rgba(0,0,0,0.28)] ${avatarClassName}`.trim()}
        >
          <Image
            src={brandLogoSrc}
            alt="NOKAT art profile"
            fill
            priority={priority}
            sizes={avatarSize === "lg" ? "144px" : "80px"}
            className={imageClassName}
          />
        </div>
      ) : null}

      {showText ? (
        <div>
          <p className="font-serif text-3xl font-light tracking-[-0.05em] text-foreground sm:text-4xl">
            NOKAT art
          </p>
          <p className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-white/[0.72]">
            Film & Photography
          </p>
        </div>
      ) : null}
    </div>
  );
}
