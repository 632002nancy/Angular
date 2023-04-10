//state management folder
import { createActionGroup, props } from '@ngrx/store';
import { Book } from '../book-list/book-model';

//describe the book actions Book actions include the book list retrieval, and the add and remove book actions.

//action created to add and remove book
export const BooksActions = createActionGroup({
    source: 'Books',
    events: {
      'Add Book': props<{ bookId: string }>(),
      'Remove Book': props<{ bookId: string }>(),
    },
  });

  //action to retrieve book list
  export const BooksApiActions = createActionGroup({
    source: 'Books API',
    events: {
      'Retrieved Book List': props<{ books: ReadonlyArray<Book> }>(),
    },
  });