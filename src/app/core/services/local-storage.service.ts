import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getFromStorage(itemName){
    return JSON.parse(localStorage.getItem(itemName));
  }

  setInStorage(itemName , item){
    localStorage.setItem(itemName , JSON.stringify(item))
  }
}
