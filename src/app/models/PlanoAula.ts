import { Disciplina } from '../models/Disciplina';

export class PlanoAula {
    public id: number = 0;
    public titulo: string = "";
    public descricao: string = "";
    public dataCriacao: Date = new Date();
    public disciplina: Disciplina = new Disciplina();
}