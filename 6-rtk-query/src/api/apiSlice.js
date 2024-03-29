import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
    tagTypes: ['Tasks'],
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => "tasks",
            providesTags: ['Tasks'],
            transformResponse: (response) => response.sort((a, b) => b.id - a.id),
        }),
        createTask: builder.mutation({
            query: (newTask) => ({
                url: "/tasks",
                method: "POST",
                body: newTask
            }),
            invalidatesTags: ['Tasks']
        }), 
        updateTask: builder.mutation({
            query: (updateTask) => ({
                url: `tasks/${updateTask.id}`,
                method: "PATCH",
                body: updateTask,
            }),
            invalidatesTags: ["Tasks"],
        }),
        deleteTask: builder.mutation({
            query: (taskId) => ({
                url: `tasks/${taskId}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Tasks']
        })
    })
})

export const { useGetTasksQuery, useCreateTaskMutation, useUpdateTaskMutation, useDeleteTaskMutation } = apiSlice;
