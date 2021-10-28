//alternatif yöntem
import {INCREASE_COUNTER, DECREASE_COUNTER, RESET} from "./ActionTypes";

export const arttır = () => {
    return {
        type: INCREASE_COUNTER,
    }
}
export const eksilt = () => {
    return {
        type: DECREASE_COUNTER,
    }
}
export const reset = () => {
    return {
        type: RESET,
    }
}