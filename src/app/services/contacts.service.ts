import { Injectable } from '@angular/core';
import { Contacts } from '../model/contacts';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Contacts[] = [
    {
        firstName: 'Loice',
        lastName: 'Ongwela',
        phoneNumber: '3175239857',        
        email: 'sirawaal.com'    
    },   
    
    {
        firstName: 'Tom',
        lastName: 'Onyango',
        phoneNumber: '293-482-2342',
        email: 'tom.onyi@yahoo.com'
    },
    {
        firstName: 'Linus',        
        lastName: 'Obiero',
        phoneNumber: '317-283-4583',
        email: 'linux@gmail.com'
    },
  ];
  constructor() { }
}
