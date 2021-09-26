const noteState = {
  notes: [],
  selectedNote: null,
  isLoading: false,
  error: null,
};

const noteReducer = (state = noteState, action) => {
  let notes = state.notes;
  switch (action.type) {
    case ADD_NOTE:
      notes.unshift(action.payload);
      return {
        ...state,
        isLoading: false,
        error: null,
        notes,
      };

    case EDIT_NOTE:
      notes[notes.map((note) => note.id).indexOf(action.payload.id)] =
        action.payload;
      return {
        ...state,
        isLoading: false,
        error: null,
        selectedNote: null,
        notes,
      };
    case REMOVE_NOTE:
      let index = notes.map((note) => note.id).indexOf(action.payload.id);
      notes.splice(index, 1);
      return {
        ...state,
        isLoading: false,
        error: null,
        selectedNote: null,
        notes,
      };
    case SELECT_NOTE:
      return {
        ...state,
        selectedNote: action.payload,
      };
    case GET_NOTES:
      return {
        ...state,
        isLoading: false,
        notes: action.payload,
        selectedNote: null,
        error: null,
      };
    case NOTE_FORM_RESET:
      return {
        ...state,
        selectedNote: null,
        error: null
      }
    case ERROR_NOTE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        selectedNote: null,
      };
    default:
      return state;
  }
};
