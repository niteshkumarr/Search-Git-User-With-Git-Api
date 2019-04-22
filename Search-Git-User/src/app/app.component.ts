import { Component } from '@angular/core';
import { SearchUserService } from './searchUser.service';
import { prepareProfile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Git User Search Portal';
  profile: any;
  repos: any;
  username: string;

  constructor(private service: SearchUserService) {
}
findProfile() {
  this.service.updateProfile(this.username);
  this.service.getuser().subscribe(profile => {
    this.profile = profile;
    console.log(profile);
  });

  this.service.getUserRepos().subscribe(repos => {
    this.repos = repos;
    console.log(repos);
  });
}

}
