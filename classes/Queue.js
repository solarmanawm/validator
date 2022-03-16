class Queue {
    /**
     * @constructor
     */
    constructor () {
        /**
         * @type {null|object}
         * @private
         */
        this._last = null;

        /**
         * @type {null|object}
         * @private
         */
        this._first = null;
    }

    /**
     * Add a handler to the queue.
     * @param {object} handler
     */
    add (handler) {
        if (this._last === null) {
            this._last = handler;
            this._first = handler;
        } else {
            this._last.next(handler);
            this._last = handler;
        }
    }

    /**
     * Start the queue.
     * @param {object} request
     */
    start (request) {
        if (this._first !== null) {
            this._first.handle(request);
        }
    }
}

export default Queue;
