import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const recordsAdaptor = createEntityAdapter({});

const initialState = recordsAdaptor.getInitialState();

export const recordsApiSlice = apiSlice.injectEndpoints({

    endpoints: builder => ({

        getRecords: builder.query({
            query: () => "/records",
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor: 5,
            transformResponse: responseData => {
                const loadedRecords = responseData.map(record => {
                    record.id = record._id
                    return record
                });
                return recordsAdaptor.setAll(initialState, loadedRecords)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        {type: "Record", id: "LIST"},
                        ...result.ids.map(id => ({ type: "Record", id }))
                    ]
                } else return [{ type: "Record", id: "LIST" }]
            }
        }),
    }),
});


export const { useGetRecordsQuery, } = recordsApiSlice;

export const selectRecordsResult = recordsApiSlice.endpoints.getRecords.select();

const selectRecordsData = createSelector(
    selectRecordsResult,
    recordsResult => recordsResult.data
)

export const {
    selectAll: selectAllRecords,
    selectById: selectRecordById,
    selectIds: selectRecordIds
} = recordsAdaptor.getSelectors(state => selectRecordsData(state) ?? initialState)



