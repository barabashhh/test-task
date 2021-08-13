export enum Group {
  Work = 'Work',
  Leisure = 'Leisure',
  Personal = 'Personal'
}

export interface IBookmark {
  name: string;
  url: string;
  group: Group;
  id?: string;
}
