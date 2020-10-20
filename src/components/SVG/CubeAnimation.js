import React from 'react'

import { cubeAnime } from '../../config/utils'

const CubeAnime = props => {

    React.useEffect(() => {
        cubeAnime()
    }, [])
    
    return (
        <div className="svg-cont">
            <svg className='cube-svg' viewBox="0 0 615.23 443.15">
                <g id="shadow">
                    <polygon id="shadow-2" data-name="shadow" className="cls-1"
                        points="307.15 80.38 614.19 266.7 307.05 443.15 0 256.83 307.15 80.38" />
                </g>
                <g id="platform-cont">
                    <g id="platform">
                        <polygon className="cls-2"
                            points="308.08 362.76 307.09 403.11 0.05 216.79 1.04 176.45 308.08 362.76" />
                        <polygon className="cls-3"
                            points="615.23 186.32 614.24 226.66 307.09 403.11 308.08 362.76 615.23 186.32" />
                        <polygon className="cls-4" points="308.19 0 615.23 186.32 308.08 362.76 1.04 176.45 308.19 0" />
                    </g>
                    <polygon id="Square" className="cls-5"
                        points="307.13 56.82 517.99 184.77 307.06 305.94 96.2 178 307.13 56.82" />
                    <polygon id="Triangle" className="cls-6"
                        points="307.13 56.82 517.99 184.77 195.2 238.07 195.2 238.07 307.13 56.82" />
                    <polygon id="Pause-right" className="cls-7"
                        points="307.13 56.82 517.99 184.77 448.15 224.89 237.29 96.94 307.13 56.82" />
                    <polygon id="Pause-left" className="cls-7"
                        points="166.04 137.87 376.9 265.82 307.06 305.94 96.2 178 166.04 137.87" />
                    <polygon id="Line-left" className="cls-7"
                        points="96.2 178 307.06 305.94 307.06 305.94 96.2 178 96.2 178" />
                    <polygon id="Next-right" className="cls-8"
                        points="307.13 56.82 517.99 184.77 227.65 216.51 227.65 216.51 307.13 56.82" />
                    <polygon id="Next-left" className="cls-8"
                        points="131.12 157.93 341.98 285.88 307.06 305.94 96.2 178 131.12 157.93" />
                </g>
            </svg>
        </div>
    )
}

export default CubeAnime