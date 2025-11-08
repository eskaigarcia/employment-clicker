/* PENDING TASKS
  - Add linkedin Premium
  - Set up real prices and effects of upgrades
 */

export const upgrades = {
  active: {
    resume: {
      id: 'ua000',
      basePrice: 100,
      priceIncrement: 0.25,
      type: 'multiple',
      effects: {
        multiplier: 1,
        offerChance: 0.01,
      },
    },
    letter: {
      id: 'ua001',
      basePrice: 750,
      priceIncrement: 0.6,
      type: 'multiple',
      effects: {
        multiplier: 5,
        offerChance: 0.02,
      },
    },
    resumePhotos: {
      id: 'ua002',
      basePrice: 100,
      priceIncrement: 0.25,
      type: 'multiple',
      effects: {
        multiplier: 1,
        offerChance: 0.01,
     },
    },
    organize: {
      id: 'ua003',
      basePrice: 100,
      priceIncrement: 0.25,
      type: 'multiple',
      effects: {
        multiplier: 1,
        offerChance: 0.01,
     },
    },
    onlineCourse: {
      id: 'ua004',
      basePrice: 100,
      priceIncrement: 0.25,
      type: 'multiple',
      effects: {
        multiplier: 1,
        offerChance: 0.01,
     },
    },
    volunteer: {
      id: 'ua005',
      basePrice: 100,
      priceIncrement: 0.25,
      type: 'multiple',
      effects: {
        multiplier: 1,
        offerChance: 0.01,
     },
    },
    interviewTraining: {
      id: 'ua006',
      basePrice: 100,
      priceIncrement: 0.25,
      type: 'multiple',
      effects: {
        multiplier: 1,
        offerChance: 0.01,
     },
    },
    certifyLanguage: {
      id: 'ua007',
      basePrice: 100,
      priceIncrement: 0.25,
      type: 'multiple',
      effects: {
        multiplier: 1,
        offerChance: 0.01,
      },
    },
    certifySoftSkills: {
      id: 'ua008',
      basePrice: 100,
      priceIncrement: 0.25,
      type: 'multiple',
      effects: {
        multiplier: 1,
        offerChance: 0.01,
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
      basePrice: 100,
      priceIncrement: 0.65,
      type: 'multiple',
      requires: 'internet',
      effects: {
        cps: 1,
        intervirewChance: 0.03
      }
    },



    linkedin: {
      id: 'up100',
      basePrice: 5000,
      type: 'unlock',
      effects: {
        cps: 5,
        interviewChance: 0.2,
      }
    },
    profileLinkedin: {
      id: 'up110',
      type: 'multiple',
      basePrice: 0,
      priceIncrement: 0,
      requires: 'linkedin',
      effects: {
        cps: 5,
        interviewChance: 0.2,
      },
    },
    contacts: {
      id: 'up111',
      type: 'multiple',
      basePrice: 0,
      priceIncrement: 0,
      requires: 'linkedin',
      effects: {
        cps: 5,
        interviewChance: 0.2,
      },
    },
    jobAlertLinkedin: {
      id: 'up112',
      basePrice: 100,
      priceIncrement: 0.1,
      type: 'multiple',
      requires: 'linkedin',
      effects: {
        cps: 1,
        interviewChance: 0.02,
      }
    },
    post: {
      id: 'up113',
      basePrice: 0,
      priceIncrement: 0,
      type: 'multiple',
      requires: 'linkedin',
      effects:{}
    },



    site: {
      id: 'up200',
      basePrice: 0,
      type: 'unlock',
      effects: {},
    },
    workPhotos: {
      id: 'up210',
      basePrice: 0,
      priceIncrement: 0,
      type: 'multiple',
      requires: 'site',
      effects: {}
    },
    personalProject: {
      id: 'up211',
      basePrice: 0,
      priceIncrement: 0,
      type: 'multiple',
      requires: 'site',
      effects: {}
    },
    referral: {
      id: 'up212',
      basePrice: 0,
      priceIncrement: 0,
      type: 'multiple',
      requires: 'site',
      effects: {}
    },


    forum: {
      id: 'up300',
      basePrice: 0,
      type: 'unlock',
      effects: {},
    },
    joinCommunity: {
      id: 'up310',
      basePrice: 0,
      priceIncrement: 0,
      type: 'multiple',
      requires: 'forum',
      effects: {}
    },
    participate: {
      id: 'up311',
      basePrice: 0,
      priceIncrement: 0,
      type: 'multiple',
      requires: 'forum',
      effects: {}
    },
    networking: {
      id: 'up312',
      basePrice: 0,
      priceIncrement: 0,
      type: 'multiple',
      requires: 'forum',
      effects: {}
    },



    glassdoor: {
      id: 'up400',
      basePrice: 0,
      type: 'unlock',
      effects: {},
    },
    profileGlassdoor: {
      id: 'up410',
      basePrice: 0,
      priceIncrement: 0,
      type: 'multiple',
      requires: 'glassdoor',
      effects: {}
    },
    jobAlertGlassdoor: {
      id: 'up411',
      basePrice: 0,
      priceIncrement: 0,
      type: 'multiple',
      requires: 'glassdoor',
      effects: {}
    },
    researchCompanies: {
      id: 'up412',
      basePrice: 0,
      priceIncrement: 0,
      type: 'multiple',
      requires: 'glassdoor',
      effects: {}
    },
    monitorSalaries: {
      id: 'up413',
      basePrice: 0,
      priceIncrement: 0,
      type: 'multiple',
      requires: 'glassdoor',
      effects: {}
    },



    expertise: {
      id: 'up500',
      basePrice: 0,
      type: 'unlock',
      effects: {},
    },
    personalBrand: {
      id: 'up510',
      basePrice: 0,
      priceIncrement: 0,
      type: 'multiple',
      requires: 'expertise',
      effects: {}
    },
    attendConferences: {
      id: 'up511',
      basePrice: 0,
      priceIncrement: 0,
      type: 'multiple',
      requires: 'expertise',
      effects: {}
    },
    talk:{
      id: 'up512',
      basePrice: 0,
      priceIncrement: 0,
      type: 'multiple',
      requires: 'expertise',
      effects: {}
    },
    podcast: {
      id: 'up513',
      basePrice: 0,
      priceIncrement: 0,
      type: 'multiple',
      requires: 'expertise',
      effects: {}
    },
    book: {
      id: 'up514',
      basePrice: 0,
      priceIncrement: 0,
      type: 'multiple',
      requires: 'expertise',
      effects: {}
    }
  }
};