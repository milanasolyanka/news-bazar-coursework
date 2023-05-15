export interface ISource {
  id: string | null;
  name: string;
}

export interface INewsElement {
  source: ISource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface INewsList {
  status: string;
  totalResults: number;
  articles: INewsElement[];
}

export interface IFormField {}

export interface IButton {
  //func
  isDisabled: boolean;
  type: string;
  text: string;
}

export interface IInput {
  value: string;
  //func
}
