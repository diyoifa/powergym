import React from 'react'
import { Stack } from '@mui/system'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <Stack>
        <InfinitySpin color='gray' height={100} width={100}/>
    </Stack>
  )
}

export default Loader
