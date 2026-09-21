import type { Child, FC } from "@hono/hono/jsx";

export const Layout: FC<{
  title: string;
  description: string;
  children?: Child;
}> = (
  { title, description, children },
) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://blossom.gittr.space" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://blossom.gittr.space" />
      <script src="https://cdn.tailwindcss.com/3.4.17" />
    </head>
    <body class="bg-gray-950 text-gray-100 min-h-screen antialiased">
      <div class="max-w-3xl mx-auto px-4 py-12 space-y-10">{children}</div>
    </body>
  </html>
);
