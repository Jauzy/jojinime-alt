export const animeQuery = `
query($id: Int) {
    Media(id: $id){
        id
        title {
            romaji
            english
            native
        }
        coverImage {
            extraLarge
            large
            color
        }
        nextAiringEpisode {
            timeUntilAiring 
            episode
        }
        relations {
            edges{
                node {
                    title {
                        romaji
                    }
                    coverImage {
                        large
                        color
                    }
                    genres
                    type
                    format
                }
                relationType
            }
        }
        season
        seasonYear
        format
        bannerImage
        episodes
        description
        genres
        rankings {
            rank
            allTime
            context
            type
        }
        meanScore
        studios {
            edges {
                node {
                    name
                    isAnimationStudio
                }
            }
        }
        trailer {
            id
        }
        status
        externalLinks {
            id
            url
            site
        }
        characters {
            edges {
                id
                role
                node {
                    id
                    name {
                        full
                        first
                        last
                        native
                    }
                    image {
                        medium
                    }
                    description(asHtml: true)
                }
                voiceActors {
                    id
                    name {
                        full
                    }
                    language
                    image {
                        medium
                    }
                }
            }
        }
        streamingEpisodes {
            title
            thumbnail
        }
        recommendations(perPage: 8) {
            edges {
                node {
                    id
                    mediaRecommendation {
                        id
                        title {
                            romaji
                            native
                        }
                        coverImage {
                            extraLarge
                        }
                    }
                }
            }
        }
    }
}
`