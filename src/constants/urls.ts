const baseURL = 'https://api.themoviedb.org/3'

const discover = '/discover'
const movie = '/movie'

const urls = {
    movie: {
        base: `${discover}${movie}`,
        byId: (id: number): string => `${movie}/${id}`
    }
}

export {
    baseURL,
    urls
}