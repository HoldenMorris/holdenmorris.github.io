export const skills = [
  { name: 'Node.js',       category: 'runtime',  proficiency: 95 },
  { name: 'JavaScript',    category: 'language',  proficiency: 95 },
  { name: 'TypeScript',    category: 'language',  proficiency: 80 },
  { name: 'PHP',           category: 'language',  proficiency: 85 },
  { name: 'Python',        category: 'language',  proficiency: 70 },
  { name: 'SQL',           category: 'language',  proficiency: 85 },

  { name: 'Lit',           category: 'frontend',  proficiency: 80 },
  { name: 'Web Components', category: 'frontend', proficiency: 85 },
  { name: 'HTML/CSS',      category: 'frontend',  proficiency: 90 },
  { name: 'React',         category: 'frontend',  proficiency: 70 },

  { name: 'REST APIs',     category: 'backend',   proficiency: 95 },
  { name: 'Express',       category: 'backend',   proficiency: 90 },
  { name: 'Drupal',        category: 'backend',   proficiency: 85 },
  { name: 'PostgreSQL',    category: 'backend',   proficiency: 80 },
  { name: 'MongoDB',       category: 'backend',   proficiency: 75 },

  { name: 'Git',           category: 'devops',    proficiency: 90 },
  { name: 'Docker',        category: 'devops',    proficiency: 75 },
  { name: 'Linux',         category: 'devops',    proficiency: 85 },
  { name: 'CI/CD',         category: 'devops',    proficiency: 80 },

  { name: 'Software Architecture', category: 'meta', proficiency: 90 },
  { name: 'Team Leadership',       category: 'meta', proficiency: 85 },
  { name: 'Technical Direction',   category: 'meta', proficiency: 85 },
];

export const skillCategories = {
  language:  { label: 'Languages',          icon: 'code-slash' },
  runtime:   { label: 'Runtimes',           icon: 'cpu' },
  frontend:  { label: 'Frontend',           icon: 'layout-text-window' },
  backend:   { label: 'Backend & Data',     icon: 'server' },
  devops:    { label: 'DevOps & Tools',     icon: 'terminal' },
  meta:      { label: 'Architecture & Leadership', icon: 'diagram-3' },
};
