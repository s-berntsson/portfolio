import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchPhotos from './fetchPhotos';

const initialState = {
    status: "idle",
    entities: {
    },
    ids: []
}

export const loadPhotos = createAsyncThunk(
    'photos/fetchPhotos',
    async () => {
        const response = await fetchPhotos()
        return response
    }
)

export const photosSlice = createSlice({
    name: 'photos',
    initialState,

    reducers: {
        clearPhotos: (state) => {
            state.entities = {}
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadPhotos.pending, state => {
            state.status = 'loading'
        })
        .addCase(loadPhotos.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.entities = action.payload.entities
            state.ids = action.payload.ids
        })
        .addCase(loadPhotos.rejected, state => {
            state.status = 'failed'
        })
    }
})

export const { clearPhotos } = photosSlice.actions

export const selectPhotoData = state => state.photos.entities

export const selectPhotoIds = state => state.photos.ids

export default photosSlice.reducer