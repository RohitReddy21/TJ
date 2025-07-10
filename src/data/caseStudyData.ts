// data/caseStudyData.ts

import case1 from '../assets/Case1.jpg';
import case2 from '../assets/Case2.jpg';
import case3 from '../assets/Case3.jpg';
import caselogo1 from '../assets/CaseLogo1.png';
import caselogo2 from '../assets/CaseLogo2.png';
import caselogo3 from '../assets/CaseLogo3.png';

/**
 * Type definition for a single case study.
 */
export interface CaseStudy {
  slug: string;
  title: string;
  overview: string;
  challenge: string;
  results: string;
  tags: string[];
  image: string;
  icon: string;
  description: string;
}

/**
 * List of case studies displayed on the site.
 */
export const services: CaseStudy[] = [
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    overview:
      "Engage us for customer experience transformation and process governance alike.\n\nOur clients have greatly benefitted from increased visibility, intelligence and predictive alerts & monitoring around their back office processes and customer issues. This helps rapid and one-touch customer issue resolution while allowing executive team to have operational health metrics on their phones.",
    challenge:
      "It is estimated that most leadership and executive teams in medium to small companies spend 40% of their time trying to unravel issues in back end processes. Also, it is estimated that more than 85% of customer issues could be resolved in the first touch if the front line staff had a 360 degree ring side view of every aspect concerning that customer.",
    results:
      "We bring to bear a very high degree of digital transformation without burning the bank. This has historically been achieved at a minimum of 3X faster technology build time and at least 2X lower costs. Our clients get a much higher return on investment at a rapid time to market.",
    tags: ["digital", "digital transformation", "technology", "transformation"],
    image: case1,
    icon: caselogo1,
    description:
      "Engage us for customer experience transformation and process governance alike.",
  },
  {
    slug: "cognitive-automation",
    title: "Cognitive Automation",
    description:
      "Robotic Process Automation has been around for quite some time now. And fails.",
    overview:
      "Robotic Process Automation has been around for quite some time now. And fails. The key is to know what to automate and what are all the decision drivers / variables that drive automation.",
    challenge:
      "Tribal knowledge and very deep domain knowledge is required to really dial into automation. Most companies have implemented RPA tool kits and still see heavy “expert” involvement in resolving anomalies thrown out. As a result, the tactical work, even though automated, ends up choking the experts and executives.",
    results:
      "We have simplified the automation process by building knowledge graphs and machine learning models which learn automation paths and inflection points in the decision making. Our customers see real value in automation and have achieved scale. The experts and executives are provided with positive assurance reports, customer health & process health dashboards to reassure them. That way they have been able to rapidly boost their EBIDTA, C-SAT scores and Revenue.",
    tags: ["ai", "automation", "machine learning", "ml", "robotic process automation", "rpa"],
    image: case2,
    icon: caselogo2,
    
  },
  {
    slug: "process-realignment",
    title: "Process Realignment",
    description:
      "Resource Realignment, Resource Optimization and Re-engineering of the processes.",
    overview:
      "We design and execute realignment of your business processes through automation, resource optimization, re-engineering of the processes themselves.\n\nTypically, most organizations have little or no failover and their processes have inherent governance risks. Further, fulfilment of key tasks comes with tribal knowledge. The learning curve is very steep to onboard resources and scale rapidly. We simplify all of that.",
    challenge:
      "Digitizing tribal knowledge is by far the biggest challenge and even though Enterprises have software tool kits to manage the actual process, the mechanics are clunky and seldom scalable. Knowledge bottle necks prevent key executives and front line staff from performing at the optimal best.",
    results:
      "We have turned around companies within 6 months to a year. Our customers typically see tremendous growth and scale with very high customer satisfaction scores and stakeholder value. Most of our customers have been able to secure growth capital at these higher valuations and accelerate on their runway.",
    tags: ["business", "outsourcing", "process", "realignment"],
    image: case3,
    icon: caselogo3,
  },
];
