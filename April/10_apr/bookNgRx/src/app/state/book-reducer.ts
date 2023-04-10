//Within this file, define a reducer function to handle the retrieval of the book list from the state and consequently, update the state.

import { createReducer, on } from '@ngrx/store';
import { BooksApiActions } from './books.action';
import { Book } from '../book-list/book-model';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
    initialState,
    on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
  );