import { StateCreator } from "zustand";

type Notification = {
    text: string
    error: boolean
    show: boolean
}


export type NotificationSliceType = {
    notification: Notification
    showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void
}

export const createNotificacionSlice : StateCreator<NotificationSliceType> = (set) => ({
    notification : {} as Notification,
    showNotification: (payload) => {    
        set({
            notification: {
                text: payload.text,
                error: payload.error,
                show: true
            }
        })
    }
})