/* eslint-disable @next/next/no-img-element */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "NOKAT art wedding films and photography social preview";

export default async function OpenGraphImage() {
  const logoPath = path.join(process.cwd(), "public", "brand", "perfil.png");

  const logoBuffer = await readFile(logoPath);
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background:
            "radial-gradient(circle at top left, rgba(214,184,160,0.22), transparent 28%), radial-gradient(circle at bottom right, rgba(214,184,160,0.12), transparent 22%), linear-gradient(135deg, #0b0d0f 0%, #090b0d 42%, #060708 100%)",
          color: "#f5efe7",
          display: "flex",
          height: "100%",
          padding: 34,
          position: "relative",
          width: "100%",
        }}
        >
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
            height: "100%",
            overflow: "hidden",
            position: "relative",
            width: "100%",
            }}
          >
            <div
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                flex: 1,
                justifyContent: "space-between",
                padding: "56px 64px",
                position: "relative",
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    background: "#e1e1e1",
                    border: "2px solid rgba(255,255,255,0.18)",
                    borderRadius: 999,
                    boxShadow: "0 28px 90px rgba(0,0,0,0.34)",
                    display: "flex",
                    height: 180,
                    justifyContent: "center",
                    overflow: "hidden",
                    width: 180,
                  }}
                >
                  <img
                    src={logoSrc}
                    alt=""
                    width={168}
                    height={168}
                    style={{
                      objectFit: "contain",
                      transform: "scale(1.34)",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: 52,
                      fontWeight: 300,
                      letterSpacing: "-0.04em",
                    }}
                >
                  NOKAT art
                </div>
                  <div
                    style={{
                      color: "rgba(245,239,231,0.74)",
                      fontSize: 18,
                      fontWeight: 600,
                      letterSpacing: "0.36em",
                      textTransform: "uppercase",
                  }}
                >
                  Film & Photography
                </div>
              </div>
            </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 22,
                  maxWidth: 760,
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 78,
                    fontWeight: 300,
                    letterSpacing: "-0.065em",
                    lineHeight: 1.02,
                }}
              >
                Wedding films from hidden realms.
              </div>
                <div
                  style={{
                    color: "rgba(245,239,231,0.72)",
                    fontSize: 28,
                    lineHeight: 1.45,
                  }}
                >
                  Brazilian creator based in Kerry, Ireland.
                </div>
              </div>

              <div
                style={{
                color: "#d6b8a0",
                display: "flex",
                fontSize: 17,
                fontWeight: 600,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                }}
              >
                www.nokatart.ie
              </div>
            </div>
        </div>
      </div>
    ),
    size,
  );
}
