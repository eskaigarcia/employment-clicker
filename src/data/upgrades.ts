/* PENDING TASKS
  - Add linkedin Premium
  - Set up real prices and effects of upgrades
 */

export const upgrades = {
  active: {
    resume: {
      id: 'ua000',
      basePrice: 120,
      priceIncrement: 0.25,
      type: 'multiple',
      effects: {
        multiplier: 1,
        offerChance: 0.03,
      },
    },
    letter: {
      id: 'ua001',
      basePrice: 800,
      priceIncrement: 0.25,
      type: 'multiple',
      effects: {
        multiplier: 5,
        offerChance: 0.01,
      },
    },
    resumePhotos: {
      id: 'ua002',
      basePrice: 6000,
      priceIncrement: 0.25,
      type: 'multiple',
      effects: {
        multiplier: 15,
        offerChance: 0.02,
     },
    },
    organize: {
      id: 'ua003',
      basePrice: 35000,
      priceIncrement: 0.25,
      type: 'multiple',
      effects: {
        multiplier: 60,
        offerChance: 0.01,
     },
    },
    onlineCourse: {
      id: 'ua004',
      basePrice: 125000,
      priceIncrement: 0.25,
      type: 'multiple',
      effects: {
        multiplier: 200,
        offerChance: 0.02,
     },
    },
    volunteer: {
      id: 'ua005',
      basePrice: 975000,
      priceIncrement: 0.25,
      type: 'multiple',
      effects: {
        multiplier: 900,
        offerChance: 0.02,
     },
    },
    interviewTraining: {
      id: 'ua006',
      basePrice: 7500000,
      priceIncrement: 0.25,
      type: 'multiple',
      effects: {
        multiplier: 1500,
        offerChance: 0.05,
     },
    },
    certifyLanguage: {
      id: 'ua007',
      basePrice: 90000000,
      priceIncrement: 0.25,
      type: 'multiple',
      effects: {
        multiplier: 8000,
        offerChance: 0.1,
      },
    },
    certifySoftSkills: {
      id: 'ua008',
      basePrice: 2500000000,
      priceIncrement: 0.25,
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
      priceIncrement: 0.15,
      type: 'multiple',
      requires: 'internet',
      effects: {
        cps: 0.1,
        interviewChance: 0.01,
      }
    },
    registrations: {
      id: 'up011',
      basePrice: 250,
      priceIncrement: 0.65,
      type: 'multiple',
      requires: 'internet',
      effects: {
        cps: 1,
        intervirewChance: 0.02
      }
    },



    linkedin: {
      id: 'up100',
      basePrice: 5000,
      type: 'unlock',
      effects: {
        cps: 5,
        interviewChance: 1,
      }
    },
    profileLinkedin: {
      id: 'up110',
      type: 'multiple',
      basePrice: 4500,
      priceIncrement: 0.2,
      requires: 'linkedin',
      effects: {
        cps: 5,
        interviewChance: 0.1,
      },
    },
    contacts: {
      id: 'up111',
      type: 'multiple',
      basePrice: 17000,
      priceIncrement: 0.15,
      requires: 'linkedin',
      effects: {
        cps: 5,
        interviewChance: 0.05,
      },
    },
    jobAlertLinkedin: {
      id: 'up112',
      basePrice: 95000,
      priceIncrement: 0.15,
      type: 'multiple',
      requires: 'linkedin',
      effects: {
        cps: 1,
        interviewChance: 0.15,
      }
    },
    post: {
      id: 'up113',
      basePrice: 450000,
      priceIncrement: 0.3,
      type: 'multiple',
      requires: 'linkedin',
      effects:{
        cps: 1,
        interviewChance: 0.15,
      }
    },



    site: {
      id: 'up200',
      basePrice: 300000,
      type: 'unlock',
      effects: {},
    },
    workPhotos: {
      id: 'up210',
      basePrice: 250000,
      priceIncrement: 0.25,
      type: 'multiple',
      requires: 'site',
      effects: {}
    },
    personalProject: {
      id: 'up211',
      basePrice: 900000,
      priceIncrement: 0.25,
      type: 'multiple',
      requires: 'site',
      effects: {}
    },
    referral: {
      id: 'up212',
      basePrice: 10000000,
      priceIncrement: 0.25,
      type: 'multiple',
      requires: 'site',
      effects: {}
    },


    forum: {
      id: 'up300',
      basePrice: 8500000,
      type: 'unlock',
      effects: {},
    },
    joinCommunity: {
      id: 'up310',
      basePrice: 8000000,
      priceIncrement: 0.25,
      type: 'multiple',
      requires: 'forum',
      effects: {}
    },
    participate: {
      id: 'up311',
      basePrice: 65000000,
      priceIncrement: 0.25,
      type: 'multiple',
      requires: 'forum',
      effects: {}
    },
    networking: {
      id: 'up312',
      basePrice: 300000000,
      priceIncrement: 0.25,
      type: 'multiple',
      requires: 'forum',
      effects: {}
    },



    glassdoor: {
      id: 'up400',
      basePrice: 250000000,
      type: 'unlock',
      effects: {},
    },
    profileGlassdoor: {
      id: 'up410',
      basePrice: 225000000,
      priceIncrement: 0.25,
      type: 'multiple',
      requires: 'glassdoor',
      effects: {}
    },
    jobAlertGlassdoor: {
      id: 'up411',
      basePrice: 975000000,
      priceIncrement: 0.25,
      type: 'multiple',
      requires: 'glassdoor',
      effects: {}
    },
    researchCompanies: {
      id: 'up412',
      basePrice: 0.25,
      priceIncrement: 12000000000,
      type: 'multiple',
      requires: 'glassdoor',
      effects: {}
    },
    monitorSalaries: {
      id: 'up413',
      basePrice: 87500000000,
      priceIncrement: 0.25,
      type: 'multiple',
      requires: 'glassdoor',
      effects: {}
    },



    expertise: {
      id: 'up500',
      basePrice: 500000000000,
      type: 'unlock',
      effects: {},
    },
    personalBrand: {
      id: 'up510',
      basePrice: 650000000000,
      priceIncrement: 0.25,
      type: 'multiple',
      requires: 'expertise',
      effects: {}
    },
    attendConferences: {
      id: 'up511',
      basePrice: 1250000000000,
      priceIncrement: 0.25,
      type: 'multiple',
      requires: 'expertise',
      effects: {}
    },
    talk:{
      id: 'up512',
      basePrice: 15000000000000,
      priceIncrement: 0.25,
      type: 'multiple',
      requires: 'expertise',
      effects: {}
    },
    podcast: {
      id: 'up513',
      basePrice: 97500000000000,
      priceIncrement: 0.25,
      type: 'multiple',
      requires: 'expertise',
      effects: {}
    },
    book: {
      id: 'up514',
      basePrice: 550000000000000,
      priceIncrement: 0.25,
      type: 'multiple',
      requires: 'expertise',
      effects: {}
    }
  }
};