export interface Games {
    id?: number;
    title: string;
    desc: string;
    platforms: string;
    dateRelease: string | Date;
    cover: string;
    company: string | Companies;
    publisher: string | Publishers;
    rate: number;
    featured: boolean;
    trailers: string[];
    screenshots: string[];
    linksPurchase: GamesPurchase;
    companyId: number;
}

export interface GamesPurchase {
    id?: number;
    name: string;
    image: string;
    price?: number;
}

export interface Companies {
    id?: number;
    name: string;
    image: string;
}

export interface Publishers {
    id?: number;
    name: string;
    image: string;
}