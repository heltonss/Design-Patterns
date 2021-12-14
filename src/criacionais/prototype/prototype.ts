import Forma from "./forma";

export default interface Prototype {
    clone(): Prototype;
}