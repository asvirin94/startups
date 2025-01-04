import { notFound } from "next/navigation";

import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";

// export const experimental_ppr = true;

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await client.fetch(STARTUP_BY_ID_QUERY, {id})

  if (!post) return notFound();

  return (
    <>
        <h1>{post.title}</h1>
    </>
  );
}
