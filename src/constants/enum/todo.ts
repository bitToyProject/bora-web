export const TodoListType = {
  LIST: 'list',
  BOARD: 'board',
  CALENDAR: 'calendar',
} as const;

export const TodoType = {
  DONE: 'DONE',
  INPROGRESS: 'INPROGRESS',
  REVIEW: 'REVIEW',
  TODO: 'TODO',
} as const;

export const TodoPriority = {
  HIGHEST: 'Highest',
  MEDIUM: 'Medium',
  LOW: 'Low',
  LOWEST: 'Lowest',
};
