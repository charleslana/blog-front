import PostCategoryEnum from "./enums/PostCategoryEnum";

export default interface PostInterface {
    id: number,
    title: string,
    description: string,
    category: PostCategoryEnum
}