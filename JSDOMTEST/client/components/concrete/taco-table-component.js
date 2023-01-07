class tacoTableComponent {
    htmlElement;
    tbodyHtmlElement;

    onDeletetaco;
    onUpdatetaco;

    constructor({ tacoStore, onDeletetaco, onUpdatetaco }) {
        this.htmlElement = document.createElement('table');
        this.htmlElement.className = 'table table-striped shadow';
        this.htmlElement.innerHTML = `
    <thead class="bg-dark text-white">
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody></tbody>`;
        this.onDeletetaco = onDeletetaco;
        this.onUpdatetaco = onUpdatetaco;
        this.tbodyHtmlElement = this.htmlElement.querySelector('tbody');
        this.renderTacoStore(tacoStore);
    }

    enableRowEditAction = ({
                               isBeingEdited,
                               tr,
                               editButton,
                               cancelEditing,
                               enableEditing
                           }) => {
        document.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!tr.contains(e.target)) cancelEditing();
        });

        editButton.addEventListener('click', () => {
            if (isBeingEdited) cancelEditing()
            else enableEditing();
        });
    }

    enableRowUpdateAction = ({
                                 id,
                                 titleColumn,
                                 priceColumn,
                                 initialState,
                                 updateButton,
                                 cancelEditing
                             }) => {
        updateButton.addEventListener('click', () => {
            const props = {
                id,
                title: titleColumn.textContent,
                price: Number(priceColumn.textContent),
            };

            if (initialState.title !== props.title || initialState.price !== props.price) {
                this.onUpdatetaco({ id, props });
            } else {
                cancelEditing();
            }
        });
    }

    enableRowActions = ({ tr, id, title, price }) => {
        let isBeingEdited = false;
        const initialState = { title, price };
        const delButton = tr.querySelector('.btn-danger');
        const updateButton = tr.querySelector('.btn-success');
        const editButton = tr.querySelector('.btn-warning');
        const titleColumn = tr.querySelector('.js-title-col');
        const priceColumn = tr.querySelector('.js-price-col')


        const cancelEditing = () => {
            tr.classList.remove('taco-table__row--editable');
            editButton.innerHTML = 'E';
            editButton.classList.replace('btn-info', 'btn-warning');
            titleColumn.setAttribute('contenteditable', 'false');
            priceColumn.setAttribute('contenteditable', 'false');
            titleColumn.textContent = initialState.title;
            //priceColumn.textContent = initialState.price;
            isBeingEdited = false;
        };

        const enableEditing = () => {
            tr.classList.add('taco-table__row--editable');
            editButton.innerHTML = 'X';
            editButton.classList.replace('btn-warning', 'btn-info');
            titleColumn.setAttribute('contenteditable', 'true');
            priceColumn.setAttribute('contenteditable', 'true');
            isBeingEdited = true;
        };

        const rowProps = {
            // Props
            id,
            initialState,
            isBeingEdited,
            // Elements
            tr,
            titleColumn,
            priceColumn,
            delButton,
            updateButton,
            editButton,
            // functions
            cancelEditing,
            enableEditing,
        };

        //this.enableRowDeleteAction(rowProps);
        this.enableRowEditAction(rowProps);
        this.enableRowUpdateAction(rowProps);
    }



    //------------------------------
    createRowHtmlElement = ({ id, title, price }) => {
        const tr = document.createElement('tr');
        tr.className = 'taco-table__row';
        tr.innerHTML = `
      <td>${id}</td>
      <td class="js-title-col">${title}</td>
      <td class="js-price-col">${price.toFixed(2)}</td>
      <td class="d-flex justify-content-end gap-2">
        <button class="btn btn-success btn-sm">✓</button>
        <button class="btn btn-warning btn-sm">E</button>
        <button class="btn btn-danger btn-sm"><span class="bi bi-trash"></span></button>
      </td>`;

        const delButton = tr.querySelector('.btn-danger');
        delButton.addEventListener('click', () => this.onDeletetaco({ id, title }));

        this.enableRowActions({ tr, id, title, price });

        return tr;
    }

    rendertacoStore = (tacoStore) => {
        this.tbodyHtmlElement.innerHTML = null;
        const rowsHtmlElements = tacoStore.map(this.createRowHtmlElement);
        this.tbodyHtmlElement.append(...rowsHtmlElements);
    }
}

export default tacoTableComponent;