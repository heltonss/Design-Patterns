export default class Database {
    private static instance: Database
    constructor() {
        console.info('é o mesmo objeto para todas as chamadas')
    }

    /**
     * name
     */
    public static getInstance() {
        if (this.instance == null) {
            this.instance =  new Database();
            console.info('um objeto novo foi criado');
        }

        return this.instance
    }

    /**
     * query
     */
    public query(sql: string) {
        console.info(`SELECT ${sql}`)
    }
}