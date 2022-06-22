import { Injectable } from '@angular/core';
import { MemberModel } from 'src/app/models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberCardService {

  member: MemberModel;
  viewMSAMenu: boolean;

  constructor() { }

  setMemberData(memberData) {
    this.member = memberData;
  }

  setViewMSAMenu(allow: boolean) {
    this.viewMSAMenu = allow;
  }
}
