import { Chip } from '@material-ui/core'
import React from 'react'

const CategoryChip = ({ label }) => {
    return <Chip
        variant="outlined"
        size="small"
        label={`${label}`}
        style={{
            marginRight: '0.5rem',
            color: '#f2a365',
            borderColor: '#f2a365'
        }}
        clickable
    />
}

export default CategoryChip
