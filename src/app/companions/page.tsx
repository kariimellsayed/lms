import CompanionCard from "@/components/CompanionCard";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import { getAllCompanion } from "@/lib/actions/companionsActions";
import { getSubjectColor } from "@/lib/utils";

type PageProps = {
  searchParams: {
    subject?: string;
    topic?: string;
  };
};

const Compinations = async ({ searchParams }: PageProps) => {
  const filters = searchParams;

  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";

  const companions = await getAllCompanion({ subject, topic });

  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        <h1>Companion Library</h1>
        <div className="flex items-center gap-4">
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>

      {companions.length > 0 ? (
        <section className="companions-grid">
          {companions.map((companion) => (
            <CompanionCard
              key={companion.id}
              {...companion}
              color={getSubjectColor(companion.subject)}
            />
          ))}
        </section>
      ) : (
        <div className="text-center py-10 text-gray-500 bg-gray-100 rounded-lg">
          <p className="text-lg font-semibold">No companions available</p>
          <p className="text-sm">
            Please check back later or create a new companion.
          </p>
        </div>
      )}
    </main>
  );
};

export default Compinations;
