/* eslint-disable max-len */
/* eslint-disable eqeqeq */
/* eslint-disable arrow-parens */
/* eslint-disable import/no-extraneous-dependencies */
import { nanoid } from 'nanoid';
import Data from './localhostContext';


class Leave {
  leaveId?: string 
  personId?: string 
  kindLeave?: string 
  startDateOfLeave?: string 
  endDateOfLeave?: string 
  replacementPerson?: string 
  dateOfApplication: Date
  holidayWorkerApprovalStatus?: string 
  supervisorComment?: any 
  supervisorApprovalStatus?: any 

  constructor(id?: string, leave?: string, startDate?: string, endDate?: string, person?: string) {
    this.leaveId = nanoid(10);
    this.personId = id;
    this.kindLeave = leave;
    this.startDateOfLeave = startDate;
    this.endDateOfLeave = endDate;
    this.replacementPerson = person;
    this.dateOfApplication = new Date();
    this.holidayWorkerApprovalStatus = 'planned';
    this.supervisorComment = null;
    this.supervisorApprovalStatus = null;
  }

  leaveCounter(personId: string) {
    const userData = new Data('leavePlan');
    const userDataGet = userData.getData();
    const parseMillisecond = (millisecond : number) => millisecond / 86400000;
    return userDataGet.filter((el: any) => el.personId == personId).map((el:any) => {
      const objSubtract = {
        personNumber: personId,
        leaveNumber: el.leaveId,
        subtractDay: parseMillisecond(new Date(el.endDateOfLeave).getTime() - new Date(el.startDateOfLeave).getTime()),
        howMuchTimeToStart: Math.round(parseMillisecond(new Date(el.startDateOfLeave).getTime() - this.dateOfApplication.getTime())),
      };
      return objSubtract;
    });
  }
}

export default Leave;
