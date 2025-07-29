import { Mail, Github, Linkedin, Download } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="border-t border-border pt-16">
            <h2 className="text-2xl font-medium mb-12">let’s connect</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Im always interested in hearing about new opportunities and projects. 
                  Feel free to connect with me on any of these platforms!
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:hello@johndoe"
                    className="flex items-center gap-3 text-sm hover:text-muted-foreground transition-colors"
                  >
                    <Mail size={16} />
                    hello@johndoe
                  </a>
                  
                  <a 
                    href="#"
                    className="flex items-center gap-3 text-sm hover:text-muted-foreground transition-colors"
                  >
                    <Github size={16} />
                    github.com/johndoe
                  </a>
                  
                  <a 
                    href="#"
                    className="flex items-center gap-3 text-sm hover:text-muted-foreground transition-colors"
                  >
                    <Linkedin size={16} />
                    linkedin.com/in/johndoe
                  </a>
                  
                  <a 
                    href="#"
                    className="flex items-center gap-3 text-sm hover:text-muted-foreground transition-colors"
                  >
                    <Download size={16} />
                    Download Resume
                  </a>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Currently</h3>
                  <p className="text-sm text-muted-foreground">
                    Working on design systems and scaling services
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Location</h3>
                  <p className="text-sm text-muted-foreground">
                    San Francisco, CA
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Availability</h3>
                  <p className="text-sm text-muted-foreground">
                    Open to consulting projects and speaking opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}