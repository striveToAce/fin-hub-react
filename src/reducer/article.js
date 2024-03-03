const articleInitialState = {
  articles: [],
};


const articleReducerFunction = (state, action) => {
  switch (action.type) {
    case "ARTICLE_INSERT":
      return { ...state, articles: [...state.articles, { ...action.payload }] };
  }
};
export { articleInitialState, articleReducerFunction };
