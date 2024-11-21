import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productList: Product[] = [
    {
      price: 7895,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7a5cee8a-5b59-443d-b22d-13879f55e7ce/W+AIR+ZOOM+PEGASUS+41+OLY.png',
      name: 'Nike Pegasus 41 Electric',
      rate: '★★★☆☆',
}

,
{
  price: 7395,
    image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b98662cf-c7e1-45fe-97a5-76545df46e31/W+AIR+ZOOM+PEGASUS+41+FP.png',
      name: 'Nike Pegasus 41 Blueprint',
      rate: '★★★☆☆',
    },
    {
      price: 10895,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/890d1a70-dccc-46f3-9c92-1f7c340d2a6b/NIKE+AIR+ZOOM+G.T.+JUMP+2+OLY.png',
      name: 'Nike G.T. Jump 2 Electric  ',
      rate: '★★☆☆☆',
    },
    {
      price:7395,
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e1dfe56f-aef5-4e68-8378-e8c44e9421d6/AIR+ZOOM+PEGASUS+41.png',
      name: 'Nike Pegasus 41',
      rate: '★☆☆☆☆',
    },
    {
      price: 5095,
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8ce97c97-3cb9-4e7f-86f4-6f39eef4b2b2/W+BLAZER+MID+%2777+NEXT+NATURE.png',
      name: 'Nike Blazer Mid 77',
      rate: '★★★★☆',
    },
    {
      price: 2479,
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3be3e847-08d7-4d74-9acd-5985d6d7cf2c/W+BLAZER+MID+%2777+VNTG.png',
      name: 'Nike Blazer Mid 77 Vintage',
      rate: '★★★★',
    },

  ];

  getProductList() {
    return this.productList;
  }
}
