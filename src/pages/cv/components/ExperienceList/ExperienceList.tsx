import type { Experience } from "@/data";
import { ExperienceCard } from "../ExperienceCard";
import { Section } from "../Section";

export const ExperienceList = ({
  experiences,
}: {
  experiences: Experience[];
}) => (
  <Section title="Professional Experiences">
    {experiences.map((exp) => (
      <ExperienceCard exp={exp} />
    ))}
  </Section>
);
