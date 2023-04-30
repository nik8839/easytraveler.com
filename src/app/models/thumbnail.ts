export class Thumbnail {
    width: number=0;
    url: string='';
    height: number=0;

    public constructor(init?:Partial<Thumbnail>) {
        Object.assign(this, init);
    }

}
