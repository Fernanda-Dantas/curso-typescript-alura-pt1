import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View <Negociacoes> {


    protected template(model: Negociacoes): string {
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
                                <td>${this.formatarData(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
            </table>
        `;
    }

    private formatarData(data: Date) {
        return new Intl.DateTimeFormat().format(data);
    }


}