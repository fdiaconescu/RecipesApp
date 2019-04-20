import { Component} from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http'
import { AuthService } from '../../auth/auth.srvice';

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})
export class HeaderComponent {
    constructor(private dataStorageService: DataStorageService,
                private authService: AuthService){}

    onSaveData() {
        this.dataStorageService.storeRecipes().subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }

    onFetchData() {
        this.dataStorageService.getRecipes();
    }

    onLogout(){
        console.log("Logging out ....");
        this.authService.logout();
    }
}