export abstract class View <T> { // Classe abstrata genérica

    protected element: HTMLElement;

    constructor(seletor: string){
        this.element = document.querySelector(seletor);

    }

    public update(model: T): void {
        const template = this.template(model);
        console.log(template);
        this.element.innerHTML = template;
    }

   protected abstract template(model: T): string;

}