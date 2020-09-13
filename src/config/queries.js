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
        }
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
                }
            }
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
                        large
                    }
                    description(asHtml: true)
                }
                voiceActors {
                    id
                    name {
                        full
                    }
                    image {
                        large
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