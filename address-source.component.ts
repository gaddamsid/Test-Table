import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/Components/header/languages.service';
import { MatSort } from '@angular/material/sort';
import { Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IssuingAgencyModel } from 'src/app/Models/IssuingAgency/issuingAgency.Model';


export interface IssuingAgency {
 
  agencyCode: number;
  agencyFullName: string;
  agencyShortName: string;
  agencyDiscrict:number;
  agencyParkTktsPerBk:number;
  agencyMoveTktsPerBk:number;
  agencyViolTableGroup:string;
  agencyStreetEnforceInd:string;
}

const ELEMENT_DATA: IssuingAgency[] = [
  { agencyCode: 1, agencyFullName: 'Hydrogen', agencyShortName: 'aa',agencyDiscrict:1,agencyParkTktsPerBk:25,agencyMoveTktsPerBk:25,agencyViolTableGroup:'',agencyStreetEnforceInd:''},
  { agencyCode: 2, agencyFullName: 'Helium', agencyShortName: 'aa', agencyDiscrict:2,agencyParkTktsPerBk:25,agencyMoveTktsPerBk:25,agencyViolTableGroup:'',agencyStreetEnforceInd:''},
  { agencyCode: 3, agencyFullName: 'Lithium', agencyShortName: 'aa', agencyDiscrict:3,agencyParkTktsPerBk:25,agencyMoveTktsPerBk:25,agencyViolTableGroup:'',agencyStreetEnforceInd:''},
  { agencyCode: 4, agencyFullName: 'Beryllium', agencyShortName: 'aa', agencyDiscrict:4,agencyParkTktsPerBk:25,agencyMoveTktsPerBk:25,agencyViolTableGroup:'',agencyStreetEnforceInd:''},
  { agencyCode: 5, agencyFullName: 'Boron', agencyShortName: 'aa', agencyDiscrict:5,agencyParkTktsPerBk:25,agencyMoveTktsPerBk:25,agencyViolTableGroup:'',agencyStreetEnforceInd:''},
  { agencyCode: 6, agencyFullName: 'Carbon', agencyShortName: 'aa', agencyDiscrict:6,agencyParkTktsPerBk:25,agencyMoveTktsPerBk:25,agencyViolTableGroup:'',agencyStreetEnforceInd:''},
  { agencyCode: 7, agencyFullName: 'Nitrogen', agencyShortName:'aa', agencyDiscrict:7,agencyParkTktsPerBk:25,agencyMoveTktsPerBk:25,agencyViolTableGroup:'',agencyStreetEnforceInd:''},
  { agencyCode: 8, agencyFullName: 'Oxygen', agencyShortName: 'aa', agencyDiscrict:8,agencyParkTktsPerBk:25,agencyMoveTktsPerBk:25,agencyViolTableGroup:'',agencyStreetEnforceInd:''},
  { agencyCode: 9, agencyFullName: 'Fluorine', agencyShortName: 'aa', agencyDiscrict:9,agencyParkTktsPerBk:25,agencyMoveTktsPerBk:25,agencyViolTableGroup:'',agencyStreetEnforceInd:''},
  { agencyCode: 10, agencyFullName: 'Neon', agencyShortName: 'aa', agencyDiscrict:10,agencyParkTktsPerBk:25,agencyMoveTktsPerBk:25,agencyViolTableGroup:'',agencyStreetEnforceInd:''},
];


@Component({
  selector: 'app-address-source',
  templateUrl: './address-source.component.html',
  styleUrls: ['./address-source.component.scss']
})
export class AddressSourceComponent implements OnInit {
  displayedColumns: string[] = ['agencyCode', 'agencyFullName', 'agencyShortName', 'agencyDiscrict', 'agencyParkTktsPerBk','agencyStreetEnforceInd','agencyViolTableGroup'];
  dataSource = ELEMENT_DATA;
  issuingForm !: FormGroup;
  showForm: boolean = false;
  data: any = [];
  titleAlert: string = 'This field is required';
  

  constructor(  public translate: TranslateService,
    private language: LanguageService,
    private _liveAnnouncer: LiveAnnouncer,) { }

  ngOnInit(): void {
    //Language Code
    this.language.sendLang.subscribe(lang => {
      if (lang != "") {
        this.appendLang(lang);
      }
    });
    //Language Code
    this.issuingForm = new FormGroup({
      'agencyCode': new FormControl('',[ Validators.required, Validators.maxLength(2)]),
      'agencyLongName': new FormControl('', [Validators.required, Validators.maxLength(35)]),
      'agencyShortName': new FormControl('', [Validators.required, Validators.maxLength(10)]),
      'agencyDistrict': new FormControl('', [Validators.maxLength(3)]),
      'agencyParkTktsPerBk': new FormControl('', [Validators.maxLength(2)]),
      'agencyMoveTktsPerBk': new FormControl('', [Validators.maxLength(2)]),
      'agencyStreetEnforceInd': new FormControl('',[Validators.maxLength(1)]),
      'agencyViolTableGroup': new FormControl('',[Validators.maxLength(1)])
    });
    // this.dataSource = new MatTableDataSource<IssuingAgencyModel>(this.data.reverse());
    //   this.dataSource.sort = this.sort;
    //   this.sort.disableClear = true;
    //   this.dataSource.paginator = this.paginator;
  }

  //<<-----------Sorting-------------------------------->>
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  //<<-----------Sorting Ends-------------------------------->>
  //<<-----------Language-------------------------------->>
  appendLang(lang: string) {
    this.translate.use(lang);
  }
  //<<-----------Language-------------------------------->>
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addAgency() {
    
    this.showForm = true;
    console.log(this.issuingForm);
  }
  cancelAdding() {
    this.showForm = false;    
  }

}
