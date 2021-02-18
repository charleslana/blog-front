export default interface CommentsApiInterface {
    id: number,
    message: string,
    user: {
        avatar_url: string,
        name: string
    }
}