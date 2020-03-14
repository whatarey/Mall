

// import { request } from './request';

import { request, request2 } from './Axions';

export function getHomedata() { 
 return request({url:"/home/multidata"}); 
}