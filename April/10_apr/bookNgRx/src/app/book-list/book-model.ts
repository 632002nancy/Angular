//This folder is used to hold the book list component
export interface Book {
    id: string;
    volumeInfo: {
      title: string;
      authors: Array<string>;
    };
}