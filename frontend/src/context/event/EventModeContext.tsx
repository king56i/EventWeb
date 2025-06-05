import { createContext, useContext } from "react";

export type EventMode = "active" | "trash";

export const EventModeContext = createContext<EventMode>("active");

export const useEventMode = () => useContext(EventModeContext);