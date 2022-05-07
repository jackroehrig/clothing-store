// ITEMS DATA INTERFACES
export interface ClothingItem {
    collectionId: number;
    mainColor: string;
    secondaryColor: string;
    name: string;
    price: number;
    picture: string;
    s: number;
    m: number;
    l: number;
    xl: number;
    collection_id: number;
}

export interface Hat extends ClothingItem {
    hatId: number;
}

export interface Top extends ClothingItem {
    topId: number;
    shortSleeve: boolean;
    collared: boolean;
    buttonDown: boolean;
}

export interface Bottom extends ClothingItem {
    bottomId: number;
    shorts: boolean;
    swimwear: boolean;
}

export interface Shoe extends ClothingItem {
    shoeId: number;
    category: string;
}

export interface Collection {
    name: string;
    releaseDate: Date;
}

export interface StringParams {
    category: string;
}