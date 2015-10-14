/**
 * Stores application constants.
 */
module.exports = {
    /**
     * Defaults for optional fields in product DTO
     */
    PRODUCT_DEFAULTS: {
        PHOTO: '/assets/acme.jpg'
    },

    /**
     * App endpoints list
     */
    ENDPOINTS: {

        /**
         * App api endpoints
         */
        API: {

            /**
             * The list of available products.
             *
             * @remark Service doesn't take into account user role, account permissions or
             * user's location.
             */
            PRODUCTS: '/api/products'
        }
    }
};