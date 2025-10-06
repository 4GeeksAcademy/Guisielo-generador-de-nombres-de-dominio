  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extensiones=['.com', '.net','.us','.io','.es'];

  for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let ext of extensiones) {
        console.log(p + a + n + ext);

        // "Domain hack": si el sustantivo termina igual que la extensión, lo cortamos
        if (n.endsWith(ext.replace('.', ''))) {
          let hacked = p + a + n.slice(0, n.length - ext.length + 1) + ext;
          console.log(hacked + "  <-- hackeado 😎");
        }
      }
    }
  }
}