import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { contactInfo } from '../data/mock';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: 'text-blue-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      color: 'text-green-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: contactInfo.location,
      href: '#',
      color: 'text-purple-500'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: 'Timezone',
      value: contactInfo.timezone,
      href: '#',
      color: 'text-orange-500'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      href: contactInfo.socialLinks.github,
      color: 'hover:text-gray-900'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      href: contactInfo.socialLinks.linkedin,
      color: 'hover:text-blue-600'
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: 'Twitter',
      href: contactInfo.socialLinks.twitter,
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Get In Touch</CardTitle>
                <CardDescription className="text-slate-300">
                  {contactInfo.availability}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 transition-colors">
                    <div className={method.color}>
                      {method.icon}
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">{method.label}</div>
                      <a 
                        href={method.href}
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        {method.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Follow Me</CardTitle>
                <CardDescription className="text-slate-300">
                  Connect with me on social platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-slate-700 text-slate-400 ${social.color} transition-all duration-300 hover:scale-105`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Send Message</CardTitle>
              <CardDescription className="text-slate-300">
                Drop me a message and I'll get back to you soon
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;