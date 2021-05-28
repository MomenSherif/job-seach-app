interface Skill {
  skill_uuid: string;
  skill_name: string;
  skill_type: string;
  description: string;
  normalized_skill_name: string;
  importance: number;
  level: number;
}

export default Skill;
