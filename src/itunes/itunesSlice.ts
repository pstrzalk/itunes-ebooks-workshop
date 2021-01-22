import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreState } from '../store';

export type Ebook = {
  trackId: number;
  artworkUrl100: string;
  trackName: string;
  artistName: string;
  formattedPrice: string;
  averageUserRating: number | undefined;
  userRatingCount: number | undefined;
};

type ItunesState = {
  ebooks: Ebook[];
  starVisible: boolean;
};

export const itunesSlice = createSlice({
  name: 'itunes',
  initialState: {
    ebooks: [],
    starVisible: false,

  } as ItunesState,
  reducers: {
    fetchEbooks(state, action: PayloadAction<string>) {},
    setEbooks(state, action: PayloadAction<Ebook[]>) {
      state.ebooks = action.payload;
    },
    dropEbook(state, action: PayloadAction<Ebook>) {
      state.ebooks = state.ebooks.filter(el => el.trackId != action.payload.trackId);
    },
    setStarVisibility(state, action: PayloadAction<boolean>) {
      state.starVisible = action.payload;
    },
  },
});

export const { fetchEbooks, setEbooks, dropEbook, setStarVisibility } = itunesSlice.actions;

export const selectEbooks = (state: StoreState) => state.itunes.ebooks;

export const selectStarVisible = (state: StoreState) => state.itunes.starVisible;
