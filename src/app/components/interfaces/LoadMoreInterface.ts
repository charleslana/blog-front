export default interface LoadMoreInterface {
    text: string;
    next: number | null;
    function: Function;
    loading: boolean;
}