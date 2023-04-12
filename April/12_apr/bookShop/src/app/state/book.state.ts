export const BOOKS_FEATURE_KEY = 'books';  //a store name

export interface Book{
    title:string,
    pages:number
}

export interface BookState {
  books: Book[];
  loaded: boolean;
  error?: string | null;
}

export const initialBookState: BookState = {
  books: [],
  loaded: false,
  error: null,
};