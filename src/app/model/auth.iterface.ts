export interface User {
    id?: string;
    email?: string;
    password?: string;
    token?: string;
    expiresIn?: number;
}


export interface Post {
    _id?: string;
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
    date?: string;
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

export enum UploadStatus {
    Ready = 'Ready',
    Requested = 'Requested',
    Started = 'Started',
    Failed = 'Failed',
    Completed = 'Completed'
  }