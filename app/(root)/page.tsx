import SearchForm from "@/components/Search";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: 'Alex' },
      _id: 1,
      description: 'Description',
      image: "https://e7.pngegg.com/pngimages/511/825/png-clipart-startup-company-computer-icons-scalable-graphics-innovation-startup-icon-company-text.png",
      category: 'Robots',
      title: 'We robots'
    },
  ];

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

        <ul className="mt-7 card-grid">
          {posts?.length > 0 ? (
            posts.map((post) => (
              <StartupCard key={post?._id} post={post} />
            )) 
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
