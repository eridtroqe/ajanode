export interface User {
    id?: string;
    email?: string;
    password?: string;
    token?: string;
    expiresIn?: number;
}


export interface Post {
    id?: string;
    title: string;
    description: string;
    address: string;
    sip: string;
    typology: string;
    rooms: string;
    toilets: string;
    floor: string;
    type: string;
    price: string;
    imagePath?: Array<string>;
    creator?: string;
}

export interface PostResponse {
    messsage: string;
    post: Post;
}

export interface PropertiesResponse {
    message: string;
    properties: Array<any>;
    postsCount: number;
}