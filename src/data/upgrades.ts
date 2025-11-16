/* PENDING TASKS
  - Add linkedin Premium
  - Set up real prices and effects of upgrades
 */

export const upgrades = {
  active: {
    resume: {
      id: 'ua000',
      basePrice: 15,
      type: 'multiple',
      effects: {
        multiplier: 1,
        offerChance: 0.03,
      },
    },
    letter: {
      id: 'ua001',
      basePrice: 500,
      type: 'multiple',
      effects: {
        multiplier: 5,
        offerChance: 0.01,
      },
    },
    resumePhotos: {
      id: 'ua002',
      basePrice: 6000,
      type: 'multiple',
      effects: {
        multiplier: 20,
        offerChance: 0.02,
     },
    },
    organize: {
      id: 'ua003',
      basePrice: 35000,
      type: 'multiple',
      effects: {
        multiplier: 60,
        offerChance: 0.01,
     },
    },
    onlineCourse: {
      id: 'ua004',
      basePrice: 125000,
      type: 'multiple',
      effects: {
        multiplier: 200,
        offerChance: 0.02,
     },
    },
    volunteer: {
      id: 'ua005',
      basePrice: 975000,
      type: 'multiple',
      effects: {
        multiplier: 900,
        offerChance: 0.02,
     },
    },
    interviewTraining: {
      id: 'ua006',
      basePrice: 7500000,
      type: 'multiple',
      effects: {
        multiplier: 1500,
        offerChance: 0.05,
     },
    },
    certifyLanguage: {
      id: 'ua007',
      basePrice: 90000000,
      type: 'multiple',
      effects: {
        multiplier: 8000,
        offerChance: 0.1,
      },
    },
    certifySoftSkills: {
      id: 'ua008',
      basePrice: 2500000000,
      type: 'multiple',
      effects: {
        multiplier: 35000,
        offerChance: 0.1,
     },
    },
  },



  pasive: {
    internet: {
      id: 'up000',
      basePrice: 5,
      type: 'unlock',
      effects: {
        cps: 0,
        interviewChance: 0.1,
      },
    },
    newsletters: {
      id: 'up010',
      basePrice: 15,
      type: 'multiple',
      requires: 'up000',
      effects: {
        cps: 0.1,
        interviewChance: 0.01,
      }
    },
    registrations: {
      id: 'up011',
      basePrice: 100,
      type: 'multiple',
      requires: 'up000',
      effects: {
        cps: 0.5,
        intervirewChance: 0.02
      }
    },



    linkedin: {
      id: 'up100',
      basePrice: 600,
      type: 'unlock',
      effects: {
        cps: 3,
        interviewChance: 1,
      }
    },
    profileLinkedin: {
      id: 'up110',
      type: 'multiple',
      basePrice: 600,
      requires: 'up100',
      effects: {
        cps: 5,
        interviewChance: 0.1,
      },
    },
    contacts: {
      id: 'up111',
      type: 'multiple',
      basePrice: 2000,
      requires: 'up100',
      effects: {
        cps: 10,
        interviewChance: 0.05,
      },
    },
    jobAlertLinkedin: {
      id: 'up112',
      basePrice: 10000,
      type: 'multiple',
      requires: 'up100',
      effects: {
        cps: 75,
        interviewChance: 0.2,
      }
    },
    post: {
      id: 'up113',
      basePrice: 80000,
      type: 'multiple',
      requires: 'up100',
      effects:{
        cps: 250,
        interviewChance: 0.25,
      }
    },



    site: {
      id: 'up200',
      basePrice: 400000,
      type: 'unlock',
      effects: {
        cps: 600,
        interviewChance: 3,
      },
    },
    workPhotos: {
      id: 'up210',
      basePrice: 450000,
      type: 'multiple',
      requires: 'up200',
      effects: {
        cps: 600,
        interviewChance: 0.3,
      }
    },
    personalProject: {
      id: 'up211',
      basePrice: 1250000,
      type: 'multiple',
      requires: 'up200',
      effects: {
        cps: 1200,
        interviewChance: 0.5,
      }
    },
    referral: {
      id: 'up212',
      basePrice: 8500000,
      type: 'multiple',
      requires: 'up200',
      effects: {
        cps: 2000,
        interviewChance: 0.65,
      }
    },


    forum: {
      id: 'up300',
      basePrice: 70000000,
      type: 'unlock',
      effects: {
        cps: 8000,
        interviewChance: 5,
      },
    },
    joinCommunity: {
      id: 'up310',
      basePrice: 70000000,
      type: 'multiple',
      requires: 'up300',
      effects: {
        cps: 10000,
        interviewChance: 0.5,
      }
    },
    participate: {
      id: 'up311',
      basePrice: 400000000,
      type: 'multiple',
      requires: 'up300',
      effects: {
        cps: 55000,
        interviewChance: 0.75,
      }
    },
    networking: {
      id: 'up312',
      basePrice: 1250000000,
      type: 'multiple',
      requires: 'up300',
      effects: {
        cps: 110000,
        interviewChance: 0.75,
      }
    },



    glassdoor: {
      id: 'up400',
      basePrice: 9000000000,
      type: 'unlock',
      effects: {
        cps: 350000,
        interviewChance: 10,
      },
    },
    profileGlassdoor: {
      id: 'up410',
      basePrice: 10000000000,
      type: 'multiple',
      requires: 'up400',
      effects: {
        cps: 375000,
        interviewChance: 1,
      }
    },
    jobAlertGlassdoor: {
      id: 'up411',
      basePrice: 90000000000,
      type: 'multiple',
      requires: 'up400',
      effects: {
        cps: 950000,
        interviewChance: 1.5,
      }
    },
    researchCompanies: {
      id: 'up412',
      basePrice: 300000000000,
      type: 'multiple',
      requires: 'up400',
      effects: {
        cps: 2500000,
        interviewChance: 1.25,
      }
    },
    monitorSalaries: {
      id: 'up413',
      basePrice: 950000000000,
      type: 'multiple',
      requires: 'up400',
      effects: {
        cps: 7000000,
        interviewChance: 1.75,
      }
    },



    expertise: {
      id: 'up500',
      basePrice: 10000000000000,
      type: 'unlock',
      effects: {
        cps: 30000000,
        interviewChance: 20,
      },
    },
    personalBrand: {
      id: 'up510',
      basePrice: 15000000000000,
      type: 'multiple',
      requires: 'up500',
      effects: {
        cps: 35000000,
        interviewChance: 2.25,
      }
    },
    attendConferences: {
      id: 'up511',
      basePrice: 90000000000000,
      type: 'multiple',
      requires: 'up500',
      effects: {
        cps: 80000000,
        interviewChance: 2,
      }
    },
    talk:{
      id: 'up512',
      basePrice: 350000000000000,
      type: 'multiple',
      requires: 'up500',
      effects: {
        cps: 175000000,
        interviewChance: 2.75,
      }
    },
    podcast: {
      id: 'up513',
      basePrice: 900000000000000,
      type: 'multiple',
      requires: 'up500',
      effects: {
        cps: 400000000,
        interviewChance: 2.5,
      }
    },
    book: {
      id: 'up514',
      basePrice: 2500000000000000,
      type: 'multiple',
      requires: 'up500',
      effects: {
        cps: 950000000,
        interviewChance: 3,
      }
    }
  },

  powerups: {},

  prestige: {}
};