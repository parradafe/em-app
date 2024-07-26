import { create } from 'zustand'
import { produce } from "immer";


const initialState = {
    knobs: {
        one: 0,
        two: 0,
        three: 0,
        four: 0,
    },
    room_temperature: 0,
    notes: '',

    combinations: []
};

export const useMachineConfigStore = create((set, get) => ({
    ...initialState,
    setKnobData: (knobId, event) => {
        set(produce(state => {
            state.knobs[knobId] = event?.target?.value;
        }))
    },
    setRoomTemperature: (temperature) => set({ room_temperature: temperature }),
    setNote: (note) => set({ notes: note }),
    saveCombination: () => {
        set(produce(state => { 
            state.combinations = [
                ...state.combinations, 
                {
                    knobs : state.knobs,
                    room_temperature: state.room_temperature,
                    notes: state.notes
                }
            ] 
        }))
    }
}))