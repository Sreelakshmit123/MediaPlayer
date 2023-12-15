 import { commonAPI } from "./commonAPI";
 import { SERVER_URL } from "./serverURL";

 //upload new video
export const uploadNewVideoAPI = async ()=>{
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}

//get all videos

export const getAllVideosAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}

//view single video

export const getAllVideoAPI = async (id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")
}

//Remove video

export const removeVideoAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
}

//insert video to history

export const allVideosToHistoryAPI = async (video)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,video)
}

// get video from history

export const getHistoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

//REMOVE HISTORY
export const removeHistoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
}

//add category

export const addCategoryAPI = async (category)=>{
    return await commonAPI("POST",`${SERVER_URL}/categories`,category)
}

//getallcategory

export const getAllCategoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")
}

