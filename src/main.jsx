import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDownRight, ArrowUpRight, Cloud, Database, Layers3, Menu } from 'lucide-react'
import './styles.css'

const experience = [
  {
    date: 'JUL 2024 — PRESENT',
    role: 'Cloud Infrastructure Engineer',
    company: 'Barclays',
    location: 'New York City, NY',
    intro: 'Designing and operating secure cloud infrastructure for enterprise workloads.',
    points: [
      'Architect compute, storage, and networking across virtual data centers using VMware Cloud Foundation.',
      'Lead infrastructure modernization and workload migration discovery, aligning solutions to business needs.',
      'Own production cluster releases with dependency analysis and rollback strategies.',
      'Built observability dashboards for executive insights, reducing incident response time by 65%.'
    ]
  },
  {
    date: 'JAN 2024 — MAY 2024',
    role: 'Data Engineer',
    company: 'MTA New York City Transit',
    location: 'New York City, NY',
    intro: 'Built dependable data pipelines and reporting for Long Island Rail Road operations.',
    points: [
      'Developed SQL and PySpark ETL pipelines in Microsoft Synapse Analytics for LIRR trip data.',
      'Automated nightly ingestion and transformation workflows with Apache Airflow.',
      'Processed 100K+ train trip records nightly, keeping fresh datasets available on time for reporting.',
      'Created Power BI insights on trips exceeding 90% car capacity to inform operational decisions.'
    ]
  },
  {
    date: 'JUL 2020 — JUL 2022',
    role: 'Cloud Support Engineer',
    company: 'Broadcom (VMware)',
    location: 'Bengaluru, India',
    intro: 'Helped enterprise customers adopt and troubleshoot cloud-based workspace solutions.',
    points: [
      'Advised 60+ enterprise customers on VMware Workspace ONE cloud deployments.',
      'Diagnosed VPN and per-app tunneling issues across environments from individual devices to 1,000+ endpoints.',
      'Partnered with product, sales, and engineering teams to resolve escalations and improve adoption.'
    ]
  }
]

const skills = [
  { title: 'Cloud & infrastructure', items: ['VMware Cloud Foundation', 'AWS', 'Cloud architecture', 'Networking', 'IAM & security', 'Workload migration'] },
  { title: 'Data & engineering', items: ['Python', 'SQL', 'PySpark', 'Microsoft Synapse', 'Apache Airflow', 'Power BI'] },
  { title: 'Delivery & partnerships', items: ['Solution design', 'Requirements analysis', 'Customer management', 'Production releases', 'Root-cause analysis', 'Stakeholder communication'] }
]

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Khushboo Mundada home">KM<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </nav>
        <a className="top-contact" href="mailto:khushboo2498@gmail.com">Let’s talk <ArrowUpRight size={15} /></a>
      </header>

      <main id="home">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> CLOUD INFRASTRUCTURE · DATA · DELIVERY</p>
            <h1 className="hero-name">Khushboo<br />Mundada<span>.</span></h1>
            <p className="hero-tagline">Building reliable systems for <em>what’s next.</em></p>
            <p className="hero-summary">Cloud infrastructure engineer bringing together platform thinking, data, and customer needs to make complex systems work better.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#experience">Explore my work <ArrowDownRight size={17} /></a>
              <a className="text-link" href="mailto:khushboo2498@gmail.com">Get in touch <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="hero-aside">
            <div className="orbit-card">
              <div className="orbit orbit-one"><span className="orbit-node node-one"><Cloud size={20} /></span><span className="orbit-node node-two"><Database size={19} /></span><span className="orbit-node node-three"><Layers3 size={19} /></span></div>
              <div className="orbit-center"><span>KM</span><i>NYC</i></div>
              <div className="orbit-caption"><span>01 / 03</span><span>Cloud · Data · People</span></div>
            </div>
            <p className="hero-note">Curious by nature.<br />Grounded in execution.</p>
          </div>
          <div className="hero-footer"><span>NEW YORK, NY</span><a href="#experience">SCROLL TO EXPLORE <span>↓</span></a><span>AVAILABLE FOR WHAT’S NEXT</span></div>
        </section>

        <section className="proof-strip" aria-label="Career highlights">
          <div><strong>65%</strong><span>faster incident response</span></div>
          <div><strong>100K+</strong><span>train records processed nightly</span></div>
          <div><strong>60+</strong><span>enterprise customers supported</span></div>
        </section>

        <section className="content-section section-wrap" id="experience">
          <div className="section-heading"><div><p className="eyebrow">THE WORK</p><h2>Experience</h2></div><p className="section-intro">A career across cloud infrastructure, enterprise support, and data engineering—with a focus on dependable outcomes.</p></div>
          <div className="experience-list">
            {experience.map((job, index) => <article className="job" key={job.company}>
              <div className="job-index">0{index + 1}</div>
              <div className="job-main"><div className="job-title-row"><div><h3>{job.role}</h3><p className="company">{job.company} <span>·</span> {job.location}</p></div><span className="job-date">{job.date}</span></div><p className="job-intro">{job.intro}</p><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul></div>
            </article>)}
          </div>
        </section>

        <section className="project-section" id="projects">
          <div className="section-wrap project-inner">
            <div className="section-heading"><div><p className="eyebrow">SELECTED PROJECT</p><h2>From legacy to cloud-ready.</h2></div><span className="project-label">01 / CASE STUDY</span></div>
            <div className="project-card">
              <div className="project-visual" aria-label="Cloud migration architecture diagram">
                <div className="cloud-label">AWS CLOUD <span>FUTURE STATE</span></div>
                <div className="architecture"><div className="arch-source"><span className="arch-icon">⌘</span><b>Legacy app</b><small>Current state</small></div><div className="arch-line"><i /></div><div className="arch-core"><span>APPLICATION PLATFORM</span><div><b>EKS</b><b>RDS</b><b>S3</b></div><small>Secure · Observable · Scalable</small></div><div className="arch-line"><i /></div><div className="arch-edge"><span className="edge-dot">↗</span><b>CloudFront</b><small>Global delivery</small></div></div>
                <div className="diagram-foot"><span>DISCOVERY → DESIGN → DELIVERY</span><span>NETWORKING · IAM · MONITORING</span></div>
              </div>
              <div className="project-copy"><p className="eyebrow">CLOUD SOLUTION DESIGN</p><h3>Multi-Tier Application Migration to AWS</h3><p>A simulated enterprise migration engagement, from current-state discovery to a production-ready target architecture.</p><ul><li>Mapped a legacy application to a future state using EKS, RDS, S3, and CloudFront.</li><li>Designed networking, IAM security, and monitoring to meet governance needs.</li><li>Built a practical migration strategy around resilience, scale, and operational readiness.</li></ul><div className="tag-row"><span>AWS</span><span>EKS</span><span>RDS</span><span>CloudFront</span><span>Architecture</span></div></div>
            </div>
          </div>
        </section>

        <section className="content-section section-wrap" id="about">
          <div className="section-heading"><div><p className="eyebrow">A LITTLE ABOUT ME</p><h2>Technical depth.<br />A people-first approach.</h2></div><p className="section-intro about-copy">I enjoy turning complicated requirements into clear plans and dependable systems. I pair hands-on technical work with the communication needed to bring teams and customers along.</p></div>
          <div className="skills-grid">{skills.map(group => <div className="skill-group" key={group.title}><h3>{group.title}</h3><div className="skill-tags">{group.items.map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</div>
          <div className="education-row"><div><p className="eyebrow">EDUCATION</p><h3>New York University</h3><p>M.S. Management of Technology <span>·</span> 2022–2024</p></div><div><p className="eyebrow">FOUNDATION</p><h3>Savitribai Phule Pune University</h3><p>B.E. Computer Engineering <span>·</span> 2016–2020</p></div><div className="certification"><p className="eyebrow">IN PROGRESS</p><h3>Salesforce Administrator</h3><p>Trailhead certification</p></div></div>
        </section>

        <footer className="footer">
          <div className="section-wrap footer-inner"><div><p className="eyebrow">HAVE A GOOD CHALLENGE?</p><h2>Let’s make it work.</h2></div><a className="button button-light" href="mailto:khushboo2498@gmail.com">Email Khushboo <ArrowUpRight size={17} /></a><div className="footer-bottom"><a className="wordmark" href="#home">KM<span>.</span></a><span>© 2026 Khushboo Mundada</span><div><a href="mailto:khushboo2498@gmail.com">Email</a><a href="#home">Back to top ↑</a></div></div></div>
        </footer>
      </main>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
