/* eslint-disable @next/next/no-img-element */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default async function Icon() {
  const logoPath = path.join(process.cwd(), "public", "brand", "perfil.png");
  const logoBuffer = await readFile(logoPath);
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#141414",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            background: "#e1e1e1",
            border: "2px solid rgba(255,255,255,0.28)",
            borderRadius: "999px",
            boxShadow: "0 10px 26px rgba(0, 0, 0, 0.34)",
            display: "flex",
            height: 48,
            justifyContent: "center",
            overflow: "hidden",
            width: 48,
          }}
        >
          <img
            src={logoSrc}
            alt=""
            width={46}
            height={46}
            style={{
              objectFit: "contain",
              transform: "scale(1.3)",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
