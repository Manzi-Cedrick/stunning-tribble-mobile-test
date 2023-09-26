import { View, Text } from 'react-native'
import React from 'react'

interface Props<T = any> {
    data: T[];
    renderItem: (item: T) => React.ReactNode;
    numColumns?: number;
    gap?: number;
}

const GridView = (props: Props) => {
    const { data, renderItem, numColumns = 2, gap = 2 } = props

    return (
        <View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap',}}>
            {data.map((item, index) => (
                <View key={index} style={{ width: `${100 / numColumns}%`, padding: gap }}>
                    {renderItem(item)}
                </View>
            ))}
        </View>
    )
}
export default GridView