export const dynamic = "force-dynamic";

import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionList";
import Cta from "@/components/Cta";
import {
  getAllCompanion,
  getRecentSession,
} from "@/lib/actions/companionsActions";
import { getSubjectColor } from "@/lib/utils";

const Page = async () => {
  // All Companions
  const companions = await getAllCompanion({ limit: 3 });
  // Recent Sessions
  const recentSessions = await getRecentSession(10);

  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        {companions.length > 0 ? (
          companions.map((companion) => (
            <CompanionCard
              key={companion.id}
              {...companion}
              color={getSubjectColor(companion.subject)}
            />
          ))
        ) : (
          <div className="text-center py-10 text-gray-500 bg-gray-100 rounded-lg">
            <p className="text-lg font-semibold">No companions available</p>
            <p className="text-sm">
              Please check back later or create a new companion.
            </p>
          </div>
        )}
      </section>

      <section className="home-section">
        {recentSessions.length > 0 ? (
          <CompanionsList
            title="Recently completed sessions"
            companions={recentSessions}
            classNames="w-2/3 max-lg:w-full"
          />
        ) : (
          <div className="text-center py-10 text-gray-500 bg-gray-100 rounded-lg">
            <p className="text-lg font-semibold">No companions available</p>
            <p className="text-sm">
              Please check back later or create a new companion.
            </p>
          </div>
        )}

        <Cta />
      </section>
    </main>
  );
};

export default Page;
