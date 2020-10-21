import React from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Skeleton from '@material-ui/lab/Skeleton'

const RecommendationsSection = props => {
    const { recommendations } = props
    return (
        <section id='recommendations' style={{ marginTop: '0em' }}>
            <Grid container spacing={recommendations ? 0 : 1} style={{ paddingBottom: '5em', paddingTop: '3em', overflow: 'hidden' }}>
                {recommendations ? recommendations?.edges.map((item, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Link to={`/anime-page?id=${item.node.mediaRecommendation.id}`}>
                            <div className="style_prevu_kit">
                                <img src={item.node.mediaRecommendation.coverImage.extraLarge} alt='recommendation' />
                                <div>
                                    <Typography variant='h6'>
                                        {item.node.mediaRecommendation.title.native}
                                    </Typography>
                                    <Typography variant='h6'>
                                        {item.node.mediaRecommendation.title.romaji}
                                    </Typography>
                                </div>
                            </div>
                        </Link>
                    </Grid>
                )) :
                    [1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                        <Grid item xs={12} sm={6} md={3} key={item + 'reccskeleton'}>
                            <Skeleton variant='rect' width='100%' height='50vh' />
                        </Grid>
                    ))
                }
            </Grid>
        </section>
    )
}

export default RecommendationsSection