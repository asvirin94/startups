import { STARTUPS_QUERY } from "@/sanity/lib/queries";

import SearchForm from "@/components/Search";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { SanityLive } from "@/sanity/lib/live";
import { client } from "@/sanity/lib/client";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;

  const posts = await client.withConfig({useCdn: false}).fetch(STARTUPS_QUERY, {search: query || null})

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Present your startup <br /> Connect with others
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, vote on pitches and get noticed.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => <StartupCard key={post?._id} post={post} />)
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
