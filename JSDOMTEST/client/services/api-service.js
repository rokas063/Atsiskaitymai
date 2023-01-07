const SERVER_ADDRESS = 'http://localhost:3000';
const TACO_COLLECTION_NAME = 'items';

const formatError = (error) => {
    return error.message;
}

const ApiService = {
    async gettacoStore() {
        try {
            const response = await fetch(`${SERVER_ADDRESS}/${TACO_COLLECTION_NAME}`);
            const items = await response.json();

            return items;
        } catch (error) {
            throw formatError(error);
        }
    },

    async deletetaco( {id, title} ) {
        try {
            const response = await fetch(`${SERVER_ADDRESS}/${TACO_COLLECTION_NAME}/${id}`, {
                method: 'DELETE',
            });
            if (response.status === 404) {
                throw new Error(`Element "${title}" no longer exists.`)
            }
            const deletedItem = await response.json();

            return deletedItem;
        } catch (error) {
            throw formatError(error);
        }
    },

    async createtaco(tacoData){
        try {
            const response = await fetch(`${SERVER_ADDRESS}/${TACO_COLLECTION_NAME}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tacoData),
            });

            if (response.status === 404) {
                throw new Error(`Failed to Create new Todo`)
            }

        } catch (error) {
            throw formatError(error);
        }
    },

    async updatetaco({ id, props }) {
        try {
            const response = await fetch(`${SERVER_ADDRESS}/${TACO_COLLECTION_NAME}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(props),
            });

            if (response.status === 404) {
                throw new Error(`Failed to update Todo`);
            }

        } catch (error) {
            throw formatError(error);
        }
    }

};

export default ApiService;