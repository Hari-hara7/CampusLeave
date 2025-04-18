export interface User {
    _id: string;
    name: string;
    email: string;
    role: 'student' | 'teacher';
  }
  
  export interface Leave {
    _id: string;
    student: User;
    reason: string;
    fromDate: string;
    toDate: string;
    status: 'pending' | 'accepted' | 'rejected';
  }
  