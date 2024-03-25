import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private negociacoes = new Negociacoes;

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputValor = document.querySelector('#valor');
        this.inputQuantidade = document.querySelector('#quantidade');

    }

    adiciona(): void {
        const negociacao = this.criarNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.negociacoes.listar();
        console.log(this.negociacoes.listar());
        this.limparFormulario();
    }

    criarNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
       return new Negociacao(date, quantidade, valor);
    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

}