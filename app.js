const yargs = require('yargs');
const notes = require('./notes');

yargs.version('1.0.0');

// Comando: agregar nota
yargs.command({
  command: 'add',
  describe: 'Agrega una nueva nota',
  builder: {
    title: {
      describe: 'Título de la nota',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Contenido de la nota',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Comando: eliminar nota
yargs.command({
  command: 'remove',
  describe: 'Elimina una nota',
  builder: {
    title: {
      describe: 'Título de la nota a eliminar',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

// Comando: listar notas
yargs.command({
  command: 'list',
  describe: 'Muestra todas las notas',
  handler() {
    notes.listNotes();
  }
});

yargs.parse();
