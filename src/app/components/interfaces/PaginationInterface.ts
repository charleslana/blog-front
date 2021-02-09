export default interface PaginationInterface {
    link: string,
    previous: number | null,
    page: number | undefined,
    next: number | null,
    from: number | null
}