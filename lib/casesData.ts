export interface CaseStudy {
  id: string;
  date: string;
  industry: 'Beverages' | 'Energy' | 'Automotive' | 'Cosmetics';
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'beverage-1',
    date: 'November 2016 – February 2017',
    industry: 'Beverages'
  },
  { id: 'beverage-2', date: 'June 2014', industry: 'Beverages' },
  { id: 'beverage-3', date: 'February 2014 – May 2014', industry: 'Beverages' },
  { id: 'beverage-4', date: 'February 2012', industry: 'Beverages' },
  { id: 'beverage-5', date: 'August 2011', industry: 'Beverages' },
  { id: 'beverage-6', date: 'September 2010', industry: 'Beverages' },
  { id: 'beverage-7', date: 'June 2010', industry: 'Beverages' },
  { id: 'beverage-8', date: 'August 2008', industry: 'Beverages' },

  // Energy
  { id: 'energy-1', date: 'February 2019', industry: 'Energy' },
  { id: 'energy-2', date: 'February 2019 – April 2019', industry: 'Energy' },
  { id: 'energy-3', date: 'May 2016 – July 2016', industry: 'Energy' },
  { id: 'energy-4', date: 'March 2016', industry: 'Energy' },
  { id: 'energy-5', date: 'February 2016', industry: 'Energy' },
  { id: 'energy-6', date: 'February 2016', industry: 'Energy' },

  // Automotive
  { id: 'automotive-1', date: 'August 2018 – March 2019', industry: 'Automotive' },
  { id: 'automotive-2', date: 'March 2018 – July 2018', industry: 'Automotive' },
  { id: 'automotive-3', date: 'March 2018 – May 2018', industry: 'Automotive' },
  { id: 'automotive-4', date: 'September 2017 – February 2018', industry: 'Automotive' },
  { id: 'automotive-5', date: 'November 2017 – December 2017', industry: 'Automotive' },
  { id: 'automotive-6', date: 'July 2017 – August 2017', industry: 'Automotive' },
  { id: 'automotive-7', date: 'Date not specified', industry: 'Automotive' },

  // Cosmetics
  { id: 'cosmetics-1', date: 'April 2015', industry: 'Cosmetics' },
  { id: 'cosmetics-2', date: 'March 2015', industry: 'Cosmetics' },
  { id: 'cosmetics-3', date: 'August 2013', industry: 'Cosmetics' },
  { id: 'cosmetics-4', date: 'February 2013 – July 2013', industry: 'Cosmetics' },
  { id: 'cosmetics-5', date: 'May 2013', industry: 'Cosmetics' },
  { id: 'cosmetics-6', date: 'January 2013', industry: 'Cosmetics' }
];

export const industries = [
  { id: 'all', nameKey: 'navigation.all', count: caseStudies.length },
  { id: 'Beverages', nameKey: 'industries.beverages', count: caseStudies.filter(c => c.industry === 'Beverages').length },
  { id: 'Energy', nameKey: 'industries.energy', count: caseStudies.filter(c => c.industry === 'Energy').length },
  { id: 'Automotive', nameKey: 'industries.automotive', count: caseStudies.filter(c => c.industry === 'Automotive').length },
  { id: 'Cosmetics', nameKey: 'industries.cosmetics', count: caseStudies.filter(c => c.industry === 'Cosmetics').length }
];

export const stats = {
  totalProjects: caseStudies.length,
  satisfactionRate: '98%',
  averageROI: '165%',
  responseTime: '24h',
  industries: 4, // Beverages, Energy, Automotive and Cosmetics
  teamMembers: '50+',
  yearsExperience: '15+'
};
