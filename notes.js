const fs = require('fs');

// Cargar notas desde archivo
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    return JSON.parse(dataBuffer.toString());
  } catch (e) {
    return [];
  }
};

// Guardar notas al archivo
const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
};

// Agregar nueva nota
const addNote = (title, body) => {
  const notes = loadNotes();
  const noteExists = notes.find(note => note.title === title);

  if (!noteExists) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log('✅ Nota agregada.');
  } else {
    console.log('⚠️ Ya existe una nota con ese título.');
  }
};

// Eliminar nota
const removeNote = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter(note => note.title !== title);

  if (notes.length > newNotes.length) {
    saveNotes(newNotes);
    console.log('🗑️ Nota eliminada.');
  } else {
    console.log('❌ Nota no encontrada.');
  }
};

// Mostrar lista de notas
const listNotes = () => {
  const notes = loadNotes();
  console.log('📒 Tus notas:');
  notes.forEach(note => {
    console.log(`- ${note.title}: ${note.body}`);
  });
};

module.exports = { addNote, removeNote, listNotes };
