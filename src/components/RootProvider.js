import React from 'react'
import Layout from './Layout'

const RootProvider = ({ element }) => {

    return (
        <Layout>
            { element }
        </Layout>
    )
}

export default RootProvider