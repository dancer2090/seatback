export const anunciantesHandler = {
  name: "posts",
  priority: 10,
  pattern: "posts/:page",
  func: async ({ route, params, state, libraries }) => {
    // 1. Get anunciante
    const response = await libraries.source.api.get({
      endpoint: "posts",
      params: { per_page: (params.page*8+1) },
      _embed: true,
    });
    // 2. add post to state
    const [post] = await libraries.source.populate({ response, state });


    /*
    // 3. add route to data
    Object.assign(state.source.data[route], {
      id: post.id,
      type: post.type,
      isAnunciante: true,
      isPostType: true,
    });*/
  }
}