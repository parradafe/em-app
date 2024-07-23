import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';


type Product = {
    id ?: string;
    name : string;
    unit : string; //TODO: add enum or list type
}

// type ExtendedProduct = Product & {products : []}

const initialState = {
    name : '',
    unit: '',
    products: [],
};

interface IProduct {
    setName : (name : string) => void;
    setUnit : (unit : string) => void;
    reset: () => void;

    registerProduct: (product : Partial<Product> ) => void;
}



export const useProductStore = create((set) => ({
    ...initialState,
    setName : (name : string) => set(() => ({ name })),
    setUnit : (unit : string) => set(() => ({ unit })),

    registerProduct: ( product : Partial<Product> ) => set((state: any) => ({ products: [...state.products, {...product, id: uuidv4()}]})),

    reset: () => set(initialState)
}))