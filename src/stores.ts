import { writable } from "svelte/store";

export const adviceData = writable({
    id: 0,
    advice: ""
})
