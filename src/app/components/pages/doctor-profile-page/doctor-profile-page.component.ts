import { MemberService } from 'src/app/services/miembro.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/interfaces/members';

@Component({
  selector: 'app-doctor-profile-page',
  templateUrl: './doctor-profile-page.component.html',
  styleUrls: ['./doctor-profile-page.component.scss']
})
export class DoctorProfilePageComponent implements OnInit {

  public member? :Member;
  public members: Member[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private memberService: MemberService  ) { }

  ngOnInit(): void {
    this.memberService.getMiembros();
    this.activatedRoute.params
       .subscribe( ({id}) => {
        this.member = this.getMiembroById(id);
       });
  }

  getMiembroById(id: number): Member {
    this.members = this.memberService.getMiembros();
    var pos = 0;
    for (var i = 0;i<this.members.length ;i++){
     if(this.members[i].id == id ){
      pos=i;
     }
    };
    return this.members[pos];
  }

}
