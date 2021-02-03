export default interface ToastInterface {
    text: string | null,
    type: 'danger' | 'success' | null,
    toastFunction: Function
}