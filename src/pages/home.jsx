import { useNotes } from '../stores/store';

export function RenderHome() {
    const { notes, addNote, removeNote, removeAll, reset, addRandomNumber } =
        useNotes();
    return (
        <>
            <form
                action={''}
                onSubmit={(e) => {
                    e.preventDefault();
                    addNote(e.target.note.value);
                }}>
                <label htmlFor="note">New note:</label>
                <input type="text" id="note" name="note" className="border" />
                <button
                    className="bg-blue-600 text-white p-2 type"
                    type="submit">
                    Submit
                </button>
            </form>

            {notes.map((note) => (
                <div key={note}>
                    <p>{note}</p>
                    <button
                        className="bg-red-600 text-white p-2 rounded"
                        onClick={() => {
                            removeNote(note);
                        }}>
                        Delete note
                    </button>
                </div>
            ))}
            <button
                className="bg-red-600 text-white rounded p-2"
                onClick={() => {
                    addRandomNumber();
                }}>
                Add Random Number
            </button>
            <button
                className="bg-red-600 text-white rounded p-2"
                onClick={() => {
                    removeAll();
                }}>
                Delete All Notes
            </button>
            <button
                className="bg-red-600 text-white rounded p-2"
                onClick={() => {
                    reset();
                }}>
                Reset All Notes
            </button>
        </>
    );
}
