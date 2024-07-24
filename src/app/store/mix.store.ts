import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';


const initialState = {
    itemId: '',
    productName: '',
    productId: '',
    productQuantity: 0,

    products: [],
}

export const useMixStore = create((set, get) => ({
    ...initialState,


    setProduct: (name, id) => set(() => ({ productName: name, productId: id })),
    setQuantity: (quantity) => set(() => ({ productQuantity: quantity })),

    addProduct: () => {
        const products = get().products;
        const itemExists = products.find(it => it.productName === (get().productName));

        if (!itemExists) {
            set((state) => ({ products: [...state.products, { productName: state.productName, productId: state.productId, productQuantity: state.productQuantity }] }))
            return;
        }

        set({
            products: [
                { productName: get().productName, productId: get().productId, productQuantity: get().productQuantity },
                ...products.filter(p => p.productId !== itemExists.productId)
            ]
        })
    },
    removeProduct: (itemId) => {
        const newArray = get().products.filter(p => p.productId !== itemId)
        set({ products: newArray })
    },

    loadItem: (productId) => {
        const { productName, productQuantity } = (get().products).find(p => p.productId === productId);
        set({ productName: productName, productQuantity: productQuantity })
    },

    reset: () => {
        set((state) => {
            const prods = state.products;
            return { ...initialState, prods }
        })
    }
}))