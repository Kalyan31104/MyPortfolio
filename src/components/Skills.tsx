import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Skills = () => {
  const technicalSkills = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript"]
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "React"]
    },
    {
      title: "Database Management",
      skills: ["SQL", "MySQL"]
    },
    {
      title: "Data Science Libraries",
      skills: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "TensorFlow", "Keras"]
    }
  ];

  const toolsAndTechnologies = [
    {
      title: "Development Tools",
      skills: ["IntelliJ IDEA", "VS Code", "Jupyter Notebook"]
    },
    {
      title: "Version Control & Collaboration",
      skills: ["Git", "GitHub"]
    },
    {
      title: "Database Tools",
      skills: ["MySQL Workbench"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Skills and Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Technical Skills
            </h3>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Accordion type="single" collapsible className="w-full">
                {technicalSkills.map((category, categoryIndex) => (
                  <AccordionItem key={categoryIndex} value={`technical-${categoryIndex}`}>
                    <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-purple-600">
                      {category.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pt-2 space-y-2">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="font-bold text-gray-700 bg-gray-50 px-3 py-2 rounded">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Tools and Technologies */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Tools and Technologies
            </h3>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Accordion type="single" collapsible className="w-full">
                {toolsAndTechnologies.map((category, categoryIndex) => (
                  <AccordionItem key={categoryIndex} value={`tools-${categoryIndex}`}>
                    <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-purple-600">
                      {category.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pt-2 space-y-2">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="font-bold text-gray-700 bg-gray-50 px-3 py-2 rounded">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
