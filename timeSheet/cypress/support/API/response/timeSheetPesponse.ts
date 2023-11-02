export interface TimeSheetResponse {
  data: [
    {
      project: {
        id: number;
        name: string;
        deleted: boolean;
      };
      customer: {
        id: number;
        name: string;
        deleted: boolean;
      };
      activity: {
        id: number;
        name: string;
        deleted: boolean;
      };
      total: {
        hours: number;
        minutes: 0;
        label: string;
      };
      dates: {
       string: {
          id: number;
          date: string;
          comment: null;
          duration: string;
        };
      };
    }
  ];
  meta: {
    timesheet: {
      id: number;
      status: {
        id: string;
        name:string;
      };
      startDate: string;
      endDate: string;
    };
    sum: {
      hours: number;
      minutes: 0;
      label: string;
    };
    columns: {
      "2023-10-23": {
        total: {
          hours: number;
          minutes: 0;
          label: string;
        };
      };
      "2023-10-24": {
        total: {
          hours: 0;
          minutes: 0;
          label: string;
        };
      };
      "2023-10-25": {
        total: {
          hours: 0;
          minutes: 0;
          label: "00:00";
        };
      };
      "2023-10-26": {
        total: {
          hours: 0;
          minutes: 0;
          label: "00:00";
        };
      };
      "2023-10-27": {
        total: {
          hours: 0;
          minutes: 0;
          label: "00:00";
        };
      };
      "2023-10-28": {
        total: {
          hours: 0;
          minutes: 0;
          label: "00:00";
        };
      };
      "2023-10-29": {
        total: {
          hours: 0;
          minutes: 0;
          label: "00:00";
        };
      };
    };
    dates: [
      "2023-10-23",
      "2023-10-24",
      "2023-10-25",
      "2023-10-26",
      "2023-10-27",
      "2023-10-28",
      "2023-10-29"
    ];
    employee: {
      empNumber: number;
      lastName: string;
      firstName: string;
      middleName: string;
      employeeId: string;
      terminationId: null;
    };
    allowedActions: [
      {
        action: "SUBMIT";
        name: "Submit";
      },
      {
        action: "MODIFY";
        name: "Modify";
      },
      {
        action: "VIEW";
        name: "View";
      }
    ];
  };
  rels: [];
}
