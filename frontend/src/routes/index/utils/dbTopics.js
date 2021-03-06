const dbTopics = [
  {
    main: 'internet',
    secondary: ['websites', 'http', 'security'],
    inactive: ['internet', 'websites', 'http', 'security'],
    colorText: '#fff',
    colorBg: '#2DD4A0',
  },
  {
    main: 'html',
    secondary: ['general', 'tags', 'attributes', 'forms', 'accessibility'],
    inactive: [],
  },
  {
    main: 'css',
    secondary: ['selectors', 'properties', 'values', 'layout'],
    inactive: [],
  },
  {
    main: 'javascript',
    secondary: ['internals', 'objects', 'functions', 'dom', 'web data'],
    inactive: [
      'javascript',
      'internals',
      'objects',
      'functions',
      'dom',
      'web data',
    ],
  },
  {
    main: 'react',
    secondary: ['concepts', 'process', 'classes', 'hooks', 'cra'],
    inactive: ['concepts', 'process', 'classes', 'hooks', 'cra'],
  },
];

// gets the topic object by topic
const getTopicInfo = (topicName) =>
  dbTopics.find(
    (topic) => topic.main === topicName || topic.secondary.includes(topicName)
  );

export { dbTopics, getTopicInfo };
