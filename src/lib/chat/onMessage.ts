import { writable } from "svelte/store";
export const onMessageCallbacks = writable<Array<() => void>>([]);
