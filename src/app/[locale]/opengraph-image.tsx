import { ImageResponse } from "next/og"
import { getTranslations } from "next-intl/server"
import { site } from "@/lib/data/site"

export const alt = "Bertoldo Klinger — Software Engineer"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function OpenGraphImage({
  params,
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "hero",
  })

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        background: "#000000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        fontFamily: "system-ui",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontFamily: "monospace",
          fontSize: "20px",
          color: "#a3a3a3",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        bertoldoklinger
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div
          style={{
            fontSize: "92px",
            fontWeight: 500,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            fontSize: "36px",
            color: "#a3a3a3",
            letterSpacing: "-0.01em",
            lineHeight: 1.3,
          }}
        >
          <span style={{ color: "#ffffff" }}>{t("title")}</span> · {t("tagline")}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "18px",
          color: "#737373",
          fontFamily: "monospace",
        }}
      >
        bertoldoklinger.vercel.app
      </div>
    </div>,
    { ...size },
  )
}
