export default function readItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Harry Houdini' },
        { id: 2, name: 'Dorothy Dietrich' },
        { id: 3, name: 'Criss Angel' },
        { id: 4, name: 'Dean Gunnarson' },
        { id: 5, name: 'Robert Gallup' },
      ]);
    }, 2000);
  });
}
