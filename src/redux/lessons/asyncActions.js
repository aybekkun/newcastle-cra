import {createAsyncThunk} from "@reduxjs/toolkit";
import {$host} from "../../axios";


export const fetchMaterials = createAsyncThunk("lessons/fetchMaterials", async (params, thunkAPI) => {
    try {
        const response = await $host.get(`subLessons2/${params.id}`, {
            cancelToken: params.cancelToken,
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue("Не удалось создать lessons");
    }
});

export const createLesson = createAsyncThunk("lessons/createLesson", async (params, thunkAPI) => {
    try {
        const response = await $host.post("lessons", params);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue("Не удалось создать lesson");
    }
});
export const createSubLesson = createAsyncThunk("lessons/createSubLesson", async (params, thunkAPI) => {
    try {
        const response = await $host.post("subLessons", params);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue("Не удалось создать lesson");
    }
});

export const createSubSubLesson = createAsyncThunk("lessons/createSubSubLesson", async (params, thunkAPI) => {
    try {
        const response = await $host.post("subLessons2", params);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue("Не удалось создать lesson");
    }
});

export const createTest = createAsyncThunk("lessons/tests", async (params, thunkAPI) => {
    try {
        const response = await $host.post("tests", params);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue("Не удалось создать lesson");
    }
});
