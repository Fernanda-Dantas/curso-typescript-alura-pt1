import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {

    private element: HTMLElement;

    constructor(seletor: string){
        this.element = document.querySelector(seletor);

    }

    template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                <tr>
                    <th>data</th>
                    <th>qtd</th>
                    <th>valor</th>
                </tr>
                </thead>
                <tbody>
                    ${model.listar().map(negociacao => {
                        return `
                            <tr>
                                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
            </table>
        `;
    }

    update(model: Negociacoes): void {
        const template = this.template(model);
        console.log(template);
        this.element.innerHTML = template;
    }
}