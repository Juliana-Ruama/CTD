function aluno (nomeAluno, faltasAluno, notasAluno)  {
  this.nome = nomeAluno,
  this.qtdFaltas = faltasAluno,
  this.notas = notasAluno,
  this.calcularMedia = () =>{
    let notas = 0
    this.notas.forEach(nota => {
      notas += nota;
    });

    let qtdNotas = this.notas.lenght;

    return notas/ qtdNotas;
  },

  this.faltas = ()=>{
    this.qtdFaltas +=1;
    return this.qtdFaltas;
  }

}
  
  module.exports = aluno;