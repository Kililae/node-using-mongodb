import { addnewProduct } from '../controllers/controllers';

export const routes = (app) => {
    // Post endpoint
    app.route('/products')
        .post(addnewProduct)
};