import {ResultCodesEnum} from "../api/api";

export type GetUsersType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
export type PostType = {
    id: number
    text: string
    likesCount: number
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null,
    large: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType | any
    photos: PhotosType
    aboutMe: string

}
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}