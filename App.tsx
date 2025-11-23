import React, { useState, useEffect } from 'react';
import { ViewState, Theme, BlogPost, PublicationType, NotebookMeta, JupyterNotebook } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import JupyterRenderer from './components/JupyterRenderer';
import AIChat from './components/AIChat';
import { PROFILE, PUBLICATIONS, PROJECTS, COURSES, BLOG_POSTS, CERTIFICATIONS, REVIEWER_ACTIVITIES, PRESENTATIONS, SKILLS, SKILLS_CHART_DATA, EXPERIENCE, MEMBERSHIPS, FEATURED_NOTEBOOKS } from './constants';
import { generateBlogIdeas } from './services/geminiService';
import { Moon, Sun, Menu, ExternalLink, Download, PlusCircle, Sparkles, MapPin, Briefcase, GraduationCap, Calendar, BookOpen, Layers, Award, FileText, Monitor, CheckCircle, Camera, Users, Zap, Database, ChevronRight, File, Video, Link, ArrowLeft } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('HOME');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const [blogIdeas, setBlogIdeas] = useState<string[]>([]);
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS);
  
  // Teaching State
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(COURSES[0]?.id || null);

  // Notebook State
  const [selectedNotebook, setSelectedNotebook] = useState<NotebookMeta | null>(null);

  // Research Filter State
  const [pubFilter, setPubFilter] = useState<PublicationType | 'ALL'>('ALL');

  useEffect(() => {
    if (theme === Theme.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  const handleGenerateIdeas = async () => {
    const ideas = await generateBlogIdeas(["Remote Sensing", "Machine Learning", "Oceanography"]);
    setBlogIdeas(ideas);
  };

  const getMockNotebookContent = (title: string): JupyterNotebook => {
      return {
          metadata: {},
          nbformat: 4,
          nbformat_minor: 5,
          cells: [
              { cell_type: 'markdown', source: [`# ${title}\n`, "\n", "This is a demonstration of the notebook renderer. In a real application, this would load the actual .ipynb JSON content."] },
              { cell_type: 'code', execution_count: 1, source: ["import numpy as np\n", "import pandas as pd\n", "import matplotlib.pyplot as plt\n", "\n", "print('Environment ready!')"], outputs: [{ data: { "text/plain": ["Environment ready!"] } }] },
              { cell_type: 'markdown', source: ["### Data Loading\n", "Loading environmental sensor data from CSV..."] },
              { cell_type: 'code', execution_count: 2, source: ["# Simulating data load\n", "data = np.random.randn(100, 3)\n", "df = pd.DataFrame(data, columns=['Temp', 'Salinity', 'DO'])\n", "df.head()"], outputs: [{ data: { "text/plain": ["       Temp  Salinity        DO\n0  0.542 -1.231  0.432\n1 -0.123  0.882 -0.991"] } }] }
          ]
      }
  }

  const renderContent = () => {
    switch (view) {
      case 'DASHBOARD':
        return <Dashboard />;
      case 'NOTEBOOKS':
        if (selectedNotebook) {
            return (
                <div className="space-y-4">
                    <button 
                        onClick={() => setSelectedNotebook(null)}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-academic-600 dark:hover:text-academic-400 transition-colors"
                    >
                        <ArrowLeft size={20} /> Back to Library
                    </button>
                    <JupyterRenderer initialNotebook={getMockNotebookContent(selectedNotebook.title)} />
                </div>
            )
        }
        return (
            <div className="space-y-8">
                <div className="flex justify-between items-center border-b pb-4 dark:border-gray-700">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Notebook Library</h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">Explore my analysis workflows and data tutorials.</p>
                    </div>
                    {/* The JupyterRenderer has its own upload, but we can also put a global one here if needed */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Upload Card */}
                    <div 
                        onClick={() => setSelectedNotebook({ id: 'upload', title: 'New Analysis', description: 'Upload your own .ipynb', tags: [], date: '' })}
                        className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors h-full min-h-[250px]"
                    >
                        <PlusCircle size={48} className="text-gray-400 mb-4" />
                        <h3 className="font-semibold text-gray-900 dark:text-white">Upload Notebook</h3>
                        <p className="text-sm text-gray-500 mt-2">Analyze local .ipynb files</p>
                    </div>

                    {FEATURED_NOTEBOOKS.map(nb => (
                        <div key={nb.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all flex flex-col">
                            <div className="h-40 bg-gray-200 dark:bg-gray-700 relative">
                                <img src={nb.imageUrl} alt={nb.title} className="w-full h-full object-cover" />
                                <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">{nb.date}</div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{nb.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1">{nb.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {nb.tags.map(t => (
                                        <span key={t} className="text-xs bg-academic-50 dark:bg-academic-900/30 text-academic-700 dark:text-academic-300 px-2 py-1 rounded-full border border-academic-100 dark:border-academic-800">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <button 
                                    onClick={() => setSelectedNotebook(nb)}
                                    className="w-full py-2 bg-academic-600 hover:bg-academic-700 text-white rounded-lg text-sm font-medium transition-colors"
                                >
                                    Open Notebook
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
      case 'CV':
        return (
          <div className="space-y-8 max-w-4xl mx-auto">
             <div className="flex justify-between items-center border-b pb-4 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Curriculum Vitae</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-academic-600 text-white rounded-lg hover:bg-academic-700 transition-colors">
                  <Download size={18} /> Download PDF
                </button>
             </div>

             {/* Certifications Section */}
             <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 flex items-center gap-3">
                  <Award className="text-academic-600 dark:text-academic-400" size={24} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Certifications & Professional Training</h3>
                </div>
                <div className="p-6">
                  <div className="grid gap-4">
                    {CERTIFICATIONS.map((cert) => (
                      <div key={cert.id} className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 border border-transparent hover:border-gray-100 dark:hover:border-gray-600 transition-all">
                        <div className="flex items-start gap-3">
                          <CheckCircle size={18} className="text-green-500 mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white">{cert.title}</div>
                            {cert.issuer && <div className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</div>}
                          </div>
                        </div>
                        <div className="mt-2 sm:mt-0 font-mono text-sm text-academic-600 dark:text-academic-400 bg-academic-50 dark:bg-academic-900/30 px-3 py-1 rounded-full whitespace-nowrap text-center">
                          {cert.year}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
             </div>

             {/* Education Placeholder (Detailed version in Home, summarized here) */}
             <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 flex items-center gap-3">
                  <GraduationCap className="text-academic-600 dark:text-academic-400" size={24} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education Summary</h3>
                </div>
                <div className="p-6 space-y-6">
                   {PROFILE.education.map((edu, i) => (
                     <div key={i} className="flex flex-col md:flex-row justify-between md:items-center">
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white text-lg">{edu.degree}</h4>
                          <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-500 mt-1 md:mt-0">{edu.year}</span>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        );
      case 'RESEARCH':
        const filteredPubs = pubFilter === 'ALL' 
            ? PUBLICATIONS 
            : PUBLICATIONS.filter(p => p.type === pubFilter);

        return (
          <div className="space-y-12">
            {/* Research Focus Hero */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                    <Layers className="text-academic-600 dark:text-academic-400" size={28} />
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Research Focus</h2>
                </div>
                <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                    <p className="whitespace-pre-line leading-relaxed text-lg">
                        {PROFILE.researchStatement}
                    </p>
                </div>
            </section>

            {/* Publications */}
            <section>
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <FileText className="text-academic-500" />
                        Publications
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {(['ALL', 'JOURNAL', 'CONFERENCE', 'BOOK', 'SUBMITTED'] as const).map(type => (
                            <button
                                key={type}
                                onClick={() => setPubFilter(type)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                    pubFilter === type 
                                    ? 'bg-academic-600 text-white shadow-md' 
                                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                            >
                                {type === 'ALL' ? 'All' : type.charAt(0) + type.slice(1).toLowerCase()}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                  {filteredPubs.map(pub => (
                    <div key={pub.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:border-academic-500 transition-colors group relative">
                      <div className="absolute top-6 right-6 text-xs font-bold text-gray-300 dark:text-gray-600 uppercase tracking-widest group-hover:text-academic-200 transition-colors">
                          {pub.type}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 pr-16 leading-tight">
                        {pub.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-sm">{pub.authors.join(', ')}</p>
                      <div className="flex items-center gap-2 mb-3">
                         <span className="font-medium text-gray-800 dark:text-gray-200">{pub.venue}</span>
                         <span className="text-gray-400">•</span>
                         <span className="bg-academic-50 text-academic-700 dark:bg-academic-900/50 dark:text-academic-300 text-xs px-2 py-0.5 rounded-full font-mono">{pub.year}</span>
                      </div>
                      
                      {pub.link && (
                        <a href={pub.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-academic-600 hover:text-academic-700 dark:text-academic-400 font-medium hover:underline mt-2">
                            <ExternalLink size={16} /> View Article
                        </a>
                      )}
                    </div>
                  ))}
                </div>
            </section>

             {/* Presentations Gallery */}
             <section>
                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                     <Camera className="text-purple-500" />
                     Presentations & Field Work
                 </h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {PRESENTATIONS.map(pres => (
                         <div key={pres.id} className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer">
                             <img src={pres.imageUrl} alt={pres.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                                 <h4 className="text-white font-bold text-lg leading-tight">{pres.title}</h4>
                                 <p className="text-gray-300 text-sm">{pres.description}</p>
                             </div>
                         </div>
                     ))}
                 </div>
             </section>

            {/* Reviewer Activity */}
            <section className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <Monitor className="text-green-600" />
                    Reviewer Service
                </h2>
                <div className="flex flex-wrap gap-3">
                    {REVIEWER_ACTIVITIES.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.journal}</span>
                            <span className="flex items-center justify-center w-5 h-5 bg-academic-100 dark:bg-academic-900 text-academic-700 dark:text-academic-300 text-xs rounded-full font-bold">
                                {item.count}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
          </div>
        );
      case 'PROJECTS':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b pb-4 dark:border-gray-700">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.map(proj => (
                <div key={proj.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col">
                  <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <img src={proj.imageUrl} alt={proj.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{proj.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">{proj.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {proj.techStack.map(tech => (
                        <span key={tech} className="text-xs font-mono bg-academic-50 dark:bg-academic-900/30 text-academic-600 dark:text-academic-400 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                        {proj.repoUrl && (
                            <a href={proj.repoUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-gray-900 dark:text-white hover:underline">View Code</a>
                        )}
                        <ExternalLink size={18} className="text-gray-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'BLOG':
        return (
            <div className="space-y-8 max-w-4xl mx-auto">
                <div className="flex justify-between items-center border-b pb-4 dark:border-gray-700">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Blog & Insights</h2>
                    <button className="bg-academic-600 hover:bg-academic-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm shadow-md transition-all">
                        <PlusCircle size={16} /> New Post
                    </button>
                </div>
                
                {/* AI Helper Section */}
                <div className="bg-gradient-to-r from-academic-50 to-purple-50 dark:from-academic-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-academic-100 dark:border-academic-800/30">
                    <div className="flex items-center gap-3 mb-3">
                        <Sparkles className="text-academic-600 dark:text-academic-400" size={20} />
                        <h3 className="font-semibold text-gray-900 dark:text-white">Writer's Block?</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Let Gemini generate some topic ideas based on your research interests.</p>
                    <div className="flex flex-wrap gap-2 items-center">
                        <button 
                            onClick={handleGenerateIdeas}
                            className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1.5 text-sm rounded shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                            Generate Ideas
                        </button>
                        {blogIdeas.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                                {blogIdeas.map((idea, idx) => (
                                    <span key={idx} className="bg-white/80 dark:bg-black/20 text-xs px-2 py-1 rounded text-academic-700 dark:text-academic-300 border border-academic-200 dark:border-academic-800">{idea}</span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="space-y-8">
                    {posts.map(post => (
                        <article key={post.id} className="group">
                            <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-2">
                                <time>{post.date}</time>
                                <span>•</span>
                                <div className="flex gap-2">
                                    {post.tags.map(t => <span key={t} className="text-academic-600 dark:text-academic-400">#{t}</span>)}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-academic-600 transition-colors cursor-pointer">{post.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{post.content.substring(0, 150)}...</p>
                            <button className="text-academic-600 dark:text-academic-400 font-medium hover:underline">Read more</button>
                        </article>
                    ))}
                </div>
            </div>
        )
    case 'TEACHING':
        const selectedCourse = COURSES.find(c => c.id === selectedCourseId) || COURSES[0];
        
        return (
            <div className="h-[calc(100vh-140px)] flex flex-col lg:flex-row gap-6">
                {/* Course Sidebar */}
                <div className="w-full lg:w-72 flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden shrink-0">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                        <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            <BookOpen size={18} className="text-academic-600" />
                            My Courses
                        </h3>
                    </div>
                    <div className="flex-1 overflow-y-auto p-2 space-y-1">
                        {COURSES.map(course => (
                            <button
                                key={course.id}
                                onClick={() => setSelectedCourseId(course.id)}
                                className={`w-full text-left p-3 rounded-lg text-sm transition-all border ${
                                    selectedCourseId === course.id
                                    ? 'bg-academic-50 dark:bg-academic-900/30 border-academic-200 dark:border-academic-800 text-academic-700 dark:text-academic-400 font-medium shadow-sm'
                                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                            >
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs font-mono uppercase opacity-75">{course.code}</span>
                                    {selectedCourseId === course.id && <ChevronRight size={14} />}
                                </div>
                                <div className="truncate">{course.title}</div>
                            </button>
                        ))}
                    </div>
                    <div className="p-3 border-t border-gray-200 dark:border-gray-700">
                        <button className="w-full flex items-center justify-center gap-2 py-2 text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors border border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
                            <PlusCircle size={16} /> Add New Course
                        </button>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                    {/* Course Header */}
                    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedCourse.title}</h2>
                                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                                        {selectedCourse.semester}
                                    </span>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 text-sm max-w-2xl">{selectedCourse.description}</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="flex items-center gap-2 px-4 py-2 bg-academic-600 text-white rounded-lg hover:bg-academic-700 transition-colors shadow-sm">
                                    <PlusCircle size={18} /> Upload Content
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Content Modules */}
                    <div className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-gray-900/50">
                        <div className="max-w-4xl mx-auto space-y-6">
                            {selectedCourse.modules.map((module) => (
                                <div key={module.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                                    <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                                        <h4 className="font-semibold text-gray-900 dark:text-white">{module.title}</h4>
                                        <button className="text-xs text-academic-600 hover:underline">Edit Module</button>
                                    </div>
                                    <div className="divide-y divide-gray-100 dark:divide-gray-700">
                                        {module.resources.map(res => (
                                            <div key={res.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors flex items-center justify-between group">
                                                <div className="flex items-center gap-4">
                                                    <div className={`p-2 rounded-lg ${
                                                        res.type === 'PDF' ? 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400' :
                                                        res.type === 'SLIDE' ? 'bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400' :
                                                        res.type === 'ASSIGNMENT' ? 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400' :
                                                        'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                                                    }`}>
                                                        {res.type === 'PDF' && <FileText size={20} />}
                                                        {res.type === 'SLIDE' && <Monitor size={20} />}
                                                        {res.type === 'ASSIGNMENT' && <File size={20} />}
                                                        {res.type === 'LINK' && <Link size={20} />}
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-gray-900 dark:text-white">{res.title}</div>
                                                        <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                                            <span>{res.date}</span>
                                                            <span>•</span>
                                                            <span>{res.type}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                                                    <button className="p-2 text-gray-400 hover:text-academic-600 dark:hover:text-academic-400">
                                                        <Download size={18} />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                        <button className="w-full py-3 text-sm text-gray-500 hover:text-academic-600 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors flex items-center justify-center gap-2">
                                            <PlusCircle size={14} /> Add Resource
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
      case 'HOME':
      default:
        return (
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Hero */}
            <section className="text-center py-12 md:py-20">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                    <span className="text-academic-600 dark:text-academic-400">Hafez Ahmad</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                    {PROFILE.bio}
                </p>
                <div className="flex justify-center gap-4">
                    <button onClick={() => setView('RESEARCH')} className="px-6 py-3 bg-academic-600 text-white rounded-lg font-medium shadow-lg hover:bg-academic-700 transition-all hover:shadow-xl transform hover:-translate-y-1">
                        View Publications
                    </button>
                    <button onClick={() => setView('DASHBOARD')} className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                        View Analytics
                    </button>
                </div>
            </section>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-y border-gray-200 dark:border-gray-700 py-8">
                <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">{PUBLICATIONS.length}+</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide mt-1">Publications</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">{PROJECTS.length}+</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide mt-1">Projects</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">286</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide mt-1">Citations</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">5+</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide mt-1">Years Exp</div>
                </div>
            </div>

            {/* About & Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content Column */}
                <div className="lg:col-span-2 space-y-12">
                    {/* Extended About */}
                    <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">About Me</h2>
                        </div>
                        <div className="prose dark:prose-invert text-gray-600 dark:text-gray-300 max-w-none">
                            <p className="whitespace-pre-line leading-relaxed">{PROFILE.about}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-100 dark:border-gray-700">
                             <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                 <MapPin className="text-academic-500" size={20} />
                                 <span>{PROFILE.location}</span>
                             </div>
                             <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                 <Briefcase className="text-academic-500" size={20} />
                                 <span>{PROFILE.affiliation}</span>
                             </div>
                        </div>
                    </section>

                    {/* Professional Experience */}
                    <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
                      <div className="flex items-center gap-3 mb-8">
                        <Briefcase className="text-academic-600 dark:text-academic-400" size={24} />
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Professional Experience</h2>
                      </div>
                      <div className="space-y-8 relative pl-2">
                        {/* Vertical line */}
                        <div className="absolute left-[9px] top-2 bottom-4 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                        
                        {EXPERIENCE.map((job) => (
                          <div key={job.id} className="relative pl-8">
                            {/* Dot */}
                            <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full border-4 border-white dark:border-gray-800 bg-academic-500"></div>
                            
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{job.role}</h3>
                              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded mt-1 sm:mt-0 w-fit">{job.period}</span>
                            </div>
                            <div className="text-academic-600 dark:text-academic-400 font-medium mb-2">{job.organization}</div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{job.description}</p>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Skills Matrix */}
                    <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
                      <div className="flex items-center gap-3 mb-8">
                        <Zap className="text-academic-600 dark:text-academic-400" size={24} />
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Skills Matrix</h2>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                         {/* Radar Chart */}
                         <div className="h-64 w-full">
                           <ResponsiveContainer width="100%" height="100%">
                             <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILLS_CHART_DATA}>
                               <PolarGrid stroke="#e5e7eb" />
                               <PolarAngleAxis dataKey="subject" tick={{ fill: '#6b7280', fontSize: 12 }} />
                               <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                               <Radar
                                 name="Skills"
                                 dataKey="A"
                                 stroke="#0ea5e9"
                                 fill="#0ea5e9"
                                 fillOpacity={0.6}
                               />
                             </RadarChart>
                           </ResponsiveContainer>
                         </div>

                         {/* Skills List */}
                         <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                <Database size={16} className="text-academic-500"/> Technical
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {Object.entries(SKILLS.technical).map(([category, items]) => (
                                  <div key={category} className="contents">
                                    {items.slice(0, 3).map(skill => (
                                      <span key={skill} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded text-xs font-medium border border-blue-100 dark:border-blue-800">
                                        {skill}
                                      </span>
                                    ))}
                                  </div>
                                ))}
                                <span className="text-xs text-gray-400 py-1">+ more</span>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                <Users size={16} className="text-purple-500"/> Soft Skills
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {SKILLS.soft.slice(0, 8).map(skill => (
                                  <span key={skill} className="px-2 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded text-xs font-medium border border-purple-100 dark:border-purple-800">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                         </div>
                      </div>
                    </section>

                    {/* Education Timeline */}
                    <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <GraduationCap className="text-academic-600 dark:text-academic-400" size={24} />
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
                        </div>
                        <div className="relative space-y-8 pl-2">
                             {/* Vertical Line */}
                            <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-gray-700" />
                            
                            {PROFILE.education.map((edu, i) => (
                                <div key={i} className="relative flex gap-6 group">
                                    <div className="relative z-10 flex-shrink-0 w-5 h-5 rounded-full bg-academic-500 border-4 border-white dark:border-gray-800 mt-1" />
                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                                            <h3 className="font-bold text-lg text-gray-900 dark:text-white leading-tight">{edu.degree}</h3>
                                            <div className="text-sm text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-700/50 inline-block px-2 py-0.5 rounded whitespace-nowrap mt-1 sm:mt-0">{edu.year}</div>
                                        </div>
                                        <div className="text-academic-600 dark:text-academic-400 font-medium mb-2">{edu.institution}</div>
                                        {edu.details && (
                                          <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                                            {edu.details.map((detail, idx) => (
                                              <li key={idx}>{detail}</li>
                                            ))}
                                          </ul>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar Column */}
                <div className="space-y-6">
                     {/* News Feed */}
                     <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm sticky top-24">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"/> 
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Recent News</h2>
                        </div>
                        <div className="space-y-6">
                            {PROFILE.news.map((item, i) => (
                                <div key={i} className="group">
                                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-1">
                                        <Calendar size={12} />
                                        {item.date}
                                    </div>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-academic-600 dark:group-hover:text-academic-400 transition-colors">
                                        {item.content}
                                    </p>
                                    {i !== PROFILE.news.length - 1 && <div className="h-px bg-gray-100 dark:bg-gray-700 mt-4" />}
                                </div>
                            ))}
                        </div>
                     </section>

                     {/* Memberships */}
                     <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                           <Award size={18} className="text-academic-500"/> Memberships
                        </h2>
                        <ul className="space-y-3">
                           {MEMBERSHIPS.map((mem, i) => (
                             <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                               <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-academic-400 flex-shrink-0" />
                               {mem}
                             </li>
                           ))}
                        </ul>
                     </section>
                </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900 transition-colors duration-200 font-sans">
      <Sidebar 
        currentView={view} 
        setView={setView} 
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      <main className="flex-1 md:ml-64 relative min-h-screen flex flex-col">
        {/* Top Mobile Bar */}
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex justify-between items-center md:hidden">
            <div className="font-bold text-gray-900 dark:text-white">{PROFILE.name}</div>
            <div className="flex items-center gap-2">
                <button onClick={toggleTheme} className="p-2 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                    {theme === Theme.LIGHT ? <Moon size={20} /> : <Sun size={20} />}
                </button>
                <button onClick={() => setIsMobileOpen(true)} className="p-2 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Menu size={24} />
                </button>
            </div>
        </header>

        {/* Desktop Theme Toggle (Absolute) */}
        <div className="hidden md:block absolute top-6 right-8 z-40">
             <button onClick={toggleTheme} className="bg-white dark:bg-gray-800 p-2.5 rounded-full shadow-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-academic-600 dark:hover:text-academic-400 transition-colors">
                {theme === Theme.LIGHT ? <Moon size={20} /> : <Sun size={20} />}
             </button>
        </div>

        <div className="flex-1 p-4 md:p-10 max-w-7xl mx-auto w-full">
            {renderContent()}
        </div>
        
        <AIChat />
      </main>
    </div>
  );
};

export default App;