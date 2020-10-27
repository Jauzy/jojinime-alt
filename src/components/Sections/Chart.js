import React from 'react'
import Box from '@material-ui/core/Box'
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
} from '@devexpress/dx-react-chart-material-ui';


const Graph = props => {
    let data = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]
    data = data.map((itm, idx) => ({
        argument: idx, value: Math.random() * 100
    }))

    return (
        <Box>
            <Chart
                data={data}
            >
                <ArgumentAxis />
                <ValueAxis />

                <LineSeries valueField="value" argumentField="argument" />
            </Chart>
        </Box>
    )
}

export default Graph