// Portfolio Data
const portfolioData = {
    experiences: [
        {
            role: 'Junior Web Developer',
            company: 'Freelancer',
            period: '2021 - 2022',
            description: 'Built websites using HTML, CSS, JavaScript and WordPress, learned modern frameworks.'
        },
        {
            role: 'Frontend Developer Intern',
            company: 'Digitek Hub',
            period: '2025 - 2026',
            description: 'Learnt about Frontend development using React.js and other frameworks, acquired valuable work experience with a state of the art engineering team.'
        }
    ],
    
    educations: [
        {
            degree: 'Bachelor in Psychology',
            institution: 'University of British Columbia',
            period: '2019 - 2023',
            description: 'Fundamentals of psychology and human behavior.'
        },
        {
            degree: 'Bachelor in Software Engineering',
            institution: 'Bowen University',
            period: '2024 - Till Date',
            description: 'Comprehensive software engineering principles and practices.'
        }
    ],
    
    skills: [
        { name: 'HTML5', icon: 'code', level: 95 },
        { name: 'CSS3', icon: 'code', level: 90 },
        { name: 'JavaScript', icon: 'code', level: 85 },
        { name: 'React', icon: 'code', level: 80 },
        { name: 'Node.js', icon: 'server', level: 45 },
        { name: 'TypeScript', icon: 'type', level: 70 },
        { name: 'Tailwind CSS', icon: 'wind', level: 85 },
        { name: 'Git', icon: 'git-branch', level: 70 },
        { name: 'MongoDB', icon: 'database', level: 40 },
        { name: 'Express', icon: 'server', level: 65 },
        { name: 'Redux', icon: 'layers', level: 45 },
        { name: 'GraphQL', icon: 'bar-chart-2', level: 60 },
    ],
    
    projects: [
        {
            title: 'Library Management System',
            description: 'A fully interactive library system that adds and deletes books, borrow and return, register and remove members (old and new), also saves all data to be reaccessible even after the system is closed.',
            tags: ['Python', 'OOP'],
            image: 'https://cdn.prod.website-files.com/655d6a2db45e23f5fec5fbb1/655d6a2db45e23f5fec5fe03_GRTech_Blog-Banner_Benefits-of-Library-Automation.jpeg',
            demoLink: 'https://github.com/Mori-the-AI/Library-System-',
            codeLink: 'https://github.com/Mori-the-AI/Library-System-'
        },
        {
            title: 'Expense Tracker',
            description: 'A simple but functional program that allows users to record daily expenses, categorize them (e.g., food, transport, entertainment), and view monthly summaries. Can run in the terminal or have a basic HTML/CSS front-end..',
            tags: ['HTML', 'CSS'],
            image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXefjX3GHbi4XaFZK-y3PFtL2CnJf00SqqfCLU9V1WOru4X8Y9MxVXWl0tAq7iiWm7BfvFc59SxF4pXHsbrAnJBADLXjnlHWmdheNkiTy-nxCUAcX0_f438mDbLzzyPmdidlqszE?key=IuY8sfr0yB0c8nEc5jy3WLWz',
            demoLink: 'https://github.com/Mori-the-AI/Expense-Tracker',
            codeLink: 'https://github.com/Mori-the-AI/Expense-Tracker'
        },
        {
            title: 'Flappy Bird Clone',
            description: 'A responsive Flappy Bird clone built with modern web technologies. Features smooth physics, score tracking, and mobile-friendly touch controls. Navigate through obstacles with precise timing in this addictive side-scrolling game.',
            tags: ['React', 'JavaScript', 'CSS'],
            image: 'https://media.cnn.com/api/v1/images/stellar/prod/140204204156-flappy-bird.jpg?q=x_0,y_0,h_720,w_1280,c_fill/h_653,w_1160/f_avif',
            demoLink: 'https://github.com/Mori-the-AI/flappy-bird/tree/master/src',
            codeLink: 'https://github.com/Mori-the-AI/flappy-bird/tree/master/src'
        }
    ]
};

// DOM Elements
const darkModeToggle = document.getElementById('darkModeToggle');
const mobileDarkModeToggle = document.getElementById('mobileDarkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');
const mobileDarkModeIcon = document.getElementById('mobileDarkModeIcon');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuIcon = document.getElementById('mobileMenuIcon');
const navbar = document.getElementById('navbar');
const experienceTab = document.getElementById('experienceTab');
const educationTab = document.getElementById('educationTab');
const experienceContent = document.getElementById('experienceContent');
const educationContent = document.getElementById('educationContent');
const skillsContainer = document.getElementById('skillsContainer');
const projectsContainer = document.getElementById('projectsContainer');
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');
const currentYear = document.getElementById('currentYear');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    currentYear.textContent = new Date().getFullYear();
    
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
    });
    
    // for feather icns
    feather.replace();
    
    // dark mode
    initDarkMode();
    
    // dynamic content
    loadExperiences();
    loadEducationData();
    loadSkills();
    loadProjects();
    
    // event listeners
    setupEventListeners();
});

// Dark Mode Functions
function initDarkMode() {
    const savedTheme = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDarkMode = savedTheme !== null ? savedTheme === 'true' : systemPrefersDark;
    
    if (initialDarkMode) {
        document.documentElement.classList.add('dark');
        updateDarkModeIcons(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateDarkModeIcons(false);
    }
}

function toggleDarkMode() {
    const isDark = document.documentElement.classList.contains('dark');
    const newDarkMode = !isDark;
    
    if (newDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
    }
    
    updateDarkModeIcons(newDarkMode);
}

function updateDarkModeIcons(isDark) {
    const icon = isDark ? 'sun' : 'moon';
    darkModeIcon.setAttribute('data-feather', icon);
    mobileDarkModeIcon.setAttribute('data-feather', icon);
    feather.replace();
}

// Load Dynamic Content
function loadExperiences() {
    let experiencesHTML = '';
    portfolioData.experiences.forEach((exp, index) => {
        experiencesHTML += `
            <div class="relative pl-8 group">
                <div class="absolute left-0 top-0 w-0.5 h-full bg-gray-300 dark:bg-gray-700">
                    <div class="absolute top-0 left-0 w-0.5 h-0 bg-primary group-hover:h-full transition-all duration-500"></div>
                </div>
                <div class="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2"></div>
                <div class="bg-white dark:bg-darker p-6 rounded-lg hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-800">
                    <h4 class="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-200">${exp.role}</h4>
                    <p class="text-primary mb-2">${exp.company} • ${exp.period}</p>
                    <p class="text-gray-600 dark:text-gray-300">${exp.description}</p>
                </div>
            </div>
        `;
    });
    experienceContent.innerHTML = experiencesHTML;
}

function loadEducationData() {
    let educationHTML = '';
    portfolioData.educations.forEach((edu, index) => {
        educationHTML += `
            <div class="relative pl-8 group">
                <div class="absolute left-0 top-0 w-0.5 h-full bg-gray-300 dark:bg-gray-700">
                    <div class="absolute top-0 left-0 w-0.5 h-0 bg-primary group-hover:h-full transition-all duration-500"></div>
                </div>
                <div class="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2"></div>
                <div class="bg-white dark:bg-darker p-6 rounded-lg hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-800">
                    <h4 class="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-200">${edu.degree}</h4>
                    <p class="text-primary mb-2">${edu.institution} • ${edu.period}</p>
                    <p class="text-gray-600 dark:text-gray-300">${edu.description}</p>
                </div>
            </div>
        `;
    });
    educationContent.innerHTML = educationHTML;
}

function loadSkills() {
    let skillsHTML = '';
    portfolioData.skills.forEach((skill, index) => {
        skillsHTML += `
            <div class="skill-pill bg-gray-50 dark:bg-dark p-4 rounded-lg flex flex-col items-center transition-transform duration-300 border border-gray-200 dark:border-gray-800 shadow-sm" data-aos="zoom-in" data-aos-delay="${index * 50}">
                <div class="gradient-bg p-3 rounded-full mb-3">
                    <i data-feather="${skill.icon}" class="text-white w-6 h-6"></i>
                </div>
                <h4 class="font-semibold mb-2 text-gray-900 dark:text-gray-200">${skill.name}</h4>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div class="gradient-bg h-2 rounded-full" style="width: ${skill.level}%"></div>
                </div>
                <span class="text-xs text-gray-600 dark:text-gray-400 mt-2">${skill.level}%</span>
            </div>
        `;
    });
    skillsContainer.innerHTML = skillsHTML;
    feather.replace();
}

function loadProjects() {
    let projectsHTML = '';
    portfolioData.projects.forEach((project, index) => {
        projectsHTML += `
            <div class="project-card bg-white dark:bg-darker rounded-xl overflow-hidden shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800" data-aos="zoom-in" data-aos-delay="${index * 100}">
                <div class="h-48 overflow-hidden">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-gray-200">${project.title}</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2">
                        ${project.tags.map(tag => `<span class="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">${tag}</span>`).join('')}
                    </div>
                    <div class="mt-6 flex justify-between">
                        <a href="${project.demoLink}" target="_blank" rel="noopener noreferrer" class="text-sm font-medium hover:text-primary transition-colors flex items-center text-gray-700 dark:text-gray-300">
                            <i data-feather="external-link" class="w-4 h-4 mr-1"></i>
                            Live Demo
                        </a>
                        <a href="${project.codeLink}" target="_blank" rel="noopener noreferrer" class="text-sm font-medium hover:text-primary transition-colors flex items-center text-gray-700 dark:text-gray-300">
                            <i data-feather="github" class="w-4 h-4 mr-1"></i>
                            Code
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
    projectsContainer.innerHTML = projectsHTML;
    feather.replace();
}

// event Listeners
function setupEventListeners() {
    // Dark mode toggle
    darkModeToggle.addEventListener('click', toggleDarkMode);
    mobileDarkModeToggle.addEventListener('click', toggleDarkMode);
    
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', function() {
        const isOpen = mobileMenu.classList.toggle('hidden');
        mobileMenuIcon.setAttribute('data-feather', isOpen ? 'menu' : 'x');
        feather.replace();
    });
    
    // Navbar 
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Tab switches
    experienceTab.addEventListener('click', function() {
        experienceTab.classList.add('text-primary', 'border-b-2', 'border-primary');
        experienceTab.classList.remove('text-gray-500', 'dark:text-gray-400');
        educationTab.classList.remove('text-primary', 'border-b-2', 'border-primary');
        educationTab.classList.add('text-gray-500', 'dark:text-gray-400');
        experienceContent.classList.remove('hidden');
        educationContent.classList.add('hidden');
        
        
        if (educationContent.children.length === 0) {
            let educationHTML = '';
            portfolioData.educations.forEach((edu, index) => {
                educationHTML += `
                    <div class="relative pl-8 group">
                        <div class="absolute left-0 top-0 w-0.5 h-full bg-gray-300 dark:bg-gray-700">
                            <div class="absolute top-0 left-0 w-0.5 h-0 bg-primary group-hover:h-full transition-all duration-500"></div>
                        </div>
                        <div class="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2"></div>
                        <div class="bg-white dark:bg-darker p-6 rounded-lg hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-800">
                            <h4 class="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-200">${edu.degree}</h4>
                            <p class="text-primary mb-2">${edu.institution} • ${edu.period}</p>
                            <p class="text-gray-600 dark:text-gray-300">${edu.description}</p>
                        </div>
                    </div>
                `;
            });
            educationContent.innerHTML = educationHTML;
        }
    });
    
    educationTab.addEventListener('click', function() {
        educationTab.classList.add('text-primary', 'border-b-2', 'border-primary');
        educationTab.classList.remove('text-gray-500', 'dark:text-gray-400');
        experienceTab.classList.remove('text-primary', 'border-b-2', 'border-primary');
        experienceTab.classList.add('text-gray-500', 'dark:text-gray-400');
        educationContent.classList.remove('hidden');
        experienceContent.classList.add('hidden');
    });
    
    // Contact form submission
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        
        submitBtn.innerHTML = `
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
        `;
        submitBtn.disabled = true;
        
    
        successMessage.classList.add('hidden');
        errorMessage.classList.add('hidden');
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        try {
           
            const response = await fetch('https://formspree.io/f/mblzyqzk', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Portfolio Message from ${formData.name}`,
                    _replyto: formData.email
                })
            });
            
            if (response.ok) {
                
                successMessage.classList.remove('hidden');
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                }, 5000);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            
            errorMessage.classList.remove('hidden');
        } finally {
            
            submitBtn.innerHTML = 'Send Message';
            submitBtn.disabled = false;
        }
    });
    
    // Close mobile menu on link click
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            mobileMenuIcon.setAttribute('data-feather', 'menu');
            feather.replace();
        });
    });
}