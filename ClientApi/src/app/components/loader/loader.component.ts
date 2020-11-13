import { Subject }  from 'rxjs';
import { Component } from '@angular/core';
import {LoaderService} from '../loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent  {

  constructor(private loaderService: LoaderService,) { }

  public loading: Subject<boolean> = this.loaderService.isLoading

  ngOnInit(): void {
  }

}
