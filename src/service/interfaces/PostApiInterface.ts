import PostCategoryEnum from "./enums/PostCategoryEnum";

export default interface PostApiInterface {
    id: number,
    title: string,
    description: string,
    category: PostCategoryEnum
}