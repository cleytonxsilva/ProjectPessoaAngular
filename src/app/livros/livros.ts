export class Livros {
    titulo!: string;
    ano!: number;
    editora!: string;

    constructor(titulo: string, ano: number, editora: string){
        this.titulo = titulo;
        this.ano = ano;
        this.editora = editora;
    }
}
