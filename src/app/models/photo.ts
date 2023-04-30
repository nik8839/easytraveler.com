import { Images } from "./images";

export class Photo {
    images: Images = new Images;

    is_blessed: boolean = false;
    uploaded_date: string = '';
    caption: string = '';
    id: number = 0;
    helpful_votes:number=0;
    published_date:string='';

    public constructor(init?: Partial<Photo>) {
        Object.assign(this, init);
    }
}
