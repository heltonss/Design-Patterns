import Database from "./singleton";

class Main {
   private firstInstanceDatabase: Database; 
   private secondeInstanceDatabase: Database; 

    constructor(){
      this.firstInstanceDatabase  = Database.getInstance();
      this.firstInstanceDatabase.query('primeira query');

      this.secondeInstanceDatabase  = Database.getInstance();
      this.secondeInstanceDatabase.query('segunda query');
    }
   
    /**
     * validatePattern
     * ambos objetos são da mesma intancia
     */
    public validatePattern() {
      if (this.firstInstanceDatabase ===  this.secondeInstanceDatabase) {
        console.info('ambos os objetos são da mesma instancia')
      }else{
        console.info('Singleton falhou, as propriedades são instancias diferentes')

      }
    }

}

new Main().validatePattern();