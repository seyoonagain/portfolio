import SKILLS from '@/components/skill/constants';

const Skills = () => {
  return (
    <table className="w-full table-fixed">
      <thead className="block content-center sticky top-0 w-full h-6 z-10 border-b-[3px] border-double border-zinc-950 bg-white">
        <tr className="flex font-chicago leading-none">
          <td className="w-32 shrink-0">Skill</td>
          <td>Description</td>
        </tr>
      </thead>

      <tbody className="block w-full mt-px overflow-y-auto">
        {SKILLS.map(({ skill, description }) => (
          <tr
            key={skill}
            className="flex justify-start pt-1.5 pb-0.5 border-b sm:last:border-0 border-zinc-950"
          >
            <td className="w-32 shrink-0 font-chicago">{skill}</td>
            <td className="font-silver text-xl">{description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Skills;
