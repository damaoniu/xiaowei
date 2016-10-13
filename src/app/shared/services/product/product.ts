
export class Product{
    public id:string;
    public unit:any;
    public mainMedia:string;
    public products:Array<any>;
    public levelOnePrice:string;
    public levelTwoPrice:string;
    public levelThreePrice:string;
    public levelFourPrice:string;
    public status:string;
    public currency:string;
    public item:any;
    constructor(public product:JSON){
        this.item=product;
    }

    getCurrency(){
        if(this.item.has('products')){
            return this.item.products[0].product.unit.currency;
        }else{
            return this.item.unit.currency;
        }

    }

}
