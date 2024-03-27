export class Negociacao {

    constructor(
        public readonly _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaDe(dateString: string, valorString: string, quantidadeString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const quantidade = parseInt(valorString);
        const valor = parseFloat(quantidadeString);
        return new Negociacao(date, quantidade, valor);
    }
}