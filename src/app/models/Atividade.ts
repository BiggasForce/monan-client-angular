import { Disciplina } from '../models/Disciplina';
import { Nota } from '../models/Nota';

export class Atividade {
    public id: number = 0;
    public nome: string = "";
    public descricao: string = "";
    public dataEntrega: Date = new Date();
    public disciplina: Disciplina = new Disciplina();
    public nota: Nota = new Nota();
}