import type { Child, FC } from "@hono/hono/jsx";

export const Layout: FC<{
  title: string;
  description?: string;
  children?: Child;
}> = (
  { title, description, children },
) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content="https://blossom.gittr.space" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://blossom.gittr.space" />
      <link rel="stylesheet" href="/styles.css" />
    </head>
    <body class="bg-gray-950 text-gray-100 min-h-screen antialiased">
      <div class="max-w-3xl mx-auto px-4 py-12 space-y-10">{children}</div>
    </body>
  </html>
);
