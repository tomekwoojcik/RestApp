/* eslint-disable max-len */
/* eslint-disable eqeqeq */
/* eslint-disable arrow-parens */
/* eslint-disable import/no-extraneous-dependencies */
import { nanoid } from 'nanoid';
import Data from './localhostContext';

class Leave {
  leaveId: string,
  personId: string,
  
  constructor(id: string, leave: string, startDate: string, endDate: string, person: string) {
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

  leaveCounter(personId) {
    const userData = new Data('leavePlan');
    const userDataGet = userData.getData();
    const parseMillisecond = millisecond => millisecond / 86400000;
    return userDataGet.filter(el => el.personId == personId).map(el => {
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
