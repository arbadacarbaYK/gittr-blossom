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
  const description = "Blob storage for gittr Pages and Nostr git.";
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
            href="https://gittr.space/npub1n2ph08n4pqz4d3jk6n2p35p2f4ldhc5g5tu7dhftfpueajf4rpxqfjhzmc/gittr-blossom?branch=master"
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
