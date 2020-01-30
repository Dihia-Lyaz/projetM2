import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training';
import { HttpClient } from '@angular/common/http';
import { CountryService } from 'src/app/services/country/country.service';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.scss']
})
export class Exercice2Component implements OnInit {
  data: any;
  loading: boolean;
  SlideOptions = {
    loop:true,
    margin:10,
    items: 5,
    dots: true, 
    nav: false,
    autoplayHoverPause:true,
    smartSpeed:500,
    autoWidth:true 
  };  
  constructor(private $ser: CountryService) { }

 
  ngOnInit() {
      this.getData();
  }

  getData() {
    this.loading = true;
    let _this = this;
    this.$ser.getData().subscribe(
      s => {
        this.data = s,
        _this.loading= false;
      },
      error => alert('error !!')
    );
  }

}
