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
  const portraitPath = path.join(
    process.cwd(),
    "public",
    "about",
    "fotoperfilpessoal.jpeg",
  );
  const logoPath = path.join(process.cwd(), "public", "brand", "perfil.png");

  const [portraitBuffer, logoBuffer] = await Promise.all([
    readFile(portraitPath),
    readFile(logoPath),
  ]);

  const portraitSrc = `data:image/jpeg;base64,${portraitBuffer.toString("base64")}`;
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background:
            "radial-gradient(circle at top left, rgba(214,184,160,0.22), transparent 28%), linear-gradient(135deg, #0b0d0f 0%, #090b0d 42%, #060708 100%)",
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
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "56px 52px",
              position: "relative",
            }}
          >
            <div
              style={{
                alignItems: "center",
                display: "flex",
                gap: 18,
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  background: "#e1e1e1",
                  borderRadius: 999,
                  display: "flex",
                  height: 88,
                  justifyContent: "center",
                  overflow: "hidden",
                  width: 88,
                }}
              >
                <img
                  src={logoSrc}
                  alt=""
                  width={84}
                  height={84}
                  style={{
                    objectFit: "contain",
                    transform: "scale(1.24)",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    fontSize: 38,
                    fontWeight: 300,
                    letterSpacing: "-0.04em",
                  }}
                >
                  NOKAT art
                </div>
                <div
                  style={{
                    color: "rgba(245,239,231,0.74)",
                    fontSize: 16,
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
                maxWidth: 610,
              }}
            >
              <div
                style={{
                  fontSize: 68,
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
                Brazilian creator based in Kerry, Ireland, capturing weddings
                with softness, honesty, and a less usual point of view.
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

          <div
            style={{
              alignItems: "flex-end",
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative",
              width: 360,
            }}
          >
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(225,225,225,0.04) 0%, rgba(225,225,225,0.12) 100%)",
                height: "100%",
                left: 0,
                position: "absolute",
                top: 0,
                width: "100%",
              }}
            />
            <img
              src={portraitSrc}
              alt=""
              width={440}
              height={630}
              style={{
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 24%",
                opacity: 0.96,
                width: "100%",
              }}
            />
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(8,10,12,0.04) 0%, rgba(8,10,12,0.12) 30%, rgba(8,10,12,0.64) 100%)",
                inset: 0,
                position: "absolute",
              }}
            />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
