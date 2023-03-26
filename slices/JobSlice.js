import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useRouter } from 'next/router'

// export const AllJObs = createAsyncThunk('jobs/AllJObs', async () => {
//   try {
//     const res = await JobServices.getAllJobs()
//     return res.data
//   } catch (error) {
//     console.log(error)
//   }
// })

// export const getJobDetails = createAsyncThunk(
//   'jobs/getJobDetails',
//   async () => {
//     try {
//       const res = await JobServices.getAllJobs()
//       const userId = window.location.pathname.substring(
//         window.location.pathname.lastIndexOf('/') + 1,
//       )
//       const data = res.data?.data.filter((a) => a.id == userId)
//       return data
//     } catch (error) {
//       console.log(error)
//     }
//   },
// )

const initialState = {
  loading: true,
  userdata: {},
  error: null,
}

const JobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {},
  extraReducers: {
   
  },
})

export default JobSlice.reducer
