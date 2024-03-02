import {
    createSelector,
    createEntityAdaptor
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const scoresheetsAdaptor = createEntityAdaptor({});

const initialState = scoresheetsAdaptor.getInitialState();

export const scoresheetsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getScoresheets: builder.query({
            query: () => "/scoresheets",
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor: 5,
            transformResponse: responseData => {
                const loadedScoresheets = responseData.map(scoresheet => {
                    scoresheet.id = scoresheet._id
                    return scoresheet
                });
                return scoresheetsAdaptor.setAll(initialState, loadedScoresheets)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        {type: "Scoresheet", id: "LIST"},
                        ...result.ids.map(id => ({ type: "Scoresheet", id }))
                    ]
                } else return [{ type: "Scoresheet", id: "LIST" }]
            }
        })
    })
})

export const {
    useGetScoresheetsQuery,
} = scoresheetsApiSlice

export const selectScoresheetsResult = scoresheetsApiSlice.endpoints.getScoresheets.select();

const selectScoresheetsData = createSelector(
    selectScoresheetsResult,
    scoresheetResult => selectScoresheetsResult.data
)

export const {
    selectAll: selectAllScoresheets,
    selectById: selectByScoresheetId,
    selecetIds: selecetScoresheetIds
} = scoresheetsAdaptor.getSelectors(state => selectScoresheetsData(state) ?? initialState)