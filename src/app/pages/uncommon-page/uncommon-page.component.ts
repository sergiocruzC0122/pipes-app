import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';


const client1 = {
  name: 'Fernando',
  gender: 'male',
  age: 39,
  address: 'Ottawa, Canadá'
}

const client2 = {
  name: 'Melissa',
  gender: 'female',
  age: 30,
  address: 'Toronto, Canadá'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent, 
    I18nSelectPipe, 
    I18nPluralPipe, 
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe,
  ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  //i18m Select
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo' ,
    female: 'invitarla',
  }

  changeClient(){
    if (this.client() === client1){
      this.client.set(client2);
      return;
    }

    this.client.set(client1)
  }


  //i18m Plural

  clientsMap = signal ({
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    other: 'tenemos # clientes esperando',
  })

  clients = signal([
    'Maria',
    'Nicolas',
    'Juan',
    'Pedro',
    'Martin',
    'Sergio',
    'Fernanda',
    'Sara',
  ]);

  deleteClient(){
    this.clients.update((prev) => prev.slice(1));
  }
  
  // keyValue pipe
  profile = {
    name: 'Nicolas',
    age: 24,
    address: 'Pereira, Colombia',
  };

  // Async pipe

  promiseValue: Promise<string> = new Promise ((resolve, reject) =>{
    setTimeout(() => {
      // reject('Tenemos un error en la data ')
      resolve('Tenemos data en la promesa. ');
      console.log('Promesa finalizada. ')
    }, 2000)
  })

  myObservableTimer = interval(2000).pipe(
    map( (value) => value + 1),
    tap( (value) => console.log('tap:', value)));
}
