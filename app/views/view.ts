export abstract class View <T> { // Classe abstrata genérica

    protected element: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean){
        this.element = document.querySelector(seletor);
        if (escapar) {
            this.escapar = escapar;
        }

    }

    public update(model: T): void {
        let template = this.template(model);
        if(this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        
        this.element.innerHTML = template;
    }

   protected abstract template(model: T): string;

}