import { BlogPost, Course, Project, Publication, Certification, Presentation, Experience, SkillCategory, EducationItem, NotebookMeta } from "./types";

export const PROFILE = {
  name: "Hafez Ahmad",
  title: "Ph.D. Candidate & Graduate Research Assistant",
  affiliation: "Department of Geosciences, Mississippi State University",
  email: "hafez.ahmad@example.edu",
  location: "Starkville, Mississippi, USA",
  bio: "Experienced in Project Management, Observational Oceanography, Marine Community Ecology, Geoinformatics, and Remote Sensing. I am passionate about physical Oceanography, Marine Ecology, and Machine learning.",
  about: `Hi, I’m Hafez Ahmad.

I am an experienced researcher in Project Management, Observational Oceanography, Marine Community Ecology, Geoinformatics, Wildlife habitat management, Hydrology, Remote Sensing, Strategic Planning, and Data Analysis. I specialize in problem-solving with automation using Python, R, MATLAB, Julia, Google Earth Engine, ArcGIS, Adobe Illustrator, and Excel.

I am passionate about physical Oceanography, Marine Ecology, Aquatic wild habitats, Coastal Development Research, and Machine learning. I have a Bachelor’s Degree in Oceanography from the Faculty of Marine Science and Fisheries, University of Chittagong, Bangladesh, and I was also an Exchange student at Florida Gulf Coast University, Florida, USA. I am currently a Graduate student at Mississippi State University, Mississippi, USA.`,
  researchStatement: `My research integrates **remote sensing, machine learning (ML), and hydrodynamic modeling** to monitor and understand coastal and aquatic environmental processes, with a strong focus on water quality dynamics. I primarily investigate parameters such as chlorophyll-a (Chl-a), particulate organic carbon (POC), total suspended matter (TSM), turbidity, colored dissolved organic matter (CDOM), and sea surface temperature (SST). By leveraging multi-source satellite data (e.g., Landsat, Sentinel-3 OLCI, MODIS, VIIRS & PACE) and field observations, I develop and validate ML models—including XGBoost, random forest, and convolutional neural networks—for accurate and scalable estimation of these indicators in complex coastal and estuarine systems.

A key objective of my work is to improve water quality monitoring in regions experiencing rapid environmental changes, such as the Gulf of Mexico/America and the Bay of Bengal. I analyze long-term trends and seasonal variability of key parameters and explore how oceanographic drivers, including wind, currents, and temperature anomalies, influence biogeochemical dynamics. I also integrate Google Earth Engine and cloud computing platforms to enhance largescale, time-efficient analyses.

Hydrodynamic modeling is another cornerstone of my research. I use tools like the Environmental Fluid Dynamics Code (EFDC) to simulate water circulation, sediment transport, and hypoxic zone formation. I combine these simulations with field data, such as ADCP measurements, to model how physical processes influence the spatial distribution of water quality parameters. My research includes examining how river discharge, bathymetry, and land use changes affect hydrological connectivity and water column mixing.

Through an interdisciplinary approach, I aim to support early warning systems for harmful algal blooms, sediment resuspension events, and nutrient pollution hotspots. Ultimately, my work contributes to evidence-based decision-making in water resource management, marine conservation, and policy development under changing environmental and climatic conditions.`,
  socials: {
    github: "https://github.com/hafez-ahmad",
    linkedin: "https://linkedin.com/in/hafez-ahmad",
    twitter: "https://twitter.com/hafez_ahmad",
    scholar: "https://scholar.google.com",
  },
  education: [
    {
      degree: "Doctor of Philosophy",
      institution: "Department of Geosciences, Mississippi State University",
      year: "Jan 2024 - Dec 2027 (Expected)",
      details: [
        "Major in Earth and Atmospheric Sciences",
        "Coursework: Geodatabase, Philosophy and Ethics, GIS research applications, Quantitatively analysis climate data, Simulation Biological Systems",
        "GPA: 4.0 (Spring, Fall 2024)"
      ]
    },
    {
      degree: "Master of Science",
      institution: "Department of Wildlife, Fisheries and Aquaculture, Mississippi State University",
      year: "Jan 2022 - Dec 2023 (Graduated May 2024)",
      details: [
        "Major in Wildlife, Fisheries, and Aquaculture",
        "Thesis: Hydrologic connectivity between oxbow lakes and rivers within the Lower Mississippi Alluvial Valley",
        "Outputs: Two publications (+ 3rd under revision), and one large scale dataset covering six states",
        "GPA: 3.87"
      ]
    },
    {
      degree: "Bachelor of Science (Exchange)",
      institution: "Marine Sciences, Florida Gulf Coast University",
      year: "Aug 2019 - Dec 2019",
      details: [
        "Global Undergraduate Exchange Program",
        "Completed coursework in Coastal Remote sensing GIS, Marine Ecology, Leadership",
        "Dean’s List Honoree",
        "GPA: 3.75"
      ]
    },
    {
      degree: "Bachelor of Science",
      institution: "Oceanography, University of Chittagong, Bangladesh",
      year: "Jan 2015 - Dec 2020",
      details: [
        "Major in Oceanography",
        "Coursework: Applied Statistics, Remote sensing of the oceans, Fluid dynamics, Modeling marine processes, Physical Oceanography, etc.",
        "GPA: 3.65"
      ]
    }
  ] as EducationItem[],
  news: [
    { date: "Oct 2023", content: "Presented our paper on Dynamic Dashboards at IEEE VIS 2023 in Melbourne!" },
    { date: "Aug 2023", content: "Started a research internship at the AI Institute." },
    { date: "May 2023", content: "Passed my Ph.D. qualifying exam!" }
  ]
};

export const SKILLS = {
  soft: [
    "Research", "Communication", "Team building", "Working collaboratively",
    "Training & Development", "Problem resolution", "People skills",
    "PPE use", "Supervision Planning", "Content Writing"
  ],
  technical: {
    "Data Viz": ["MS Power BI", "Tableau"],
    "GIS & RS": ["ESRI", "QGIS", "ERDAS", "SeaDas"],
    "Programming": ["Python", "R", "Julia", "MATLAB", "SAS", "C++"],
    "Database": ["SQLite3", "PostgreSQL"],
    "Version Control": ["Git", "GitHub"],
    "AI/ML": ["Machine Learning", "Deep Learning", "TensorFlow", "Scikit-Learn"],
    "Modeling": ["SWAT", "EFDC", "TR55"],
    "Cloud": ["Google Earth Engine (GEE)", "AWS", "Azure"]
  }
};

// Data for Radar Chart
export const SKILLS_CHART_DATA = [
  { subject: 'GIS/Remote Sensing', A: 95, fullMark: 100 },
  { subject: 'Machine Learning', A: 85, fullMark: 100 },
  { subject: 'Data Analysis', A: 90, fullMark: 100 },
  { subject: 'Scientific Coding', A: 85, fullMark: 100 },
  { subject: 'Oceanography', A: 95, fullMark: 100 },
  { subject: 'Cloud Computing', A: 75, fullMark: 100 },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp1",
    role: "Graduate Research Assistant",
    organization: "Geosystems Research Institute",
    period: "2024 - 2027",
    type: "Research",
    description: "Focus on leveraging cutting-edge remote sensing technologies and hydrodynamic modeling to contribute to surface-to-ground water quality assessment in the dynamic environment of the Mississippi Coastal region. Skilled in harnessing data from satellite sensors and drone imagery to derive meaningful insights into environmental changes."
  },
  {
    id: "exp2",
    role: "Graduate Research Assistant",
    organization: "Mississippi USGS Cooperative Fish and Wildlife Research Unit",
    period: "2022 - 2023",
    type: "Research",
    description: "Conducted research on wildlife and fisheries, focusing on hydrologic connectivity and floodplain lakes."
  },
  {
    id: "exp3",
    role: "Research Intern",
    organization: "MSU (GRI) & USDA",
    period: "2022 (2 months)",
    type: "Internship",
    description: "Successfully completed a two-month research internship focusing on environmental data analysis."
  },
  {
    id: "exp4",
    role: "Summer HPC Researcher",
    organization: "Geosystems Research Institute",
    period: "May 2023 - Aug 2023",
    type: "Internship",
    description: "Joined an elite group of eight students to work with a High-Performance Computer for cutting-edge machine learning projects. My project focused on classifying cattle behavior using machine and deep learning techniques."
  },
  {
    id: "exp5",
    role: "Marine Data Management Officer",
    organization: "Wildlife Conservation Society (WCS) Bangladesh",
    period: "Oct 2020 - Nov 2021",
    type: "Professional",
    description: "Generated descriptive statistics for WCS BD marine databases. Assisted with advanced data analysis, generated maps and graphs. Focused on Bay of Bengal region: SMART. Developed Sharks and Rays ID guide."
  }
];

export const MEMBERSHIPS = [
  "The Oceanography Society (Student member)",
  "American Fisheries Society Mississippi State Sub-unit (Secretary-2022)",
  "IEEE Student Membership",
  "Blue Green Foundation Bangladesh (Founding member)",
  "Wildlife Conservation Society, Bangladesh"
];

export const PUBLICATIONS: Publication[] = [
  // Journals
  {
    id: "j1",
    type: "JOURNAL",
    title: "Spatiotemporal dynamics of cyanobacterial blooms: Integrating machine learning and feature selection techniques with uncrewed aircraft systems and autonomous surface vessel data",
    authors: ["Islam, M. S.", "Dash, P.", "Liles, J. P.", "Ahmad, H.", "Nur, A. M.", "et al."],
    venue: "Journal of Environmental Management",
    year: 2025,
    link: "https://doi.org/10.1016/j.jenvman.2025.124878"
  },
  {
    id: "j2",
    type: "JOURNAL",
    title: "Machine Learning-Based Estimation of Chlorophyll-a in the Mississippi Sound using Landsat and Ocean Optics Data",
    authors: ["Ahmad, H.", "Jose, F.", "Dash, P.", "Shoemaker, D. J.", "Jhara, S. I."],
    venue: "Environmental Earth Sciences",
    year: 2025,
    link: "https://link.springer.com/article/10.1007/s12665-025-12191-7"
  },
  {
    id: "j3",
    type: "JOURNAL",
    title: "Confluence of time and space: An innovation for quantifying dynamics of hydrologic floodplain connectivity with remote sensing and GIS",
    authors: ["Ahmad, H.", "Miranda, L. E.", "Dunn, C. G.", "Colvin, M.", "Dash, P."],
    venue: "River Research and Applications",
    year: 2025,
    link: "https://doi.org/10.1002/RRA.4426"
  },
  {
    id: "j4",
    type: "JOURNAL",
    title: "Using geographic information systems and remote sensing techniques to classify land cover types and predict grassland bird abundance and distribution in Nairobi National Park, Kenya",
    authors: ["Ong’ondo, F. J.", "Ambinakudige, S.", "Malaki, P. A.", "Njoroge, P.", "Ahmad, H."],
    venue: "International Journal of Geoheritage and Parks",
    year: 2025,
    link: "https://doi.org/10.1016/j.ijgeop.2025.02.003"
  },
  {
    id: "j5",
    type: "JOURNAL",
    title: "Estimation of Chlorophyll-a in Uncrewed Aircraft Systems Imagery using Autonomous Surface Vessel data by employing Machine Learning Algorithms and Innovative Feature Selection Techniques",
    authors: ["Islam, M. S.", "Dash, P.", "Nur, A.", "Ahmad, H.", "et al."],
    venue: "Ecological Informatics",
    year: 2024,
    link: "https://www.sciencedirect.com/science/article/pii/S1574954124004965"
  },
  {
    id: "j6",
    type: "JOURNAL",
    title: "Mapping the Dynamics of Particulate Organic Carbon: Satellite Observations of Coastal to Shelf Variability in the Northeastern Gulf of Mexico",
    authors: ["Ahmad, H.", "Jhara, S. I."],
    venue: "Ocean Science Journal",
    year: 2024,
    link: "https://doi.org/10.1007/s12601-024-00203-9"
  },
  {
    id: "j7",
    type: "JOURNAL",
    title: "Integrating machine learning and remote sensing for long-term monitoring of chlorophyll-a in Chilika Lagoon, India",
    authors: ["Ahmad, H.", "Dash, P.", "Panda, R. M."],
    venue: "Environmental Monitoring and Assessment",
    year: 2024,
    link: "https://doi.org/10.1007/s10661-024-13463-8"
  },
  {
    id: "j8",
    type: "JOURNAL",
    title: "Mapping, Dynamics, and Future Change Analysis of Sundarbans Delta using Cellular Automata and Artificial Neural Network Modeling",
    authors: ["Ahmad, H.", "Jose, F.", "Shoemaker, D. J."],
    venue: "IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing",
    year: 2024,
    link: "https://doi.org/10.1109/JSTARS.2024.3367116"
  },
  {
    id: "j9",
    type: "JOURNAL",
    title: "Evaluation and mapping of predicted future land use changes using hybrid models in a coastal area",
    authors: ["Ahmad, H.", "Abdallah, M.", "Jose, F.", "Elzain", "et al."],
    venue: "Ecological Informatics",
    year: 2023,
    link: "https://doi.org/10.1016/j.ecoinf.2023.102324"
  },
  {
    id: "j10",
    type: "JOURNAL",
    title: "Seasonal influence of freshwater discharge on spatio-temporal variations in primary productivity, sea surface temperature, and euphotic zone depth in the northern Bay of Bengal",
    authors: ["Ahmad, H.", "Jose, F.", "Bhuyan, M. S.", "Islam, M. N.", "Dash, P."],
    venue: "Acta Oceanologica Sinica",
    year: 2024,
    link: "https://doi.org/10.1007/s13131-023-2254-y"
  },
  {
    id: "j11",
    type: "JOURNAL",
    title: "Green Energy, Blue Economy: Integrating Renewable Energy and Sustainable Development for Bangladesh",
    authors: ["Ahmad, H.", "Jose, F.", "Islam, M. S.", "Jhara, S. I."],
    venue: "Marine Technology Society Journal",
    year: 2023,
    link: "https://www.ingentaconnect.com/content/mts/mtsj/2023/00000057/00000004/art00007"
  },

  // Submitted
  {
    id: "s1",
    type: "SUBMITTED",
    title: "Predictive Analysis of Land Use Modeling for Chittagong, Bangladesh Utilizing Remote Sensing and Machine Learning",
    authors: ["Ahmad, H.", "Jose, F.", "Dash, P.", "Bhuyan, M. S."],
    venue: "Remote Sensing in Earth Systems Sciences",
    year: 2025
  },
  {
    id: "s2",
    type: "SUBMITTED",
    title: "Land Use and Land Cover Dynamics of Irrawaddy Delta: Remote Sensing Analysis and Future Projection",
    authors: ["Ahmad, H.", "Jose, F.", "Nabi, M. M.", "Jhara, S. I.", "Ong’ondo, F. J."],
    venue: "Remote Sensing Applications: Society and Environment",
    year: 2025
  },
  {
    id: "s3",
    type: "SUBMITTED",
    title: "River Discharge Dynamics: Temporal and Spatial Effects of River Discharge on Chlorophyll-a and Variability in the Northern Gulf of Mexico",
    authors: ["Ahmad, H."],
    venue: "Estuarine, Coastal and Shelf Science",
    year: 2025
  },
  {
    id: "s4",
    type: "SUBMITTED",
    title: "Hypoxia in the northern and eastern Gulf of Mexico: A Machine Learning Approach for Evaluation and Prediction",
    authors: ["Ahmad, H.", "Jose, F.", "Shoemaker, D. J.", "Dash, P.", "Jhara, S. I."],
    venue: "Regional Studies in Marine Science",
    year: 2025
  },

  // Books
  {
    id: "b1",
    type: "BOOK",
    title: "Sharks and Rays of Bangladesh: A guide to identifying protected species and their commonly traded parts",
    authors: ["Mansur, E. F.", "Billah, G. M. M.", "Ahmad, H.", "et al."],
    venue: "Bangladesh Forest Department and Wildlife Conservation Society",
    year: 2022
  },

  // Conference Proceedings
  {
    id: "cp1",
    type: "CONFERENCE",
    title: "Integrating Remote Sensing and Field Survey Data: Machine Learning Approaches for Hypoxia Evaluation and Prediction in the Northern Gulf of Mexico",
    authors: ["Ahmad, H.", "Jose, F.", "Dash, P.", "Jhara, S."],
    venue: "IGARSS 2024 - IEEE International Geoscience and Remote Sensing Symposium",
    year: 2024
  },
  {
    id: "cp2",
    type: "CONFERENCE",
    title: "Mapping, Dynamics, and Future Change Analysis of Sundarbans delta using Cellular Automata and Artificial Neural Network Modeling",
    authors: ["Ahmad, H.", "Jose, F."],
    venue: "IGARSS 2023",
    year: 2023,
    link: "https://doi.org/10.1109/IGARSS52108.2023.10282057"
  },
  {
    id: "cp3",
    type: "CONFERENCE",
    title: "Seasonal influence of freshwater discharge on primary productivity and euphotic depth in the northern Bay of Bengal",
    authors: ["Ahmad, H.", "Jose, F."],
    venue: "IGARSS 2023",
    year: 2023,
    link: "https://doi.org/10.1109/IGARSS52108.2023.10281755"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "pr1",
    title: "Academic Nexus",
    description: "An open-source platform for researchers to host dynamic portfolios with integrated analytics.",
    techStack: ["React", "TypeScript", "D3.js", "Gemini API"],
    imageUrl: "https://picsum.photos/400/250",
    repoUrl: "https://github.com"
  },
  {
    id: "pr2",
    title: "EcoSense",
    description: "IoT dashboard for monitoring environmental sensors in smart cities.",
    techStack: ["Python", "Flask", "React", "MQTT"],
    imageUrl: "https://picsum.photos/400/251",
    repoUrl: "https://github.com"
  }
];

export const COURSES: Course[] = [
  {
    id: "c1",
    code: "OCN101",
    title: "Introduction to Oceanography",
    semester: "Fall 2024",
    description: "This course provides an overview of oceanographic principles, including physical, chemical, and biological aspects of the ocean.",
    materialsUrl: "#",
    modules: [
        {
            id: "m1",
            title: "Week 1: Introduction to Marine Systems",
            resources: [
                { id: "r1", title: "Lecture 1 Slides: Ocean Basins", type: "SLIDE", url: "#", date: "Aug 20, 2024" },
                { id: "r2", title: "Reading: History of Oceanography", type: "PDF", url: "#", date: "Aug 20, 2024" }
            ]
        },
        {
            id: "m2",
            title: "Week 2: Physical Oceanography",
            resources: [
                { id: "r3", title: "Lecture 3: Currents and Tides", type: "SLIDE", url: "#", date: "Aug 27, 2024" },
                { id: "r4", title: "Lab 1: Measuring Salinity", type: "PDF", url: "#", date: "Aug 29, 2024" }
            ]
        }
    ]
  },
  {
    id: "c2",
    code: "ENV202",
    title: "Data Analysis in Environmental Science",
    semester: "Spring 2024",
    description: "Learn data analysis techniques using R and Python applied to environmental datasets and modeling.",
    materialsUrl: "#",
    modules: [
        {
            id: "m1",
            title: "Module 1: Getting Started with R",
            resources: [
                { id: "r1", title: "Setup Guide: RStudio & Git", type: "PDF", url: "#", date: "Jan 10, 2024" },
                { id: "r2", title: "Assignment 1: Basic Statistics", type: "ASSIGNMENT", url: "#", date: "Jan 12, 2024" }
            ]
        },
        {
            id: "m2",
            title: "Module 2: Time Series Analysis",
            resources: [
                { id: "r3", title: "Lecture Slides: Temporal Data", type: "SLIDE", url: "#", date: "Jan 17, 2024" },
                { id: "r4", title: "Code: Gulf Temperature Analysis", type: "LINK", url: "#", date: "Jan 19, 2024" }
            ]
        }
    ]
  }
];

export const FEATURED_NOTEBOOKS: NotebookMeta[] = [
    {
        id: "nb1",
        title: "Chlorophyll-a Estimation with ML",
        description: "A comprehensive notebook demonstrating how to preprocess Sentinel-3 data and train an XGBoost model to estimate Chlorophyll-a concentrations.",
        tags: ["Machine Learning", "Remote Sensing", "Python"],
        date: "2024-02-15",
        imageUrl: "https://picsum.photos/400/200?random=10"
    },
    {
        id: "nb2",
        title: "Gulf of Mexico Hypoxia Analysis",
        description: "Analyzing spatial and temporal trends of hypoxic zones using long-term dissolved oxygen data and hydrodynamic model outputs.",
        tags: ["Oceanography", "Data Analysis", "Visualization"],
        date: "2023-11-20",
        imageUrl: "https://picsum.photos/400/200?random=11"
    },
    {
        id: "nb3",
        title: "Introduction to GEE in Python",
        description: "Tutorial for getting started with Google Earth Engine API in Python for large-scale environmental monitoring.",
        tags: ["GEE", "Tutorial", "Cloud Computing"],
        date: "2023-09-05",
        imageUrl: "https://picsum.photos/400/200?random=12"
    },
    {
        id: "nb4",
        title: "Time Series Forecasting with ARIMA",
        description: "Forecasting sea surface temperature anomalies using ARIMA and Prophet models.",
        tags: ["Statistics", "Time Series", "R"],
        date: "2023-08-10",
        imageUrl: "https://picsum.photos/400/200?random=13"
    }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    title: "The Future of Academic Portfolios",
    date: "2023-10-15",
    content: "Why static PDFs are dead and how interactive web apps are taking over the academic world. In this post, we explore the transition from LaTeX CVs to React-based portfolios...",
    tags: ["Career", "Web Dev"]
  },
  {
    id: "b2",
    title: "Getting Started with Gemini API",
    date: "2023-11-20",
    content: "A quick tutorial on how to integrate Google's Gemini API into your research workflow for literature review summarization.",
    tags: ["AI", "Tutorial"]
  }
];

export const CITATION_HISTORY = [
  { year: 2018, citations: 2 },
  { year: 2019, citations: 5 },
  { year: 2020, citations: 12 },
  { year: 2021, citations: 25 },
  { year: 2022, citations: 45 },
  { year: 2023, citations: 78 },
  { year: 2024, citations: 120 },
];

export const CERTIFICATIONS: Certification[] = [
  { id: "crt1", title: "Leaky deltas: sources or sinks in the global carbon cycle", year: "2025" },
  { id: "crt2", title: "Introduction to Plankton, Aerosol, Cloud, Ocean Ecosystem (PACE) Hyperspectral Observations", year: "2024" },
  { id: "crt3", title: "Anaconda Python for Data Science Professional Certificate", year: "2024" },
  { id: "crt4", title: "NASA PACE satellite hackathon (Finalist)", year: "2024" },
  { id: "crt5", title: "Delft3D modeling (Institute for Water Education)", year: "2024" },
  { id: "crt6", title: "Large Scale Applications of Machine Learning using Remote Sensing (NASA ARSET)", year: "2024" },
  { id: "crt7", title: "Using Python for Automation", year: "2024" },
  { id: "crt8", title: "Google Data Analytics Certificate", year: "2023" },
  { id: "crt9", title: "Geographic Information Systems (GIS) Specialization", year: "2022" },
  { id: "crt10", title: "Applied Data Science with Python Specialization (Coursera)", year: "2022" },
  { id: "crt11", title: "TensorFlow Developer Certificate (Udemy)", year: "2020" },
  { id: "crt12", title: "Big Data Analytics with GIS", year: "2020" },
  { id: "crt13", title: "Object-based Image Analysis & Classification in QGIS", year: "2020" },
  { id: "crt14", title: "ARSET - Species Distribution Modeling with Remote Sensing", year: "2020" },
  { id: "crt15", title: "Fishery Oceanography for Future Professionals (ESSO-INCOIS, India)", year: "2020" }
];

export const REVIEWER_ACTIVITIES = [
  { journal: "Remote Sensing Applications: Society and Environment", count: 7 },
  { journal: "Journal of Coastal Research", count: 5 },
  { journal: "Environmental Monitoring and Assessment", count: 2 },
  { journal: "Scientific Reports", count: 1 },
  { journal: "Remote Sensing of Environment", count: 1 },
  { journal: "Journal of Hydrology", count: 1 },
  { journal: "Estuarine, Coastal and Shelf Science", count: 1 },
  { journal: "Geoscience Frontiers", count: 1 },
  { journal: "Frontiers in Marine Science", count: 1 }
];

export const PRESENTATIONS: Presentation[] = [
  { id: "p1", title: "American Fisheries Society (AFS) Annual Meeting", description: "Grand Rapids, Michigan, 2023", imageUrl: "https://picsum.photos/600/400?random=1" },
  { id: "p2", title: "IGARSS 2023 Poster Presentation", description: "Pasadena, CA, 2023", imageUrl: "https://picsum.photos/600/400?random=2" },
  { id: "p3", title: "Ocean Science Conference 2024", description: "New Orleans, LA", imageUrl: "https://picsum.photos/600/400?random=3" },
  { id: "p4", title: "NASA Collaboration", description: "Accelerating Informatics for Earth Science, 2024", imageUrl: "https://picsum.photos/600/400?random=4" },
  { id: "p5", title: "ASLO Conference", description: "Charlotte, NC, 2025", imageUrl: "https://picsum.photos/600/400?random=5" },
  { id: "p6", title: "Field Trip", description: "Mississippi Sound Field Work", imageUrl: "https://picsum.photos/600/400?random=6" }
];