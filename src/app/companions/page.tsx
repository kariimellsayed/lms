import CompanionCard from "@/components/CompanionCard";

const Compinations = () => {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        <CompanionCard
          id="1"
          name="Neura the Brainy Explorer"
          subject="Science"
          topic="Neural Network of the Brain"
          duration={45}
          bookmarked={"true"}
          color="#E5D0FF"
        />
        <CompanionCard
          id="1"
          name="Neura the Brainy Explorer"
          subject="Science"
          topic="Neural Network of the Brain"
          duration={45}
          bookmarked={"true"}
          color="#E5D0FF"
        />
        <CompanionCard
          id="1"
          name="Neura the Brainy Explorer"
          subject="Science"
          topic="Neural Network of the Brain"
          duration={45}
          bookmarked={"true"}
          color="#E5D0FF"
        />
      </section>
    </main>
  );
};

export default Compinations;
