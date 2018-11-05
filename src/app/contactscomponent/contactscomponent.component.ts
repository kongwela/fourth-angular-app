import { Component, OnInit } from '@angular/core';
import { Contacts } from '../model/contacts';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contactscomponent',
  templateUrl: './contactscomponent.component.html',
  styleUrls: ['./contactscomponent.component.css']
})

export class ContactscomponentComponent implements OnInit {
  contacts: Contacts[];
  contactDataService: ContactsService;

  constructor(private contactsService: ContactsService) {
    this.contactDataService = this.contactsService;
  }

  ngOnInit() {
    this.contacts = this.contactDataService.contacts;
  }
}

