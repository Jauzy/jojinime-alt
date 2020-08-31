import React from 'react'
import { Link } from 'gatsby'

const SteamGame = props => {
    const { anime, url } = props

    const Card = () => (
        <div className={'steam-game-container'}>
            <div className="b-game-card">
                <div className="b-game-card__cover"
                    style={{ backgroundImage: `url(${anime?.coverImage?.extraLarge})`, borderRadius: '10px' }} />
            </div>
        </div>
    )

    return (
        url ?
            <Link to={url}>
                <Card />
            </Link >
            :
            <Card />
    )
}

export default SteamGame