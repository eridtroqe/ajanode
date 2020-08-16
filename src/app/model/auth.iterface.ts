export interface User {
    id?: string;
    email?: string;
    password?: string;
    token?: string;
    expiresIn?: number;
}


export interface Post {
    _id?: string;
    city: string;
    property_type?: string;
    title: string;
    description: string;
    address: string;
    sip: number;
    typology: string;
    rooms?: number;
    toilets: number;
    floor: number;
    type: string;
    price?: number;
    exclusive: boolean;
    position?: number;
    rented?: boolean;
    sold?: boolean;
    prenoted?: boolean;
    imagePath?: Array<string>;
    creator?: string;
    date?: string;
}

export interface PostResponse {
    messsage: string;
    post: Post;
}

export interface PropertiesResponse {
    message?: string;
    properties: Array<any>;
    postsCount?: number;
}

export enum UploadStatus {
    Ready = 'Ready',
    Requested = 'Requested',
    Started = 'Started',
    Failed = 'Failed',
    Completed = 'Completed'
  }

export enum Mode {
    Create = 'create',
    Update = 'update'
}

export interface SearchQuery {
    search: string;
    city: string;
    typology: string;
    peoperty_type: string;
    type: string;
    minSip?: number;
    maxSip?: number;
    minPrice?: number;
    maxPrice?: number;
    floor?: number;
    rooms?: number;
}

export const cities: Array<string> = ['Vlore', 'Tirane', 'Durres', 'Elbasan', 'Shkoder', 'Fier', 'Kamez', 'Korce', 'Berat', 'Lushnje', 'Pogradec', 'Kavaje', 'Gjirokaster', 'Fushe-Kruje', 'Sarande', 'Lac', 'Kukes', 'Patos', 'Lezhe', 'Mamurras', 'Peshkopi', 'Kucove', 'Kruje', 'Vore', 'Burrel', 'Rreshen', 'Milot', 'Divjake', 'Gramsh', 'Bulqize', 'Vau i Dejes', 'Shengjin', 'Klos', 'Ballsh', 'Shijak', 'Ura Vajgurore', 'Rrogozhine', 'Librazhd', 'Cerrik', 'Peqin', 'Bilisht', 'Permet', 'Perrenjas', 'Delvine', 'Divjake', 'Orikum', 'Bajram Curr', 'Tepelene', 'Corovode', 'Erseke', 'Koplik', 'Himare', 'Puke', 'Kelcyre', 'Memaliaj'];
