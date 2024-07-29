import { Component, inject, OnInit } from '@angular/core';
import { Member } from 'src/app/interfaces/members';
import { MemberService} from 'src/app/services/miembro.service';

@Component({
  selector: 'app-coordinators-page',
  templateUrl: './coordinators-page.component.html',
  styleUrls: ['./coordinators-page.component.scss']
})
export class CoordinatorsPageComponent implements OnInit {

  public members: Member[] = [];
  private memberService= inject(MemberService);

  constructor() { }

  ngOnInit(): void {
    this.getAllMember();
  }

  getAllMember():void{
    this.members = this.memberService.getMiembros();

    //this.memberService.getMiembros()
     //  .subscribe(members => {
     //   this.members = members;
     //  });

    console.log(this.members);
  }

}
