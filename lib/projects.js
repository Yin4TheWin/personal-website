/**
 * 
 * Categories / Available Tags:
 * - 'games'
 * - 'writing'
 * - 'personal'
 * - 'professional'
 * - 'build-your-own'
 * - 'wip'
 * - 'deprecated'
 * 
 * Fields:
 * - id: (string) Unique identifier for the project
 * - title: (string) Project name
 * - pitch: (string) 1-liner elevator pitch under the title
 * - description: (string) Detailed overview of what the project is / does
 * - link: (string) Live URL or demo destination
 * - image: (string) Path to preview image (in public/ directory, e.g. '/images/projects/xyz.png')
 * - tags: (array of strings) Categories e.g. ['games'], ['writing', 'personal'], ['professional'], ['build-your-own'], ['wip'], ['deprecated']
 * - featured: (boolean, optional) Set to true to show a yellow "👑 Featured! 👑" badge and deep red gradient
 * - deprecated: (boolean, optional) Set to true to show a red "Deprecated" badge and group below divider
 * - github: (string, optional) Link to the GitHub repository
 */

export const PROJECT_CATEGORIES = [
  { id: 'games', label: 'Games' },
  { id: 'writing', label: 'Writing' },
  { id: 'personal', label: 'Personal' },
  { id: 'professional', label: 'Professional' },
  { id: 'build-your-own', label: 'Build-Your-Own' },
  { id: 'wip', label: 'WIP' },
  { id: 'deprecated', label: 'Deprecated' },
];

export const projects = [
  {
    id: 'sovereign',
    title: 'Sovereign',
    pitch: 'Fast paced 1v1 battle of wits',
    description: 'An easy to learn, hard to master PvP strategy game. Learn to play in 3 minutes with the tutorial, then hop into ranked, casual or bot queues. Dominate the enemy and become the sovereign!',
    link: 'https://sovereign.franklinyin.com',
    image: '/images/projects/sovereign.png',
    tags: ['games', 'wip'],
    featured: true,
    deprecated: false,
    github: '',
  },
  {
    id: 'journal',
    title: 'Tiny Journal App',
    pitch: 'Local, portable, encrypted notes',
    description: 'A local-first web app that saves your notes exclusively to your browser\’s local storage - no cloud, no databases, no network requests! Also supports encrypting your notes with a password and importing/exporting as JSON (preserves encryption).',
    link: 'https://journal.franklinyin.com',
    image: '/images/projects/journal.png',
    tags: ['writing', 'personal'],
    deprecated: false,
    github: '',
  },
  {
    id: 'botink',
    title: 'BotInk',
    pitch: 'Custom discord bot in minutes',
    description: 'Get your own discord bot with tons of general features for your members, a functional music player, and excellent moderation tools for just $4.99/month. Register an account, choose your bot name and icon, press create!',
    link: 'https://botink.dev',
    image: '/images/projects/botink.png',
    tags: ['build-your-own', 'deprecated'],
    deprecated: true,
    github: '',
  },
  {
    id: 'twinhat',
    title: 'Twinhat',
    pitch: 'The two minute chat',
    description: 'Create an anonymous chat room in two minutes. Simply sign up, enter the name of your desired chatroom, and hit create! Perfect for businesses that want a quick customer service solution and impromptu gaming sessions.',
    link: 'https://twinhat.app',
    image: '/images/projects/twinhat.png',
    tags: ['build-your-own', 'deprecated'],
    deprecated: true,
    github: '',
  },
  {
    id: 'jobappstracker',
    title: 'Job Apps Tracker',
    pitch: 'Like trello but worse',
    description: 'Quick to setup, easy to use kanban board with a built in AI chatbot to help you organize and strengthen your applications. Never lose track of a job application\'s status or details ever again!',
    link: 'https://jobappstracker.com',
    image: '/images/projects/jobappstracker.png',
    tags: ['personal', 'professional', 'deprecated'],
    deprecated: true,
    github: '',
  },
];

export function getAllProjects() {
  return projects;
}

export function getProjectById(id) {
  return projects.find((project) => project.id === id);
}
