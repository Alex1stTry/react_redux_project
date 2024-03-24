const baseURL = 'https://api.themoviedb.org/3'

const discover = '/discover'
const movie = '/movie'
const genres = '/genre'
const list = '/list'
const search = '/search'

const urls = {
    movie: {
        base: `${discover}${movie}`,
        byId: (id: number): string => `${movie}/${id}`
    },
    genres: {
        base: `${genres}${movie}${list}`,
    },
    search: `${search}/${movie}`
}

export {
    baseURL,
    urls
}