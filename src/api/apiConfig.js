const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '4426957932c3bba1f35d6246021a6aaf',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;