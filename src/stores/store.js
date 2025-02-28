import { create } from 'zustand';

export const useNotes = create((set) => ({
    notes: ['one', 'two'],
    addNote: (note) =>
        set((state) => ({
            notes: [...state.notes, note],
        })),
    removeNote: (note) =>
        set((state)=> ({
            notes: state.notes.filter((item)=> note !== item)
        })),
    removeAll: () => 
        set({notes: []}),
    reset: ()=> 
        set({notes: ['one', 'two']}),
    addRandomNumber: () =>
        set((state)=> ({
            notes: [...state.notes, parseInt(Math.random() * 100)]
        }))
}));
