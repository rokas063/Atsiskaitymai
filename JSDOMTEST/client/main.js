import ApiService from './services/api-service.js';
import HeaderComponent from './components/concrete/header-component.js';
import tacoTableComponent from "./components/concrete/taco-table-component.js";
import ContainerComponent from "./components/wrappers/container-component.js";
import AddtacoFormComponent from "./components/concrete/taco-form-component.js";

const rootHtmlElement = document.querySelector('#root');
if (rootHtmlElement === null) throw new Error('Error: #root element  was not found in HTML file.');

let TacoTableComponent;
let addTacoFormComponent;

const onDeletetaco = async ({ id, title }) => {
    try {
        await ApiService.deletetaco({ id, title });
    } catch (error) {
        alert(error);
    } finally {
        const tacoStore = await ApiService.gettacoStore();
        TacoTableComponent.rendertacoStore(tacoStore);
    }
}

const onCreatetaco = async ({ title, price }) => {
    try {
        await ApiService.createtaco({ title, price });
    } catch (error) {
        alert(error);
    } finally {
        const tacoStore = await ApiService.gettacoStore();
        TacoTableComponent.rendertacoStore(tacoStore);
    }
}

const onUpdatetaco = async ({ id, props }) => {
    try {
        await ApiService.updatetaco({ id, props });
    } catch (error) {
        alert(error);
    } finally {
        const tacoStore = await ApiService.gettacoStore();
        TacoTableComponent.rendertacoStore(tacoStore);
    }
}

ApiService.gettacoStore().then( (tacoStore) => {
    TacoTableComponent = new tacoTableComponent( {tacoStore, onDeletetaco, onUpdatetaco});
    const headerComponent = new HeaderComponent({
        text: 'Taco Store',
        className: 'text-center my-4 fw-normal',
    });
    addTacoFormComponent = new AddtacoFormComponent( {onSubmit: onCreatetaco})

    const container = new ContainerComponent({
        children: [
            headerComponent.htmlElement,
            addTacoFormComponent.htmlElement,
            TacoTableComponent.htmlElement,
        ],
    });

    rootHtmlElement.append(
        container.htmlElement,
    );
})