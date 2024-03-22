const baseURL = 'https://api.themoviedb.org/3'

const discover = '/discover'
const movie = '/movie'
const genres = '/genre'
const list = '/list'

const urls = {
    movie: {
        base: `${discover}${movie}`,
        byId: (id: number): string => `${movie}/${id}`
    },
    genres:{
        base: `${genres}${movie}${list}`,
        byGenre:`${discover}${movie}`
    }
}

export {
    baseURL,
    urls
}