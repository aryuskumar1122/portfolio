"use client";

import { useState, useEffect } from "react";
import { Menu, X, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    // Add throttling to the scroll event to improve performance
    let isScrolling = false;
    const onScroll = () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          handleScroll();
          isScrolling = false;
        });
        isScrolling = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Header - Simplified */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-zinc-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#" className="text-lg font-medium">
            Aryus Kumar Samal
          </a>
          <nav className="hidden md:flex space-x-6">
            {[
              "home",
              "about",
              "skills",
              "projects",
              "training",
              "education",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm hover:text-zinc-500 transition-colors ${
                  activeSection === item
                    ? "text-zinc-900 font-medium"
                    : "text-zinc-500"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-zinc-100">
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              {[
                "home",
                "about",
                "skills",
                "projects",
                "training",
                "education",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm hover:text-zinc-500 transition-colors text-left ${
                    activeSection === item
                      ? "text-zinc-900 font-medium"
                      : "text-zinc-500"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section - Minimalist */}
        <section id="home" className="min-h-screen flex items-center pt-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
              <div className="flex-1 space-y-4">
                <h1 className="text-3xl md:text-4xl font-medium">
                  Hi, I&apos;m <span className="font-bold">Aryus Kumar Samal</span>
                </h1>
                <p className="text-lg text-zinc-600">
                  Software Developer & Machine Learning Enthusiast
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button
                    onClick={() => scrollToSection("contact")}
                    variant="outline"
                    className="h-9 rounded-md bg-black hover:bg-zinc-800"
                  >
                    Contact Me
                  </Button>
                  <Button
                    onClick={() => scrollToSection("projects")}
                    variant="outline"
                    className="h-9 rounded-md bg-black hover:bg-zinc-800"
                  >
                    View Projects
                  </Button>
                </div>
                <div className="flex space-x-4 pt-2">
                  <a
                    href="https://www.linkedin.com/in/aryus-kumar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-zinc-900 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/aryuskumar1122"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-zinc-900 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="mailto:aryuskuamr1122@gmail.com"
                    className="text-zinc-500 hover:text-zinc-900 transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-56 h-56 md:w-64 md:h-64">
                  <Image
                    src="/profile.jpg"
                    alt="Profile Picture"
                    width={300}
                    height={300}
                    className="rounded-full object-cover"
                    priority
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Clean and Simple */}
        <section id="about" className="py-16 bg-zinc-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-medium mb-8">About Me</h2>
            <div className="max-w-3xl">
              <p className="text-zinc-600 mb-4">
                I&apos;m{" "}
                <span className="font-medium text-zinc-900">
                  Aryus Kumar Samal
                </span>
                , a Computer Science and Engineering student at Lovely
                Professional University with a focus on Data Structures,
                Algorithms, Software Development, and Machine Learning.
              </p>
              <p className="text-zinc-600 mb-4">
                My expertise includes Java and Python programming, with hands-on
                experience in frameworks like PyTorch, TensorFlow, Spring, and
                Hibernate. I&apos;ve worked on Machine Learning projects, Natural
                Language Processing tasks, and Full-Stack Web Development.
              </p>
              <p className="text-zinc-600">
                I&apos;m highly adaptive, collaborative, and continuously upgrading
                my skills to match industry standards. My goal is to contribute
                to cutting-edge technology projects and bridge the gap between
                theory and practical applications.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section - Minimal Cards */}
        <section id="skills" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-medium mb-8">Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Languages */}
              <div className="border border-zinc-100 p-5 rounded-md">
                <h3 className="text-lg font-medium mb-3">
                  Programming Languages
                </h3>
                <ul className="space-y-2 text-zinc-600">
                  <li>
                    <span className="font-medium text-zinc-900">Java</span> –
                    Core development and data structures
                  </li>
                  <li>
                    <span className="font-medium text-zinc-900">Python</span> –
                    Machine learning, automation, and scripting
                  </li>
                </ul>
              </div>

              {/* Frameworks */}
              <div className="border border-zinc-100 p-5 rounded-md">
                <h3 className="text-lg font-medium mb-3">Frameworks</h3>
                <ul className="space-y-2 text-zinc-600">
                  <li>
                    <span className="font-medium text-zinc-900">PyTorch</span> –
                    Deep Learning projects
                  </li>
                  <li>
                    <span className="font-medium text-zinc-900">
                      TensorFlow
                    </span>{" "}
                    – Neural Networks and AI models
                  </li>
                  <li>
                    <span className="font-medium text-zinc-900">NLTK</span> –
                    Natural Language Processing tasks
                  </li>
                  <li>
                    <span className="font-medium text-zinc-900">
                      Spring & Hibernate
                    </span>{" "}
                    – Java Enterprise Applications
                  </li>
                </ul>
              </div>

              {/* Tools & Platforms */}
              <div className="border border-zinc-100 p-5 rounded-md">
                <h3 className="text-lg font-medium mb-3">Tools & Platforms</h3>
                <ul className="space-y-2 text-zinc-600">
                  <li>
                    <span className="font-medium text-zinc-900">MySQL</span> –
                    Database design and management
                  </li>
                  <li>
                    <span className="font-medium text-zinc-900">
                      Google Colab
                    </span>{" "}
                    – Collaborative coding and model training
                  </li>
                </ul>
              </div>

              {/* Soft Skills */}
              <div className="border border-zinc-100 p-5 rounded-md">
                <h3 className="text-lg font-medium mb-3">Soft Skills</h3>
                <ul className="space-y-2 text-zinc-600">
                  <li>
                    <span className="font-medium text-zinc-900">
                      Problem-Solving
                    </span>{" "}
                    – Analytical thinking and debugging
                  </li>
                  <li>
                    <span className="font-medium text-zinc-900">
                      Team Player
                    </span>{" "}
                    – Effective communication and collaboration
                  </li>
                  <li>
                    <span className="font-medium text-zinc-900">
                      Adaptability
                    </span>{" "}
                    – Fast learner and flexible to new environments
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Clean Cards */}
        <section id="projects" className="py-16 bg-zinc-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-medium mb-8">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project 1: StreamNest */}
              <div className="bg-white border border-zinc-100 p-5 rounded-md">
                <h3 className="text-lg font-medium mb-3">
                  StreamNest - Movie Streaming Platform
                </h3>
                <p className="text-zinc-600 mb-4">
                  A full-stack video streaming website with secure
                  authentication, efficient video management, and responsive UI.
                  Features an upcoming content-based recommender system.
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                  <ul className="text-zinc-600 text-sm space-y-1">
                    <li>• User Authentication & Session Management</li>
                    <li>• Video Upload & Streaming</li>
                    <li>• Responsive UI</li>
                    <li>• Structured MySQL Database</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200 font-normal"
                  >
                    HTML
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200 font-normal"
                  >
                    CSS
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200 font-normal"
                  >
                    JavaScript
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200 font-normal"
                  >
                    MySQL
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200 font-normal"
                  >
                    Servlet
                  </Badge>
                </div>
              </div>

              {/* Project 2: GrindX */}
              <div className="bg-white border border-zinc-100 p-5 rounded-md">
                <h3 className="text-lg font-medium mb-3">
                  GrindX - Study Tracker & Recommender
                </h3>
                <p className="text-zinc-600 mb-4">
                  An intelligent study tracking dashboard with live updates,
                  shareable reports, and a hybrid personalized recommendation
                  system powered by ML and NLP.
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                  <ul className="text-zinc-600 text-sm space-y-1">
                    <li>• Shareable Dashboards</li>
                    <li>• Hybrid Recommendation System</li>
                    <li>• User Profiling</li>
                    <li>• Machine Learning Models</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200 font-normal"
                  >
                    Python
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200 font-normal"
                  >
                    PyTorch
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200 font-normal"
                  >
                    ML
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200 font-normal"
                  >
                    NLP
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200 font-normal"
                  >
                    MySQL
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training & Certificates - Simplified */}
        <section id="training" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-medium mb-8">
              Training & Certificates
            </h2>
            <div className="space-y-6">
              {/* Training */}
              <div className="border-l-2 border-zinc-200 pl-4">
                <h3 className="text-lg font-medium mb-1">
                  Data Structures and Algorithms
                </h3>
                <p className="text-zinc-500 text-sm mb-2">
                  GeekForGeeks | June 2024 - August 2024
                </p>
                <p className="text-zinc-600 text-sm">
                  Developed an efficient Sudoku solver using the Backtracking
                  algorithm with Java.
                </p>
              </div>

              {/* Certificates */}
              <div className="border-l-2 border-zinc-200 pl-4">
                <h3 className="text-lg font-medium mb-3">Certificates</h3>
                <ul className="space-y-4">
                  <li>
                    <div className="font-medium text-zinc-900">
                      Complete Generative AI Course
                    </div>
                    <div className="text-zinc-500 text-sm">
                      Udemy | Jan 2025 - Mar 2025
                    </div>
                  </li>
                  <li>
                    <div className="font-medium text-zinc-900">
                      NPTEL Cloud Computing 12 Weeks Bootcamp
                    </div>
                    <div className="text-zinc-500 text-sm">
                      Sept 2024 - Dec 2024
                    </div>
                  </li>
                  <li>
                    <div className="font-medium text-zinc-900">
                      Complete Data Structures and Algorithms
                    </div>
                    <div className="text-zinc-500 text-sm">
                      GeeksForGeeks | June 2024 - Aug 2024
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education - Timeline Style */}
        <section id="education" className="py-16 bg-zinc-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-medium mb-8">Education</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-zinc-200 pl-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">
                      Bachelor of Technology - CSE
                    </h3>
                    <p className="text-zinc-500 text-sm">
                      Lovely Professional University, Punjab
                    </p>
                    <p className="text-zinc-600 text-sm">Since August 2020</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-sm font-medium">
                    CGPA: 7.25
                  </div>
                </div>
              </div>

              <div className="border-l-2 border-zinc-200 pl-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Intermediate</h3>
                    <p className="text-zinc-500 text-sm">
                      Kendriya Vidyalaya Hissar Cantt, Haryana
                    </p>
                    <p className="text-zinc-600 text-sm">
                      April 2019 - March 2021
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 text-sm font-medium">
                    Percentage: 91%
                  </div>
                </div>
              </div>

              <div className="border-l-2 border-zinc-200 pl-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Matriculation</h3>
                    <p className="text-zinc-500 text-sm">
                      Kendriya Vidyalaya Hissar Cantt, Haryana
                    </p>
                    <p className="text-zinc-600 text-sm">
                      April 2016 - March 2018
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 text-sm font-medium">
                    Percentage: 84%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact - Minimal */}
        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-medium mb-8">Contact</h2>
            <div className="max-w-lg">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-zinc-700" />
                  <div>
                    <p className="text-sm text-zinc-500">Email</p>
                    <a
                      href="mailto:aryuskuamr1122@gmail.com"
                      className="text-zinc-900 hover:underline"
                    >
                      aryuskuamr1122@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Linkedin size={18} className="text-zinc-700" />
                  <div>
                    <p className="text-sm text-zinc-500">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/aryus-kumar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-900 hover:underline"
                    >
                      linkedin.com/in/aryus-kumar
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Github size={18} className="text-zinc-700" />
                  <div>
                    <p className="text-sm text-zinc-500">GitHub</p>
                    <a
                      href="https://github.com/aryuskumar1122"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-900 hover:underline"
                    >
                      github.com/aryuskumar1122
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-zinc-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-500 text-sm mb-4 md:mb-0">
              © 2025 Aryus Kumar Samal
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/aryus-kumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/aryuskumar1122"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-900 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:aryuskuamr1122@gmail.com"
                className="text-zinc-500 hover:text-zinc-900 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
