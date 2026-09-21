import type { FC } from "@hono/hono/jsx";
import type { Config } from "../config/schema.ts";
import type { IDbHandle } from "../db/handle.ts";
import { Layout } from "./layout.tsx";
import { StatsBar } from "./stats-bar.tsx";
import { ServerInfo } from "./server-info.tsx";
import { UploadIsland } from "./upload-island.tsx";

export const LandingPage: FC<{ db: IDbHandle; config: Config }> = async (
  { db, config },
) => {
  const stats = await db.getStats();
  const description =
    "gittr Blossom is the blob server for Nostr git on gittr. It stores Pages files and media at blossom.gittr.space. Based on hzrd149/blossom-server v6.1.5.";
  return (
    <Layout title={config.landing.title} description={description}>
      <header class="space-y-1">
        <h1 class="text-4xl font-bold tracking-tight">
          {config.landing.title}
        </h1>
        <p class="text-gray-400">
          Blob server for{" "}
          <a
            href="https://gittr.space"
            class="underline hover:text-gray-200"
          >
            gittr
          </a>{" "}
          Nostr git — Pages and media. Protocol:{" "}
          <a
            href="https://github.com/hzrd149/blossom"
            class="underline hover:text-gray-200"
          >
            Blossom
          </a>
          . Code:{" "}
          <a
            href="https://github.com/arbadacarbaYK/gittr-blossom"
            class="underline hover:text-gray-200"
          >
            gittr-blossom
          </a>
          .
        </p>
      </header>
      <StatsBar stats={stats} />
      <ServerInfo config={config} />
      <UploadIsland
        requireAuth={config.upload.requireAuth}
        uploadEnabled={config.upload.enabled}
        mediaEnabled={config.media.enabled}
        mediaRequireAuth={config.media.requireAuth}
        mirrorEnabled={config.mirror.enabled}
        mirrorRequireAuth={config.mirror.requireAuth}
      />
    </Layout>
  );
};
