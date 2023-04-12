import { initialBookState } from '../state/book.state';
import * as bookActions from 'src/app/action/book.action';
import { createReducer, on,Action } from '@ngrx/store';

const booksReducer = createReducer(
    initialBookState,
    on(bookActions.Init, (state) => ({ ...state, loaded: false, error: null })),
    on(bookActions.LoadBooks, (state) => ({
      ...state,
      loaded: false,
      error: null,
    })),
    on(bookActions.LoadBooksSuccess, (state, { data }) => ({
      ...state,
      books: data,
      loaded: true,
      error: null,
    })),
    on(bookActions.LoadBooksFailure, (state, { error }) => ({ ...state, error })),
    on(bookActions.AddBookSuccess, (state, { data }) => {
        let books = [...state.books];
        books.push(data);
        return {
          ...state,
          books: books,
          loaded: true,
          error: null,
        };
      }),
      on(bookActions.LoadBooksFailure, (state, { error }) => ({ ...state, error }))
    );
    
    // export function reducer(state: BookState | undefined, action: Action) {
    //   return booksReducer(state, action);
    // }
    