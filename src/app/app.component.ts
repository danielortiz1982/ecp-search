import { Component, OnInit } from '@angular/core'
import { HttpClient }    from '@angular/common/http'
import { FormsModule }   from '@angular/forms'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
    export class AppComponent implements OnInit{
    public search: any = ''
    ecpResults: any []
    scholasticLogo: string = '../assets/img/scholastic-logo.png'
    usersEndpoint: string = 'https://jsonplaceholder.typicode.com/users'

    getUsers(){
      this.http.get<any>(this.usersEndpoint).subscribe( users => users.forEach( el => this.ecpResults.push(el) ) )
    }

    constructor(private http: HttpClient){}

    ngOnInit(){
        this.ecpResults = []
        this.getUsers()
    }
}