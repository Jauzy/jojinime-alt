import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const RecommendationsSection = props => {
    const { recommendations } = props
    return (
        <section id='recommendations' style={{ marginTop: '0em' }}>
            <Grid container spacing={0} style={{ paddingBottom: '5em', paddingTop: '3em', overflow: 'hidden' }}>
                {recommendations?.edges.map((item, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
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
                    </Grid>
                ))}
            </Grid>
        </section>
    )
}

export default RecommendationsSection