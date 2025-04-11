# Project Timeline and Implementation Plan

## Overview
This project spans 9 weeks (Week 5-13) from February 10, 2025, to April 13, 2025.

## Detailed Weekly Schedule

### Week 5 (Feb 10 - Feb 16, 2025)
1. Research on different forecasting models
2. First draft of Query Classifier for LLM

### Week 6 (Feb 17 - Feb 23, 2025)
1. Develop APIs to connect frontend and backend
2. JSON Selector & Processor
3. Perform EDA, evaluate prediction accuracy of:
   - Regression
   - XGBoost
   - LSTM

### Week 7 (Feb 24 - Mar 2, 2025)
1. Chart, Report & Description Generation functions
2. Streamline LLM pipeline
3. Begin Frontend Development

### Week 8 (Mar 3 - Mar 9, 2025)
1. Build APIs to retrieve data and upload forecasted data back to MongoDB database
2. Adding Prompt Refinement Pipeline to clarify users' query

### Week 9 (Mar 10 - Mar 16, 2025)
1. Model evaluation:
   - Forecasting accuracy
   - Processing speed
2. Testing and Debugging
3. Role based access implementation

### Week 10 (Mar 17 - Mar 23, 2025)
1. Testing and Debugging
2. Final Project Evaluation

### Week 11 (Mar 24 - Mar 30, 2025)
Additional Features Implementation and Testing on prototype branch

### Week 12 (Mar 31 - Apr 6, 2025)
Final Handover

### Week 13 (Apr 7 - Apr 13, 2025)
Buffer week for:
1. Final adjustments and refinements
2. Documentation completion
3. Knowledge transfer
4. Project closure activities

## Work Streams

### 1. Predictive Modeling
- Timeline: Weeks 5-7 
- Focus on model development and evaluation
- Implementation of forecasting algorithms

### 2. Interactive Dashboard
- Timeline: Weeks 5-9 
- Development of user interface
- Integration with backend systems
- Implementation of visualization components

### 3. LLM Operations
- Timeline: Weeks 5-9 
- Query classification system
- LLM pipeline development
- Integration with frontend

### 4. Role-Based Access Control
- Timeline: Weeks 8-12 
- Implementation of access control systems
- User authentication and authorization
- Security testing

### 5. Cloud Deployment
- Timeline: Weeks 10-12 
- Setup of cloud infrastructure
- Deployment of application
- Performance testing

### 6. Documentation
- Timeline: Weeks 7-13 
- Technical documentation
- User guides
- API documentation
- System architecture documentation

## Key Deliverables
1. Functional predictive modeling system
2. Interactive dashboard with data visualization
3. LLM-powered query processing system
4. Role-based access control system
5. Cloud-deployed application
6. Comprehensive documentation

## Notes
- Testing and debugging are continuous throughout the development process
- Additional features will be implemented in Week 11 on a prototype branch
- Final handover includes complete documentation and knowledge transfer
- Week 13 serves as a buffer for any unexpected delays and final refinements

# Team Roles and Responsibilities

## Project Lead - Javian Ng
### Project Management & Coordination
- Lead team discussions and guide implementation strategies
- Organize and coordinate meetings with project sponsor and supervisor
- Handle primary communication channels
- Set deadlines and define major milestones
- Allocate tasks within the LLM team

### Technical Leadership
- Frontend Development
- Backend Development
- LLM Development
- Integration of APIS
- Infrastructure Setup

### Documentation
- Ensure version control of project documentation

## AI/ML Developer - Yap Yu Ting
### Core Responsibilities
- Development and implementation of ARIMA models
- Focus on time series forecasting algorithms
- Build FrontEnd Charts for Data Analysis
## Data Analytics Lead - Liew Kai Shiun
### Project Documentation & Analytics
- Maintenance of weekly project logs
- Management of AI/ML data analytics pipeline
- Leadership in dashboard visualization:

### Presentation Management
- Lead role in presentation preparation
- Slide deck management and organization

### Technical Development
- Development of Prophet model
- Enhancement of time series forecasting capabilities

## LLM Specialist - David Law Cheng
### LLM Development
- Design and implementation of LLM for Groq pipeline
- Managed with Javian to ensure LLM interaction with backend and frontend
- Implementation of LLM table filtering

### Documentation & Presentation
- Development of LLM-focused content for presentations
- Comprehensive documentation of LLM implementations

## Cross-Functional Collaboration
- All team members work collaboratively to ensure:
  - Seamless integration between AI/ML and LLM components
  - Consistent documentation standards
  - Effective communication across teams
  - Achievement of project milestones

# Scrum and Weekly Log Management

## Scrum Implementation

### Sprint Structure
- **Sprint Duration**: Weekly sprints (Week 5-12)
- **Sprint Planning**: Beginning of each week
- **Sprint Review/Retrospective**: End of each week

### Key Scrum Events

#### 1. Weekly Stand-ups
- Frequency: Weekly team meetings
- Format: Each member addresses:
  - What was accomplished last week
  - What is planned for this week
  - Any blockers or challenges
- Purpose: Keep team aligned and identify potential issues early

#### 2. Sprint Planning
- Review project timeline from Week 5-12
- Set clear deliverables for each sprint

#### 3. Sprint Review
- Demo completed work
- Gather feedback from team members
- Align with project timeline milestones
- Ensure integration between different components:
  - AI/ML models
  - LLM functionality
  - Frontend features

## Weekly Log Management

### Log Structure
1. **Weekly Progress Tracking**
   - Document completed tasks
   - Track ongoing work
   - List upcoming priorities

2. **Individual Contributions**
   - Team member updates
   - Specific accomplishments
   - Technical implementations
   - Challenges faced

## Benefits of Our Approach

### 1. Clear Communication
- Regular updates through stand-ups
- Documented decisions and progress
- Transparent task allocation

### 2. Accountability
- Clear ownership of tasks
- Tracked commitments
- Visible progress

### 3. Adaptability
- Weekly review allows for quick adjustments
- Flexible response to challenges
- Continuous improvement

### 4. Knowledge Management
- Centralized documentation
- Shared learning
- Future reference material

## Tools and Resources

### Project Management
- GitHub for code version control
- Documentation repository
- Shared presentation decks

### Communication Channels
- Team meetings
- Email updates to stakeholders
- Technical documentation sharing

# Project Challenges and Timeline Adjustments

## Major Challenges and Timeline Impact

### 1. LLM Implementation Challenges (Extended to Week 11)
#### Original Plan
- LLM operations were planned to complete by Week 9
- Initial implementation using Ollama

#### Challenges Faced
- Encountered significant model performance issues with Ollama
- Required complete reintegration of models
- Performance bottlenecks in query processing
- Integration complexity with existing systems

#### Adjustments Made
- Extended LLM development timeline to Week 11
- Restructured LLM pipeline
- Implemented alternative model solutions
- Additional testing and optimization phases

### 2. Predictive Modeling Complications (Extended to Week 10)
#### Original Plan
- Modeling phase was scheduled to complete by Week 7
- Initial approach focused on existing data

#### Challenges Faced
- Data availability and quality issues
- Need for marketing-specific model adaptations
- Complex requirements for marketing data analysis

#### Adjustments Made
- Created simulated dataset to overcome data limitations
- Integrated additional model specifically for marketing data
- Extended modeling phase to Week 10
- Implemented more comprehensive testing scenarios

### 3. Overall Project Impact
#### Technical Debugging Issues
- More extensive debugging required than initially planned
- Integration challenges between different components
- Performance optimization needs
- Cross-component compatibility issues


## Lessons Learned

### Project Management
- Importance of buffer time in timeline
- Need for flexible resource allocation
- Value of continuous integration testing
- Importance of clear communication during delays


