import React from 'react'
import { RecoilRoot } from 'recoil'
import Wrapper from './Wrapper'

const RootProvider = ({ element }) => {

    return (
        <RecoilRoot>
            <Wrapper>
                {element}
            </Wrapper>
        </RecoilRoot>
    )
}

export default RootProvider